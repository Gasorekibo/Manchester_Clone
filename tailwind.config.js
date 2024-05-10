/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#6b2c91",
        secondary:"#ececed",
        yellowtext:"#ffe666"
      },
      fontFamily: {
        openSan:["Open Sans", "sans-serif"]
      },
      backgroundColor: {
        'hero':"url('/images/microsoft.jpg')"
      }
    },
  },
  plugins: [],
}

