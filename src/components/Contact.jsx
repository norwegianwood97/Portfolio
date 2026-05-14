import { ExternalLink, FileText, Github, Mail } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import { contacts } from "../data/portfolio.js";

const iconMap = {
  Email: Mail,
  GitHub: Github,
  Portfolio: ExternalLink,
  "Notion Portfolio": ExternalLink,
  "Resume PDF": FileText,
};

export default function Contact() {
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
            const cardClassName =
              "focus-ring group rounded-lg border border-white/15 bg-white/5 p-6 text-left transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-white/10";

            return (
              <a
                key={contact.label}
                href={contact.href}
                className={cardClassName}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-navy-950 transition group-hover:bg-cyan-50 group-hover:text-cyan-700">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xl font-bold text-cyan-100 sm:text-2xl">
                      {contact.label}
                    </span>
                    {contact.value && (
                      <span className="mt-1 block break-words text-sm leading-6 text-slate-200">
                        {contact.value}
                      </span>
                    )}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
