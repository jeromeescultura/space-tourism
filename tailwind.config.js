module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      "home-bg": "url('../public/images/bg/home-bg.png')",
      "destinations-bg": "url('../public/images/bg/destinations-bg.png')",
      "crew-bg": "url('../public/images/bg/crew-bg.png')",
      "tech-bg": "url('../public/images/bg/tech-bg.png')",
      "lg-home-bg": "url('../public/images/bg/lg-home-bg.png')",
      "lg-destinations-bg": "url('../public/images/bg/lg-destinations-bg.png')",
      "lg-crew-bg": "url('../public/images/bg/lg-crew-bg.png')",
      "lg-tech-bg": "url('../public/images/bg/lg-tech-bg.png')",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primaryText: "#D0D6F9",
      white: "#ffffff",
      black: "#000000",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    extend: {
      fontFamily: {
        Bellefair: ["Bellefair", "serif"],
        Barlow: ["Barlow", "serif"],
        "Barlow-Condensed": ["Barlow Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
