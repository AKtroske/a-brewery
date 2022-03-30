// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: {
        bg: colors.gray[50],
        light: colors.gray[200],
        med: colors.gray[500],
        dark: colors.gray[700],
      },
      base: {
        blue: '#282c34',
        gray: '#3E4451',
      },
      red: {
        light: colors.red[200],
        med: colors.red[500],
        dark: colors.red[800],
      },
      violet: {
        light: colors.violet[300],
        med: colors.violet[500],
        dark: colors.violet[800],
      },
      teal: {
        light: colors.teal[300],
        med: colors.teal[500],
        dark: colors.teal[800],
      },
    },
    fontFamily: {
      sans: ['Helvetica', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        'sans-serif'],
    },
    extend: {
      height: {
        header: '55px',
        navbar: '45px',
        footer: '80px',
      },
      spacing: {
        sm: '5px',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
