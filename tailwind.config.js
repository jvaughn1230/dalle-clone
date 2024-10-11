/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#7a86e2",
          DEFAULT: "#4150B5",
          dark: "#2e3a8a",
        },
        darker: "#080808",
        light: "#E9E9E9",
        grey: "#B4B4B4",
        dark: "#2F2F2F",
        lighter: "#CCCCCC",
        white: "#fff",
        bg: "#fafafc",
        other: "#777777",
        plum: "#7E57C2",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #2e3a8a, #4150b5, #7a86e2)",
      },
    },
  },
  plugins: [],
};
