module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        gosha: "Gosha Sans, sans-serif",
        nunito: "Nunito, sans-serif",
      },
      colors: {
        blue: "#A8DEFF",
        lightPink: "#FFEEEE",
        brightPink: "#FF6F95",
        black: "#272727",
        white: "#ffffff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
