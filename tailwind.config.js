module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#129990",
      },
    },
  },
  plugins: [require('daisyui')],
};
