import { HERO } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
        <p>© 2026 {HERO.name}</p>
        <p className="font-mono">Built with Next.js · Tailwind · GSAP</p>
      </div>
    </footer>
  );
}
