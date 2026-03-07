/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        "matte-black": "#0a0a0a",
        "matte-card": "#121212",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        "neon-red": "0 0 10px rgba(239, 68, 68, 0.5)",
        "neon-green": "0 0 10px rgba(16, 185, 129, 0.5)",
        "neon-blue": "0 0 10px rgba(59, 130, 246, 0.5)",
        "neon-purple": "0 0 10px rgba(168, 85, 247, 0.5)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}