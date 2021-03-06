module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        todo: '500px'
      },
      width: {
        todo: '700px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
