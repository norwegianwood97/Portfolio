import { motion } from "framer-motion";
import PageSection from "./PageSection.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { credentials, education, experience } from "../data/portfolio.js";
import { containerVariants, itemVariants } from "../utils/animations.js";

const cardClass =
  "rounded-lg border border-white/20 bg-white/10 p-6 text-white shadow-xl shadow-navy-950/20 backdrop-blur";

function TimelineList({ title, items }) {
  return (
    <motion.section variants={itemVariants}>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
        {title}
      </h3>
      <motion.div variants={containerVariants} className="space-y-4">
        {items.map((item) => (
          <motion.article
            key={`${item.title}-${item.period}`}
            variants={itemVariants}
            className={cardClass}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h4 className="text-base font-semibold leading-7">
                  {item.title}
                </h4>
                {item.role && (
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {item.role}
                  </p>
                )}
              </div>
              <p className="shrink-0 text-sm font-semibold text-cyan-200">
                {item.period}
              </p>
            </div>

            {item.note && (
              <p className="mt-3 text-sm font-semibold text-cyan-100">
                {item.note}
              </p>
            )}

            {item.stack && (
              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((stackItem) => (
                  <span
                    key={`${item.title}-${stackItem}`}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white"
                  >
                    {stackItem}
                  </span>
                ))}
              </div>
            )}

            {item.details && (
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-200">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default function Experience() {
  return (
    <PageSection id="experience">
      <div className="w-full">
        <SectionTitle
          eyebrow="Experience"
          title="경력, 교육, 자격/어학"
          description="병원 솔루션 운영, 데이터 자동화, LLM 챗봇 프로토타입, 프리랜서 웹사이트 제작 경험을 이력서 흐름에 맞춰 정리했습니다."
          tone="dark"
        />

        <motion.div
          variants={containerVariants}
          className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]"
        >
          <TimelineList title="Experience" items={experience} />
          <div className="space-y-6">
            <TimelineList title="Education / Activities" items={education} />
            <TimelineList title="Certificates / Language" items={credentials} />
          </div>
        </motion.div>
      </div>
    </PageSection>
  );
}
