module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", '"Noto Sans"', "sans-serif", '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      'serif': ['ui-serif', 'Georgia', "Cambria", '"Times New Roman"', "Times", "serif"],
      'mono': ["Josefin Sans"]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
