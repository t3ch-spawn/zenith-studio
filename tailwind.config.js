/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayBg: "#353434",
        grayText: "#f3eeee66",
      },
    },
  },
  plugins: [],
};
