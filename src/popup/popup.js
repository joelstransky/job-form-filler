// Helper to convert file to Base64
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve({
      name: file.name,
      type: file.type,
      data: reader.result
    });
    reader.onerror = error => reject(error);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get(['profileData'], (result) => {
    const data = result.profileData || {};
    
    // Quick Files visibility
    if (data.resumeFile) {
      document.getElementById('resumeName').textContent = data.resumeFile.name;
      document.getElementById('resumeName').title = data.resumeFile.name;
    } else {
      document.getElementById('row-resume').style.display = 'none';
    }
    
    if (data.coverLetterFile) {
      document.getElementById('coverName').textContent = data.coverLetterFile.name;
      document.getElementById('coverName').title = data.coverLetterFile.name;
    } else {
      document.getElementById('row-cover').style.display = 'none';
    }

    if (!data.resumeFile && !data.coverLetterFile) {
      document.getElementById('quickFilesContainer').style.display = 'none';
    }

    // Special Fields visibility
    const sf1 = data.specialField1 || '';
    const sf2 = data.specialField2 || '';
    const sf3 = data.specialField3 || '';

    if (sf1) {
      document.getElementById('sf1Name').textContent = sf1;
    } else {
      document.getElementById('row-sf1').style.display = 'none';
    }

    if (sf2) {
      document.getElementById('sf2Name').textContent = sf2;
    } else {
      document.getElementById('row-sf2').style.display = 'none';
    }

    if (sf3) {
      document.getElementById('sf3Name').textContent = sf3;
    } else {
      document.getElementById('row-sf3').style.display = 'none';
    }

    if (!sf1 && !sf2 && !sf3) {
      document.getElementById('specialFieldsContainer').style.display = 'none';
    }

    // Copy handlers
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetKey = e.target.getAttribute('data-target');
        const textToCopy = data[targetKey] || '';
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            const oldText = e.target.textContent;
            e.target.textContent = '✅';
            setTimeout(() => e.target.textContent = oldText, 1500);
          });
        }
      });
    });
  });
});

async function updateFile(key, inputElement) {
  if (inputElement.files.length === 0) return;
  
  try {
    const fileData = await toBase64(inputElement.files[0]);
    const result = await chrome.storage.local.get(['profileData']);
    const profileData = result.profileData || {};
    profileData[key] = fileData;
    await chrome.storage.local.set({ profileData });
    
    // Update UI
    const nameId = key === 'resumeFile' ? 'resumeName' : 'coverName';
    document.getElementById(nameId).textContent = fileData.name;
    document.getElementById(nameId).title = fileData.name;
    
    // Briefly show success
    const icon = inputElement.previousElementSibling;
    const oldText = icon.textContent;
    icon.textContent = '✅';
    setTimeout(() => icon.textContent = oldText, 1500);
  } catch (e) {
    console.error("Error updating file:", e);
  }
}

document.getElementById('resumeInput').addEventListener('change', (e) => updateFile('resumeFile', e.target));
document.getElementById('coverInput').addEventListener('change', (e) => updateFile('coverLetterFile', e.target));

document.getElementById('optionsBtn').addEventListener('click', () => {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('src/options/options.html'));
  }
});

document.getElementById('fillFormBtn').addEventListener('click', async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    if (!tab) return;

    // Prevent running on restricted pages
    if (tab.url.startsWith('chrome://') || tab.url.startsWith('edge://') || tab.url.startsWith('about:') || tab.url.startsWith('https://chrome.google.com/webstore')) {
      alert('JobForm AutoFill cannot run on browser settings pages or the web store. Please try it on a real job application page.');
      return;
    }

    await chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      files: ['src/content/content.js']
    });
    
    // Briefly change button text to show success
    const btn = document.getElementById('fillFormBtn');
    const originalText = btn.textContent;
    btn.textContent = 'Auto-Fill Triggered!';
    setTimeout(() => {
      btn.textContent = originalText;
    }, 1500);

  } catch (error) {
    console.error("Failed to execute script: ", error);
    alert("Could not run auto-fill on this page. If you just reloaded the extension, please refresh the page you are trying to fill.");
  }
});