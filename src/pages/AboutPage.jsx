import { motion } from "framer-motion";
import {
  education,
  languageMilitary,
  profile,
  trainingActivities,
} from "../data/portfolio.js";
import SectionTitle from "../components/SectionTitle.jsx";
import { containerVariants, itemVariants } from "../utils/animations.js";

const experienceSections = [
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

export default function AboutPage() {
  return (
    <PageSection id="about">
      <div className="w-full">
        <SectionTitle
          eyebrow="About Me"
          title="실용적이고 유지보수하기 쉬운 개발"
          description=""
        />

        <motion.div
          variants={containerVariants}
          className="grid gap-5 md:grid-cols-3"
        >
          {profile.aboutSections.map((section) => (
            <motion.article
              key={section.title}
              variants={itemVariants}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-slate-900">
                {section.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {section.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-14">
          <SectionTitle
            eyebrow="Experience"
            title="학력 및 이력"
            description=""
          />

          <motion.div
            variants={containerVariants}
            className="grid gap-5 lg:grid-cols-3"
          >
            {experienceSections.map((section) => (
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
