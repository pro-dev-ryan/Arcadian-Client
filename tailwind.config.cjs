/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#412234",

          secondary: "#ffc857",

          accent: "#bdd9bf",

          neutral: "#555",

          "base-100": "#f1f1f1",

          success: "#16A249",

          warning: "#DB7706",

          error: "#DC2828",
          // error: "#ff5272",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat"],
        link: ["'Source Sans 3'"],
        text: ["Kanit"],
      },
    },
  },
  plugins: [require("daisyui")],
};
