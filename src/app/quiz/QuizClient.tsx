"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { getChapter, maxChapterId } from "@/data/chapters";
import { FadeSlide } from "@/components/motion/FadeSlide";
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
      <div className="py-20 text-center text-inkMuted dark:text-paper/60 text-sm">
        Loading quiz…
      </div>
    );
  }

  const item = chapter.quiz[qIndex];
  const totalQs = chapter.quiz.length;

  if (finished && resultScore !== null) {
    return (
      <FadeSlide>
        <div className="pt-4 pb-8 space-y-6">
          <div className="rounded-2xl bg-card dark:bg-cardDark p-6 shadow-soft border border-ink/5 dark:border-white/5 text-center">
            <p className="text-xs uppercase tracking-wider text-sage-dark dark:text-sage-light mb-2">
              Chapter complete
            </p>
            <h2 className="text-xl font-semibold text-ink dark:text-paper mb-2">
              You scored {resultScore} / {totalQs}
            </h2>
            <p className="text-inkMuted dark:text-paper/70 text-[15px] leading-relaxed">
              Every review deepens understanding. The next chapter is ready when
              you are.
            </p>
          </div>
          {cid < maxChapterId() ? (
            <Link
              href="/game"
              className="flex min-h-[52px] items-center justify-center rounded-xl bg-sage text-white dark:text-paper font-medium shadow-soft w-full"
            >
              Next chapter
            </Link>
          ) : (
            <Link
              href="/progress"
              className="flex min-h-[52px] items-center justify-center rounded-xl bg-sage text-white dark:text-paper font-medium shadow-soft w-full"
            >
              View journey
            </Link>
          )}
        </div>
      </FadeSlide>
    );
  }

  return (
    <div className="pt-2 pb-6 space-y-5">
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
          <div className="rounded-xl bg-sage/10 dark:bg-sage/15 border border-sage/25 dark:border-sage/30 p-4">
            <p className="text-sm font-medium text-ink dark:text-paper mb-1">
              {selected === item.answer ? "Well done" : "Takeaway"}
            </p>
            <p className="text-[15px] text-inkMuted dark:text-paper/75 leading-relaxed">
              {item.explanation}
            </p>
            <button
              type="button"
              onClick={advanceAfterAnswer}
              className="mt-4 w-full min-h-[48px] rounded-xl bg-sage text-white dark:text-paper font-medium"
            >
              {qIndex + 1 < totalQs ? "Next question" : "See results"}
            </button>
          </div>
        </FadeSlide>
      ) : null}
    </div>
  );
}
