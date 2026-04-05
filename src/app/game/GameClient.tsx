"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { chapters, getChapter } from "@/data/chapters";
import { ChoiceButton } from "@/components/ChoiceButton";
import { ExplanationCard } from "@/components/ExplanationCard";
import { GameStepIndicator } from "@/components/GameStepIndicator";
import { FadeSlide } from "@/components/motion/FadeSlide";
import { OutcomeCard } from "@/components/OutcomeCard";
import { PageHeading } from "@/components/PageHeading";
import { ScenarioCard } from "@/components/ScenarioCard";
import { useGame } from "@/context/GameContext";
import type { GamePhase } from "@/types/game";

function stepForPhase(phase: GamePhase): "Scenario" | "Outcome" | "Learn" {
  if (phase === "scenario") return "Scenario";
  if (phase === "outcome") return "Outcome";
  return "Learn";
}

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
      <div className="py-20 text-center text-sm text-ds-muted">
        Preparing your path…
      </div>
    );
  }

  const allComplete =
    chapters.length > 0 &&
    chapters.every((c) => state.completedChapters.includes(c.id));

  if (allComplete) {
    return (
      <div className="space-y-6 pt-2 text-center">
        <PageHeading title="Journey complete" />
        <div className="rounded-2xl border border-ds-line bg-ds-card p-6 shadow-sm">
          <p className="mb-2 text-xs uppercase tracking-wider text-[var(--primary)]">
            Milestone
          </p>
          <h2 className="font-display text-xl font-semibold text-ds-text">
            You have completed every chapter
          </h2>
          <p className="mt-3 text-[15px] leading-spacious text-ds-muted">
            Revisit any chapter from Progress whenever you would like a quiet
            refresher.
          </p>
        </div>
        <Link
          href="/progress"
          className="btn-primary mt-0 inline-flex min-h-[52px] items-center justify-center px-8 no-underline"
        >
          Open progress
        </Link>
      </div>
    );
  }

  const selected = chapter.choices.find((c) => c.id === choiceId);

  return (
    <div className="space-y-6">
      <PageHeading
        title={chapter.title}
        subtitle={`Chapter ${chapter.id} · Choose calmly`}
      />
      <GameStepIndicator active={stepForPhase(phase)} />

      <AnimatePresence mode="wait">
        {phase === "scenario" ? (
          <FadeSlide key="scenario">
            <div className="space-y-4">
              <ScenarioCard chapter={chapter} />
              <div className="space-y-4">
                {chapter.choices.map((ch) => (
                  <ChoiceButton
                    key={ch.id}
                    label={ch.text}
                    selected={choiceId === ch.id}
                    onClick={() => selectChoice(cid, ch.id)}
                  />
                ))}
              </div>
            </div>
          </FadeSlide>
        ) : null}

        {phase === "outcome" && selected ? (
          <FadeSlide key="outcome">
            <div className="space-y-6">
              <OutcomeCard title={selected.text} text={selected.outcome} />
              <button
                type="button"
                className="btn-primary mt-0"
                onClick={() => setPhase(cid, "explanation")}
              >
                Continue to reflection
              </button>
            </div>
          </FadeSlide>
        ) : null}

        {phase === "explanation" ? (
          <FadeSlide key="explanation">
            <div className="space-y-6">
              <ExplanationCard
                text={chapter.explanation.text}
                reference={chapter.explanation.reference}
              />
              <Link
                href="/quiz"
                className="btn-primary mt-0 flex min-h-[52px] items-center justify-center no-underline"
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
