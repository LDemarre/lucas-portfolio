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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line hover:border-accent-2 hover:text-ink transition text-sm"
              >
                <MailIcon />
                {t(UI.email)}
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line hover:border-accent-2 hover:text-ink transition text-sm"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              {CONTACT.github && (
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line hover:border-accent-2 hover:text-ink transition text-sm"
                >
                  <GitHubIcon />
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

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
