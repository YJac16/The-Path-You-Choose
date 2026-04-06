export type UserType = "new-muslim" | "practicing" | "curious";

export type GamePhase = "scenario" | "outcome" | "explanation";

export interface ChoiceImpact {
  knowledge?: number;
  reflection?: number;
  awareness?: number;
}

export type ImpactTotals = {
  knowledge: number;
  reflection: number;
  awareness: number;
};

export interface GameChoice {
  id: string;
  text: string;
  outcome: string;
  impact?: ChoiceImpact;
}

export interface QuizItem {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface ChapterReflection {
  question: string;
  placeholder: string;
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
  reflection: ChapterReflection;
  quiz: QuizItem[];
}

export interface GamePersisted {
  userType: UserType | null;
  currentChapter: number;
  completedChapters: number[];
  choices: Record<number, string>;
  phases: Record<number, GamePhase>;
  quizScores: Record<number, number>;
  lastPlayDate: string | null;
  streak: number;
  theme: "light" | "dark";
  metrics: ImpactTotals;
  /** Impact last applied per chapter (for replay / choice changes) */
  impactApplied: Record<number, ImpactTotals>;
  badgesUnlocked: string[];
  /** Badges earned in the most recent chapter completion (for reward screen) */
  lastRewardBadges: string[];
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
  metrics: { knowledge: 0, reflection: 0, awareness: 0 },
  impactApplied: {},
  badgesUnlocked: [],
  lastRewardBadges: [],
};
