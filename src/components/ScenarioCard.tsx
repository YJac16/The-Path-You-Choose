"use client";

import { motion } from "framer-motion";
import { ListenButton } from "@/components/ListenButton";
import type { Chapter } from "@/types/game";

export function ScenarioCard({ chapter }: { chapter: Chapter }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-ds-line bg-ds-card p-5 shadow-sm"
    >
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.06, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--primary)]"
      >
        Scenario
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="text-base leading-spacious text-ds-text"
      >
        {chapter.scenario}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.35 }}
        className="mt-2"
      >
        <ListenButton text={chapter.scenario} className="w-full justify-center" />
      </motion.div>
    </motion.div>
  );
}
