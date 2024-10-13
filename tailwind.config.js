/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#cc6635",
        secondary: "#f2e6d8",
        tertiary: "#1f1f1f",
        // primary: "#1b1f3b",
        // secondary: "#4e5d94",
        // tertiary: "#ff6f61",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #cc6635",
      },
      boxShadow: {
        'text': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/hero1-removebg.png')",
      // },
    },
  },
  plugins: [],
};

