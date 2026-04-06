"use client";

import { motion } from "framer-motion";
import { useAudio } from "@/context/AudioContext";
import { playClickSound } from "@/lib/audioFx";
import { lightHaptic } from "@/lib/haptics";

export function ChoiceButton({
  label,
  onClick,
  disabled,
  selected,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  selected?: boolean;
}) {
  const { enabled: audioOn } = useAudio();

  function handle() {
    lightHaptic();
    if (audioOn) playClickSound();
    onClick();
  }

  return (
    <motion.button
      type="button"
      whileTap={{ scale: disabled ? 1 : 0.985 }}
      onClick={handle}
      disabled={disabled}
      className={`w-full min-h-[52px] rounded-xl border px-4 py-3 text-left text-[15px] leading-spacious transition-all duration-200 disabled:opacity-50 ${
        selected
          ? "border-[var(--primary)] bg-[var(--primary-soft)] text-ds-text"
          : "border-ds-line bg-ds-card text-ds-text hover:border-[var(--primary)]"
      }`}
    >
      {label}
    </motion.button>
  );
}
