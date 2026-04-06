const CLICK = "/audio/click.mp3";

let clickEl: HTMLAudioElement | null = null;

function getClickAudio() {
  if (typeof window === "undefined") return null;
  if (!clickEl) {
    clickEl = new Audio(CLICK);
    clickEl.volume = 0.45;
  }
  return clickEl;
}

export function playClickSound() {
  try {
    const a = getClickAudio();
    if (!a) return;
    a.currentTime = 0;
    void a.play();
  } catch {
    /* autoplay / missing file */
  }
}
