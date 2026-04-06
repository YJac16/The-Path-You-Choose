const PREFIX = "reflection-";

export function countFilledReflections(): number {
  if (typeof window === "undefined") return 0;
  let n = 0;
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k?.startsWith(PREFIX)) continue;
      const v = localStorage.getItem(k);
      if (v && v.trim().length > 0) n++;
    }
  } catch {
    return 0;
  }
  return n;
}
