export type UserType = "new-muslim" | "practicing" | "curious";

export type GamePhase = "scenario" | "outcome" | "explanation";

export interface GameChoice {
  id: string;
  text: string;
  outcome: string;
}

export interface QuizItem {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface Chapter {
  id: number;
  title: string;
  scenario: string;
  choices: GameChoice[];
  explanation: {
    text: string;
    reference?: string;
  };
  quiz: QuizItem[];
}

export interface GamePersisted {
  userType: UserType | null;
  currentChapter: number;
  completedChapters: number[];
  /** choice id per chapter */
  choices: Record<number, string>;
  /** narrative phase per chapter (before quiz) */
  phases: Record<number, GamePhase>;
  quizScores: Record<number, number>;
  lastPlayDate: string | null;
  streak: number;
  theme: "light" | "dark";
}

export const STORAGE_KEY = "the-path-you-choose-state";

export const defaultPersisted: GamePersisted = {
  userType: null,
  currentChapter: 1,
  completedChapters: [],
  choices: {},
  phases: {},
  quizScores: {},
  lastPlayDate: null,
  streak: 0,
  theme: "light",
};
