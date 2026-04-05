"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useGame } from "@/context/GameContext";

export function Header() {
  const { state, setTheme } = useGame();
  const isDark = state.theme === "dark";

  return (
    <header className="safe-top flex items-center justify-between gap-3 border-b border-ds-line/80 bg-ds-bg/90 px-4 py-3 backdrop-blur-sm">
      <Link
        href="/"
        className="font-display flex min-h-11 min-w-11 items-center justify-start rounded-xl text-base font-semibold tracking-tight text-ds-text"
      >
        The Path
      </Link>
      <div className="flex items-center gap-2">
        {state.streak > 0 && (
          <span
            className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-sm tabular-nums text-[var(--primary)]"
            title="Daily reflection streak"
          >
            {state.streak} day{state.streak === 1 ? "" : "s"}
          </span>
        )}
        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="min-h-11 min-w-11 rounded-xl border border-ds-line bg-ds-card text-sm font-medium text-ds-text shadow-soft transition-colors duration-200"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? "☀" : "☾"}
        </motion.button>
      </div>
    </header>
  );
}
