/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#ECDE7C',
        'green': '#7AC14D',
        'red': '#FE4C4A'
      },
    },
  },
  plugins: [],
}

