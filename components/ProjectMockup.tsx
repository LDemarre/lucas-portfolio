import { type Category } from "@/data/content";

function Dots() {
  return (
    <div className="flex gap-1.5 px-3 py-2 border-b border-white/5">
      {["#d96a4a", "#d2a633", "#5fb86a"].map((c) => (
        <span key={c} className="h-2 w-2 rounded-full" style={{ background: c, opacity: 0.5 }} />
      ))}
    </div>
  );
}

function Line({ w, gold = false }: { w: string; gold?: boolean }) {
  return (
    <div
      className={`h-1.5 rounded-full ${gold ? "" : "bg-white/10"}`}
      style={{ width: w, background: gold ? "rgba(210,166,51,0.55)" : undefined }}
    />
  );
}

export default function ProjectMockup({ category }: { category: Category }) {
  if (category === "mobile") {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="relative w-[42%] h-[94%] rounded-2xl border border-white/10 bg-black/30 overflow-hidden">
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1.5 w-8 rounded-full bg-white/15" />
          <div className="pt-6 px-2.5 space-y-2">
            <div className="h-6 rounded-lg bg-gold/20" />
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg bg-white/[0.04] p-2">
                <div className="h-5 w-5 rounded bg-gold/30 shrink-0" />
                <div className="flex-1 space-y-1">
                  <Line w="80%" />
                  <Line w="55%" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (category === "ai") {
    return (
      <div className="h-full w-full rounded-lg border border-white/10 bg-black/30 overflow-hidden flex flex-col">
        <Dots />
        <div className="flex-1 p-3 space-y-2">
          <div className="max-w-[70%] rounded-xl rounded-tl-sm bg-white/[0.06] p-2 space-y-1">
            <Line w="90%" />
            <Line w="60%" />
          </div>
          <div className="ml-auto max-w-[65%] rounded-xl rounded-tr-sm p-2 space-y-1" style={{ background: "rgba(210,166,51,0.22)" }}>
            <Line w="80%" gold />
            <Line w="50%" gold />
          </div>
          <div className="max-w-[55%] rounded-xl rounded-tl-sm bg-white/[0.06] p-2">
            <Line w="70%" />
          </div>
        </div>
      </div>
    );
  }

  if (category === "bots") {
    return (
      <div className="h-full w-full rounded-lg border border-white/10 bg-black/40 overflow-hidden flex flex-col">
        <Dots />
        <div className="flex-1 p-3 space-y-1.5 font-mono text-[8px] leading-tight">
          <p className="text-gold/80">$ bot.start()</p>
          <p className="text-white/35">▸ listening for events…</p>
          <p className="text-white/35">
            ▸ user joined <span className="text-gold/70">#voice</span>
          </p>
          <p className="text-white/35">▸ tracking session…</p>
          <p className="text-gold/80">✓ logged 00:14:22</p>
        </div>
      </div>
    );
  }

  // platform — dashboard
  return (
    <div className="h-full w-full rounded-lg border border-white/10 bg-black/30 overflow-hidden flex flex-col">
      <Dots />
      <div className="flex-1 flex min-h-0">
        <div className="w-1/4 border-r border-white/5 p-2 space-y-1.5">
          {[0, 1, 2, 3].map((i) => (
            <Line key={i} w={i === 0 ? "90%" : "70%"} gold={i === 0} />
          ))}
        </div>
        <div className="flex-1 p-2.5 space-y-2">
          <div className="grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-6 rounded bg-white/[0.05]" />
            ))}
          </div>
          <div className="flex items-end gap-1.5 h-12 pt-1">
            {[40, 70, 50, 85, 60, 95, 75].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: "rgba(210,166,51,0.4)" }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
