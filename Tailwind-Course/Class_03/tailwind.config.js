/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  screens: {
    'xs': { 'min': '200px', 'max': '580px'},

    'sm': {'min': '640px', 'max': '767px'},

    'md': {'min': '768px', 'max': '1023px'},

    'lg': {'min': '1024px', 'max': '1279px'},

    'xl': {'min': '1280px', 'max': '1535px'},

    '2xl': {'min': '1536px'},
  },
  plugins: [],
}