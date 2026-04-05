"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { FadeSlide } from "@/components/motion/FadeSlide";
import { ProgressBar } from "@/components/ProgressBar";
import { chapters } from "@/data/chapters";
import { useGame } from "@/context/GameContext";

export default function ProgressPage() {
  const router = useRouter();
  const { state, hydrated, replayChapter, resetProgress } = useGame();

  if (!hydrated) {
    return (
      <AppShell>
        <div className="py-20 text-center text-inkMuted dark:text-paper/60 text-sm">
          Loading progress…
        </div>
      </AppShell>
    );
  }

  const total = chapters.length;
  const done = state.completedChapters.length;

  function replay(id: number) {
    replayChapter(id);
    router.push("/game");
  }

  return (
    <AppShell>
      <FadeSlide>
        <div className="pt-4 pb-8 space-y-8">
          <div>
            <h1 className="text-2xl font-semibold text-ink dark:text-paper mb-2">
              Your journey
            </h1>
            <p className="text-inkMuted dark:text-paper/70 text-[15px] leading-relaxed">
              Chapters unlock as you finish each reflection quiz. Replay anytime
              to revisit a scenario.
            </p>
          </div>

          <div className="rounded-2xl bg-card dark:bg-cardDark p-5 shadow-soft border border-ink/5 dark:border-white/5">
            <ProgressBar value={done} max={total} label="Chapters completed" />
            {state.streak > 0 ? (
              <p className="mt-4 text-sm text-inkMuted dark:text-paper/65">
                Current streak:{" "}
                <span className="font-medium text-sage-dark dark:text-sage-light">
                  {state.streak} day{state.streak === 1 ? "" : "s"}
                </span>
              </p>
            ) : null}
          </div>

          <ul className="space-y-3">
            {chapters.map((ch) => {
              const complete = state.completedChapters.includes(ch.id);
              const isCurrent = state.currentChapter === ch.id;
              return (
                <li
                  key={ch.id}
                  className="rounded-2xl border border-ink/10 dark:border-white/10 bg-card dark:bg-cardDark p-4 shadow-soft"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-sage-dark dark:text-sage-light mb-1">
                        Chapter {ch.id}
                      </p>
                      <h2 className="font-semibold text-ink dark:text-paper">
                        {ch.title}
                      </h2>
                      <p className="text-sm text-inkMuted dark:text-paper/65 mt-1">
                        {complete ? "Completed" : isCurrent ? "In progress" : "Locked"}
                      </p>
                    </div>
                    {complete || isCurrent ? (
                      <button
                        type="button"
                        onClick={() => replay(ch.id)}
                        className="min-h-[44px] px-4 rounded-xl border border-ink/15 dark:border-white/15 text-sm font-medium text-ink dark:text-paper"
                      >
                        Replay chapter
                      </button>
                    ) : (
                      <span className="text-sm text-inkMuted dark:text-paper/50 py-2">
                        Finish previous chapter
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col gap-3">
            <Link
              href="/game"
              className="flex min-h-[52px] items-center justify-center rounded-xl bg-sage text-white dark:text-paper font-medium shadow-soft w-full"
            >
              Continue playing
            </Link>
            <button
              type="button"
              onClick={() => {
                if (
                  typeof window !== "undefined" &&
                  window.confirm(
                    "Reset all saved progress on this device? Your profile theme will be kept."
                  )
                ) {
                  resetProgress();
                  router.push("/");
                }
              }}
              className="min-h-[48px] rounded-xl text-sm text-inkMuted dark:text-paper/60"
            >
              Reset all progress
            </button>
          </div>
        </div>
      </FadeSlide>
    </AppShell>
  );
}
