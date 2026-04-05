"use client";

const steps = ["Scenario", "Outcome", "Learn", "Quiz"] as const;

export function GameStepIndicator({
  active,
}: {
  active: "Scenario" | "Outcome" | "Learn" | "Quiz";
}) {
  const idx = steps.indexOf(active);

  return (
    <nav
      aria-label="Chapter progress"
      className="mb-6 flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-[11px] font-medium uppercase tracking-wider text-ds-muted sm:gap-x-2 sm:text-xs"
    >
      {steps.map((label, i) => {
        const isActive = i === idx;
        const isDone = i < idx;
        return (
          <span key={label} className="flex items-center gap-1 sm:gap-2">
            {i > 0 ? (
              <span
                className="text-ds-line select-none"
                aria-hidden
              >
                →
              </span>
            ) : null}
            <span
              className={
                isActive
                  ? "rounded-full bg-[var(--primary-soft)] px-2 py-1 text-[var(--primary)] ring-1 ring-[var(--primary)]/25"
                  : isDone
                    ? "text-ds-muted opacity-80"
                    : "opacity-55"
              }
            >
              {label}
            </span>
          </span>
        );
      })}
    </nav>
  );
}
