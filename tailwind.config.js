const defaultTheme = require("tailwindcss");
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {

    extend: {
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
      colors:{
        primary: "#0E8FC8",
        secondary: "#DCF6FF",
        typo:{
          dark:{
            100: "#ABA7A7",
            200: "#DBDADA",
            300: "#E5E2E2",
            400: "#F7F7F7"
          },
          light:{
            100: "#8B8989",
            200: "#555252",
            300: "#413F3F",
            400: "#0A0A0A"
          }
        },
        theme:{
          light:{
            100: "#F9F6F6",
            200: "#FBFBFB",
          },
          dark:{
            100: "#121317",
            200: "#18191E",
          }
        }

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
