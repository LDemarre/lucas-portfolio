"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { CONTACT, SECTIONS, UI } from "@/data/content";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "ok" | "err";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const fd = new FormData(form);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
      botcheck: fd.get("botcheck") ? "1" : "",
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  const field =
    "w-full rounded-lg bg-black/25 border border-line px-4 py-3 text-ink placeholder:text-muted outline-none transition focus:border-accent-2 focus:ring-1 focus:ring-accent-2/40";
  const label = "block text-left font-mono text-[11px] tracking-widest uppercase text-muted mb-1.5";

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold">{t(SECTIONS.contact)}</h2>
          <p className="mt-4 text-sub text-lg">{t(SECTIONS.contactSub)}</p>

          <form onSubmit={onSubmit} className="glass mt-10 rounded-2xl p-6 md:p-8 text-left">
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className={label}>{t(UI.formName)}</label>
                <input id="cf-name" name="name" type="text" required className={field} />
              </div>
              <div>
                <label htmlFor="cf-email" className={label}>{t(UI.formEmail)}</label>
                <input id="cf-email" name="email" type="email" required className={field} />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="cf-message" className={label}>{t(UI.formMessage)}</label>
              <textarea id="cf-message" name="message" required rows={4} className={`${field} resize-y`} />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-6 py-3 rounded-full bg-accent text-charcoal font-semibold hover:bg-accent-2 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? t(UI.formSending) : t(UI.formSend)}
              </button>
              {status === "ok" && (
                <span role="status" className="text-sm text-accent-2">{t(UI.formSuccess)}</span>
              )}
              {status === "err" && (
                <span role="alert" className="text-sm text-red-400">{t(UI.formError)}</span>
              )}
            </div>
          </form>

          <div className="mt-10">
            <p className="font-mono text-[11px] tracking-widest uppercase text-muted mb-3">
              {t(UI.formDirect)}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="px-5 py-2.5 rounded-full border border-line hover:border-accent-2 transition text-sm"
              >
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-line hover:border-accent-2 transition text-sm"
              >
                LinkedIn
              </a>
              {CONTACT.github && (
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-line hover:border-accent-2 transition text-sm"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
