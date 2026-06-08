"use client";

import { type ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";
import { ProjectModalProvider } from "@/lib/projectModal";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ProjectModalProvider>{children}</ProjectModalProvider>
    </LanguageProvider>
  );
}
