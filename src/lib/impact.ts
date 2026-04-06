import type { ChoiceImpact, ImpactTotals } from "@/types/game";

export function normalizeImpact(impact?: ChoiceImpact | null): ImpactTotals {
  return {
    knowledge: impact?.knowledge ?? 0,
    reflection: impact?.reflection ?? 0,
    awareness: impact?.awareness ?? 0,
  };
}

export function subtractTotals(
  a: ImpactTotals,
  b: ImpactTotals
): ImpactTotals {
  return {
    knowledge: a.knowledge - b.knowledge,
    reflection: a.reflection - b.reflection,
    awareness: a.awareness - b.awareness,
  };
}

export function addTotals(a: ImpactTotals, b: ImpactTotals): ImpactTotals {
  return {
    knowledge: a.knowledge + b.knowledge,
    reflection: a.reflection + b.reflection,
    awareness: a.awareness + b.awareness,
  };
}

/** Labels for non-zero impact deltas (e.g. +2 Knowledge) */
export function formatImpactDeltas(impact: ImpactTotals): string[] {
  const lines: string[] = [];
  if (impact.knowledge !== 0) {
    lines.push(
      `${impact.knowledge > 0 ? "+" : ""}${impact.knowledge} Knowledge`
    );
  }
  if (impact.reflection !== 0) {
    lines.push(
      `${impact.reflection > 0 ? "+" : ""}${impact.reflection} Reflection`
    );
  }
  if (impact.awareness !== 0) {
    lines.push(
      `${impact.awareness > 0 ? "+" : ""}${impact.awareness} Awareness`
    );
  }
  return lines;
}
