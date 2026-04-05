"use client";

import Link from "next/link";
import { useGame } from "@/context/GameContext";

export function Header() {
  const { state, setTheme } = useGame();
  const isDark = state.theme === "dark";

  return (
    <header className="flex items-center justify-between gap-3 px-4 py-3 safe-top">
      <Link
        href="/"
        className="min-h-11 min-w-11 flex items-center justify-start rounded-xl text-ink dark:text-paper font-semibold tracking-tight"
      >
        The Path
      </Link>
      <div className="flex items-center gap-2">
        {state.streak > 0 && (
          <span
            className="rounded-full bg-sage/15 dark:bg-sage/25 px-3 py-1 text-sm text-sage-dark dark:text-sage-light tabular-nums"
            title="Daily reflection streak"
          >
            {state.streak} day{state.streak === 1 ? "" : "s"}
          </span>
        )}
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="min-h-11 min-w-11 rounded-xl border border-ink/10 dark:border-white/10 bg-card dark:bg-cardDark text-ink dark:text-paper shadow-soft text-sm font-medium"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? "☀" : "☾"}
        </button>
      </div>
    </header>
  );
}
