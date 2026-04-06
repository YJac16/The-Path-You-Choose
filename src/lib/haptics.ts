export function lightHaptic() {
  try {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(12);
    }
  } catch {
    /* ignore */
  }
}
