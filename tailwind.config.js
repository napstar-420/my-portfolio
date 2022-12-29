/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors: {
        'mainGreen': '#56FFC2',
        'mainBlack': '#303030',
      },
      fontFamily: {
        openSans: 'Open Sans, sans-serif',
        poppins: 'Poppins, sans-serif',
        quicksand: 'Quicksand, sans-serif',
      },
      screens: {
        xs: '420px'
      }
    },
  },
  plugins: [],
}
