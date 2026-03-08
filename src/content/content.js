(async function() {
  if (window.hasRunAutoFill) return;
  window.hasRunAutoFill = true;

  try {
    // Changed to storage.local to support larger data for files
    const result = await chrome.storage.local.get(['profileData']);
    let profileData = result.profileData;
    
    if (!profileData) {
      // Fallback check sync storage in case it was created earlier
      const syncResult = await chrome.storage.sync.get(['profileData']);
      if (syncResult.profileData) {
        profileData = syncResult.profileData;
      } else {
        alert("No profile data found. Please set up your profile in the extension options.");
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
      // File matchers
      { keys: ['resumeFile'], regex: /resume|cv/i, isFile: true },
      { keys: ['coverLetterFile'], regex: /cover.*letter/i, isFile: true }
    ];

    let filledCount = 0;
    // Added select elements and file inputs
    const inputs = document.querySelectorAll('input:not([type="hidden"]):not([type="submit"]):not([type="button"]), textarea, select');
    
    for (const input of inputs) {
      // Skip if already filled (for text inputs)
      if (input.type !== 'file' && input.type !== 'checkbox' && input.type !== 'radio' && input.value && input.value.trim() !== '') continue;
      // Skip if already filled (for file inputs)
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

      // Sometimes questions are the previous element or sibling
      let siblingText = '';
      const prevEl = input.previousElementSibling;
      if (prevEl && (prevEl.tagName === 'LABEL' || prevEl.tagName === 'DIV' || prevEl.tagName === 'SPAN')) {
          siblingText = prevEl.innerText;
      }

      const combinedText = `${name} ${id} ${placeholder} ${ariaLabel} ${labelText} ${siblingText}`.toLowerCase();

      // Handle common Greenhouse checkboxes automatically
      if (input.type === 'checkbox') {
         if (combinedText.includes('consent') && (combinedText.includes('process') || combinedText.includes('retention') || combinedText.includes('gdpr'))) {
             input.checked = true;
             input.dispatchEvent(new Event('change', { bubbles: true }));
             filledCount++;
             continue; // Move to next input
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
               input.style.backgroundColor = '#e8f0fe';
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
                  // Standard dropdowns
                  const options = Array.from(input.options);
                  const matchingOption = options.find(opt => 
                     opt.text.toLowerCase().includes(valueToSet.toLowerCase()) || 
                     opt.value.toLowerCase().includes(valueToSet.toLowerCase())
                  );
                  if (matchingOption) {
                     input.value = matchingOption.value;
                     input.dispatchEvent(new Event('change', { bubbles: true }));
                     input.style.backgroundColor = '#e8f0fe';
                     filledCount++;
                  }
               } else {
                const isReactSelect = input.getAttribute('role') === 'combobox' && (input.id && input.id.startsWith('react-select') || input.className.includes('select__input'));

                if (isReactSelect && input.getAttribute('aria-autocomplete') === 'list') {

                   // 1. Find the wrapper container and the toggle button
                   const controlWrapper = input.closest('div[class*="control"]');
                   const toggleButton = controlWrapper ? controlWrapper.querySelector('.select__indicators button, .select__indicators svg') : null;

                   if (toggleButton || controlWrapper) {
                      // 2. Click the dropdown to open it
                      const targetToClick = toggleButton || controlWrapper;
                      targetToClick.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
                      targetToClick.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));
                      targetToClick.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

                      // 3. Give React time to render the portal/dropdown options
                      setTimeout(() => {
                         const allOptions = Array.from(document.querySelectorAll('[id*="-option-"], [class*="-option"]'));

                         // Find exact match first, then partial match
                         let matchingOption = allOptions.find(opt => 
                             opt.textContent.trim().toLowerCase() === valueToSet.toLowerCase()
                         );
                         if (!matchingOption) {
                             matchingOption = allOptions.find(opt => 
                                 opt.textContent.toLowerCase().includes(valueToSet.toLowerCase())
                             );
                         }

                         if (matchingOption) {
                            // 4. Click the exact option element as recorded in Puppeteer
                            matchingOption.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
                            matchingOption.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));
                            matchingOption.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

                            if (controlWrapper) controlWrapper.style.backgroundColor = '#e8f0fe';
                         } else {
                            // Close dropdown if no match found
                            document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
                         }
                      }, 300);
                   }
                   filledCount++;
                } else {
                   setNativeValue(input, valueToSet);
                   input.style.backgroundColor = '#e8f0fe';
                   filledCount++;
                }
               }               break; 
             }
          }
        }
      }
    }
    console.log(`JobForm AutoFill: Filled ${filledCount} fields.`);
  } catch (error) {
    console.error("JobForm AutoFill Error:", error);
  } finally {
     window.hasRunAutoFill = false; 
  }
})();