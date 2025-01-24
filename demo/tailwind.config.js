/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"], // Add Roboto as the default sans-serif font
        roboto: ["Roboto", "sans-serif"], // Custom utility class for Roboto
        "fira-code": ["Fira Code", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        borderColorAnimation: "borderColorAnimation 3s infinite",
      },
      keyframes: {
        borderColorAnimation: {
          "0%": { borderColor: "red" },
          "33%": { borderColor: "green" },
          "66%": { borderColor: "blue" },
          "75%": { borderColor: "yellow" },
          "100%": { borderColor: "red" },
        },
      },
    },
  },
  darkMode: "class", // Enables dark mode with the 'class' strategy
  plugins: [
    require("@tailwindcss/forms"), // Enables form utilities
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-gradient-radial": {
          backgroundImage:
            "radial-gradient(rgba(56, 182, 255, 1), rgba(42, 252, 152, 0.8), transparent)",
        },
      });
    }),
  ],
};
