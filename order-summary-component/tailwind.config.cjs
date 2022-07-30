/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        scoreColor: "#6061A1",
        qrBlue: "hsl(218, 44%, 22%)",
        grayishBlue: "hsl(220, 15%, 55%)",
        liteGray: "hsl(212, 45%, 89%)",
      },
      animation: {
        // Bounces for a total of 5 seconds
        "bounce-short": "bounce 1s ease-in-out 5",
        "lift-off":
          "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
        wiggle: "wiggle 3s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-1deg)",
            // "-webkit-backface-visibility": "hidden",
            "-webkit-background-clip": " content-box",
            padding: "1px",
          },
          "50%": {
            transform: "rotate(1deg)",
            // "-webkit-backface-visibility": "hidden",
            "-webkit-background-clip": "content-box",
          },
        },
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
