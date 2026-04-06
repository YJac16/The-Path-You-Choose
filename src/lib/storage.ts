import {
  defaultPersisted,
  GamePersisted,
  STORAGE_KEY,
} from "@/types/game";

export function loadPersisted(): GamePersisted {
  if (typeof window === "undefined") return { ...defaultPersisted };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultPersisted };
    const parsed = JSON.parse(raw) as Partial<GamePersisted>;
    return {
      ...defaultPersisted,
      ...parsed,
      metrics: {
        ...defaultPersisted.metrics,
        ...(parsed.metrics ?? {}),
      },
      impactApplied: parsed.impactApplied ?? defaultPersisted.impactApplied,
    };
  } catch {
    return { ...defaultPersisted };
  }
}

export function savePersisted(state: GamePersisted) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/** YYYY-MM-DD in local timezone */
export function todayKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function bumpStreak(state: GamePersisted): GamePersisted {
  const today = todayKey();
  const last = state.lastPlayDate;
  if (!last) {
    return { ...state, lastPlayDate: today, streak: 1 };
  }
  if (last === today) return state;

  const lastDate = new Date(last + "T12:00:00");
  const t = new Date(today + "T12:00:00");
  const diffDays = Math.round(
    (t.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffDays === 1) {
    return { ...state, lastPlayDate: today, streak: state.streak + 1 };
  }
  if (diffDays > 1) {
    return { ...state, lastPlayDate: today, streak: 1 };
  }
  return state;
}
