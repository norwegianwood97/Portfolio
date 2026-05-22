import { motion } from "framer-motion";
import PageSection from "./PageSection.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { projects } from "../data/portfolio.js";
import { containerVariants, itemVariants } from "../utils/animations.js";

export default function Projects() {
  return (
    <PageSection id="projects">
      <div className="w-full">
        <SectionTitle
          eyebrow="Projects"
          title="성능 개선과 AI Agent 실행 환경을 보여주는 대표 프로젝트"
          description="실무 상세 경험은 Experience에 배치하고, Projects에는 STOCKING과 OpenClaw 서버 구축 실습을 중심으로 정리했습니다."
          tone="dark"
        />

        <motion.div
          variants={containerVariants}
          className="grid gap-5 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="group flex flex-col rounded-lg border border-white/20 bg-white/10 p-6 shadow-xl shadow-navy-950/20 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-white/15"
            >
              <div>
                <p className="text-sm font-bold text-cyan-200">
                  {project.type}
                </p>
                {project.period && (
                  <p className="mt-2 text-sm font-semibold text-slate-300">
                    {project.period}
                  </p>
                )}
                {project.role && (
                  <p className="mt-1 text-sm font-semibold text-slate-300">
                    {project.role}
                  </p>
                )}
                <h3 className="mt-3 text-xl font-bold leading-8 text-white">
                  {project.title}
                </h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={`${project.title}-${item}`}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-200">
                {project.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {project.highlight && (
                <p className="mt-6 rounded-lg border border-cyan-200/40 bg-cyan-200/10 px-4 py-3 text-sm font-bold text-white">
                  {project.highlight}
                </p>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </PageSection>
  );
}
