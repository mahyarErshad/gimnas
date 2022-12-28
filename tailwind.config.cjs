/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EA4C22",
        white: "#FFFEFA",
        black: "#101010",
      },
    },
  },
  plugins: [],
};
