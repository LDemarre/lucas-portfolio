import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { NextRequest, NextResponse } from "next/server";
import {
  HERO, ABOUT, PROJECTS, EXPERIENCE, EDUCATION, CERTS, LANGUAGES,
  STACK_GROUPS, KROWNSOFT, CONTACT, CATEGORIES,
} from "@/data/content";

export const maxDuration = 30;

const google = createGoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });

// Fallback chain: if one model is rate-limited / unavailable, try the next.
const MODELS = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-2.0-flash-lite"];

function catName(id: string) {
  return CATEGORIES.find((c) => c.id === id)?.label.en ?? id;
}

function buildProfile() {
  const projects = PROJECTS.map(
    (p) =>
      `- ${p.title.en} [${catName(p.category)}${p.krownsoft ? ", Krownsoft product" : ""}]: ${p.tagline.en} Stack: ${p.stack.join(", ")}. Result: ${p.result.en}`
  ).join("\n");
  const exp = EXPERIENCE.map(
    (j) => `- ${j.role.en} at ${j.company} (${j.place}, ${j.period.en}): ${j.desc.en}`
  ).join("\n");
  const edu = EDUCATION.map(
    (e) => `- ${e.degree.en}, ${e.school} (${e.period})${e.note ? ` — ${e.note.en}` : ""}`
  ).join("\n");
  const stack = STACK_GROUPS.map((g) => `${g.label.en}: ${g.items.join(", ")}`).join(" | ");
  const certs = CERTS.map((c) => c.en).join("; ");
  const langs = LANGUAGES.map((l) => `${l.label.en} (${l.level.en})`).join(", ");
  return `ABOUT: ${ABOUT.body.en}
ROLE: ${HERO.role.en}. ${HERO.subtitle.en}
EXPERIENCE:
${exp}
COMPANY: ${KROWNSOFT.desc.en} (Lucas is the ${KROWNSOFT.role.en}.)
PROJECTS:
${projects}
STACK: ${stack}
EDUCATION:
${edu}
CERTIFICATIONS: ${certs}
LANGUAGES: ${langs}
CONTACT: email ${CONTACT.email}; LinkedIn ${CONTACT.linkedin}; GitHub ${CONTACT.github}. There is also a contact form on this page.`;
}

const SYSTEM = `You are the friendly AI assistant embedded on Lucas Demarré's personal portfolio website. Your job is to answer visitors' questions about Lucas — his experience, projects, skills, and how to work with him — to help them decide to hire or contact him.

Rules:
- Reply in the SAME language the visitor writes in (Spanish or English).
- Be concise and conversational: usually 2-4 sentences. Plain text, no markdown headers or bullet symbols.
- Only discuss Lucas's professional profile and this portfolio. If asked something off-topic or not covered below, briefly say you can only help with questions about Lucas, and steer back.
- Never invent facts, numbers, clients, or contact details not listed below. The client names in the projects are intentionally anonymized — do not guess them.
- If someone wants to hire or contact Lucas, point them to the contact form on this page or his email/LinkedIn.
- Be warm and professional, never pushy.

Everything you know about Lucas:
${buildProfile()}`;

type ChatMsg = { role: "user" | "assistant"; content: string };

// Stream text from the first model that works; on early failure (e.g. rate
// limit) fall back to the next model. Throws only if every model fails.
async function* streamWithFallback(messages: ChatMsg[]) {
  let lastErr: unknown;
  for (const modelId of MODELS) {
    let emitted = false;
    try {
      const result = streamText({
        model: google(modelId),
        system: SYSTEM,
        messages,
        temperature: 0.5,
        maxOutputTokens: 500,
        onError: ({ error }) => { lastErr = error; },
      });
      for await (const chunk of result.textStream) {
        if (chunk) { emitted = true; yield chunk; }
      }
      if (emitted) return;
    } catch (err) {
      lastErr = err;
      if (emitted) return; // partial output already sent — stop here
    }
  }
  throw lastErr ?? new Error("all_models_failed");
}

export async function POST(req: NextRequest) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }
  let body: { messages?: { role?: string; content?: string }[]; lang?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  const messages: ChatMsg[] = (body.messages || [])
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-12)
    .map((m) => ({ role: m.role as "user" | "assistant", content: (m.content || "").slice(0, 2000) }));
  if (messages.length === 0) {
    return NextResponse.json({ error: "no_messages" }, { status: 422 });
  }

  const lang = body.lang === "es" ? "es" : "en";
  const busy =
    lang === "es"
      ? "Estoy recibiendo muchas consultas en este momento 🙏 Probá de nuevo en un ratito, o escribime por el formulario de abajo."
      : "I'm getting a lot of requests right now 🙏 Please try again in a moment, or reach me through the form below.";

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const chunk of streamWithFallback(messages)) {
          controller.enqueue(encoder.encode(chunk));
        }
      } catch {
        // every model failed (rate limit / outage) -> graceful message
        controller.enqueue(encoder.encode(busy));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
