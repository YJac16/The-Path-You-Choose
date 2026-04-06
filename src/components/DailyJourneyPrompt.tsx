"use client";

import { useGame } from "@/context/GameContext";

export function DailyJourneyPrompt() {
  const { state, hydrated } = useGame();

  if (!hydrated || !state.userType) return null;

  const hasPath =
    state.completedChapters.length > 0 ||
    Object.keys(state.choices).length > 0;

  if (!hasPath) return null;

  return (
    <p className="text-center text-sm font-medium leading-spacious text-[var(--primary)]">
      Continue your journey today 🌙
    </p>
  );
}
