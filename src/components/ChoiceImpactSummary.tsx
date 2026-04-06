import { formatImpactDeltas, normalizeImpact } from "@/lib/impact";
import type { ChoiceImpact } from "@/types/game";

export function ChoiceImpactSummary({ impact }: { impact?: ChoiceImpact | null }) {
  const totals = normalizeImpact(impact);
  const lines = formatImpactDeltas(totals);
  if (lines.length === 0) return null;

  return (
    <div className="rounded-xl border border-ds-line bg-[var(--primary-soft)] px-4 py-3 text-center">
      <p className="text-xs font-medium uppercase tracking-wider text-[var(--primary)] mb-2">
        This choice
      </p>
      <ul className="flex flex-col gap-1 text-sm font-medium text-ds-text">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
