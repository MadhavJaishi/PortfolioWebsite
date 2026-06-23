/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
    },
  },

  plugins: [],
};