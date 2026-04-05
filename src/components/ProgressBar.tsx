export function ProgressBar({
  value,
  max,
  label,
  percent,
}: {
  value?: number;
  max?: number;
  label?: string;
  /** Direct percentage 0–100; overrides value/max when set */
  percent?: number;
}) {
  const pct =
    percent !== undefined
      ? Math.min(100, Math.max(0, percent))
      : max !== undefined && max > 0 && value !== undefined
        ? Math.min(100, Math.round((value / max) * 100))
        : 0;

  const labelSuffix =
    percent !== undefined
      ? `${pct}%`
      : value !== undefined && max !== undefined
        ? `${value}/${max}`
        : `${pct}%`;

  return (
    <div>
      {label ? (
        <div className="mb-2 flex justify-between text-sm text-ds-muted">
          <span>{label}</span>
          <span className="tabular-nums">{labelSuffix}</span>
        </div>
      ) : null}
      <div className="h-2 w-full overflow-hidden rounded-full bg-ds-line">
        <div
          className="h-full rounded-full bg-[var(--primary)] transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
