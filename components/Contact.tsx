"use client";

import { useLang } from "@/lib/i18n";
import { CONTACT, SECTIONS } from "@/data/content";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold">{t(SECTIONS.contact)}</h2>
          <p className="mt-4 text-sub text-lg">{t(SECTIONS.contactSub)}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-2 transition"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-line hover:border-accent-2 transition"
            >
              LinkedIn
            </a>
            {CONTACT.github && (
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-line hover:border-accent-2 transition"
              >
                GitHub
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
