"use client";

import { useLang } from "@/lib/i18n";
import { UI } from "@/data/content";

// Phase 2: replace this stub with a live Retell web-call / chat widget.
// See the `retell-agent-builder` skill: create web call -> RetellWebClient SDK.
export default function AssistantWidget() {
  const { t } = useLang();
  return (
    <button
      disabled
      title={t(UI.assistantSoon)}
      className="fixed bottom-5 right-5 z-40 glass rounded-full px-4 py-3 text-xs font-mono text-muted cursor-not-allowed opacity-80 flex items-center gap-2"
    >
      <span className="h-2 w-2 rounded-full bg-accent-2 animate-pulse" />
      {t(UI.assistantSoon)}
    </button>
  );
}
