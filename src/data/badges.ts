export interface BadgeDef {
  id: string;
  title: string;
  emoji: string;
}

export const badgeCatalog: BadgeDef[] = [
  { id: "first", title: "First Step", emoji: "🟢" },
  { id: "seeker", title: "Seeker", emoji: "📖" },
  { id: "learner", title: "Learner", emoji: "🧠" },
  { id: "streak5", title: "Consistent", emoji: "🌙" },
  { id: "reflective", title: "Reflective", emoji: "💭" },
];

export function badgeById(id: string): BadgeDef | undefined {
  return badgeCatalog.find((b) => b.id === id);
}
