"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { type Project, type Category, UI, CATEGORIES } from "@/data/content";
import { useLang } from "./i18n";
import ProjectMockup from "@/components/ProjectMockup";

type Ctx = { open: (p: Project) => void };
const ProjectModalContext = createContext<Ctx | null>(null);

export function useProjectModal(): Ctx {
  const c = useContext(ProjectModalContext);
  if (!c) throw new Error("useProjectModal must be used within ProjectModalProvider");
  return c;
}

function catLabel(id: Category) {
  return CATEGORIES.find((c) => c.id === id)!.label;
}

export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <ProjectModalContext.Provider value={{ open: setActive }}>
      {children}
      {active && <Modal project={active} onClose={() => setActive(null)} />}
    </ProjectModalContext.Provider>
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
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative glass max-w-lg w-full rounded-2xl p-7 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label={t(UI.close)}
          className="absolute top-4 right-4 text-muted hover:text-ink text-lg cursor-pointer"
        >
          ✕
        </button>
        <div className="relative h-40 rounded-xl mb-5 overflow-hidden border border-line bg-black/25 p-3">
          <ProjectMockup category={project.category} />
        </div>
        <p className="font-mono text-[10px] tracking-widest uppercase text-accent-2">
          {t(catLabel(project.category))}
        </p>
        {project.krownsoft && (
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-gold/30 px-2.5 py-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/krownsoft/icon-gold.svg" alt="" aria-hidden="true" className="h-3.5 w-3.5" />
            <span className="font-mono text-[10px] tracking-wide text-gold">Krownsoft</span>
          </span>
        )}
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
