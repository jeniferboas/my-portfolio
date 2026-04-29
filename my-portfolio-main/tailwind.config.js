export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
      },
      animation: {
        "fall-slow": "fall 28s linear infinite",
        "fall-mid": "fall 20s linear infinite",
        "fall-fast": "fall 12s linear infinite",
      },
      colors: {
        coffee: {
          bg: "#0E0C0A",
          dark: "#3E2C23",
          mid: "#7B5E57",
          gold: "#C8A97E",
          text: "#EADCC8",
        }
      }
    },
  },
  plugins: [],
}


