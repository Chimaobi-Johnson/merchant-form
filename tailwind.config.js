/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#034591",
        primary_light: "#f2f4f8",
        primary_medium: "#81a2c8",
        secondary: "#b2b6ba",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
            visibility: "hidden",
          },
          "100%": {
            visibility: "visible",
            opacity: 1,
          },
        },
        fadeOut: {
          "100%": {
            opacity: 1,
            visibility: "visible",
          },
          "0%": {
            visibility: "hidden",
            opacity: 0,
          },
        },
      },
      animation: {
        "fade-in": "fadeIn .5s ease-in forwards",
        "fade-out": "fadeOut .5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
