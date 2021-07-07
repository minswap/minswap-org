const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: [
        'DM Sans',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      colors: {
        primary: '#2f45c5',
        secondary: '#0f1743',
        textPrimary: '#0f1743',
        dark: '#0f1743',
        sliderLeft: '#7c80dc',
        sliderRight: '#7cc6dc',
        ...colors,
      },
      boxShadow: {
        menu: '0 0 14px 0 rgba(15, 23, 67, 0.2)',
      },
      zIndex: {
        '-1': -1,
      },
      backgroundImage: {
        mainLayout: 'linear-gradient(249deg, rgba(124, 128, 220, 0.2) 95%, rgba(124, 198, 220, 0.3) 5%)',
      },
      width: {
        22: '5.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
