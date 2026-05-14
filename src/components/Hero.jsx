import { ArrowDown, ExternalLink, Github } from "lucide-react";
import { profile } from "../data/portfolio.js";

const portfolioUrl =
  "https://treasure-flare-e03.notion.site/AI-Agent-LLM-Java-Spring-48e039946151831e92b0817e1b7f3b43?pvs=143";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-navy-950 text-white"
    >
      <img
        src={`${import.meta.env.BASE_URL}assets/hero-ai-engineer.png`}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/35" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-navy-950 to-transparent" />

      <div className="section-shell flex min-h-[calc(100vh-5.5rem)] items-center py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur">
            Backend · AI Agent · LLM
          </p>
          <h1 className="text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-semibold text-cyan-100 sm:text-3xl">
            {profile.title}
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-navy-950 shadow-soft transition hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              프로젝트 보기
              <ArrowDown size={18} />
            </a>
            <a
              href={portfolioUrl}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={18} />
              Portfolio
            </a>
            <a
              href="https://github.com/norwegianwood97"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
