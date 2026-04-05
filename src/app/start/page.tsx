"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { FadeSlide } from "@/components/motion/FadeSlide";
import { useGame } from "@/context/GameContext";
import type { UserType } from "@/types/game";

const options: { id: UserType; title: string; blurb: string }[] = [
  {
    id: "new-muslim",
    title: "New Muslim",
    blurb: "I recently embraced Islam or am seriously considering it.",
  },
  {
    id: "practicing",
    title: "Practicing Muslim",
    blurb: "I observe Islam and want thoughtful scenarios to reflect on.",
  },
  {
    id: "curious",
    title: "Curious Explorer",
    blurb: "I am learning respectfully from the outside.",
  },
];

export default function StartPage() {
  const router = useRouter();
  const { setUserType, touchStreak } = useGame();

  function choose(id: UserType) {
    setUserType(id);
    touchStreak();
    router.push("/game");
  }

  return (
    <AppShell>
      <FadeSlide>
        <div className="pt-4 pb-8">
          <p className="text-xs font-medium uppercase tracking-wider text-sage-dark dark:text-sage-light mb-2">
            Onboarding
          </p>
          <h1 className="text-2xl font-semibold text-ink dark:text-paper mb-2">
            How do you describe yourself?
          </h1>
          <p className="text-inkMuted dark:text-paper/70 text-[15px] leading-relaxed mb-8">
            This only saves on your device. It helps us keep tone gentle and
            relevant. You can change it anytime from the home screen link.
          </p>
          <ul className="flex flex-col gap-3">
            {options.map((opt) => (
              <li key={opt.id}>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.99 }}
                  onClick={() => choose(opt.id)}
                  className="w-full min-h-[56px] rounded-xl border border-ink/10 dark:border-white/10 bg-card dark:bg-cardDark px-4 py-4 text-left shadow-soft"
                >
                  <span className="block font-medium text-ink dark:text-paper">
                    {opt.title}
                  </span>
                  <span className="block text-sm text-inkMuted dark:text-paper/65 mt-1 leading-snug">
                    {opt.blurb}
                  </span>
                </motion.button>
              </li>
            ))}
          </ul>
        </div>
      </FadeSlide>
    </AppShell>
  );
}
