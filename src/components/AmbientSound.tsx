"use client";

import { useEffect, useRef } from "react";
import { useAudio } from "@/context/AudioContext";

export function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { enabled } = useAudio();

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = 0.22;
    if (enabled) {
      void el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [enabled]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      className="pointer-events-none fixed h-0 w-0 opacity-0"
      aria-hidden
    >
      <source src="/audio/calm-ambient.mp3" type="audio/mpeg" />
    </audio>
  );
}
