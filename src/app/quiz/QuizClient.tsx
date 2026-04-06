"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { getChapter, maxChapterId } from "@/data/chapters";
import { ChoiceImpactSummary } from "@/components/ChoiceImpactSummary";
import { GameStepIndicator } from "@/components/GameStepIndicator";
import { FadeSlide } from "@/components/motion/FadeSlide";
import { PageHeading } from "@/components/PageHeading";
import { QuizCard } from "@/components/QuizCard";
import { useGame } from "@/context/GameContext";

export function QuizClient() {
  const router = useRouter();
  const { state, hydrated, completeQuiz, touchStreak } = useGame();
  const cid = state.currentChapter;
  const chapter = getChapter(cid);
  const phase = state.phases[cid];

  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [resultScore, setResultScore] = useState<number | null>(null);
  const correctRef = useRef(0);

  useEffect(() => {
    setQIndex(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setFinished(false);
    setResultScore(null);
    correctRef.current = 0;
  }, [cid]);

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
      router.replace("/game");
      return;
    }
    if (phase !== "explanation") {
      router.replace("/game");
    }
  }, [hydrated, state.userType, chapter, phase, router]);

  const onSelect = useCallback(
    (i: number) => {
      if (!chapter || revealed) return;
      setSelected(i);
      setRevealed(true);
      if (chapter.quiz[qIndex]?.answer === i) {
        correctRef.current += 1;
        setScore((s) => s + 1);
      }
    },
    [chapter, qIndex, revealed]
  );

  const advanceAfterAnswer = useCallback(() => {
    if (!chapter) return;
    const isLast = qIndex + 1 >= chapter.quiz.length;
    if (isLast) {
      const final = correctRef.current;
      setResultScore(final);
      completeQuiz(cid, final);
      setFinished(true);
    } else {
      setQIndex((n) => n + 1);
      setSelected(null);
      setRevealed(false);
    }
  }, [chapter, qIndex, cid, completeQuiz]);

  if (!hydrated || !chapter || !state.userType || phase !== "explanation") {
    return (
      <div className="py-20 text-center text-sm text-ds-muted">
        Loading quiz…
      </div>
    );
  }

  const item = chapter.quiz[qIndex];
  const totalQs = chapter.quiz.length;

  if (finished && resultScore !== null) {
    const picked = chapter.choices.find(
      (c) => c.id === state.choices[cid]
    );
    return (
      <div className="space-y-6">
        <PageHeading title="Results" subtitle={chapter.title} />
        <GameStepIndicator active="Quiz" />
        <FadeSlide>
          <div className="space-y-6">
            <ChoiceImpactSummary impact={picked?.impact} />
            <div className="rounded-2xl border border-ds-line bg-ds-card p-6 text-center shadow-sm">
              <p className="mb-2 text-xs uppercase tracking-wider text-[var(--primary)]">
                Chapter complete
              </p>
              <h2 className="font-display text-xl font-semibold text-ds-text">
                You scored {resultScore} / {totalQs}
              </h2>
              <p className="mt-3 text-[15px] leading-spacious text-ds-muted">
                Every review deepens understanding. The next chapter is ready when
                you are.
              </p>
            </div>
            {cid < maxChapterId() ? (
              <Link
                href="/game"
                className="btn-primary mt-0 flex min-h-[52px] items-center justify-center no-underline"
              >
                Next chapter
              </Link>
            ) : (
              <Link
                href="/progress"
                className="btn-primary mt-0 flex min-h-[52px] items-center justify-center no-underline"
              >
                View journey
              </Link>
            )}
          </div>
        </FadeSlide>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeading title="Reflection quiz" subtitle={chapter.title} />
      <GameStepIndicator active="Quiz" />

      <div className="space-y-4">
        <AnimatePresence mode="wait">
          <FadeSlide key={qIndex}>
            <QuizCard
              item={item}
              index={qIndex}
              total={totalQs}
              selectedIndex={selected}
              revealed={revealed}
              onSelect={onSelect}
            />
          </FadeSlide>
        </AnimatePresence>

        {revealed && item ? (
          <FadeSlide>
            <div className="rounded-xl border border-ds-line bg-[var(--primary-soft)] p-4">
              <p className="mb-1 text-sm font-medium text-ds-text">
                {selected === item.answer ? "Well done" : "Takeaway"}
              </p>
              <p className="text-[15px] leading-spacious text-ds-muted">
                {item.explanation}
              </p>
              <button
                type="button"
                onClick={advanceAfterAnswer}
                className="btn-primary mt-4"
              >
                {qIndex + 1 < totalQs ? "Next question" : "See results"}
              </button>
            </div>
          </FadeSlide>
        ) : null}
      </div>
    </div>
  );
}
