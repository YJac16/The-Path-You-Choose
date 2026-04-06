"use client";

import { useEffect, useState } from "react";

const STORAGE_PREFIX = "reflection-";

export function ReflectionCard({
  chapterId,
  question,
  placeholder,
}: {
  chapterId: number;
  question: string;
  placeholder: string;
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const key = `${STORAGE_PREFIX}${chapterId}`;
    try {
      const stored =
        typeof window !== "undefined" ? localStorage.getItem(key) : null;
      setValue(stored ?? "");
    } catch {
      setValue("");
    }
  }, [chapterId]);

  function handleChange(next: string) {
    setValue(next);
    try {
      localStorage.setItem(`${STORAGE_PREFIX}${chapterId}`, next);
    } catch {
      /* ignore quota */
    }
  }

  return (
    <div className="mt-6">
      <p className="mb-2 font-medium leading-spacious text-ds-text">
        {question}
      </p>
      <textarea
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="min-h-[100px] w-full resize-y rounded-xl border border-ds-line bg-ds-card p-3 text-[15px] leading-spacious text-ds-text shadow-sm outline-none transition-colors placeholder:text-ds-muted/70 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]/30"
      />
    </div>
  );
}
