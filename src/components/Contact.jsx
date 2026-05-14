import { ExternalLink, FileText, Github, Mail } from "lucide-react";
import { useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import { contacts } from "../data/portfolio.js";

const iconMap = {
  Email: Mail,
  GitHub: Github,
  "Notion Portfolio": ExternalLink,
  "Resume PDF": FileText,
};

export default function Contact() {
  const [copiedLabel, setCopiedLabel] = useState("");

  const copyToClipboard = async (contact) => {
    try {
      await navigator.clipboard.writeText(contact.value);
      setCopiedLabel(contact.label);
      window.setTimeout(() => setCopiedLabel(""), 1800);
    } catch {
      setCopiedLabel("");
    }
  };

  return (
    <section id="contact" className="bg-navy-950 py-20 text-white sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Contact"
          title="함께 만들고 운영할 수 있는 개발자"
          description=""
          tone="dark"
        />

        <div className="grid gap-4 md:grid-cols-2">
          {contacts.map((contact) => {
            const Icon = iconMap[contact.label] ?? ExternalLink;
            const isCopyAction = contact.action === "copy";
            const cardClassName =
              "focus-ring group rounded-lg border border-white/15 bg-white/5 p-5 text-left transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-white/10";
            const content = (
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-navy-950">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-cyan-100">
                    {contact.label}
                  </span>
                  <span className="mt-1 block break-words text-sm leading-6 text-slate-200">
                    {copiedLabel === contact.label ? "복사 완료" : contact.value}
                  </span>
                </span>
              </div>
            );

            if (isCopyAction) {
              return (
                <button
                  key={contact.label}
                  type="button"
                  className={cardClassName}
                  onClick={() => copyToClipboard(contact)}
                >
                  {content}
                </button>
              );
            }

            return (
              <a
                key={contact.label}
                href={contact.href}
                className={cardClassName}
                target="_blank"
                rel="noreferrer"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
