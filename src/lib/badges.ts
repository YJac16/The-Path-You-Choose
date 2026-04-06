import { getChapter } from "@/data/chapters";
import type { GamePersisted } from "@/types/game";

function quizAveragePercent(state: GamePersisted): number {
  const ids = state.completedChapters;
  if (ids.length === 0) return 0;
  let sum = 0;
  for (const id of ids) {
    const ch = getChapter(id);
    const total = Math.max(1, ch?.quiz.length ?? 1);
    const score = state.quizScores[id] ?? 0;
    sum += score / total;
  }
  return (sum / ids.length) * 100;
}

/** Returns badge ids newly earned (not in prev.badgesUnlocked). */
export function computeNewBadgeIds(
  prev: GamePersisted,
  next: GamePersisted,
  reflectionCount: number
): string[] {
  const had = new Set(prev.badgesUnlocked);
  const earned: string[] = [];

  const done = next.completedChapters;
  const doneSet = new Set(done);

  if (doneSet.has(1) && !had.has("first")) earned.push("first");
  if (done.length >= 5 && !had.has("seeker")) earned.push("seeker");
  if (quizAveragePercent(next) >= 80 && done.length >= 1 && !had.has("learner")) {
    earned.push("learner");
  }
  if (next.streak >= 5 && !had.has("streak5")) earned.push("streak5");
  if (reflectionCount >= 5 && !had.has("reflective")) earned.push("reflective");

  return earned;
}
