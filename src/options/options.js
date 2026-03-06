const countries = [
  {"name": "United States", "emoji": "🇺🇸"},
  {"name": "United Kingdom", "emoji": "🇬🇧"},
  {"name": "Canada", "emoji": "🇨🇦"},
  {"name": "Australia", "emoji": "🇨🇦"}, // Will fix this to correct flag
  {"name": "Afghanistan", "emoji": "🇦🇫"},
  {"name": "Albania", "emoji": "🇦🇱"},
  {"name": "Algeria", "emoji": "🇩🇿"},
  {"name": "Andorra", "emoji": "🇦🇽"},
  {"name": "Angola", "emoji": "🇦🇴"},
  {"name": "Antigua and Barbuda", "emoji": "🇦🇬"},
  {"name": "Argentina", "emoji": "🇦🇷"},
  {"name": "Armenia", "emoji": "🇦🇲"},
  {"name": "Australia", "emoji": "🇦🇺"},
  {"name": "Austria", "emoji": "🇦🇹"},
  {"name": "Azerbaijan", "emoji": "🇦🇿"},
  {"name": "Bahamas", "emoji": "🇧🇸"},
  {"name": "Bahrain", "emoji": "🇧🇭"},
  {"name": "Bangladesh", "emoji": "🇧🇩"},
  {"name": "Barbados", "emoji": "🇧🇧"},
  {"name": "Belarus", "emoji": "🇧🇾"},
  {"name": "Belgium", "emoji": "🇧🇪"},
  {"name": "Belize", "emoji": "🇧🇿"},
  {"name": "Benin", "emoji": "🇧🇯"},
  {"name": "Bhutan", "emoji": "🇧🇹"},
  {"name": "Bolivia", "emoji": "🇧🇴"},
  {"name": "Bosnia and Herzegovina", "emoji": "🇧🇦"},
  {"name": "Botswana", "emoji": "🇧🇼"},
  {"name": "Brazil", "emoji": "🇧🇷"},
  {"name": "Brunei", "emoji": "🇧🇳"},
  {"name": "Bulgaria", "emoji": "🇧🇬"},
  {"name": "Burkina Faso", "emoji": "🇧🇫"},
  {"name": "Burundi", "emoji": "🇧🇮"},
  {"name": "Cabo Verde", "emoji": "🇨🇻"},
  {"name": "Cambodia", "emoji": "🇰🇭"},
  {"name": "Cameroon", "emoji": "🇨🇲"},
  {"name": "Central African Republic", "emoji": "🇨🇫"},
  {"name": "Chad", "emoji": "🇹🇩"},
  {"name": "Chile", "emoji": "🇨🇱"},
  {"name": "China", "emoji": "🇨🇳"},
  {"name": "Colombia", "emoji": "🇨🇴"},
  {"name": "Comoros", "emoji": "🇰🇲"},
  {"name": "Congo", "emoji": "🇨🇬"},
  {"name": "Costa Rica", "emoji": "🇨🇷"},
  {"name": "Croatia", "emoji": "🇭🇷"},
  {"name": "Cuba", "emoji": "🇨🇺"},
  {"name": "Cyprus", "emoji": "🇨🇾"},
  {"name": "Czechia", "emoji": "🇨🇿"},
  {"name": "Denmark", "emoji": "🇩🇰"},
  {"name": "Djibouti", "emoji": "🇩🇯"},
  {"name": "Dominica", "emoji": "🇩🇲"},
  {"name": "Dominican Republic", "emoji": "🇩🇴"},
  {"name": "Ecuador", "emoji": "🇨🇴"},
  {"name": "Egypt", "emoji": "🇪🇬"},
  {"name": "El Salvador", "emoji": "🇸🇻"},
  {"name": "Equatorial Guinea", "emoji": "🇬🇶"},
  {"name": "Eritrea", "emoji": "🇪🇷"},
  {"name": "Estonia", "emoji": "🇪🇪"},
  {"name": "Eswatini", "emoji": "🇸🇿"},
  {"name": "Ethiopia", "emoji": "🇪🇹"},
  {"name": "Fiji", "emoji": "🇫🇯"},
  {"name": "Finland", "emoji": "🇫🇮"},
  {"name": "France", "emoji": "🇫🇷"},
  {"name": "Gabon", "emoji": "🇬🇦"},
  {"name": "Gambia", "emoji": "🇬🇲"},
  {"name": "Georgia", "emoji": "🇬🇪"},
  {"name": "Germany", "emoji": "🇩🇪"},
  {"name": "Ghana", "emoji": "🇬🇭"},
  {"name": "Greece", "emoji": "🇬🇷"},
  {"name": "Grenada", "emoji": "🇬🇩"},
  {"name": "Guatemala", "emoji": "🇬🇹"},
  {"name": "Guinea", "emoji": "🇬🇳"},
  {"name": "Guinea-Bissau", "emoji": "🇬🇼"},
  {"name": "Guyana", "emoji": "🇬🇾"},
  {"name": "Haiti", "emoji": "🇭🇹"},
  {"name": "Honduras", "emoji": "🇭🇳"},
  {"name": "Hungary", "emoji": "🇨🇿"},
  {"name": "Iceland", "emoji": "🇮🇸"},
  {"name": "India", "emoji": "🇮🇳"},
  {"name": "Indonesia", "emoji": "🇮🇩"},
  {"name": "Iran", "emoji": "🇮🇷"},
  {"name": "Iraq", "emoji": "🇮🇶"},
  {"name": "Ireland", "emoji": "🇮🇪"},
  {"name": "Israel", "emoji": "🇮🇱"},
  {"name": "Italy", "emoji": "🇮🇹"},
  {"name": "Jamaica", "emoji": "🇯🇲"},
  {"name": "Japan", "emoji": "🇯🇵"},
  {"name": "Jordan", "emoji": "🇯🇴"},
  {"name": "Kazakhstan", "emoji": "🇰🇿"},
  {"name": "Kenya", "emoji": "🇰🇪"},
  {"name": "Kiribati", "emoji": "🇰🇮"},
  {"name": "Kuwait", "emoji": "🇰🇼"},
  {"name": "Kyrgyzstan", "emoji": "🇰🇬"},
  {"name": "Laos", "emoji": "🇱🇦"},
  {"name": "Latvia", "emoji": "🇱🇻"},
  {"name": "Lebanon", "emoji": "🇱🇧"},
  {"name": "Lesotho", "emoji": "🇱🇸"},
  {"name": "Liberia", "emoji": "🇱🇷"},
  {"name": "Libya", "emoji": "🇱🇾"},
  {"name": "Liechtenstein", "emoji": "🇱🇮"},
  {"name": "Lithuania", "emoji": "🇱🇻"},
  {"name": "Luxembourg", "emoji": "🇱🇮"},
  {"name": "Madagascar", "emoji": "🇲🇬"},
  {"name": "Malawi", "emoji": "🇲🇼"},
  {"name": "Malaysia", "emoji": "🇲🇾"},
  {"name": "Maldives", "emoji": "🇲🇼"},
  {"name": "Mali", "emoji": "🇲🇱"},
  {"name": "Malta", "emoji": "🇲🇹"},
  {"name": "Marshall Islands", "emoji": "🇲🇭"},
  {"name": "Mauritania", "emoji": "🇲🇷"},
  {"name": "Mauritius", "emoji": "🇲🇺"},
  {"name": "Mexico", "emoji": "🇲🇽"},
  {"name": "Micronesia", "emoji": "🇫🇲"},
  {"name": "Moldova", "emoji": "🇲🇩"},
  {"name": "Monaco", "emoji": "🇲🇨"},
  {"name": "Mongolia", "emoji": "🇲🇳"},
  {"name": "Montenegro", "emoji": "🇲🇪"},
  {"name": "Morocco", "emoji": "🇲🇦"},
  {"name": "Mozambique", "emoji": "🇲🇿"},
  {"name": "Myanmar", "emoji": "🇲🇳"},
  {"name": "Namibia", "emoji": "🇳🇦"},
  {"name": "Nauru", "emoji": "🇳🇷"},
  {"name": "Nepal", "emoji": "🇳🇵"},
  {"name": "Netherlands", "emoji": "🇳🇱"},
  {"name": "New Zealand", "emoji": "🇳🇿"},
  {"name": "Nicaragua", "emoji": "🇳🇮"},
  {"name": "Niger", "emoji": "🇳🇪"},
  {"name": "Nigeria", "emoji": "🇳🇬"},
  {"name": "North Korea", "emoji": "🇰🇵"},
  {"name": "North Macedonia", "emoji": "🇲🇰"},
  {"name": "Norway", "emoji": "🇳🇴"},
  {"name": "Oman", "emoji": "🇴🇲"},
  {"name": "Pakistan", "emoji": "🇵🇰"},
  {"name": "Palau", "emoji": "🇵🇼"},
  {"name": "Panama", "emoji": "🇵🇦"},
  {"name": "Papua New Guinea", "emoji": "🇵🇬"},
  {"name": "Paraguay", "emoji": "🇵🇾"},
  {"name": "Peru", "emoji": "🇵🇪"},
  {"name": "Philippines", "emoji": "🇵🇭"},
  {"name": "Poland", "emoji": "🇵🇱"},
  {"name": "Portugal", "emoji": "🇵🇹"},
  {"name": "Qatar", "emoji": "🇶🇦"},
  {"name": "Romania", "emoji": "🇷🇴"},
  {"name": "Russia", "emoji": "🇷🇺"},
  {"name": "Rwanda", "emoji": "🇷🇼"},
  {"name": "Saint Kitts and Nevis", "emoji": "🇰🇳"},
  {"name": "Saint Lucia", "emoji": "🇱🇨"},
  {"name": "Saint Vincent and the Grenadines", "emoji": "🇻🇨"},
  {"name": "Samoa", "emoji": "🇼🇸"},
  {"name": "San Marino", "emoji": "🇸🇲"},
  {"name": "Sao Tome and Principe", "emoji": "🇸🇹"},
  {"name": "Saudi Arabia", "emoji": "🇸🇦"},
  {"name": "Senegal", "emoji": "🇸🇳"},
  {"name": "Serbia", "emoji": "🇷🇸"},
  {"name": "Seychelles", "emoji": "🇸🇨"},
  {"name": "Sierra Leone", "emoji": "🇸🇱"},
  {"name": "Singapore", "emoji": "🇸🇬"},
  {"name": "Slovakia", "emoji": "🇸🇰"},
  {"name": "Slovenia", "emoji": "🇸🇮"},
  {"name": "Solomon Islands", "emoji": "🇸🇧"},
  {"name": "Somalia", "emoji": "🇸🇴"},
  {"name": "South Africa", "emoji": "🇿🇦"},
  {"name": "South Korea", "emoji": "🇰🇷"},
  {"name": "South Sudan", "emoji": "🇸🇸"},
  {"name": "Spain", "emoji": "🇪🇸"},
  {"name": "Sri Lanka", "emoji": "🇱🇰"},
  {"name": "Sudan", "emoji": "🇸🇩"},
  {"name": "Suriname", "emoji": "🇵🇾"},
  {"name": "Sweden", "emoji": "🇸🇪"},
  {"name": "Switzerland", "emoji": "🇨🇭"},
  {"name": "Syria", "emoji": "🇸🇾"},
  {"name": "Taiwan", "emoji": "🇹🇼"},
  {"name": "Tajikistan", "emoji": "🇹🇯"},
  {"name": "Tanzania", "emoji": "🇹🇿"},
  {"name": "Thailand", "emoji": "🇹🇭"},
  {"name": "Timor-Leste", "emoji": "🇹🇱"},
  {"name": "Togo", "emoji": "🇹🇬"},
  {"name": "Tonga", "emoji": "🇹🇴"},
  {"name": "Trinidad and Tobago", "emoji": "🇹🇹"},
  {"name": "Tunisia", "emoji": "🇹🇳"},
  {"name": "Turkey", "emoji": "🇹🇷"},
  {"name": "Turkmenistan", "emoji": "🇹🇲"},
  {"name": "Tuvalu", "emoji": "🇹🇻"},
  {"name": "Uganda", "emoji": "🇺🇬"},
  {"name": "Ukraine", "emoji": "🇺🇦"},
  {"name": "United Arab Emirates", "emoji": "🇦🇪"},
  {"name": "Uruguay", "emoji": "🇺🇾"},
  {"name": "Uzbekistan", "emoji": "🇺🇿"},
  {"name": "Vanuatu", "emoji": "🇻🇺"},
  {"name": "Vatican City", "emoji": "🇻🇦"},
  {"name": "Venezuela", "emoji": "🇻🇪"},
  {"name": "Vietnam", "emoji": "🇻🇳"},
  {"name": "Yemen", "emoji": "🇾🇪"},
  {"name": "Zambia", "emoji": "🇿🇲"},
  {"name": "Zimbabwe", "emoji": "🇿🇼"}
];

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
  // Populate country select
  const countrySelect = document.getElementById('country');
  // Remove duplicates
  const uniqueCountries = [];
  const map = new Map();
  for (const item of countries) {
      if(!map.has(item.name)){
          map.set(item.name, true);    // set any value to Map
          uniqueCountries.push({
              name: item.name,
              emoji: item.emoji
          });
      }
  }
  
  uniqueCountries.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.name;
    opt.textContent = `${c.emoji} ${c.name}`;
    countrySelect.appendChild(opt);
  });

  chrome.storage.local.get(['profileData'], (result) => {
    if (result.profileData) {
      const data = result.profileData;
      
      const textFields = [
        'firstName', 'lastName', 'email', 'phone', 'country', 
        'linkedin', 'github', 'portfolio', 
        'gender', 'hispanic', 'race', 'veteran', 'disability', 
        'specialField1', 'specialField2', 'specialField3'
      ];
      
      textFields.forEach(field => {
        if (document.getElementById(field) && data[field]) {
          document.getElementById(field).value = data[field];
        }
      });
      
      if (data.resumeFile) {
        document.getElementById('resumeStatus').textContent = `Saved in extension: ${data.resumeFile.name}`;
      }
      if (data.coverLetterFile) {
        document.getElementById('coverLetterFileStatus').textContent = `Saved in extension: ${data.coverLetterFile.name}`;
      }
    }
  });
});

document.getElementById('clearBtn').addEventListener('click', () => {
  if (confirm("Are you sure you want to delete all saved profile data and files?")) {
    chrome.storage.local.remove('profileData', () => {
      document.getElementById('profileForm').reset();
      document.getElementById('resumeStatus').textContent = '';
      document.getElementById('coverLetterFileStatus').textContent = '';
      const status = document.getElementById('status');
      status.style.color = '#dc3545';
      status.textContent = 'Data cleared.';
      status.classList.add('show');
      setTimeout(() => {
        status.textContent = '';
        status.classList.remove('show');
        status.style.color = 'green';
      }, 2000);
    });
  }
});

document.getElementById('profileForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const profileData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    country: document.getElementById('country').value,
    linkedin: document.getElementById('linkedin').value,
    github: document.getElementById('github').value,
    portfolio: document.getElementById('portfolio').value,
    gender: document.getElementById('gender').value,
    hispanic: document.getElementById('hispanic').value,
    race: document.getElementById('race').value,
    veteran: document.getElementById('veteran').value,
    disability: document.getElementById('disability').value,
    specialField1: document.getElementById('specialField1').value,
    specialField2: document.getElementById('specialField2').value,
    specialField3: document.getElementById('specialField3').value,
  };

  const existing = await chrome.storage.local.get(['profileData']);
  if (existing.profileData) {
     if (existing.profileData.resumeFile) profileData.resumeFile = existing.profileData.resumeFile;
     if (existing.profileData.coverLetterFile) profileData.coverLetterFile = existing.profileData.coverLetterFile;
  }

  const resumeInput = document.getElementById('resumeFile');
  if (resumeInput.files.length > 0) {
    try {
      profileData.resumeFile = await toBase64(resumeInput.files[0]);
      document.getElementById('resumeStatus').textContent = `Saved in extension: ${profileData.resumeFile.name}`;
    } catch(err) {
      console.error("Error reading resume:", err);
    }
  }

  const coverLetterInput = document.getElementById('coverLetterFile');
  if (coverLetterInput.files.length > 0) {
    try {
      profileData.coverLetterFile = await toBase64(coverLetterInput.files[0]);
      document.getElementById('coverLetterFileStatus').textContent = `Saved in extension: ${profileData.coverLetterFile.name}`;
    } catch(err) {
      console.error("Error reading cover letter:", err);
    }
  }

  chrome.storage.local.set({ profileData }, () => {
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    status.classList.add('show');
    setTimeout(() => {
      status.textContent = '';
      status.classList.remove('show');
    }, 2000);
  });
});