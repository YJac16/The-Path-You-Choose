export function OutcomeCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl bg-[var(--primary-soft)] p-4 text-sm leading-spacious text-ds-text">
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--primary)]">
        Outcome
      </p>
      <p className="font-medium text-ds-text">{title}</p>
      <p className="mt-2 text-[15px] text-ds-muted">{text}</p>
    </div>
  );
}
