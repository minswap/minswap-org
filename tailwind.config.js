const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primaryMain: '#2F45C5',
        coolGray: colors.coolGray,
        trueGray: colors.trueGray,
      },
      height: {
        50: '50rem',
      },
      zIndex: {
        '-1': '-1',
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
