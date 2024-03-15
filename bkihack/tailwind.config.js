/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  theme: {
    extend: {
        fontFamily: {
            'montserrat': ['Montserrat'],
            'lato': ['Lato'],
            'garamond': ['Garamond']
        }
    }
},
  darkMode: "class",
  content: ["./**/*.tsx"],
}