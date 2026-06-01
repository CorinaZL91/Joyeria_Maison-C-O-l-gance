import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";

/* 🌸 Paleta rosa principal */
const rose = {
  50: "#fff1f4",
  100: "#ffe4e9",
  200: "#fecdd6",
  300: "#fda4af",
  400: "#fb7185",
  500: "#f43f5e",
  600: "#e11d48",
  700: "#be123c",
  800: "#9f1239",
  900: "#881337",
};

/* =========================
   🌸 PINK LIGHT
========================= */
const pinkTheme = {
  background: "#f4d7db", // Fondo general como tu imagen
  foreground: "#b76e79", // Letras rosita elegante

  primary: rose[500], // Botones activos
  secondary: "#e9b8c0", // Cards rosadas
  accent: rose[400],
  muted: "#f8e4e7",

  card: "#dca4ad", // Fondo tarjetas
  border: "#e7b6bd",
};

/* =========================
   🌺 PINK DARK
========================= */
const pinkDarkTheme = {
  background: "#111111", // Negro elegante
  foreground: rose[300], // Letras ROSITAS 💖

  primary: rose[400],
  secondary: "#1f1f1f", // Tarjetas gris oscuro
  accent: rose[300],
  muted: "#2a2a2a",

  card: "#1c1c1c",
  border: "#2a2a2a",
};

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      pink: pinkTheme,
      "pink-dark": pinkDarkTheme,
    }),
  ],
};

export default config;
