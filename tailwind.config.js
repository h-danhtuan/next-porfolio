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
        mondium: [" 'Montserrat Medium', sans-serif "],
        moric: [" 'Moric', sans-serif "],
        musky: [" 'Musky', sans-serif "],
        fugi: [" 'Fugi', sans-serif "],
      },
      screens: {
        desk: "1736px",
      },
      keyframes: {
        wiggle: {
          "0% ": {
            transform: "translate3d(0, 0, 0)",
            "text-shadow": "0em 0em 0 lightblue",
            color: "#1a1919",
          },
          "30%": {
            transform: "translate3d(0, 0, 0)",
            "text-shadow": "0em 0em 0 lightblue",
            color: "#1a1919",
          },
          "70%": {
            transform: "translate3d(0.08em, -0.08em, 0)",
            "text-shadow": "-0.08em 0.08em lightblue",
            color: "#1a1919",
          },
          "100%": {
            transform: "translate3d(0.08em, -0.08em, 0)",
            "text-shadow": "-0.08em 0.08em lightblue",
            color: "#1a1919",
          },
        },
        waggle: {
          "0% ": {
            transform: "translate3d(0, 0, 0)",
            "text-shadow": "0em 0em 0 #ffa534",
            color: "#EEE7E1",
          },
          "30%": {
            transform: "translate3d(0, 0, 0)",
            "text-shadow": "0em 0em 0 #ffa534",
            color: "#EEE7E1",
          },
          "70%": {
            transform: "translate3d(0.08em, -0.08em, 0)",
            "text-shadow": "-0.08em 0.08em #ffa534",
            color: "#EEE7E1",
          },
          "100%": {
            transform: "translate3d(0.08em, -0.08em, 0)",
            "text-shadow": "-0.08em 0.08em #ffa534",
            color: "#EEE7E1",
          },
        },
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.86, 0, 0.07, 1)",
      },
    },
  },
  plugins: [],
};
