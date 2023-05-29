/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["{./index.html}","./src/**/*.{jsx,js}"],
  mode:"jit",
  theme: {
    extend: {
      colors:{
        navGray: "#7f7f7f",
        liteGray: "#e8e5e480",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      screens: {
        customLg: "808px"
      }
    },
  },
  plugins: [],
}