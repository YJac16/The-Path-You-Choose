"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { chapters, getChapter } from "@/data/chapters";
import { ChoiceButton } from "@/components/ChoiceButton";
import { ExplanationCard } from "@/components/ExplanationCard";
import { FadeSlide } from "@/components/motion/FadeSlide";
import { OutcomeCard } from "@/components/OutcomeCard";
import { ScenarioCard } from "@/components/ScenarioCard";
import { useGame } from "@/context/GameContext";
import type { GamePhase } from "@/types/game";

export function GameClient() {
  const router = useRouter();
  const { state, hydrated, selectChoice, setPhase, touchStreak } = useGame();

  const cid = state.currentChapter;
  const chapter = getChapter(cid);
  const choiceId = state.choices[cid];
  const phase: GamePhase =
    state.phases[cid] ?? (choiceId ? "outcome" : "scenario");

  useEffect(() => {
    if (hydrated) touchStreak();
  }, [hydrated, touchStreak]);

  useEffect(() => {
    if (!hydrated) return;
    if (!state.userType) {
      router.replace("/start");
      return;
    }
    if (!chapter) {
      router.replace("/progress");
    }
  }, [hydrated, state.userType, chapter, router]);

  if (!hydrated || !chapter || !state.userType) {
    return (
      <div className="py-20 text-center text-inkMuted dark:text-paper/60 text-sm">
        Preparing your path…
      </div>
    );
  }

  const allComplete =
    chapters.length > 0 &&
    chapters.every((c) => state.completedChapters.includes(c.id));

  if (allComplete) {
    return (
      <div className="pt-6 pb-8 space-y-6 text-center">
        <div className="rounded-2xl bg-card dark:bg-cardDark p-6 shadow-soft border border-ink/5 dark:border-white/5">
          <p className="text-xs uppercase tracking-wider text-sage-dark dark:text-sage-light mb-2">
            Journey milestone
          </p>
          <h2 className="text-xl font-semibold text-ink dark:text-paper mb-2">
            You have completed every chapter
          </h2>
          <p className="text-inkMuted dark:text-paper/70 text-[15px] leading-relaxed">
            Revisit any chapter from Progress whenever you would like a quiet
            refresher.
          </p>
        </div>
        <Link
          replace
          href="/progress"
          className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-sage text-white dark:text-paper font-medium shadow-soft px-8"
        >
          Open progress
        </Link>
      </div>
    );
  }

  const selected = chapter.choices.find((c) => c.id === choiceId);

  return (
    <div className="pt-2 pb-6 space-y-5">
      <AnimatePresence mode="wait">
        {phase === "scenario" ? (
          <FadeSlide key="scenario">
            <div className="space-y-5">
              <ScenarioCard chapter={chapter} />
              <div className="space-y-3">
                {chapter.choices.map((ch) => (
                  <ChoiceButton
                    key={ch.id}
                    label={ch.text}
                    onClick={() => selectChoice(cid, ch.id)}
                  />
                ))}
              </div>
            </div>
          </FadeSlide>
        ) : null}

        {phase === "outcome" && selected ? (
          <FadeSlide key="outcome">
            <div className="space-y-5">
              <OutcomeCard title={selected.text} text={selected.outcome} />
              <button
                type="button"
                className="w-full min-h-[52px] rounded-xl bg-sage text-white dark:text-paper font-medium shadow-soft"
                onClick={() => setPhase(cid, "explanation")}
              >
                Continue to reflection
              </button>
            </div>
          </FadeSlide>
        ) : null}

        {phase === "explanation" ? (
          <FadeSlide key="explanation">
            <div className="space-y-5">
              <ExplanationCard
                text={chapter.explanation.text}
                reference={chapter.explanation.reference}
              />
              <Link
                href="/quiz"
                className="flex min-h-[52px] items-center justify-center rounded-xl bg-sage text-white dark:text-paper font-medium shadow-soft w-full"
              >
                Continue to quiz
              </Link>
            </div>
          </FadeSlide>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
