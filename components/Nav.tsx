"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { NAV } from "@/data/content";
import LangToggle from "./LangToggle";

export default function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "glass" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/personal/mark-gold.svg" alt="" aria-hidden="true" className="h-7 w-auto" />
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
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-line text-ink"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-bg-2/95 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-5 py-2 flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="py-3 text-sub hover:text-ink transition border-b border-line/50 last:border-0"
              >
                {t(n.label)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
