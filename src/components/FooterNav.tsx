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
    <nav className="safe-bottom fixed bottom-0 inset-x-0 z-40 border-t border-ds-line bg-ds-bg/95 backdrop-blur-md">
      <ul className="mx-auto flex max-w-md">
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
                className={`flex min-h-[56px] items-center justify-center text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-[var(--primary)]"
                    : "text-ds-muted"
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
