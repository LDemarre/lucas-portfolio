"use client";

import { useLang } from "@/lib/i18n";
import { KROWNSOFT } from "@/data/content";
import Reveal from "./Reveal";

export default function Krownsoft() {
  const { t } = useLang();
  return (
    <section
      id="krownsoft"
      className="relative overflow-hidden bg-bg-2 py-20 md:py-28 border-y border-gold/15"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(210,166,51,0.16), transparent 70%)" }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/krownsoft/icon-gold.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -bottom-14 w-60 opacity-[0.06]"
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-gold mb-7">
            {t(KROWNSOFT.eyebrow)}
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/krownsoft/main-white.svg"
              alt="Krownsoft"
              className="h-16 md:h-24 w-auto shrink-0"
            />
            <div className="hidden md:block h-28 w-px bg-white/10" />
            <div className="max-w-xl">
              <p className="text-sub leading-relaxed">{t(KROWNSOFT.desc)}</p>

              <span className="mt-5 inline-flex items-center gap-2 text-xs font-mono rounded-full border border-gold/40 text-gold px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {t(KROWNSOFT.role)}
              </span>

              <div className="mt-6">
                <p className="font-mono text-[10px] tracking-widest uppercase text-muted mb-2">
                  {t(KROWNSOFT.productsLabel)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {KROWNSOFT.products.map((p) => (
                    <span
                      key={p}
                      className="text-sm text-sub border border-line rounded-lg px-2.5 py-1"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
