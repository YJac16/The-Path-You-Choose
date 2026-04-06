import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ClientProviders } from "@/components/ClientProviders";
import { GameProvider } from "@/context/GameContext";
import { THEME_BOOTSTRAP_SCRIPT } from "@/lib/themeBootstrapScript";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Path You Choose",
  description:
    "Learn through choices. Grow through reflection. A calm, interactive journey.",
  icons: {
    icon: [{ url: "/logo-vector.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo-vector.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }}
        />
      </head>
      <body className={`${inter.variable} font-sans font-normal`}>
        <GameProvider>
          <ClientProviders>{children}</ClientProviders>
        </GameProvider>
      </body>
    </html>
  );
}
