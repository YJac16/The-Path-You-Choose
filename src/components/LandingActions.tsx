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
    <div className="mx-auto flex max-w-sm flex-col gap-4">
      <motion.div whileTap={{ scale: 0.985 }}>
        <Link
          href="/start"
          onClick={() => touchStreak()}
          className="btn-primary mt-0 flex min-h-[52px] items-center justify-center text-[15px] no-underline"
        >
          Start Journey
        </Link>
      </motion.div>
      {hydrated && hasProgress ? (
        <motion.div whileTap={{ scale: 0.985 }}>
          <Link
            href="/game"
            className="btn-secondary mt-0 flex min-h-[52px] items-center justify-center text-[15px] no-underline"
          >
            Continue
          </Link>
        </motion.div>
      ) : null}
    </div>
  );
}
