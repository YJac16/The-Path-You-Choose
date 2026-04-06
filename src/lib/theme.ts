export const THEME_STORAGE_KEY = "theme";

export type ThemeMode = "light" | "dark";

export function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    if (v === "light" || v === "dark") return v;
  } catch {
    /* ignore */
  }
  return null;
}

export function applyDocumentTheme(theme: ThemeMode) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
}

export function readDocumentTheme(): ThemeMode {
  if (typeof document === "undefined") return "light";
  const t = document.documentElement.getAttribute("data-theme");
  return t === "dark" ? "dark" : "light";
}

/** Toggle light/dark on `<html>` and persist to `localStorage` (key `theme`). */
export function toggleTheme() {
  const current = readDocumentTheme();
  applyDocumentTheme(current === "dark" ? "light" : "dark");
}
