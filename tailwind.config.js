/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
  ],
  // darkMode: false,
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260"
        }
      }
    },
  },
  variants: {
    extends: {}
  },
  plugins: [],
}
