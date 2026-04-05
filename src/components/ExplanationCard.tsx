export function ExplanationCard({
  text,
  reference,
}: {
  text: string;
  reference?: string;
}) {
  return (
    <div className="mt-1 rounded-2xl border border-ds-line bg-ds-card p-5 shadow-sm">
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--primary)]">
        Reflection
      </p>
      <p className="mb-3 leading-spacious text-ds-text">{text}</p>
      {reference ? (
        <div className="text-xs italic leading-spacious text-ds-muted">
          {reference}
        </div>
      ) : null}
    </div>
  );
}
