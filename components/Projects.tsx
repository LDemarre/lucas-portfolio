"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import {
  PROJECTS,
  CATEGORIES,
  SECTIONS,
  UI,
  type Category,
  type Project,
} from "@/data/content";
import Reveal from "./Reveal";

const catColor: Record<Category, string> = {
  ai: "#3d7bff",
  platform: "#2457f5",
  mobile: "#36a3ff",
  bots: "#7a6bff",
};

function catLabel(id: Category) {
  return CATEGORIES.find((c) => c.id === id)!.label;
}

export default function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Category | "all">("all");
  const [active, setActive] = useState<Project | null>(null);
  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold">{t(SECTIONS.projects)}</h2>
          <p className="mt-3 text-sub">{t(SECTIONS.projectsSub)}</p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          <Tab active={filter === "all"} onClick={() => setFilter("all")}>
            {t(UI.all)}
          </Tab>
          {CATEGORIES.map((c) => (
            <Tab key={c.id} active={filter === c.id} onClick={() => setFilter(c.id)}>
              {t(c.label)}
            </Tab>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal as="article" key={p.id} delay={(i % 3) * 0.08} className="h-full">
              <button
                onClick={() => setActive(p)}
                className="group glass h-full w-full text-left rounded-2xl p-6 transition hover:-translate-y-1 hover:border-white/15"
              >
                <div
                  className="h-28 rounded-xl mb-5 flex items-end p-4"
                  style={{
                    background: `linear-gradient(135deg, ${catColor[p.category]}26, transparent)`,
                    border: "1px solid var(--color-line)",
                  }}
                >
                  <span
                    className="font-mono text-[10px] tracking-widest uppercase"
                    style={{ color: catColor[p.category] }}
                  >
                    {t(catLabel(p.category))}
                  </span>
                </div>
                <h3 className="font-semibold text-lg leading-snug group-hover:text-accent-2 transition">
                  {t(p.title)}
                </h3>
                <p className="mt-2 text-sm text-sub">{t(p.tagline)}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] text-muted border border-line rounded px-1.5 py-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <Modal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function Tab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-sm px-4 py-1.5 rounded-full border transition ${
        active
          ? "bg-accent text-white border-accent"
          : "border-line text-sub hover:text-ink hover:border-white/20"
      }`}
    >
      {children}
    </button>
  );
}

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t } = useLang();
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative glass max-w-lg w-full rounded-2xl p-7 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label={t(UI.close)}
          className="absolute top-4 right-4 text-muted hover:text-ink text-lg"
        >
          ✕
        </button>
        <p className="font-mono text-[10px] tracking-widest uppercase text-accent-2">
          {t(catLabel(project.category))}
        </p>
        <h3 className="mt-2 text-2xl font-bold pr-6">{t(project.title)}</h3>
        <p className="mt-2 text-sub">{t(project.tagline)}</p>
        <Block label={t(UI.problem)} text={t(project.problem)} />
        <Block label={t(UI.solution)} text={t(project.solution)} />
        <Block label={t(UI.result)} text={t(project.result)} />
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] text-sub border border-line rounded px-2 py-0.5"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div className="mt-5">
      <p className="font-mono text-[10px] tracking-widest uppercase text-muted">{label}</p>
      <p className="mt-1 text-sm text-ink/90 leading-relaxed">{text}</p>
    </div>
  );
}
