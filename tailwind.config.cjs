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
        "dark-gray": "#171717",
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
      fontSize: {
        "vw-xs": ["1vw", "1.4vw"],
        "vw-sm": ["1.05vw", "1.05vw"],
        "vw-base": ["1.18vw", "1.19vw"],
        "vw-lg": ["1.32vw", "1.45vw"],
        "vw-xl": ["1.45vw", "1.5vw"],
        "vw-2xl": ["1.75vw", "1.8vw"],
        "vw-3xl": ["2.2vw", "2.25vw"],
        "vw-4xl": ["2.6vw", "2.6vw"],
        "vw-5xl": ["3.4vw", "3.4vw"],
        "vw-6xl": ["4.3vw", "4.3vw"],
        "vw-7xl": ["5.2vw", "5.2vw"],
        "vw-8xl": ["6.9vw", "6.9vw"],
        "vw-9xl": ["9.2vw", "9.15vw"],
      },
    },
  },
  plugins: [],
};
