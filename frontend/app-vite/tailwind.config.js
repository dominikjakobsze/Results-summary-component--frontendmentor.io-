/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '550px',
      'md': '768px',
      'lg': '900px',
      'xl': '1140px',
      '2xl': '1450px',
      '3xl': '1660px',
    },
    extend: {},
  },
  plugins: [],
}