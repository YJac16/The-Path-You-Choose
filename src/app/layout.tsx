import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { GameProvider } from "@/context/GameContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "The Path You Choose",
  description:
    "Learn Islam through choices, reflection, and discovery — a calm, choice-based journey.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#141413" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans text-ds-text bg-ds-bg`}
      >
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
