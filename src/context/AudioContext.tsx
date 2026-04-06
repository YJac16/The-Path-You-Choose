"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "tphyc-audio-enabled";

type AudioContextValue = {
  enabled: boolean;
  setEnabled: (next: boolean | ((v: boolean) => boolean)) => void;
};

const AudioContext = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabledState] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw !== null) setEnabledState(raw === "true");
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const setEnabled = useCallback(
    (next: boolean | ((v: boolean) => boolean)) => {
      setEnabledState((prev) => {
        const v = typeof next === "function" ? next(prev) : next;
        try {
          localStorage.setItem(STORAGE_KEY, String(v));
        } catch {
          /* ignore */
        }
        return v;
      });
    },
    []
  );

  const value = useMemo(
    () => ({ enabled: ready ? enabled : true, setEnabled }),
    [enabled, ready, setEnabled]
  );

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}
