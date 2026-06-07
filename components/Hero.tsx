"use client";

import { useLang } from "@/lib/i18n";
import { HERO, UI } from "@/data/content";

export default function Hero() {
  const { t } = useLang();
  return (
    <section
      id="top"
      className="relative grid-bg min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(36,87,245,0.35), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full blur-[160px]"
        style={{ background: "radial-gradient(circle, rgba(20,60,140,0.22), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5 w-full">
        <p className="font-mono text-sm tracking-[0.35em] text-accent-2 mb-5">
          LUCAS DEMARRÉ
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
          {t(HERO.role)}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-sub max-w-2xl">
          {t(HERO.subtitle)}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-2 transition"
          >
            {t(HERO.ctaProjects)}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-line text-ink hover:border-accent-2 transition"
          >
            {t(HERO.ctaContact)}
          </a>
          <span className="font-mono text-xs text-muted inline-flex items-center gap-2 px-3 py-2 rounded-full border border-line">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulse" />
            {t(UI.assistantSoon)}
          </span>
        </div>
      </div>
    </section>
  );
}
