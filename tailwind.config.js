/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themeColorBackground: "#202125",
        themeColor: "#cae962",
        themeSecondaryColor : "#4a4b51",
        themeSecondarybright: "#6c757d",
        navBakground: "#2a2c31",
        navBodyBackground: "rgba(32, 33, 37, 0.8)",
        customWhite05: "rgba(255, 255, 255, 0.05)",
      },
      duration:{
        '2000': '2000ms'
      },
    },
  },
  plugins: [],
};
