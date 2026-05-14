import { ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Projects"
          title="Backend, AI, Automation 중심 프로젝트"
          description="업무 프로젝트는 보안 범위 안에서 역할과 적용 기술을 중심으로 정리했습니다."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-cyan-300"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-bold text-cyan-700">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-8 text-navy-950">
                    {project.title}
                  </h3>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-800 transition group-hover:bg-cyan-50 group-hover:text-cyan-700">
                  <ArrowUpRight size={19} aria-hidden="true" />
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={`${project.title}-${item}`}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                {project.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {index === 2 && (
                <p className="mt-6 rounded-lg bg-navy-50 px-4 py-3 text-sm font-bold text-navy-900">
                  성과: TPS 약 660.7% 개선 · 10만 건 동시 요청 처리 테스트
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
