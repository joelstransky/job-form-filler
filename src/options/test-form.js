// Re-use the exact same logic from the content script, but attached to a local button.
document.getElementById('triggerAutoFill').addEventListener('click', async () => {
    
    // Briefly change button text to show it's working
    const btn = document.getElementById('triggerAutoFill');
    const originalText = btn.textContent;
    btn.textContent = 'Filling...';
    
    try {
        const result = await chrome.storage.local.get(['profileData']);
        let profileData = result.profileData;
        
        if (!profileData) {
            const syncResult = await chrome.storage.sync.get(['profileData']);
            if (syncResult.profileData) {
                profileData = syncResult.profileData;
            } else {
                alert("No profile data found. Please set up your profile in the extension options.");
                btn.textContent = originalText;
                return;
            }
        }
  
      function setNativeValue(element, value) {
        let prototype = Object.getPrototypeOf(element);
        let descriptor = Object.getOwnPropertyDescriptor(prototype, 'value');
        
        while (!descriptor && prototype !== null) {
          prototype = Object.getPrototypeOf(prototype);
          if (prototype) {
            descriptor = Object.getOwnPropertyDescriptor(prototype, 'value');
          }
        }
        
        if (descriptor && descriptor.set) {
          descriptor.set.call(element, value);
        } else {
          element.value = value;
        }
        
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
        element.dispatchEvent(new Event('blur', { bubbles: true }));
      }
  
      async function setFileValue(element, fileData) {
        try {
          const res = await fetch(fileData.data);
          const blob = await res.blob();
          const file = new File([blob], fileData.name, { type: fileData.type });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(file);
          element.files = dataTransfer.files;
          element.dispatchEvent(new Event('change', { bubbles: true }));
        } catch (e) {
          console.error("JobForm AutoFill: Failed to set file", e);
        }
      }
  
      const fieldMatchers = [
        { keys: ['authorized'], regex: /authorized.*work|legally.*authorized|right.*to.*work/i },
        { keys: ['sponsorship'], regex: /sponsorship|require.*visa/i },
        { keys: ['firstName'], regex: /first.*name|fname|given.*name/i },
        { keys: ['lastName'], regex: /last.*name|lname|surname|family.*name/i },
        { keys: ['firstName', 'lastName'], regex: /name/i, combiner: (d) => `${d.firstName || ''} ${d.lastName || ''}`.trim() },
        { keys: ['email'], regex: /email|e-mail/i },
        { keys: ['phone'], regex: /phone|tel|mobile|cell/i },
        { keys: ['country'], regex: /country|location|residence/i },
        { keys: ['linkedin'], regex: /linkedin/i },
        { keys: ['github'], regex: /github/i },
        { keys: ['portfolio'], regex: /portfolio|website/i },
        { keys: ['gender'], regex: /gender|sex/i },
        { keys: ['hispanic'], regex: /hispanic|latino/i },
        { keys: ['race'], regex: /race/i },
        { keys: ['veteran'], regex: /veteran/i },
        { keys: ['disability'], regex: /disability/i },
        { keys: ['specialField1'], regex: /cover.*letter|about.*me|message|additional.*info/i, isTextArea: true },
        { keys: ['specialField2'], regex: /references/i, isTextArea: true },
        { keys: ['specialField3'], regex: /notes/i, isTextArea: true },
        { keys: ['resumeFile'], regex: /resume|cv/i, isFile: true },
        { keys: ['coverLetterFile'], regex: /cover.*letter/i, isFile: true }
      ];
  
      let filledCount = 0;
      const inputs = document.querySelectorAll('input:not([type="hidden"]):not([type="submit"]):not([type="button"]), textarea, select');
      
      for (const input of inputs) {
        if (input.type !== 'file' && input.type !== 'checkbox' && input.type !== 'radio' && input.value && input.value.trim() !== '') continue;
        if (input.type === 'file' && input.files && input.files.length > 0) continue;
  
        const name = input.name || '';
        const id = input.id || '';
        const placeholder = input.placeholder || '';
        const ariaLabel = input.getAttribute('aria-label') || '';
        
        let labelText = '';
        if (id) {
          const label = document.querySelector(`label[for="${id}"]`);
          if (label) labelText = label.innerText;
        }
        if (!labelText) {
          const parentLabel = input.closest('label');
          if (parentLabel) labelText = parentLabel.innerText;
        }
  
        let siblingText = '';
        const prevEl = input.previousElementSibling;
        if (prevEl && (prevEl.tagName === 'LABEL' || prevEl.tagName === 'DIV' || prevEl.tagName === 'SPAN')) {
            siblingText = prevEl.innerText;
        }
  
        const combinedText = `${name} ${id} ${placeholder} ${ariaLabel} ${labelText} ${siblingText}`.toLowerCase();
  
        if (input.type === 'checkbox') {
           if (combinedText.includes('consent') && (combinedText.includes('process') || combinedText.includes('retention') || combinedText.includes('gdpr'))) {
               input.checked = true;
               input.dispatchEvent(new Event('change', { bubbles: true }));
               filledCount++;
               continue;
           }
        }
  
        for (const matcher of fieldMatchers) {
          if (matcher.isTextArea && input.tagName !== 'TEXTAREA') continue;
          if (matcher.isFile && input.type !== 'file') continue;
          if (!matcher.isFile && input.type === 'file') continue;
  
          if (matcher.regex.test(combinedText)) {
            
            if (matcher.isFile) {
               const fileData = profileData[matcher.keys[0]];
               if (fileData) {
                 await setFileValue(input, fileData);
                 filledCount++;
               }
               break;
            } else {
               let valueToSet = '';
               
               if (matcher.combiner) {
                 valueToSet = matcher.combiner(profileData);
               } else if (matcher.keys.length > 0) {
                 valueToSet = profileData[matcher.keys[0]];
               }
  
               if (valueToSet && valueToSet.trim() !== '') {
                 if (input.tagName === 'SELECT') {
                    const options = Array.from(input.options);
                    const matchingOption = options.find(opt => 
                       opt.text.toLowerCase().includes(valueToSet.toLowerCase()) || 
                       opt.value.toLowerCase().includes(valueToSet.toLowerCase())
                    );
                    if (matchingOption) {
                       input.value = matchingOption.value;
                       input.dispatchEvent(new Event('change', { bubbles: true }));
                       filledCount++;
                    }
                 } else {
                    const isReactSelect = input.getAttribute('role') === 'combobox' && (input.id && input.id.startsWith('react-select') || input.className.includes('select__input'));

                    if (isReactSelect && input.getAttribute('aria-autocomplete') === 'list') {
                       
                       // 1. Focus the underlying input
                       input.focus();
                       
                       // 2. We need to dispatch native React-compatible input events
                       let prototype = Object.getPrototypeOf(input);
                       let descriptor = Object.getOwnPropertyDescriptor(prototype, 'value');
                       while (!descriptor && prototype !== null) {
                          prototype = Object.getPrototypeOf(prototype);
                          if (prototype) descriptor = Object.getOwnPropertyDescriptor(prototype, 'value');
                       }
                       if (descriptor && descriptor.set) {
                          descriptor.set.call(input, valueToSet);
                       } else {
                          input.value = valueToSet;
                       }
                       
                       input.dispatchEvent(new Event('input', { bubbles: true }));

                       // 3. Give the component a tiny moment to filter its options internally
                       setTimeout(() => {
                          // 4. Fire an 'Enter' keypress. react-select binds to keydown.
                          const enterEvent = new KeyboardEvent('keydown', {
                             bubbles: true, 
                             cancelable: true, 
                             keyCode: 13, 
                             key: 'Enter', 
                             code: 'Enter'
                          });
                          input.dispatchEvent(enterEvent);
                          
                          // 5. Blur to finalize the visual state
                          input.blur();
                          const control = input.closest('div[class*="control"]');
                       }, 150);

                       filledCount++;
                    } else {
                       setNativeValue(input, valueToSet);
                       filledCount++;
                    }
                 }
                 break; 
               }
            }
          }
        }
      }
      
      console.log(`JobForm AutoFill: Filled ${filledCount} fields.`);
      btn.textContent = 'Filled!';
      setTimeout(() => {
        btn.textContent = originalText;
      }, 2000);
      
    } catch (error) {
      console.error("JobForm AutoFill Error:", error);
      btn.textContent = 'Error';
      setTimeout(() => {
        btn.textContent = originalText;
      }, 2000);
    }
  });