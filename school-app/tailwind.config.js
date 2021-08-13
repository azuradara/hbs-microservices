module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        christalle: {
          50: '#f6f3f8',
          100: '#ece7f1',
          200: '#d0c3db',
          300: '#b39fc5',
          400: '#7a589a',
          500: '#41106e',
          600: '#3b0e63',
          700: '#310c53',
          800: '#270a42',
          900: '#200836',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
