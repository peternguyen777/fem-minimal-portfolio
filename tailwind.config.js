module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibarrareal: ["Ibarra Real Nova", "serif"],
        publicsans: ["Public Sans", "sans-serif"],
      },
      colors: {
        primary_cyan: "#5FB4A2",
        primary_blue: "#203A4C",
        primary_darkblue: "#33323D",
        secondary_grey_bg: "#FAFAFA",
        secondary_grey_text: "#EAEAEB",
        secondary_red: "#F43030",
      },
    },
  },
  plugins: [],
};
