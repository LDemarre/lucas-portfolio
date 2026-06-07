"use client";

import { type ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";
import SmoothScroll from "@/lib/smooth";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <SmoothScroll />
      {children}
    </LanguageProvider>
  );
}
