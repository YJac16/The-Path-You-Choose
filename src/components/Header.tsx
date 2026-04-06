"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useAudio } from "@/context/AudioContext";
import { useGame } from "@/context/GameContext";

export function Header() {
  const { state, setTheme } = useGame();
  const { enabled: soundOn, setEnabled: setSoundOn } = useAudio();
  const isDark = state.theme === "dark";

  return (
    <header className="safe-top flex items-center justify-between gap-2 border-b border-ds-line/80 bg-ds-bg/90 px-3 py-3 backdrop-blur-sm sm:gap-3 sm:px-4">
      <Link
        href="/"
        className="flex min-h-11 min-w-0 shrink items-center justify-start rounded-xl text-base font-semibold tracking-tight text-ds-text"
      >
        The Path
      </Link>
      <div className="flex items-center gap-1.5 sm:gap-2">
        {state.streak > 0 ? (
          <span
            className="max-w-[7rem] truncate rounded-full bg-[var(--primary-soft)] px-2.5 py-1 text-xs tabular-nums text-[var(--primary)] sm:max-w-none sm:px-3 sm:text-sm"
            title="Daily reflection streak"
          >
            🔥 {state.streak} day{state.streak === 1 ? "" : "s"}
          </span>
        ) : null}
        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={() => setSoundOn((v) => !v)}
          className="min-h-11 shrink-0 rounded-xl border border-ds-line bg-ds-card px-2.5 text-xs font-medium text-ds-text shadow-soft sm:px-3 sm:text-sm"
          aria-label={soundOn ? "Sound on" : "Sound off"}
          title={soundOn ? "Mute ambient & effects" : "Enable sound"}
        >
          {soundOn ? "🔊 On" : "🔇 Off"}
        </motion.button>
        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="min-h-11 shrink-0 rounded-lg border border-ds-line bg-ds-card px-3 py-2 text-sm font-medium text-ds-text shadow-soft"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className="hidden sm:inline">🌙 Toggle Theme</span>
          <span className="sm:hidden">🌙</span>
        </motion.button>
      </div>
    </header>
  );
}
