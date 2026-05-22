import { motion } from "framer-motion";
import PageSection from "./PageSection.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { profile } from "../data/portfolio.js";
import { containerVariants, itemVariants } from "../utils/animations.js";

const focusItems = [
  "Legacy-aware maintenance",
  "Backend API integration",
  "Python automation",
  "LLM workflow prototyping",
];

export default function About() {
  return (
    <PageSection id="about" className="flex items-center">
      <div className="w-full">
        <SectionTitle
          eyebrow="About"
          title="안정적인 변경과 AI 연동 흐름을 함께 고민하는 백엔드 개발자"
          description="운영 시스템을 다룰 때는 기능을 빠르게 붙이는 것만큼 기존 흐름을 읽고 영향 범위를 확인하는 일이 중요하다고 생각합니다."
          tone="dark"
        />

        <motion.div
          variants={containerVariants}
          className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]"
        >
          <div className="space-y-5">
            {profile.aboutSections.map((section) => (
              <motion.article
                key={section.title}
                variants={itemVariants}
                className="rounded-lg border border-white/20 bg-white/10 p-6 text-white shadow-xl shadow-navy-950/20 backdrop-blur"
              >
                <h3 className="text-lg font-bold text-cyan-100">
                  {section.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
                  {section.description}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.aside
            variants={itemVariants}
            className="rounded-lg border border-white/20 bg-white/10 p-6 shadow-xl shadow-navy-950/20 backdrop-blur"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
              Focus
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {focusItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-300">
              경력, 교육, 어학 정보는 Experience 페이지에서 이력서 흐름에 맞춰 확인할 수 있습니다.
            </p>
            <a
              href="#/experience"
              className="focus-ring mt-6 inline-flex items-center justify-center rounded-lg border border-cyan-200/50 px-4 py-2.5 text-sm font-bold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              View Experience
            </a>
          </motion.aside>
        </motion.div>
      </div>
    </PageSection>
  );
}
