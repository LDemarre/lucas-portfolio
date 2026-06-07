"use client";

import { useLang, type Lang } from "@/lib/i18n";

export default function LangToggle() {
  const { lang, setLang } = useLang();
  const langs: Lang[] = ["es", "en"];
  return (
    <div className="flex items-center gap-1 font-mono text-xs">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={l === "es" ? "Español" : "English"}
          className={`px-2 py-1 rounded transition ${
            lang === l ? "text-accent-2" : "text-muted hover:text-ink"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
