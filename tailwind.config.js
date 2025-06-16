/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  darkMode: ["class", '[data-theme="light"]'],
  // theme: {
  //   extend: {},
  // },
  // daisyui: {
  //   themes: ["light", "dark"],
  // },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

}
