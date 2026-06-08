"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { useProjectModal } from "@/lib/projectModal";
import { PROJECTS, CATEGORIES, SECTIONS, UI, type Category } from "@/data/content";
import Reveal from "./Reveal";
import ProjectMockup from "./ProjectMockup";

const catColor: Record<Category, string> = {
  ai: "#d2a633",
  platform: "#e8c45f",
  mobile: "#c0913f",
  bots: "#a98c5a",
};

function catLabel(id: Category) {
  return CATEGORIES.find((c) => c.id === id)!.label;
}

const CARD_BASIS =
  "basis-full sm:basis-[calc(50%_-_10px)] lg:basis-[calc(33.333%_-_14px)]";

export default function Projects() {
  const { t } = useLang();
  const { open } = useProjectModal();
  const [filter, setFilter] = useState<Category | "all">("all");
  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold">{t(SECTIONS.projects)}</h2>
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

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {list.map((p, i) => (
            <Reveal as="article" key={p.id} delay={(i % 3) * 0.08} className={CARD_BASIS}>
              <button
                onClick={() => open(p)}
                className="group glass h-full w-full text-left rounded-2xl p-5 transition cursor-pointer hover:-translate-y-1 hover:border-white/15"
              >
                <div className="relative h-36 rounded-xl mb-4 overflow-hidden border border-line bg-black/25 p-3">
                  <ProjectMockup category={p.category} />
                  {p.krownsoft && (
                    <span className="absolute top-2 right-2 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-black/60 px-2 py-1 backdrop-blur-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/krownsoft/icon-gold.svg" alt="" aria-hidden="true" className="h-3 w-3" />
                      <span className="font-mono text-[9px] tracking-wide text-gold">Krownsoft</span>
                    </span>
                  )}
                </div>
                <span
                  className="font-mono text-[10px] tracking-widest uppercase"
                  style={{ color: catColor[p.category] }}
                >
                  {t(catLabel(p.category))}
                </span>
                <h3 className="mt-1.5 font-semibold text-lg leading-snug group-hover:text-accent-2 transition">
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
      className={`text-sm px-4 py-1.5 rounded-full border transition cursor-pointer ${
        active
          ? "bg-accent text-charcoal border-accent font-medium"
          : "border-line text-sub hover:text-ink hover:border-white/20"
      }`}
    >
      {children}
    </button>
  );
}
