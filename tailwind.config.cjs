/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "2rem",
        md: "8rem",
        lg: "12rem",
        xl: "12rem",
        "2xl": "12rem",
      },
    },
    extend: {
      colors: {
        twl: {
          orange: "#fad679",
          blue: "#01AEF0",
          green: "#8BC741",
          pink: "#ED008C",
          purple: "#662F94",
          red: "#E30713",
          cyan: "#6FCCD3",
        },
      },
    },
  },
  plugins: [],
};
