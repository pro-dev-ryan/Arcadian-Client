/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#42c2ff",

          secondary: "#ccbbff",

          accent: "#36b1aa",

          neutral: "#555",

          "base-100": "#eee",
          "dark-base": "#123",
          error: "#ff5272",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        heading: ["Rajdhani"],
        link: ["Tajawal"],
        text: ['"PT Sans Narrow"'],
      },
    },
  },
  plugins: [require("daisyui")],
};
