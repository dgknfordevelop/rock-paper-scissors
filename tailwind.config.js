/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "scissors-gradient": "var(--scissors-gradient)",
        "paper-gradient": "var(--paper-gradient)",
        "rock-gradient": "var(--rock-gradient)",
        "cyan": "var(--cyan)",
        "dark-text": "var(--dark-text)",
        "score-text": "var(--score-text)",
        "header-outline": "var(--header-outline)",
        "background": "var(--background)",
      },
      boxShadow: {
        "inner": "inset 1px 13px 0px -8px rgba(179,179,179,0.79)"
      }
    },
  },
  plugins: [],
}
