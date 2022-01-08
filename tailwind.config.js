module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        "gray-bg": "#EEE7E1",
        "text-small": "#A29E9A",
        "text-lg": "#1a1919",
        "black-bg": "#1a1919",
      },
      fontFamily: {
        grand: [" 'GrandSlang Roman', sans-serif "],
        mondium: [" 'Montserrat Medium', sans-serif "],
        moric: [" 'Moric', sans-serif "],
        musky: [" 'Musky', sans-serif "],
        fugi: [" 'Fugi', sans-serif "],
      },
      screens: {
        desk: "1736px",
      },
    },
  },
  plugins: [],
};
