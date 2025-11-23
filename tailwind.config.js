const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: { center: true },
    extend: {
      colors: {
        slate: {
          ...colors.blueGray,
          950: '#020617',
        },
        emerald: colors.emerald,
        cyan: colors.cyan,
        teal: colors.teal,
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe']
    },
  },
  plugins: [],
}
