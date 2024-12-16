// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Habilita el modo oscuro basado en clases
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",       // Escanea todos los archivos en 'app'
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Escanea todos los archivos en 'components'
    "./context/**/*.{js,ts,jsx,tsx,mdx}",    // Escanea todos los archivos en 'context'
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",       // Fondo claro
        darkBg: "#0d0d0d",          // Fondo oscuro
        foreground: "#0d0d0d",      // Texto claro
        darkForeground: "#e0e0e0",  // Texto oscuro
        accent: "#a78bfa",           // Morado más claro para mejor visibilidad
      },
      fontFamily: {
        cinzel: ["'Cinzel', serif"],
        cairo: ["'Cairo', sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        moveParticle: {
          "0%": { transform: "translate(0, 0)", opacity: "0.3" },
          "100%": { transform: "translate(200px, 200px)", opacity: "0" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        moveParticle: "moveParticle 10s linear infinite",
        gradient: "gradient 15s ease infinite",
      },
      backgroundImage: {
        'gradient-dark': "linear-gradient(270deg, #0d0d0d, #1a1a1a, #0d0d0d)",
      },
      boxShadow: {
        esoteric: "0 4px 30px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
