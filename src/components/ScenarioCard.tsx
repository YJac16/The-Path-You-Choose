import type { Chapter } from "@/types/game";

export function ScenarioCard({ chapter }: { chapter: Chapter }) {
  return (
    <div className="rounded-2xl bg-card dark:bg-cardDark p-5 shadow-soft border border-ink/5 dark:border-white/5">
      <p className="text-xs font-medium uppercase tracking-wider text-sage-dark dark:text-sage-light mb-2">
        Chapter {chapter.id}
      </p>
      <h1 className="text-xl font-semibold text-ink dark:text-paper leading-snug mb-3">
        {chapter.title}
      </h1>
      <p className="text-base text-inkMuted dark:text-paper/70 leading-relaxed">
        {chapter.scenario}
      </p>
    </div>
  );
}
