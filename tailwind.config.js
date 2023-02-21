/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#34CB65',
        'secondary': '#17a946'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Shantell': ['Shantell Sans', 'cursive']
      }
    },
  },
  plugins: [],
}