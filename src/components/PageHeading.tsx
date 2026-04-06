export function PageHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <h1 className="text-xl font-semibold tracking-tight text-ds-text">
        {title}
      </h1>
      <div
        className="mt-2 h-0.5 w-10 rounded-full bg-[var(--primary)]"
        aria-hidden
      />
      {subtitle ? (
        <p className="mt-3 text-sm leading-spacious text-ds-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
