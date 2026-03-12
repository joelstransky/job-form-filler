(async function() {
  if (window.hasRunAutoFill) return;
  window.hasRunAutoFill = true;

  try {
    const result = await chrome.storage.local.get(['profileData']);
    let profileData = result.profileData;
    
    if (!profileData) {
      const syncResult = await chrome.storage.sync.get(['profileData']);
      if (syncResult.profileData) profileData = syncResult.profileData;
    }
    
    if (!profileData) {
      console.warn("JobForm AutoFill: No profile data found.");
      return;
    }

    // Helper to format text for better matching
    const normalize = (str) => (str || '').replace(/[-_]/g, ' ').replace(/\s+/g, ' ').toLowerCase().trim();

    function setNativeValue(element, value) {
      let prototype = Object.getPrototypeOf(element);
      let descriptor = Object.getOwnPropertyDescriptor(prototype, 'value');
      
      while (!descriptor && prototype !== null) {
        prototype = Object.getPrototypeOf(prototype);
        if (prototype) descriptor = Object.getOwnPropertyDescriptor(prototype, 'value');
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
        // Preserves the exact original filename
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
      { keys: ['authorized'], regex: /authorized.*work|legally.*authorized|right.*to.*work|eligible.*to.*work/i },
      { keys: ['sponsorship'], regex: /sponsorship|require.*visa|sponsor/i },
      { keys: ['firstName'], regex: /first.*name|fname|given.*name/i },
      { keys: ['lastName'], regex: /last.*name|lname|surname|family.*name/i },
      { keys: ['firstName', 'lastName'], regex: /\bname\b|full.*name/i, combiner: (d) => `${d.firstName || ''} ${d.lastName || ''}`.trim() },
      { keys: ['email'], regex: /email|e-mail/i },
      { keys: ['phone'], regex: /phone|tel|mobile|cell/i },
      { keys: ['country'], regex: /country|location|residence/i },
      { keys: ['timeZone'], regex: /time.*zone/i },
      { keys: ['startDate'], regex: /start.*date|date.*available/i },
      { keys: ['linkedin'], regex: /linkedin/i },
      { keys: ['github'], regex: /github/i },
      { keys: ['portfolio'], regex: /portfolio|website|url/i },
      { keys: ['gender'], regex: /gender|sex/i },
      { keys: ['hispanic'], regex: /hispanic|latino/i },
      { keys: ['race'], regex: /race|ethnicity/i },
      { keys: ['veteran'], regex: /veteran/i },
      { keys: ['disability'], regex: /disability/i },
      { keys: ['specialField1'], regex: /cover.*letter|about.*me|message|additional.*info/i, isTextArea: true },
      { keys: ['specialField2'], regex: /references/i, isTextArea: true },
      { keys: ['specialField3'], regex: /notes/i, isTextArea: true },
      { keys: ['resumeFile'], regex: /resume|cv/i, isFile: true },
      { keys: ['coverLetterFile'], regex: /cover.*letter/i, isFile: true }
    ];

    // Attempt to fill a specific input given a value
    async function attemptFill(input, valueToSet, isFile = false, fileData = null) {
      if (isFile && fileData) {
        await setFileValue(input, fileData);
        input.style.backgroundColor = '#e8f0fe';
        return true;
      }

      if (!valueToSet) return false;

      // Handle Select Native
      if (input.tagName === 'SELECT') {
        const options = Array.from(input.options);
        const matchingOption = options.find(opt => 
           normalize(opt.text).includes(normalize(valueToSet)) || 
           normalize(opt.value).includes(normalize(valueToSet))
        );
        if (matchingOption) {
           input.value = matchingOption.value;
           input.dispatchEvent(new Event('change', { bubbles: true }));
           input.style.backgroundColor = '#e8f0fe';
           return true;
        }
      } 
      // Handle React Select Comboboxes
      else if (input.getAttribute('role') === 'combobox' && (input.id?.startsWith('react-select') || input.className?.includes('select__input'))) {
        const controlWrapper = input.closest('div[class*="control"]');
        const toggleButton = controlWrapper ? controlWrapper.querySelector('.select__indicators button, .select__indicators svg') : null;
        if (toggleButton || controlWrapper) {
          const targetToClick = toggleButton || controlWrapper;
          targetToClick.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
          targetToClick.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));
          targetToClick.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

          setTimeout(() => {
             const allOptions = Array.from(document.querySelectorAll('[id*="-option-"], [class*="-option"]'));
             let matchingOption = allOptions.find(opt => normalize(opt.textContent) === normalize(valueToSet));
             if (!matchingOption) {
                 matchingOption = allOptions.find(opt => normalize(opt.textContent).includes(normalize(valueToSet)));
             }
             if (matchingOption) {
                matchingOption.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
                matchingOption.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));
                matchingOption.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
                if (controlWrapper) controlWrapper.style.backgroundColor = '#e8f0fe';
             } else {
                document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
             }
          }, 300);
          return true;
        }
      } 
      // Handle Custom Button Groups and Radio/Checkbox
      else if (input.type === 'radio' || input.type === 'checkbox' || input.type === 'hidden' || input.tabIndex === -1) {
        // Custom button groups (e.g., Ashby Yes/No)
        const container = input.parentElement;
        if (container) {
          const buttons = Array.from(container.querySelectorAll('button'));
          if (buttons.length > 0) {
            const matchingBtn = buttons.find(btn => normalize(btn.textContent) === normalize(valueToSet) || normalize(btn.textContent).includes(normalize(valueToSet)));
            if (matchingBtn) {
              matchingBtn.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
              matchingBtn.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true, view: window }));
              matchingBtn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
              matchingBtn.style.border = '2px solid #3b82f6';
              return true;
            }
          }
        }
        
        if (input.type === 'radio' || input.type === 'checkbox') {
          const labelText = normalize(input.closest('label')?.textContent || input.nextElementSibling?.textContent || input.parentElement?.textContent || '');
          if (labelText.includes(normalize(valueToSet))) {
            input.checked = true;
            input.dispatchEvent(new Event('change', { bubbles: true }));
            return true;
          }
        }
      }
      // Handle Standard Inputs
      else {
         setNativeValue(input, valueToSet);
         input.style.backgroundColor = '#e8f0fe';
         return true;
      }
      return false;
    }

    // --- Automatic Pass ---
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
        if (label) labelText = label.textContent;
      }
      if (!labelText && name) {
        const label = document.querySelector(`label[for="${name}"]`);
        if (label) labelText = label.textContent;
      }
      if (!labelText) {
        const parentLabel = input.closest('label');
        if (parentLabel) labelText = parentLabel.textContent;
      }

      // Check fieldsets/legends for radio groups (aggressive matching)
      let groupText = '';
      const fieldset = input.closest('fieldset');
      if (fieldset) {
        const legend = fieldset.querySelector('legend');
        if (legend) groupText = legend.textContent;
      }

      let siblingText = '';
      const prevEl = input.previousElementSibling;
      if (prevEl && (prevEl.tagName === 'LABEL' || prevEl.tagName === 'DIV' || prevEl.tagName === 'SPAN')) {
          siblingText = prevEl.textContent;
      }
      
      let containerText = '';
      if (!labelText) {
          let container = input.parentElement;
          for(let i=0; i<4; i++) {
              if (container && (container.className.includes('field') || container.className.includes('container') || container.className.includes('group') || container.className.includes('Entry'))) {
                  break;
              }
              if (container) container = container.parentElement;
          }
          if (container) {
               // Clone to avoid getting all text from child inputs
               const clone = container.cloneNode(true);
               const inputsToDel = clone.querySelectorAll('input, select, textarea, button');
               inputsToDel.forEach(el => el.remove());
               containerText = clone.textContent;
          }
      }

      const combinedText = normalize(`${name} ${id} ${placeholder} ${ariaLabel} ${labelText} ${groupText} ${siblingText} ${containerText}`);

      // Greenhouse / Standard Consent Checkbox
      if (input.type === 'checkbox' && combinedText.includes('consent') && (combinedText.includes('process') || combinedText.includes('retention') || combinedText.includes('gdpr'))) {
         input.checked = true;
         input.dispatchEvent(new Event('change', { bubbles: true }));
         filledCount++;
         continue;
      }

      // Matcher checks
      for (const matcher of fieldMatchers) {
        if (matcher.isTextArea && input.tagName !== 'TEXTAREA') continue;
        if (matcher.isFile && input.type !== 'file') continue;
        if (!matcher.isFile && input.type === 'file') continue;

        if (matcher.regex.test(combinedText)) {
          if (matcher.isFile) {
             const fileData = profileData[matcher.keys[0]];
             if (fileData && await attemptFill(input, null, true, fileData)) filledCount++;
             break;
          } else {
             let valueToSet = matcher.combiner ? matcher.combiner(profileData) : profileData[matcher.keys[0]];
             // For radio buttons, we are looping through ALL radios. If the combined text matches the QUESTION (e.g. veteran), 
             // attemptFill will check if the specific radio's label matches the ANSWER (profileData value).
             if (valueToSet && typeof valueToSet === 'string' && valueToSet.trim() !== '') {
               if (await attemptFill(input, valueToSet)) filledCount++;
             }
             break; 
          }
        }
      }
    }
    console.log(`JobForm AutoFill: Automatically filled ${filledCount} fields.`);

    // --- Injected UI (Manual Override) ---
    class JobFormPopupManager {
      constructor() {
        this.container = document.createElement('div');
        this.container.id = 'jf-popup-manager-root';
        document.body.appendChild(this.container);
        this.shadow = this.container.attachShadow({mode: 'closed'});
        
        this.shadow.innerHTML = `
          <style>
            .popup {
              position: absolute; width: 320px; max-height: 400px;
              background: #1e1e1e; color: #fff;
              border: 1px solid #444; border-radius: 8px;
              box-shadow: 0 10px 25px rgba(0,0,0,0.5);
              z-index: 2147483647; overflow-y: auto;
              font-family: system-ui, -apple-system, sans-serif; font-size: 13px;
              display: none; flex-direction: column;
            }
            .popup.show { display: flex; }
            .header { padding: 10px; border-bottom: 1px solid #333; font-weight: bold; background: #252525; position: sticky; top: 0; z-index: 2; display: flex; justify-content: space-between; }
            .close-btn { cursor: pointer; color: #aaa; }
            .close-btn:hover { color: #fff; }
            .row {
              display: flex; justify-content: space-between; align-items: center;
              padding: 8px 10px; border-bottom: 1px solid #333;
            }
            .row:hover { background: #2a2a2a; }
            .label { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #ccc; }
            .actions { display: flex; gap: 6px; margin-left: 10px; }
            .btn {
              background: #3b82f6; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 11px;
            }
            .btn.copy { background: #10b981; }
            .btn:hover { opacity: 0.8; }
            .btn:active { transform: scale(0.95); }
          </style>
          <div class="popup" id="jf-popup">
            <div class="header">
              <span>AutoFill Manual Override</span>
              <span class="close-btn" id="jf-close">✖</span>
            </div>
            <div id="jf-content"></div>
          </div>
        `;
        
        this.popupEl = this.shadow.getElementById('jf-popup');
        this.contentEl = this.shadow.getElementById('jf-content');
        this.currentInput = null;
        
        this.shadow.getElementById('jf-close').addEventListener('click', () => this.hide());
        document.addEventListener('click', (e) => {
          if (!e.composedPath().includes(this.container)) this.hide();
        });
      }

      show(x, y, input, anchorRect) {
        this.currentInput = input;
        this.contentEl.innerHTML = '';
        
        const textFields = [
          { key: 'firstName', label: 'First Name' },
          { key: 'lastName', label: 'Last Name' },
          { key: 'email', label: 'Email' },
          { key: 'phone', label: 'Phone' },
          { key: 'country', label: 'Country' },
          { key: 'timeZone', label: 'Time Zone' },
          { key: 'startDate', label: 'Start Date' },
          { key: 'linkedin', label: 'LinkedIn' },
          { key: 'github', label: 'GitHub' },
          { key: 'portfolio', label: 'Portfolio' },
          { key: 'gender', label: 'Gender' },
          { key: 'hispanic', label: 'Hispanic/Latino' },
          { key: 'race', label: 'Race' },
          { key: 'veteran', label: 'Veteran Status' },
          { key: 'disability', label: 'Disability' },
          { key: 'authorized', label: 'Authorized' },
          { key: 'sponsorship', label: 'Sponsorship' },
          { key: 'specialField1', label: 'Custom 1' },
          { key: 'specialField2', label: 'Custom 2' },
          { key: 'specialField3', label: 'Custom 3' }
        ];

        textFields.forEach(field => {
          const val = profileData[field.key];
          if (!val) return;
          
          const row = document.createElement('div');
          row.className = 'row';
          row.innerHTML = `
            <div class="label" title="${val}"><strong>${field.label}:</strong> ${val}</div>
            <div class="actions">
              <button class="btn copy" title="Copy to clipboard">📋</button>
              <button class="btn fill" title="Fill into field">⚡</button>
            </div>
          `;
          
          row.querySelector('.copy').addEventListener('click', (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(val);
            const btn = e.target;
            btn.textContent = '✓';
            setTimeout(() => btn.textContent = '📋', 1500);
          });
          
          row.querySelector('.fill').addEventListener('click', async (e) => {
            e.stopPropagation();
            await attemptFill(this.currentInput, val);
            this.hide();
          });
          
          this.contentEl.appendChild(row);
        });

        this.popupEl.classList.add('show');
        
        // Smart positioning
        const popupRect = this.popupEl.getBoundingClientRect();
        const spaceBelow = window.innerHeight - anchorRect.bottom;
        
        if (spaceBelow < popupRect.height && anchorRect.top > popupRect.height) {
           // Show above
           this.popupEl.style.top = `${anchorRect.top + window.scrollY - popupRect.height - 5}px`;
        } else {
           // Show below
           this.popupEl.style.top = `${anchorRect.bottom + window.scrollY + 5}px`;
        }
        
        // Prevent horizontal overflow
        let leftPos = anchorRect.left + window.scrollX;
        if (leftPos + 320 > document.body.scrollWidth) {
          leftPos = document.body.scrollWidth - 330;
        }
        this.popupEl.style.left = `${Math.max(10, leftPos)}px`;
      }

      hide() {
        this.popupEl.classList.remove('show');
        this.currentInput = null;
      }
    }

    if (!customElements.get('jobform-quick-btn')) {
      customElements.define('jobform-quick-btn', class extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({mode: 'open'});
          this.shadowRoot.innerHTML = `
            <style>
              .btn {
                display: inline-flex; align-items: center; justify-content: center;
                width: 18px; height: 18px; background: #8b5cf6; color: white;
                border-radius: 50%; cursor: pointer; font-size: 10px;
                margin-right: 6px; vertical-align: middle;
                box-shadow: 0 0 3px rgba(0,0,0,0.3); user-select: none;
                transition: transform 0.1s; border: 1px solid rgba(255,255,255,0.3);
              }
              .btn:hover { transform: scale(1.15); background: #7c3aed; }
            </style>
            <div class="btn" title="JobForm AutoFill Override">⚡</div>
          `;
        }
      });
    }

    const popupManager = new JobFormPopupManager();

    // Inject buttons
    for (const input of inputs) {
      // Don't inject on files or buttons
      if (input.type === 'file' || input.type === 'hidden' || input.type === 'submit') continue;

      const btnNode = document.createElement('jobform-quick-btn');
      
      // Inject before the label if it exists, otherwise before the input
      const id = input.id;
      let label = id ? document.querySelector(`label[for="${id}"]`) : null;
      if (!label) label = input.closest('label');

      let targetEl = label || input;
      
      targetEl.parentNode.insertBefore(btnNode, targetEl);
      
      btnNode.shadowRoot.querySelector('.btn').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        popupManager.show(e.clientX, e.clientY, input, btnNode.getBoundingClientRect());
      });
    }

  } catch (error) {
    console.error("JobForm AutoFill Error:", error);
  } finally {
     window.hasRunAutoFill = false; // Allow re-runs if triggered manually
  }
})();