"use client";

import { useLang } from "@/lib/i18n";
import { EXPERIENCE, SECTIONS } from "@/data/content";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold">{t(SECTIONS.experience)}</h2>
        </Reveal>
        <div className="mt-10 space-y-4">
          {EXPERIENCE.map((j, i) => (
            <Reveal
              key={j.company}
              delay={i * 0.06}
              className="glass rounded-2xl p-6 flex flex-col md:flex-row md:items-baseline md:justify-between gap-3"
            >
              <div>
                <h3 className="text-lg font-semibold">
                  {j.company}{" "}
                  <span className="text-sub font-normal">— {t(j.role)}</span>
                </h3>
                <p className="mt-1.5 text-sm text-sub max-w-2xl">{t(j.desc)}</p>
              </div>
              <div className="shrink-0 md:text-right">
                <p className="font-mono text-xs text-accent-2">{t(j.period)}</p>
                <p className="text-xs text-muted">{j.place}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
