const countries = [
  {
    "name": "United States",
    "emoji": "🇺🇸",
    "code": "US",
    "dialCode": "+1"
  },
  {
    "name": "United Kingdom",
    "emoji": "🇬🇧",
    "code": "GB",
    "dialCode": "+44"
  },
  {
    "name": "Canada",
    "emoji": "🇨🇦",
    "code": "CA",
    "dialCode": "+1"
  },
  {
    "name": "Australia",
    "emoji": "🇨🇦",
    "code": "AU",
    "dialCode": "+61"
  },
  {
    "name": "Afghanistan",
    "emoji": "🇦🇫",
    "code": "AF",
    "dialCode": "+93"
  },
  {
    "name": "Albania",
    "emoji": "🇦🇱",
    "code": "AL",
    "dialCode": "+355"
  },
  {
    "name": "Algeria",
    "emoji": "🇩🇿",
    "code": "DZ",
    "dialCode": "+213"
  },
  {
    "name": "Andorra",
    "emoji": "🇦🇽",
    "code": "AD",
    "dialCode": "+376"
  },
  {
    "name": "Angola",
    "emoji": "🇦🇴",
    "code": "AO",
    "dialCode": "+244"
  },
  {
    "name": "Antigua and Barbuda",
    "emoji": "🇦🇬",
    "code": "AG",
    "dialCode": "+1-268"
  },
  {
    "name": "Argentina",
    "emoji": "🇦🇷",
    "code": "AR",
    "dialCode": "+54"
  },
  {
    "name": "Armenia",
    "emoji": "🇦🇲",
    "code": "AM",
    "dialCode": "+374"
  },
  {
    "name": "Australia",
    "emoji": "🇦🇺",
    "code": "AU",
    "dialCode": "+61"
  },
  {
    "name": "Austria",
    "emoji": "🇦🇹",
    "code": "AT",
    "dialCode": "+43"
  },
  {
    "name": "Azerbaijan",
    "emoji": "🇦🇿",
    "code": "AZ",
    "dialCode": "+994"
  },
  {
    "name": "Bahamas",
    "emoji": "🇧🇸",
    "code": "BS",
    "dialCode": "+1-242"
  },
  {
    "name": "Bahrain",
    "emoji": "🇧🇭",
    "code": "BH",
    "dialCode": "+973"
  },
  {
    "name": "Bangladesh",
    "emoji": "🇧🇩",
    "code": "BD",
    "dialCode": "+880"
  },
  {
    "name": "Barbados",
    "emoji": "🇧🇧",
    "code": "BB",
    "dialCode": "+1-246"
  },
  {
    "name": "Belarus",
    "emoji": "🇧🇾",
    "code": "BY",
    "dialCode": "+375"
  },
  {
    "name": "Belgium",
    "emoji": "🇧🇪",
    "code": "BE",
    "dialCode": "+32"
  },
  {
    "name": "Belize",
    "emoji": "🇧🇿",
    "code": "BZ",
    "dialCode": "+501"
  },
  {
    "name": "Benin",
    "emoji": "🇧🇯",
    "code": "BJ",
    "dialCode": "+229"
  },
  {
    "name": "Bhutan",
    "emoji": "🇧🇹",
    "code": "BT",
    "dialCode": "+975"
  },
  {
    "name": "Bolivia",
    "emoji": "🇧🇴",
    "code": "BO",
    "dialCode": "+591"
  },
  {
    "name": "Bosnia and Herzegovina",
    "emoji": "🇧🇦",
    "code": "BA",
    "dialCode": "+387"
  },
  {
    "name": "Botswana",
    "emoji": "🇧🇼",
    "code": "BW",
    "dialCode": "+267"
  },
  {
    "name": "Brazil",
    "emoji": "🇧🇷",
    "code": "BR",
    "dialCode": "+55"
  },
  {
    "name": "Brunei",
    "emoji": "🇧🇳",
    "code": "BN",
    "dialCode": "+673"
  },
  {
    "name": "Bulgaria",
    "emoji": "🇧🇬",
    "code": "BG",
    "dialCode": "+359"
  },
  {
    "name": "Burkina Faso",
    "emoji": "🇧🇫",
    "code": "BF",
    "dialCode": "+226"
  },
  {
    "name": "Burundi",
    "emoji": "🇧🇮",
    "code": "BI",
    "dialCode": "+257"
  },
  {
    "name": "Cabo Verde",
    "emoji": "🇨🇻",
    "code": "CV",
    "dialCode": "+238"
  },
  {
    "name": "Cambodia",
    "emoji": "🇰🇭",
    "code": "KH",
    "dialCode": "+855"
  },
  {
    "name": "Cameroon",
    "emoji": "🇨🇲",
    "code": "CM",
    "dialCode": "+237"
  },
  {
    "name": "Central African Republic",
    "emoji": "🇨🇫",
    "code": "CF",
    "dialCode": "+236"
  },
  {
    "name": "Chad",
    "emoji": "🇹🇩",
    "code": "TD",
    "dialCode": "+235"
  },
  {
    "name": "Chile",
    "emoji": "🇨🇱",
    "code": "CL",
    "dialCode": "+56"
  },
  {
    "name": "China",
    "emoji": "🇨🇳",
    "code": "CN",
    "dialCode": "+86"
  },
  {
    "name": "Colombia",
    "emoji": "🇨🇴",
    "code": "CO",
    "dialCode": "+57"
  },
  {
    "name": "Comoros",
    "emoji": "🇰🇲",
    "code": "KM",
    "dialCode": "+269"
  },
  {
    "name": "Congo",
    "emoji": "🇨🇬",
    "code": "CG",
    "dialCode": "+242"
  },
  {
    "name": "Costa Rica",
    "emoji": "🇨🇷",
    "code": "CR",
    "dialCode": "+506"
  },
  {
    "name": "Croatia",
    "emoji": "🇭🇷",
    "code": "HR",
    "dialCode": "+385"
  },
  {
    "name": "Cuba",
    "emoji": "🇨🇺",
    "code": "CU",
    "dialCode": "+53"
  },
  {
    "name": "Cyprus",
    "emoji": "🇨🇾",
    "code": "CY",
    "dialCode": "+357"
  },
  {
    "name": "Czechia",
    "emoji": "🇨🇿",
    "code": "CZ",
    "dialCode": "+420"
  },
  {
    "name": "Denmark",
    "emoji": "🇩🇰",
    "code": "DK",
    "dialCode": "+45"
  },
  {
    "name": "Djibouti",
    "emoji": "🇩🇯",
    "code": "DJ",
    "dialCode": "+253"
  },
  {
    "name": "Dominica",
    "emoji": "🇩🇲",
    "code": "DM",
    "dialCode": "+1-767"
  },
  {
    "name": "Dominican Republic",
    "emoji": "🇩🇴",
    "code": "DO",
    "dialCode": "+1-809"
  },
  {
    "name": "Ecuador",
    "emoji": "🇨🇴",
    "code": "EC",
    "dialCode": "+593"
  },
  {
    "name": "Egypt",
    "emoji": "🇪🇬",
    "code": "EG",
    "dialCode": "+20"
  },
  {
    "name": "El Salvador",
    "emoji": "🇸🇻",
    "code": "SV",
    "dialCode": "+503"
  },
  {
    "name": "Equatorial Guinea",
    "emoji": "🇬🇶",
    "code": "GQ",
    "dialCode": "+240"
  },
  {
    "name": "Eritrea",
    "emoji": "🇪🇷",
    "code": "ER",
    "dialCode": "+291"
  },
  {
    "name": "Estonia",
    "emoji": "🇪🇪",
    "code": "EE",
    "dialCode": "+372"
  },
  {
    "name": "Eswatini",
    "emoji": "🇸🇿",
    "code": "SZ",
    "dialCode": "+268"
  },
  {
    "name": "Ethiopia",
    "emoji": "🇪🇹",
    "code": "ET",
    "dialCode": "+251"
  },
  {
    "name": "Fiji",
    "emoji": "🇫🇯",
    "code": "FJ",
    "dialCode": "+679"
  },
  {
    "name": "Finland",
    "emoji": "🇫🇮",
    "code": "FI",
    "dialCode": "+358"
  },
  {
    "name": "France",
    "emoji": "🇫🇷",
    "code": "FR",
    "dialCode": "+33"
  },
  {
    "name": "Gabon",
    "emoji": "🇬🇦",
    "code": "GA",
    "dialCode": "+241"
  },
  {
    "name": "Gambia",
    "emoji": "🇬🇲",
    "code": "GM",
    "dialCode": "+220"
  },
  {
    "name": "Georgia",
    "emoji": "🇬🇪",
    "code": "GE",
    "dialCode": "+995"
  },
  {
    "name": "Germany",
    "emoji": "🇩🇪",
    "code": "DE",
    "dialCode": "+49"
  },
  {
    "name": "Ghana",
    "emoji": "🇬🇭",
    "code": "GH",
    "dialCode": "+233"
  },
  {
    "name": "Greece",
    "emoji": "🇬🇷",
    "code": "GR",
    "dialCode": "+30"
  },
  {
    "name": "Grenada",
    "emoji": "🇬🇩",
    "code": "GD",
    "dialCode": "+1-473"
  },
  {
    "name": "Guatemala",
    "emoji": "🇬🇹",
    "code": "GT",
    "dialCode": "+502"
  },
  {
    "name": "Guinea",
    "emoji": "🇬🇳",
    "code": "GN",
    "dialCode": "+224"
  },
  {
    "name": "Guinea-Bissau",
    "emoji": "🇬🇼",
    "code": "GW",
    "dialCode": "+245"
  },
  {
    "name": "Guyana",
    "emoji": "🇬🇾",
    "code": "GY",
    "dialCode": "+592"
  },
  {
    "name": "Haiti",
    "emoji": "🇭🇹",
    "code": "HT",
    "dialCode": "+509"
  },
  {
    "name": "Honduras",
    "emoji": "🇭🇳",
    "code": "HN",
    "dialCode": "+504"
  },
  {
    "name": "Hungary",
    "emoji": "🇨🇿",
    "code": "HU",
    "dialCode": "+36"
  },
  {
    "name": "Iceland",
    "emoji": "🇮🇸",
    "code": "IS",
    "dialCode": "+354"
  },
  {
    "name": "India",
    "emoji": "🇮🇳",
    "code": "IN",
    "dialCode": "+91"
  },
  {
    "name": "Indonesia",
    "emoji": "🇮🇩",
    "code": "ID",
    "dialCode": "+62"
  },
  {
    "name": "Iran",
    "emoji": "🇮🇷",
    "code": "IR",
    "dialCode": "+98"
  },
  {
    "name": "Iraq",
    "emoji": "🇮🇶",
    "code": "IQ",
    "dialCode": "+964"
  },
  {
    "name": "Ireland",
    "emoji": "🇮🇪",
    "code": "IE",
    "dialCode": "+353"
  },
  {
    "name": "Israel",
    "emoji": "🇮🇱",
    "code": "IL",
    "dialCode": "+972"
  },
  {
    "name": "Italy",
    "emoji": "🇮🇹",
    "code": "IT",
    "dialCode": "+39"
  },
  {
    "name": "Jamaica",
    "emoji": "🇯🇲",
    "code": "JM",
    "dialCode": "+1-876"
  },
  {
    "name": "Japan",
    "emoji": "🇯🇵",
    "code": "JP",
    "dialCode": "+81"
  },
  {
    "name": "Jordan",
    "emoji": "🇯🇴",
    "code": "JO",
    "dialCode": "+962"
  },
  {
    "name": "Kazakhstan",
    "emoji": "🇰🇿",
    "code": "KZ",
    "dialCode": "+7"
  },
  {
    "name": "Kenya",
    "emoji": "🇰🇪",
    "code": "KE",
    "dialCode": "+254"
  },
  {
    "name": "Kiribati",
    "emoji": "🇰🇮",
    "code": "KI",
    "dialCode": "+686"
  },
  {
    "name": "Kuwait",
    "emoji": "🇰🇼",
    "code": "KW",
    "dialCode": "+965"
  },
  {
    "name": "Kyrgyzstan",
    "emoji": "🇰🇬",
    "code": "KG",
    "dialCode": "+996"
  },
  {
    "name": "Laos",
    "emoji": "🇱🇦",
    "code": "LA",
    "dialCode": "+856"
  },
  {
    "name": "Latvia",
    "emoji": "🇱🇻",
    "code": "LV",
    "dialCode": "+371"
  },
  {
    "name": "Lebanon",
    "emoji": "🇱🇧",
    "code": "LB",
    "dialCode": "+961"
  },
  {
    "name": "Lesotho",
    "emoji": "🇱🇸",
    "code": "LS",
    "dialCode": "+266"
  },
  {
    "name": "Liberia",
    "emoji": "🇱🇷",
    "code": "LR",
    "dialCode": "+231"
  },
  {
    "name": "Libya",
    "emoji": "🇱🇾",
    "code": "LY",
    "dialCode": "+218"
  },
  {
    "name": "Liechtenstein",
    "emoji": "🇱🇮",
    "code": "LI",
    "dialCode": "+423"
  },
  {
    "name": "Lithuania",
    "emoji": "🇱🇻",
    "code": "LT",
    "dialCode": "+370"
  },
  {
    "name": "Luxembourg",
    "emoji": "🇱🇮",
    "code": "LU",
    "dialCode": "+352"
  },
  {
    "name": "Madagascar",
    "emoji": "🇲🇬",
    "code": "MG",
    "dialCode": "+261"
  },
  {
    "name": "Malawi",
    "emoji": "🇲🇼",
    "code": "MW",
    "dialCode": "+265"
  },
  {
    "name": "Malaysia",
    "emoji": "🇲🇾",
    "code": "MY",
    "dialCode": "+60"
  },
  {
    "name": "Maldives",
    "emoji": "🇲🇼",
    "code": "MV",
    "dialCode": "+960"
  },
  {
    "name": "Mali",
    "emoji": "🇲🇱",
    "code": "ML",
    "dialCode": "+223"
  },
  {
    "name": "Malta",
    "emoji": "🇲🇹",
    "code": "MT",
    "dialCode": "+356"
  },
  {
    "name": "Marshall Islands",
    "emoji": "🇲🇭",
    "code": "MH",
    "dialCode": "+692"
  },
  {
    "name": "Mauritania",
    "emoji": "🇲🇷",
    "code": "MR",
    "dialCode": "+222"
  },
  {
    "name": "Mauritius",
    "emoji": "🇲🇺",
    "code": "MU",
    "dialCode": "+230"
  },
  {
    "name": "Mexico",
    "emoji": "🇲🇽",
    "code": "MX",
    "dialCode": "+52"
  },
  {
    "name": "Micronesia",
    "emoji": "🇫🇲",
    "code": "FM",
    "dialCode": "+691"
  },
  {
    "name": "Moldova",
    "emoji": "🇲🇩",
    "code": "MD",
    "dialCode": "+373"
  },
  {
    "name": "Monaco",
    "emoji": "🇲🇨",
    "code": "MC",
    "dialCode": "+377"
  },
  {
    "name": "Mongolia",
    "emoji": "🇲🇳",
    "code": "MN",
    "dialCode": "+976"
  },
  {
    "name": "Montenegro",
    "emoji": "🇲🇪",
    "code": "ME",
    "dialCode": "+382"
  },
  {
    "name": "Morocco",
    "emoji": "🇲🇦",
    "code": "MA",
    "dialCode": "+212"
  },
  {
    "name": "Mozambique",
    "emoji": "🇲🇿",
    "code": "MZ",
    "dialCode": "+258"
  },
  {
    "name": "Myanmar",
    "emoji": "🇲🇳",
    "code": "MM",
    "dialCode": "+95"
  },
  {
    "name": "Namibia",
    "emoji": "🇳🇦",
    "code": "NA",
    "dialCode": "+264"
  },
  {
    "name": "Nauru",
    "emoji": "🇳🇷",
    "code": "NR",
    "dialCode": "+674"
  },
  {
    "name": "Nepal",
    "emoji": "🇳🇵",
    "code": "NP",
    "dialCode": "+977"
  },
  {
    "name": "Netherlands",
    "emoji": "🇳🇱",
    "code": "NL",
    "dialCode": "+31"
  },
  {
    "name": "New Zealand",
    "emoji": "🇳🇿",
    "code": "NZ",
    "dialCode": "+64"
  },
  {
    "name": "Nicaragua",
    "emoji": "🇳🇮",
    "code": "NI",
    "dialCode": "+505"
  },
  {
    "name": "Niger",
    "emoji": "🇳🇪",
    "code": "NE",
    "dialCode": "+227"
  },
  {
    "name": "Nigeria",
    "emoji": "🇳🇬",
    "code": "NG",
    "dialCode": "+234"
  },
  {
    "name": "North Korea",
    "emoji": "🇰🇵",
    "code": "KP",
    "dialCode": "+850"
  },
  {
    "name": "North Macedonia",
    "emoji": "🇲🇰",
    "code": "MK",
    "dialCode": "+389"
  },
  {
    "name": "Norway",
    "emoji": "🇳🇴",
    "code": "NO",
    "dialCode": "+47"
  },
  {
    "name": "Oman",
    "emoji": "🇴🇲",
    "code": "OM",
    "dialCode": "+968"
  },
  {
    "name": "Pakistan",
    "emoji": "🇵🇰",
    "code": "PK",
    "dialCode": "+92"
  },
  {
    "name": "Palau",
    "emoji": "🇵🇼",
    "code": "PW",
    "dialCode": "+680"
  },
  {
    "name": "Panama",
    "emoji": "🇵🇦",
    "code": "PA",
    "dialCode": "+507"
  },
  {
    "name": "Papua New Guinea",
    "emoji": "🇵🇬",
    "code": "PG",
    "dialCode": "+675"
  },
  {
    "name": "Paraguay",
    "emoji": "🇵🇾",
    "code": "PY",
    "dialCode": "+595"
  },
  {
    "name": "Peru",
    "emoji": "🇵🇪",
    "code": "PE",
    "dialCode": "+51"
  },
  {
    "name": "Philippines",
    "emoji": "🇵🇭",
    "code": "PH",
    "dialCode": "+63"
  },
  {
    "name": "Poland",
    "emoji": "🇵🇱",
    "code": "PL",
    "dialCode": "+48"
  },
  {
    "name": "Portugal",
    "emoji": "🇵🇹",
    "code": "PT",
    "dialCode": "+351"
  },
  {
    "name": "Qatar",
    "emoji": "🇶🇦",
    "code": "QA",
    "dialCode": "+974"
  },
  {
    "name": "Romania",
    "emoji": "🇷🇴",
    "code": "RO",
    "dialCode": "+40"
  },
  {
    "name": "Russia",
    "emoji": "🇷🇺",
    "code": "RU",
    "dialCode": "+7"
  },
  {
    "name": "Rwanda",
    "emoji": "🇷🇼",
    "code": "RW",
    "dialCode": "+250"
  },
  {
    "name": "Saint Kitts and Nevis",
    "emoji": "🇰🇳",
    "code": "KN",
    "dialCode": "+1-869"
  },
  {
    "name": "Saint Lucia",
    "emoji": "🇱🇨",
    "code": "LC",
    "dialCode": "+1-758"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "emoji": "🇻🇨",
    "code": "VC",
    "dialCode": "+1-784"
  },
  {
    "name": "Samoa",
    "emoji": "🇼🇸",
    "code": "WS",
    "dialCode": "+685"
  },
  {
    "name": "San Marino",
    "emoji": "🇸🇲",
    "code": "SM",
    "dialCode": "+378"
  },
  {
    "name": "Sao Tome and Principe",
    "emoji": "🇸🇹",
    "code": "ST",
    "dialCode": "+239"
  },
  {
    "name": "Saudi Arabia",
    "emoji": "🇸🇦",
    "code": "SA",
    "dialCode": "+966"
  },
  {
    "name": "Senegal",
    "emoji": "🇸🇳",
    "code": "SN",
    "dialCode": "+221"
  },
  {
    "name": "Serbia",
    "emoji": "🇷🇸",
    "code": "RS",
    "dialCode": "+381"
  },
  {
    "name": "Seychelles",
    "emoji": "🇸🇨",
    "code": "SC",
    "dialCode": "+248"
  },
  {
    "name": "Sierra Leone",
    "emoji": "🇸🇱",
    "code": "SL",
    "dialCode": "+232"
  },
  {
    "name": "Singapore",
    "emoji": "🇸🇬",
    "code": "SG",
    "dialCode": "+65"
  },
  {
    "name": "Slovakia",
    "emoji": "🇸🇰",
    "code": "SK",
    "dialCode": "+421"
  },
  {
    "name": "Slovenia",
    "emoji": "🇸🇮",
    "code": "SI",
    "dialCode": "+386"
  },
  {
    "name": "Solomon Islands",
    "emoji": "🇸🇧",
    "code": "SB",
    "dialCode": "+677"
  },
  {
    "name": "Somalia",
    "emoji": "🇸🇴",
    "code": "SO",
    "dialCode": "+252"
  },
  {
    "name": "South Africa",
    "emoji": "🇿🇦",
    "code": "ZA",
    "dialCode": "+27"
  },
  {
    "name": "South Korea",
    "emoji": "🇰🇷",
    "code": "KR",
    "dialCode": "+82"
  },
  {
    "name": "South Sudan",
    "emoji": "🇸🇸",
    "code": "SS",
    "dialCode": "+211"
  },
  {
    "name": "Spain",
    "emoji": "🇪🇸",
    "code": "ES",
    "dialCode": "+34"
  },
  {
    "name": "Sri Lanka",
    "emoji": "🇱🇰",
    "code": "LK",
    "dialCode": "+94"
  },
  {
    "name": "Sudan",
    "emoji": "🇸🇩",
    "code": "SD",
    "dialCode": "+249"
  },
  {
    "name": "Suriname",
    "emoji": "🇵🇾",
    "code": "SR",
    "dialCode": "+597"
  },
  {
    "name": "Sweden",
    "emoji": "🇸🇪",
    "code": "SE",
    "dialCode": "+46"
  },
  {
    "name": "Switzerland",
    "emoji": "🇨🇭",
    "code": "CH",
    "dialCode": "+41"
  },
  {
    "name": "Syria",
    "emoji": "🇸🇾",
    "code": "SY",
    "dialCode": "+963"
  },
  {
    "name": "Taiwan",
    "emoji": "🇹🇼",
    "code": "TW",
    "dialCode": "+886"
  },
  {
    "name": "Tajikistan",
    "emoji": "🇹🇯",
    "code": "TJ",
    "dialCode": "+992"
  },
  {
    "name": "Tanzania",
    "emoji": "🇹🇿",
    "code": "TZ",
    "dialCode": "+255"
  },
  {
    "name": "Thailand",
    "emoji": "🇹🇭",
    "code": "TH",
    "dialCode": "+66"
  },
  {
    "name": "Timor-Leste",
    "emoji": "🇹🇱",
    "code": "TL",
    "dialCode": "+670"
  },
  {
    "name": "Togo",
    "emoji": "🇹🇬",
    "code": "TG",
    "dialCode": "+228"
  },
  {
    "name": "Tonga",
    "emoji": "🇹🇴",
    "code": "TO",
    "dialCode": "+676"
  },
  {
    "name": "Trinidad and Tobago",
    "emoji": "🇹🇹",
    "code": "TT",
    "dialCode": "+1-868"
  },
  {
    "name": "Tunisia",
    "emoji": "🇹🇳",
    "code": "TN",
    "dialCode": "+216"
  },
  {
    "name": "Turkey",
    "emoji": "🇹🇷",
    "code": "TR",
    "dialCode": "+90"
  },
  {
    "name": "Turkmenistan",
    "emoji": "🇹🇲",
    "code": "TM",
    "dialCode": "+993"
  },
  {
    "name": "Tuvalu",
    "emoji": "🇹🇻",
    "code": "TV",
    "dialCode": "+688"
  },
  {
    "name": "Uganda",
    "emoji": "🇺🇬",
    "code": "UG",
    "dialCode": "+256"
  },
  {
    "name": "Ukraine",
    "emoji": "🇺🇦",
    "code": "UA",
    "dialCode": "+380"
  },
  {
    "name": "United Arab Emirates",
    "emoji": "🇦🇪",
    "code": "AE",
    "dialCode": "+971"
  },
  {
    "name": "Uruguay",
    "emoji": "🇺🇾",
    "code": "UY",
    "dialCode": "+598"
  },
  {
    "name": "Uzbekistan",
    "emoji": "🇺🇿",
    "code": "UZ",
    "dialCode": "+998"
  },
  {
    "name": "Vanuatu",
    "emoji": "🇻🇺",
    "code": "VU",
    "dialCode": "+678"
  },
  {
    "name": "Vatican City",
    "emoji": "🇻🇦",
    "code": "VA",
    "dialCode": "+379"
  },
  {
    "name": "Venezuela",
    "emoji": "🇻🇪",
    "code": "VE",
    "dialCode": "+58"
  },
  {
    "name": "Vietnam",
    "emoji": "🇻🇳",
    "code": "VN",
    "dialCode": "+84"
  },
  {
    "name": "Yemen",
    "emoji": "🇾🇪",
    "code": "YE",
    "dialCode": "+967"
  },
  {
    "name": "Zambia",
    "emoji": "🇿🇲",
    "code": "ZM",
    "dialCode": "+260"
  },
  {
    "name": "Zimbabwe",
    "emoji": "🇿🇼",
    "code": "ZW",
    "dialCode": "+263"
  }
];

// Helper to convert file to Base64
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve({
      name: file.name,
      type: file.type,
      lastModified: file.lastModified,
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
              emoji: item.emoji,
              code: item.code,
              dialCode: item.dialCode
          });
      }
  }
  
  uniqueCountries.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.name;
    if (c.code) opt.dataset.code = c.code;
    if (c.dialCode) opt.dataset.dialCode = c.dialCode;
    opt.textContent = `${c.emoji} ${c.name}`;
    countrySelect.appendChild(opt);
  });

  chrome.storage.local.get(['profileData'], (result) => {
    if (result.profileData) {
      const data = result.profileData;
      
      const textFields = [
        'firstName', 'lastName', 'email', 'phone', 'country', 'timeZone', 'startDate',
        'linkedin', 'github', 'portfolio',
        'gender', 'hispanic', 'race', 'veteran', 'disability',
        'school', 'degree', 'discipline',
        'authorized', 'sponsorship',
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
  
  const countrySelectEl = document.getElementById('country');
  const selectedCountryOption = countrySelectEl.options[countrySelectEl.selectedIndex];
  
  const profileData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    country: countrySelectEl.value,
    countryCode: selectedCountryOption ? selectedCountryOption.dataset.code : '',
    countryDialCode: selectedCountryOption ? selectedCountryOption.dataset.dialCode : '',
    timeZone: document.getElementById('timeZone').value,
    startDate: document.getElementById('startDate').value,
    linkedin: document.getElementById('linkedin').value,
    github: document.getElementById('github').value,
    portfolio: document.getElementById('portfolio').value,
    gender: document.getElementById('gender').value,
    hispanic: document.getElementById('hispanic').value,
    race: document.getElementById('race').value,
    veteran: document.getElementById('veteran').value,
    disability: document.getElementById('disability').value,
    school: document.getElementById('school').value,
    degree: document.getElementById('degree').value,
    discipline: document.getElementById('discipline').value,
    authorized: document.getElementById('authorized').value,
    sponsorship: document.getElementById('sponsorship').value,
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