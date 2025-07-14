/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0077B6',    // Deep Blue
        'secondary': '#00B4D8',  // Bright Turquoise
        'background': '#90E0EF', // Light Blue
        'text': '#333333',      // Dark text for contrast
        'accent': '#ADE8F4',    // Very Light Blue
        'highlight': '#FDFD96',  // Light Yellow
        'white': '#FFFFFF'      // Pure white
      },
      borderColor :{
        'primary' : '#0077B6',
        'secondary' : '#00B4D8',
      }
    },
    fontFamily : {
      'hero-font' : 'Sriracha'
    }
  },
  plugins: [],
}

