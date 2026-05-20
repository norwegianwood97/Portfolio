import { motion } from "framer-motion";
import PageSection from "./PageSection.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { skills } from "../data/portfolio.js";
import { containerVariants, itemVariants } from "../utils/animations.js";

export default function Skills() {
  return (
    <PageSection id="skills" className="flex items-center">
      <div className="w-full">
        <SectionTitle
          eyebrow="Skills"
          title="실무와 프로젝트 흐름에 맞춘 기술 스택"
          description="백엔드 API 개발, LLM 프로토타입, 데이터 자동화, 클라우드 운영 실습까지 프로젝트 성격에 맞춰 조합해 사용했습니다."
          tone="dark"
        />

        <motion.div
          variants={containerVariants}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((group) => (
            <motion.section
              key={group.category}
              variants={itemVariants}
              className="rounded-lg border border-white/20 bg-white/10 p-6 shadow-xl shadow-navy-950/20 backdrop-blur"
            >
              <h3 className="text-sm font-bold text-cyan-200">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white transition hover:border-cyan-200 hover:bg-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </PageSection>
  );
}
