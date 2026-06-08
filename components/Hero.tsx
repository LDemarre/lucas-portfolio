"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLang } from "@/lib/i18n";
import { HERO } from "@/data/content";

export default function Hero() {
  const { t } = useLang();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".hero-init");
    const mark = el.querySelector<HTMLElement>(".hero-mark");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(items, { opacity: 1, y: 0 });
      if (mark) gsap.set(mark, { opacity: 0.05 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (mark) {
        tl.fromTo(
          mark,
          { opacity: 0, scale: 0.92, rotate: -6 },
          { opacity: 0.05, scale: 1, rotate: 0, duration: 1.3 },
          0
        );
      }
      tl.fromTo(
        items,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.12 },
        0.15
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative grid-bg min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full blur-[150px]"
        style={{ background: "radial-gradient(circle, rgba(210,166,51,0.26), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full blur-[160px]"
        style={{ background: "radial-gradient(circle, rgba(210,166,51,0.13), transparent 70%)" }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/personal/mark-gold.svg"
        alt=""
        aria-hidden="true"
        className="hero-mark pointer-events-none absolute right-[5%] top-1/2 -translate-y-1/2 w-[240px] md:w-[400px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 w-full">
        <p className="hero-init font-mono text-sm tracking-[0.35em] text-accent-2 mb-5">
          LUCAS DEMARRÉ
        </p>
        <h1 className="hero-init text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
          {t(HERO.role)}
        </h1>
        <p className="hero-init mt-6 text-lg md:text-xl text-sub max-w-2xl">
          {t(HERO.subtitle)}
        </p>
        <div className="hero-init mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-accent text-charcoal font-semibold hover:bg-accent-2 transition"
          >
            {t(HERO.ctaProjects)}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-line text-ink hover:border-accent-2 transition"
          >
            {t(HERO.ctaContact)}
          </a>
        </div>
      </div>
    </section>
  );
}
