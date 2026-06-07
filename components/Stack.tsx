"use client";

import { useLang } from "@/lib/i18n";
import { STACK_GROUPS, SECTIONS } from "@/data/content";
import Reveal from "./Reveal";

export default function Stack() {
  const { t } = useLang();
  return (
    <section id="stack" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold">{t(SECTIONS.stack)}</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STACK_GROUPS.map((g, i) => (
            <Reveal key={g.label.en} delay={(i % 3) * 0.06} className="glass rounded-2xl p-6">
              <h3 className="font-mono text-xs tracking-widest uppercase text-accent-2">
                {t(g.label)}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-sm text-sub border border-line rounded-lg px-2.5 py-1"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
