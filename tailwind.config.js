/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#192a33",
        'bg-light': '#1f3640',
        'gray-dark': '#a8bec9',
        'yellow':'#f2b238',
        'yellow-dark': '#cd8d16',
        'blue': '#30c4be',
        'blue-dark': '#128c89'
      }
    },
  },
  plugins: [],
}
