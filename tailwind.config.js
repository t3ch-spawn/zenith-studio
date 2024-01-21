/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayBg: "#353434",
        grayText: "#f3eeee66",
        folioGray: "#ffffff99",
        servicesGray: "rgba(163, 158, 159, 0.45)",
      },

      screens: {
        "-950": { max: "950px" },
        "-850": { max: "850px" },
        "-750": { max: "750px" },
        "-650": { max: "650px" },
        "-550": { max: "550px" },
        "-500": { max: "500px" },
        "-400": { max: "400px" },
        "-350": { max: "350px" },
      },
      fontFamily: {
        moderat: "Moderat-Condensed",
      },
    },
  },
  plugins: [],
};
