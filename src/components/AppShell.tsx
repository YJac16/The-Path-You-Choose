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
    <div className="relative flex min-h-dvh flex-col bg-ds-bg text-ds-text">
      <div className="ds-pattern" aria-hidden />
      <div className="relative z-10 flex min-h-dvh flex-col">
        <Header />
        <main
          className={`mx-auto w-full max-w-md flex-1 px-4 py-6 leading-[1.65] ${
            showFooter ? "pb-nav" : "pb-8"
          }`}
        >
          {children}
        </main>
        {showFooter ? <FooterNav /> : null}
      </div>
    </div>
  );
}
