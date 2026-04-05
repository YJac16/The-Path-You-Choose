import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { LandingActions } from "@/components/LandingActions";

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-6 pt-2 pb-12">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-[var(--primary)]">
          Interactive reflection
        </p>
        <h1 className="font-display text-center text-3xl font-semibold leading-tight tracking-tight text-ds-text sm:text-4xl">
          The Path You Choose
        </h1>
        <p className="mx-auto max-w-md text-center text-lg leading-spacious text-ds-muted">
          Learn Islam through choices, reflection, and discovery
        </p>
        <LandingActions />
        <p className="mx-auto mt-6 max-w-sm text-center text-sm leading-spacious text-ds-muted">
          A respectful space for new Muslims, lifelong learners, and curious
          explorers — paced for calm, not noise.
        </p>
        <div className="pt-2 text-center">
          <Link
            href="/start"
            className="text-sm text-[var(--primary)] underline-offset-4 transition-opacity hover:underline"
          >
            Set or change your journey profile
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
