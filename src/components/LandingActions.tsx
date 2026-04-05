"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useGame } from "@/context/GameContext";

export function LandingActions() {
  const { state, hydrated, touchStreak } = useGame();
  const hasProgress =
    state.completedChapters.length > 0 ||
    Object.keys(state.choices).length > 0;

  return (
    <div className="flex flex-col gap-3 max-w-sm mx-auto">
      <motion.div whileTap={{ scale: 0.99 }}>
        <Link
          href="/start"
          onClick={() => touchStreak()}
          className="flex min-h-[52px] items-center justify-center rounded-xl bg-sage text-white dark:text-paper font-medium text-[15px] shadow-soft w-full"
        >
          Start Journey
        </Link>
      </motion.div>
      {hydrated && hasProgress ? (
        <motion.div whileTap={{ scale: 0.99 }}>
          <Link
            href="/game"
            className="flex min-h-[52px] items-center justify-center rounded-xl border border-ink/15 dark:border-white/15 bg-card dark:bg-cardDark font-medium text-[15px] w-full"
          >
            Continue
          </Link>
        </motion.div>
      ) : null}
    </div>
  );
}
