/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        title: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      colors: {
        fluent: {
          night: "#070815",
          deep: "#0a0a1a",
          indigo: "#6366f1",
          violet: "#a855f7",
          cyan: "#22d3ee",
          mint: "#34d399",
        },
      },
      backgroundImage: {
        "aurora-text":
          "linear-gradient(90deg, #6366f1, #a855f7, #22d3ee, #a855f7, #6366f1)",
        "aurora-btn": "linear-gradient(90deg, #6366f1, #a855f7, #22d3ee)",
        "mint-btn": "linear-gradient(90deg, #22d3ee, #34d399, #22d3ee)",
      },
      boxShadow: {
        glow: "0 20px 60px -15px rgba(99, 102, 241, 0.45)",
        "glow-cyan": "0 20px 60px -15px rgba(34, 211, 238, 0.35)",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-25px, 25px) scale(0.95)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        gradient: "gradient 6s ease infinite",
        "gradient-fast": "gradient 4s ease infinite",
        float: "float 18s ease-in-out infinite",
        "float-slow": "float 26s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
