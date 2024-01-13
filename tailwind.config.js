/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayBg: "#353434",
        grayText: "#f3eeee66",
        folioGray: "#ffffff99",
      },

      screens: {
        "-950": { max: "950px" },
        "-750": { max: "750px" },
        "-550": { max: "550px" },
        "-500": { max: "500px" },
      },
    },
  },
  plugins: [],
};
