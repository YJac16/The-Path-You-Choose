"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { maxChapterId } from "@/data/chapters";
import { bumpStreak, loadPersisted, savePersisted } from "@/lib/storage";
import type { GamePersisted, GamePhase, UserType } from "@/types/game";
import { defaultPersisted } from "@/types/game";

type GameContextValue = {
  state: GamePersisted;
  hydrated: boolean;
  setUserType: (t: UserType) => void;
  setCurrentChapter: (id: number) => void;
  selectChoice: (chapterId: number, choiceId: string) => void;
  setPhase: (chapterId: number, phase: GamePhase) => void;
  completeQuiz: (chapterId: number, score: number) => void;
  replayChapter: (chapterId: number) => void;
  resetProgress: () => void;
  setTheme: (t: "light" | "dark") => void;
  touchStreak: () => void;
};

const GameContext = createContext<GameContextValue | null>(null);

function applyPersist(next: GamePersisted) {
  savePersisted(next);
  return next;
}

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GamePersisted>(defaultPersisted);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const loaded = loadPersisted();
    setState(loaded);
    setHydrated(true);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle(
        "dark",
        loaded.theme === "dark"
      );
    }
  }, []);

  const patch = useCallback((fn: (prev: GamePersisted) => GamePersisted) => {
    setState((prev) => applyPersist(fn(prev)));
  }, []);

  const setUserType = useCallback(
    (userType: UserType) => {
      patch((prev) => ({ ...prev, userType }));
    },
    [patch]
  );

  const setCurrentChapter = useCallback(
    (id: number) => {
      patch((prev) => ({ ...prev, currentChapter: id }));
    },
    [patch]
  );

  const selectChoice = useCallback(
    (chapterId: number, choiceId: string) => {
      patch((prev) => ({
        ...prev,
        choices: { ...prev.choices, [chapterId]: choiceId },
        phases: { ...prev.phases, [chapterId]: "outcome" },
      }));
    },
    [patch]
  );

  const setPhase = useCallback(
    (chapterId: number, phase: GamePhase) => {
      patch((prev) => ({
        ...prev,
        phases: { ...prev.phases, [chapterId]: phase },
      }));
    },
    [patch]
  );

  const completeQuiz = useCallback(
    (chapterId: number, score: number) => {
      patch((prev) => {
        const alreadyComplete = prev.completedChapters.includes(chapterId);
        let completed = [...prev.completedChapters];
        if (!alreadyComplete) {
          completed = [...completed, chapterId].sort((a, b) => a - b);
        }
        const quizScores = { ...prev.quizScores, [chapterId]: score };
        const maxId = maxChapterId();
        let nextChapter = prev.currentChapter;
        if (!alreadyComplete) {
          if (chapterId === prev.currentChapter && chapterId < maxId) {
            nextChapter = chapterId + 1;
          }
        } else {
          nextChapter =
            completed.length > 0 ? Math.max(...completed) : prev.currentChapter;
        }
        const updated: GamePersisted = {
          ...prev,
          completedChapters: completed,
          quizScores,
          currentChapter: nextChapter,
        };
        return bumpStreak(updated);
      });
    },
    [patch]
  );

  const replayChapter = useCallback(
    (chapterId: number) => {
      patch((prev) => {
        const { [chapterId]: _c, ...restChoices } = prev.choices;
        const { [chapterId]: _p, ...restPhases } = prev.phases;
        void _c;
        void _p;
        return {
          ...prev,
          currentChapter: chapterId,
          choices: restChoices,
          phases: restPhases,
        };
      });
    },
    [patch]
  );

  const resetProgress = useCallback(() => {
    patch((prev) => ({
      ...defaultPersisted,
      userType: prev.userType,
      theme: prev.theme,
    }));
  }, [patch]);

  const setTheme = useCallback(
    (theme: "light" | "dark") => {
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", theme === "dark");
      }
      patch((prev) => ({ ...prev, theme }));
    },
    [patch]
  );

  const touchStreak = useCallback(() => {
    patch((prev) => bumpStreak(prev));
  }, [patch]);

  const value = useMemo(
    () => ({
      state,
      hydrated,
      setUserType,
      setCurrentChapter,
      selectChoice,
      setPhase,
      completeQuiz,
      replayChapter,
      resetProgress,
      setTheme,
      touchStreak,
    }),
    [
      state,
      hydrated,
      setUserType,
      setCurrentChapter,
      selectChoice,
      setPhase,
      completeQuiz,
      replayChapter,
      resetProgress,
      setTheme,
      touchStreak,
    ]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
}
