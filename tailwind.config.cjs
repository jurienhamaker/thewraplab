/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
