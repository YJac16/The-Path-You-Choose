"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { FadeSlide } from "@/components/motion/FadeSlide";
import { PageHeading } from "@/components/PageHeading";
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
        <div className="space-y-6 pb-8 pt-2">
          <PageHeading
            title="Your journey starts here"
            subtitle="Onboarding — stored only on your device"
          />
          <p className="text-[15px] leading-spacious text-ds-muted">
            This helps keep tone gentle and relevant. You can change it anytime
            from the home screen link.
          </p>
          <ul className="flex flex-col gap-4">
            {options.map((opt) => (
              <li key={opt.id}>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.985 }}
                  onClick={() => choose(opt.id)}
                  className="w-full min-h-[56px] rounded-xl border border-ds-line bg-ds-card px-4 py-4 text-left shadow-sm transition-colors duration-200 hover:border-[var(--primary)]/40"
                >
                  <span className="block font-medium text-ds-text">
                    {opt.title}
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-ds-muted">
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
