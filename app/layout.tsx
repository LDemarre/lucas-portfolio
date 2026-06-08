import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lucasdemarre.vercel.app"),
  title: "Lucas Demarré — AI & Software Developer",
  icons: { icon: "/personal/mark-gold.svg" },
  description:
    "AI & Software Developer building voice agents, chatbots, and automation for businesses. Full-stack, AI, and conversational systems in production.",
  openGraph: {
    title: "Lucas Demarré — AI & Software Developer",
    description:
      "Voice agents, chatbots, automation and full-stack software in production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable}`}>
        <noscript>
          <style>{".reveal{opacity:1 !important;transform:none !important}.hero-init{opacity:1 !important}.hero-mark{opacity:.05 !important}"}</style>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
