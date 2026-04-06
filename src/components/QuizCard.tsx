"use client";

import { motion } from "framer-motion";
import { useAudio } from "@/context/AudioContext";
import { playClickSound } from "@/lib/audioFx";
import { lightHaptic } from "@/lib/haptics";
import type { QuizItem } from "@/types/game";

export function QuizCard({
  item,
  index,
  total,
  selectedIndex,
  revealed,
  onSelect,
}: {
  item: QuizItem;
  index: number;
  total: number;
  selectedIndex: number | null;
  revealed: boolean;
  onSelect: (i: number) => void;
}) {
  const { enabled: audioOn } = useAudio();

  function pick(i: number) {
    if (revealed) return;
    lightHaptic();
    if (audioOn) playClickSound();
    onSelect(i);
  }

  return (
    <div className="space-y-4 rounded-2xl border border-ds-line bg-ds-card p-5 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wider text-[var(--primary)]">
        Question {index + 1} of {total}
      </p>
      <h3 className="font-display text-lg font-medium leading-snug text-ds-text">
        {item.question}
      </h3>
      <ul className="flex flex-col gap-3">
        {item.options.map((opt, i) => {
          const isCorrect = i === item.answer;
          const isSel = selectedIndex === i;
          let cls =
            "border-ds-line bg-ds-card text-ds-text hover:border-[var(--primary)]/50";
          if (revealed) {
            if (isCorrect) {
              cls =
                "border-[var(--primary)] bg-[var(--primary-soft)] text-ds-text";
            } else if (isSel && !isCorrect) {
              cls =
                "border-red-300 bg-red-50 text-ds-text dark:border-red-500/50 dark:bg-red-950/35";
            } else {
              cls = "border-ds-line/60 bg-ds-bg/50 text-ds-muted opacity-70";
            }
          }
          return (
            <li key={i}>
              <motion.button
                type="button"
                whileTap={{ scale: revealed ? 1 : 0.985 }}
                disabled={revealed}
                onClick={() => pick(i)}
                className={`w-full min-h-[52px] rounded-xl border px-4 py-3 text-left text-[15px] transition-all duration-200 disabled:cursor-default ${cls}`}
              >
                {opt}
              </motion.button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
