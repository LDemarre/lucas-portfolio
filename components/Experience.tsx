"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { EXPERIENCE, SECTIONS } from "@/data/content";
import Reveal from "./Reveal";

// Whole months from a "YYYY-MM" start to now, minimum 1.
function monthsSince(start: string, now: Date): number {
  const [y, m] = start.split("-").map(Number);
  const months = (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m);
  return Math.max(1, months);
}

function formatDuration(months: number, lang: "es" | "en"): string {
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const mo = (n: number) =>
    lang === "es" ? `${n} ${n === 1 ? "mes" : "meses"}` : `${n} ${n === 1 ? "month" : "months"}`;
  const yr = (n: number) =>
    lang === "es" ? `${n} ${n === 1 ? "año" : "años"}` : `${n} ${n === 1 ? "year" : "years"}`;
  if (years === 0) return mo(months);
  if (rem === 0) return yr(years);
  return lang === "es" ? `${yr(years)} y ${mo(rem)}` : `${yr(years)} and ${mo(rem)}`;
}

export default function Experience() {
  const { t, lang } = useLang();
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => setNow(new Date()), []);

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
                {j.url && (
                  <a
                    href={j.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-gold border border-gold/30 rounded-full px-3 py-1.5 hover:bg-gold/10 transition"
                  >
                    {j.url.replace("https://", "")}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
              <div className="shrink-0 md:text-right">
                <p className="font-mono text-xs text-accent-2">{t(j.period)}</p>
                {now && (
                  <p className="font-mono text-[11px] text-muted" suppressHydrationWarning>
                    {formatDuration(monthsSince(j.start, now), lang)}
                  </p>
                )}
                <p className="text-xs text-muted">{j.place}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
