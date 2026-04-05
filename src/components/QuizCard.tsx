"use client";

import { motion } from "framer-motion";
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
  return (
    <div className="rounded-2xl bg-card dark:bg-cardDark p-5 shadow-soft border border-ink/5 dark:border-white/5">
      <p className="text-xs font-medium uppercase tracking-wider text-sage-dark dark:text-sage-light mb-3">
        Question {index + 1} of {total}
      </p>
      <p className="text-lg font-medium text-ink dark:text-paper leading-snug mb-5">
        {item.question}
      </p>
      <ul className="flex flex-col gap-3">
        {item.options.map((opt, i) => {
          const isCorrect = i === item.answer;
          const isSel = selectedIndex === i;
          let ring =
            "border-ink/10 dark:border-white/10 hover:border-sage/40 dark:hover:border-sage/50";
          if (revealed) {
            if (isCorrect) ring = "border-sage dark:border-sage-light bg-sage/15";
            else if (isSel && !isCorrect)
              ring = "border-red-300 dark:border-red-400/60 bg-red-50 dark:bg-red-950/30";
            else ring = "border-ink/5 dark:border-white/5 opacity-60";
          }
          return (
            <li key={i}>
              <motion.button
                type="button"
                whileTap={{ scale: revealed ? 1 : 0.99 }}
                disabled={revealed}
                onClick={() => onSelect(i)}
                className={`w-full min-h-[52px] rounded-xl px-4 py-3 text-left text-[15px] text-ink dark:text-paper border ${ring} transition-colors disabled:cursor-default`}
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
