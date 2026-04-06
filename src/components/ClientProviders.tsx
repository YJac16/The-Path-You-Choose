"use client";

import { AmbientSound } from "@/components/AmbientSound";
import { AudioProvider } from "@/context/AudioContext";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <AudioProvider>
      <AmbientSound />
      {children}
    </AudioProvider>
  );
}
