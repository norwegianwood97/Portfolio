import { motion } from "framer-motion";
import {
  education,
  languageMilitary,
  trainingActivities,
} from "../data/portfolio.js";
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
        className={`section-shell min-h-[calc(100vh-5.5rem)] py-16 sm:py-20 lg:py-24 ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div variants={itemVariants} className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <PageSection id="experience">
      <div className="w-full">
        <SectionTitle
          eyebrow="Experience"
          title="학력 · 교육 · 활동"
          description=""
        />

        <motion.div
          variants={containerVariants}
          className="grid gap-5 lg:grid-cols-3"
        >
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
      </div>
    </PageSection>
  );
}
