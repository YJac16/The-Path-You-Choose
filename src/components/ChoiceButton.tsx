"use client";

import { motion } from "framer-motion";

export function ChoiceButton({
  label,
  onClick,
  disabled,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className="w-full min-h-[52px] rounded-xl bg-card dark:bg-cardDark border border-ink/10 dark:border-white/10 px-4 py-3 text-left text-ink dark:text-paper shadow-soft text-[15px] leading-snug disabled:opacity-50 active:bg-sage/10 dark:active:bg-sage/20"
    >
      {label}
    </motion.button>
  );
}
