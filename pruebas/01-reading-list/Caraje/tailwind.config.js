/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat']
      }
    },
    colors: {
      'caraje-white': '#fefefe',
      'caraje-grey': '#DFE2E8',
      'caraje-darkBeige': '#46443C',
      'caraje-Beige': '#96988C',
      'caraje-lightBeige': '#D2C9A1',
      'caraje-salmon': ' #DF8767'

    }
  },
  plugins: []
}
