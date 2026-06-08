"use client";

import { useLang } from "@/lib/i18n";
import { KROWNSOFT } from "@/data/content";
import Reveal from "./Reveal";

export default function Krownsoft() {
  const { t } = useLang();
  return (
    <section
      id="krownsoft"
      className="relative overflow-hidden bg-charcoal py-20 md:py-28 border-y border-gold/15"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(210,166,51,0.18), transparent 70%)" }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/krownsoft/icon-gold.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -bottom-16 w-64 opacity-[0.07]"
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-gold mb-7">
            {t(KROWNSOFT.eyebrow)}
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/krownsoft/wordmark-white.svg"
              alt="Krownsoft"
              className="h-11 md:h-14 w-auto shrink-0"
            />
            <div className="hidden md:block h-16 w-px bg-white/10" />
            <div className="max-w-xl">
              <p className="text-gray-300 leading-relaxed">{t(KROWNSOFT.desc)}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-mono rounded-full border border-gold/40 text-gold px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {t(KROWNSOFT.role)}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
