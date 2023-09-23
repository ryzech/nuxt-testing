/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.js",
    "./pages/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      'text-dark': '#f5fafe',
      'background-dark': '#01070e',
      'primary-dark': '#ba660d',
      'secondary-dark': '#062547',
      'accent-dark': '#f18f27',
    },
  },
  plugins: [],
}

module.exports = {
  darkMode: 'class'
}

