"use client";

import { motion } from "framer-motion";
import type { Chapter } from "@/types/game";

export function ScenarioCard({ chapter }: { chapter: Chapter }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-ds-line bg-ds-card p-5 shadow-sm"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--primary)]">
        Scenario
      </p>
      <p className="text-base leading-spacious text-ds-text">{chapter.scenario}</p>
    </motion.div>
  );
}
