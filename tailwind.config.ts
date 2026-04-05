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
        paper: "#f7f5f0",
        paperDark: "#1c1b18",
        ink: "#333333",
        inkMuted: "#5c5c5c",
        sage: {
          DEFAULT: "#7d9a7e",
          light: "#a8c4a9",
          dark: "#5a755b",
        },
        card: "#ffffff",
        cardDark: "#2a2926",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(0,0,0,0.08), 0 2px 8px -2px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
