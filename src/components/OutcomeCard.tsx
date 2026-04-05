export function OutcomeCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-card dark:bg-cardDark p-5 shadow-soft border border-ink/5 dark:border-white/5">
      <p className="text-xs font-medium uppercase tracking-wider text-sage-dark dark:text-sage-light mb-2">
        Outcome
      </p>
      <h2 className="text-lg font-semibold text-ink dark:text-paper mb-2">
        {title}
      </h2>
      <p className="text-base text-inkMuted dark:text-paper/70 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
