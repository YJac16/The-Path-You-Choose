"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/game", label: "Game" },
  { href: "/progress", label: "Progress" },
];

export function FooterNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 border-t border-ink/10 dark:border-white/10 bg-paper/95 dark:bg-paperDark/95 backdrop-blur-md safe-bottom">
      <ul className="flex max-w-lg mx-auto">
        {items.map(({ href, label }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : href === "/game"
                ? pathname.startsWith("/game") || pathname.startsWith("/quiz")
                : pathname.startsWith(href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                className={`flex min-h-[56px] items-center justify-center text-sm font-medium transition-colors ${
                  active
                    ? "text-sage-dark dark:text-sage-light"
                    : "text-inkMuted dark:text-paper/55"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
