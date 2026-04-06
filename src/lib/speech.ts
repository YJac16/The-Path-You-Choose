export function speak(text: string) {
  if (typeof window === "undefined" || !text?.trim()) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
  } catch {
    /* unsupported */
  }
}
