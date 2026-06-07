"use client";

import { useLang } from "@/lib/i18n";
import { ABOUT, EDUCATION, CERTS, LANGUAGES, SECTIONS } from "@/data/content";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold">{t(ABOUT.title)}</h2>
          <p className="mt-5 text-sub leading-relaxed max-w-xl">{t(ABOUT.body)}</p>
          <div className="mt-8">
            <h3 className="font-mono text-xs tracking-widest uppercase text-muted">
              {t(SECTIONS.languages)}
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {LANGUAGES.map((l) => (
                <li key={l.label.en} className="text-sub">
                  <span className="text-ink">{t(l.label)}</span> — {t(l.level)}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-8">
          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase text-accent-2">
              {t(SECTIONS.education)}
            </h3>
            <ul className="mt-4 space-y-4">
              {EDUCATION.map((e) => (
                <li key={e.school} className="glass rounded-xl p-4">
                  <p className="font-semibold">{e.school}</p>
                  <p className="text-sm text-sub">{t(e.degree)}</p>
                  <p className="font-mono text-xs text-muted mt-1">
                    {e.period}
                    {e.note ? ` · ${t(e.note)}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs tracking-widest uppercase text-accent-2">
              {t(SECTIONS.certs)}
            </h3>
            <ul className="mt-4 space-y-2">
              {CERTS.map((c) => (
                <li key={c.en} className="text-sm text-sub flex gap-2">
                  <span className="text-accent-2">›</span>
                  {t(c)}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
