module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        "primary-bg": "#EEE7E1",
        "text-small": "#A29E9A",
        "text-lg": "#1a1919",
      },
      fontFamily: {
        mont: [" 'Montserrat', sans-serif "],
        crazy: ["'Grandstander', cursive;"],
        grand: [" 'GrandSlang Roman', sans-serif "],
        mondium: [" 'Montserrat Medium', sans-serif "],
      },
    },
  },
  plugins: [],
};
