/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themeColorBackground: "#202125",
        themeColor: "#cae962",
      },
      duration:{
        '2000': '2000ms'
      }
    },
  },
  plugins: [],
};
