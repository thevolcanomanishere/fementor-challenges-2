/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        scoreColor: "#6061A1",
      },
      animation: {
        // Bounces for a total of 5 seconds
        "bounce-short": "bounce 1s ease-in-out 5",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
