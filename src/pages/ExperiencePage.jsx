import { motion } from "framer-motion";
import {
  career,
  education,
  languageMilitary,
  trainingActivities,
} from "../data/portfolio.js";
import SectionTitle from "../components/SectionTitle.jsx";
import { containerVariants, itemVariants } from "../utils/animations.js";

const sections = [
  { title: "Education", items: education },
  { title: "Training & Activities", items: trainingActivities },
  { title: "Language & Military", items: languageMilitary },
];

function PageSection({
  id,
  children,
  className = "",
  textClassName = "text-slate-900",
}) {
  return (
    <section id={id} className={textClassName}>
      <motion.div
        variants={containerVariants}
        className={`section-shell min-h-[calc(100vh-7rem)] py-12 sm:py-14 lg:py-16 ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}

export default function ExperiencePage() {
  return (
    <PageSection id="experience">
      <div className="w-full">
        <SectionTitle eyebrow="Experience" title="경력 · 학력 · 활동" description="" />

        <motion.div
          variants={containerVariants}
          className="grid gap-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.9fr)]"
        >
          <motion.section
            variants={itemVariants}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              {career.title}
            </h3>
            <div className="mt-6">
              <h4 className="text-xl font-bold text-slate-950">
                {career.company}
              </h4>
              <p className="mt-2 text-sm font-semibold text-slate-600">
                {career.department} | {career.role} | {career.period}
              </p>
              <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">
                Tech Stack: {career.techStack}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {career.items.map((item) => (
                <article
                  key={item.title}
                  className="border-l border-slate-200 pl-4"
                >
                  <h5 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h5>
                  <p className="mt-1 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </motion.section>

          <motion.div variants={containerVariants} className="space-y-5">
            {sections.map((section) => (
              <motion.section
                key={section.title}
                variants={itemVariants}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  {section.title}
                </h3>
                <div className="mt-6 space-y-4">
                  {section.items.map((item) => (
                    <article
                      key={`${item.title}-${item.period}`}
                      className="border-l border-slate-200 pl-4"
                    >
                      <h4 className="text-base font-semibold leading-7 text-slate-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm font-semibold text-slate-500">
                        {item.period}
                      </p>
                    </article>
                  ))}
                </div>
              </motion.section>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </PageSection>
  );
}
