const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primaryMain: '#2F45C5',
        blueBerry: '#5865f2',
        greyser: '#d3dae2',
        solitude: '#eaedf1',
        coolGray: colors.coolGray,
        trueGray: colors.trueGray,
        dark: '#0f1743',
      },
      height: {
        50: '50rem',
      },
      zIndex: {
        '-1': '-1',
      },
      fill: {
        none: 'none',
      },
      backgroundImage: {
        mainLayout: 'linear-gradient(220deg, rgba(124, 128, 220, 0.2) 45%, rgba(124, 198, 220, 0.3))',
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui'],
      dmMono: ['DM Mono', 'monospace'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
