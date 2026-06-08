"use client";

import { useLang } from "@/lib/i18n";
import { useProjectModal } from "@/lib/projectModal";
import { KROWNSOFT, PROJECTS } from "@/data/content";
import Reveal from "./Reveal";

export default function Krownsoft() {
  const { t } = useLang();
  const { open } = useProjectModal();

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
        className="pointer-events-none absolute -right-8 -bottom-20 w-72 opacity-[0.06]"
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-gold mb-6">
            {t(KROWNSOFT.eyebrow)}
          </p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/krownsoft/main-white.svg"
            alt="Krownsoft"
            className="h-14 md:h-36 w-auto"
          />

          <div className="mt-9 max-w-2xl">
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
                {KROWNSOFT.products.map((id) => {
                  const proj = PROJECTS.find((p) => p.id === id);
                  if (!proj) return null;
                  return (
                    <button
                      key={id}
                      onClick={() => open(proj)}
                      className="group inline-flex items-center gap-2 text-sm text-sub border border-line rounded-lg px-3 py-1.5 cursor-pointer transition hover:border-gold/40 hover:text-ink hover:-translate-y-0.5"
                    >
                      {t(proj.title)}
                      <span className="text-muted group-hover:text-gold transition">→</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
