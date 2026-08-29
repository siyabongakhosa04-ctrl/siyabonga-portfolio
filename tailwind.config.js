/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14181C",
        pitch: {
          DEFAULT: "#1B3B2F",
          dark: "#0F231B",
          light: "#2C5443",
        },
        paper: "#EFEDE3",
        gold: {
          DEFAULT: "#B8933A",
          light: "#D4B45F",
        },
        line: "#D8D2C2",
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        "pitch-lines": "repeating-linear-gradient(0deg, rgba(239,237,227,0.04) 0px, rgba(239,237,227,0.04) 1px, transparent 1px, transparent 64px)",
      },
    },
  },
  plugins: [],
}
