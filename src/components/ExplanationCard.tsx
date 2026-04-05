export function ExplanationCard({
  text,
  reference,
}: {
  text: string;
  reference?: string;
}) {
  return (
    <div className="rounded-2xl bg-sage/10 dark:bg-sage/15 p-5 shadow-soft border border-sage/20 dark:border-sage/30">
      <p className="text-xs font-medium uppercase tracking-wider text-sage-dark dark:text-sage-light mb-2">
        Reflection
      </p>
      <p className="text-base text-ink dark:text-paper leading-relaxed mb-3">
        {text}
      </p>
      {reference ? (
        <p className="text-sm text-inkMuted dark:text-paper/65 italic border-t border-ink/10 dark:border-white/10 pt-3">
          {reference}
        </p>
      ) : null}
    </div>
  );
}
