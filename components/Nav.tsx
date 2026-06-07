"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { NAV } from "@/data/content";
import LangToggle from "./LangToggle";

export default function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">
          Lucas Demarré
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm text-sub">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-ink transition">
              {t(n.label)}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <LangToggle />
        </div>
      </nav>
    </header>
  );
}
