import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "var(--bg)",
          card: "var(--card)",
          primary: "var(--primary)",
          soft: "var(--primary-soft)",
          text: "var(--text)",
          muted: "var(--muted)",
          line: "var(--border)",
        },
        paper: "#f7f5f0",
        paperDark: "#141413",
        ink: "#2f2f2f",
        inkMuted: "#6b6b6b",
        sage: {
          DEFAULT: "#3a7d44",
          light: "#4d9b59",
          dark: "#2d6336",
        },
        card: "#ffffff",
        cardDark: "#1f1f1d",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      lineHeight: {
        relaxed: "1.65",
        spacious: "1.7",
      },
      boxShadow: {
        soft: "0 2px 12px -2px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
      },
      spacing: {
        section: "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
