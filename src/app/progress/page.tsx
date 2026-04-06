"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { FadeSlide } from "@/components/motion/FadeSlide";
import { PageHeading } from "@/components/PageHeading";
import { ProgressBar } from "@/components/ProgressBar";
import { chapters } from "@/data/chapters";
import { useGame } from "@/context/GameContext";

export default function ProgressPage() {
  const router = useRouter();
  const { state, hydrated, replayChapter, resetProgress } = useGame();

  if (!hydrated) {
    return (
      <AppShell>
        <div className="py-20 text-center text-sm text-ds-muted">
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
        <div className="space-y-6 pb-8 pt-2">
          <PageHeading
            title="Your journey"
            subtitle="Chapters unlock as you finish each reflection quiz"
          />
          <p className="text-[15px] leading-spacious text-ds-muted">
            Replay anytime to revisit a scenario.
          </p>

          <div className="rounded-2xl border border-ds-line bg-ds-card p-5 shadow-sm">
            <ProgressBar value={done} max={total} label="Chapters completed" />
            {state.streak > 0 ? (
              <p className="mt-4 text-sm text-ds-muted">
                Current streak:{" "}
                <span className="font-medium text-[var(--primary)]">
                  {state.streak} day{state.streak === 1 ? "" : "s"}
                </span>
              </p>
            ) : null}
          </div>

          <div className="rounded-2xl border border-ds-line bg-ds-card p-5 shadow-sm">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--primary)]">
              Journey focus
            </p>
            <p className="text-sm text-ds-muted mb-3">
              Running totals from your path choices (replay adjusts scores).
            </p>
            <ul className="flex flex-col gap-2 text-sm font-medium text-ds-text tabular-nums">
              <li className="flex justify-between border-b border-ds-line/80 pb-2">
                <span className="text-ds-muted font-normal">Knowledge</span>
                <span>{state.metrics.knowledge}</span>
              </li>
              <li className="flex justify-between border-b border-ds-line/80 pb-2">
                <span className="text-ds-muted font-normal">Reflection</span>
                <span>{state.metrics.reflection}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-ds-muted font-normal">Awareness</span>
                <span>{state.metrics.awareness}</span>
              </li>
            </ul>
          </div>

          <ul className="space-y-4">
            {chapters.map((ch) => {
              const complete = state.completedChapters.includes(ch.id);
              const isCurrent = state.currentChapter === ch.id;
              return (
                <li
                  key={ch.id}
                  className="rounded-2xl border border-ds-line bg-ds-card p-4 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="mb-1 text-xs uppercase tracking-wider text-[var(--primary)]">
                        Chapter {ch.id}
                      </p>
                      <h2 className="font-display font-semibold text-ds-text">
                        {ch.title}
                      </h2>
                      <p className="mt-1 text-sm text-ds-muted">
                        {complete
                          ? "Completed"
                          : isCurrent
                            ? "In progress"
                            : "Locked"}
                      </p>
                    </div>
                    {complete || isCurrent ? (
                      <button
                        type="button"
                        onClick={() => replay(ch.id)}
                        className="min-h-[44px] shrink-0 rounded-xl border border-ds-line bg-ds-card px-4 text-sm font-medium text-ds-text transition-all duration-200 hover:border-[var(--primary)]/50"
                      >
                        Replay chapter
                      </button>
                    ) : (
                      <span className="py-2 text-sm text-ds-muted/80">
                        Finish previous chapter
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col gap-4">
            <Link
              href="/game"
              className="btn-primary mt-0 flex min-h-[52px] items-center justify-center no-underline"
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
              className="min-h-[48px] rounded-xl text-sm text-ds-muted transition-colors hover:text-ds-text"
            >
              Reset all progress
            </button>
          </div>
        </div>
      </FadeSlide>
    </AppShell>
  );
}
