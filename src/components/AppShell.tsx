import { FooterNav } from "@/components/FooterNav";
import { Header } from "@/components/Header";

export function AppShell({
  children,
  showFooter = true,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
}) {
  return (
    <div className="min-h-dvh bg-paper dark:bg-paperDark text-ink dark:text-paper">
      <Header />
      <main
        className={`max-w-lg mx-auto px-4 ${showFooter ? "pb-nav" : "pb-8"}`}
      >
        {children}
      </main>
      {showFooter ? <FooterNav /> : null}
    </div>
  );
}
