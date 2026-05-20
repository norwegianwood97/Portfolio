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
          <p> Copyright © 2026</p>
        </div>
      </div>
    </footer>
  );
}
