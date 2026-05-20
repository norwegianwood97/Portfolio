import { ExternalLink, FileText, Github, Mail } from "lucide-react";
import { profile } from "../data/portfolio.js";

const emailAddress = "jhchoi1997@gmail.com";
const notionUrl =
  "https://treasure-flare-e03.notion.site/AI-Agent-LLM-Java-Spring-48e039946151831e92b0817e1b7f3b43?pvs=143";
const resumePdfUrl = "";

export default function Footer() {
  const hasResumePdf = Boolean(resumePdfUrl);

  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="section-shell flex flex-col gap-5 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p>© 2026 {profile.name}. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={`mailto:${emailAddress}`}
            className="focus-ring inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-600 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-navy-900"
          >
            <Mail size={16} aria-hidden="true" />
            Email
          </a>
          <a
            href="https://github.com/norwegianwood97"
            className="focus-ring inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-600 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-navy-900"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
