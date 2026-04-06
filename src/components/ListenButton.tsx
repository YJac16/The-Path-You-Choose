"use client";

import { motion } from "framer-motion";
import { speak } from "@/lib/speech";

export function ListenButton({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      className={`mt-3 inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-ds-line bg-ds-card px-3 py-2 text-sm font-medium text-ds-text transition-colors hover:border-[var(--primary)]/40 ${className}`}
      onClick={() => speak(text)}
    >
      🔊 Listen
    </motion.button>
  );
}
