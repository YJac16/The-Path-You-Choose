import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
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
          accent: "var(--accent)",
          text: "var(--text)",
          muted: "var(--muted)",
          line: "var(--border)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
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
