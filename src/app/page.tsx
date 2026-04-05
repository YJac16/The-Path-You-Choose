import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { LandingActions } from "@/components/LandingActions";

export default function HomePage() {
  return (
    <AppShell>
      <div className="pt-8 pb-12">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-sage-dark dark:text-sage-light mb-4">
          Interactive reflection
        </p>
        <h1 className="text-center text-3xl sm:text-4xl font-semibold text-ink dark:text-paper tracking-tight leading-tight mb-4">
          The Path You Choose
        </h1>
        <p className="text-center text-lg text-inkMuted dark:text-paper/70 max-w-md mx-auto leading-relaxed mb-10">
          Learn Islam through choices, reflection, and discovery
        </p>
        <LandingActions />
        <p className="mt-12 text-center text-sm text-inkMuted dark:text-paper/55 max-w-sm mx-auto leading-relaxed">
          A respectful space for new Muslims, lifelong learners, and curious
          explorers — paced for calm, not noise.
        </p>
        <div className="mt-8 text-center">
          <Link
            href="/start"
            className="text-sm text-sage-dark dark:text-sage-light underline-offset-4 hover:underline"
          >
            Set or change your journey profile
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
