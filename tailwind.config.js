const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors:{
        'background': '#7C3AED',
        'secondary-menu': '#CAB3FF',
        'title':'#403937',
        
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      dropShadow: {
        '3xl': '0px 15px 35px rgba(234,226,253,0.90)',
        
      },
    },
  },
  plugins: [],
}
