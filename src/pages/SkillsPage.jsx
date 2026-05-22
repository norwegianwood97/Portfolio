import { motion } from "framer-motion";
import { skills } from "../data/portfolio.js";
import { containerVariants, itemVariants } from "../utils/animations.js";

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

export default function SkillsPage() {
  return (
    <PageSection id="skills" className="flex items-center">
      <div className="w-full">
        <SectionTitle
          eyebrow="Tech Stack"
          title="실무에 필요한 기술을 중심으로 익혀왔습니다."
          description=""
        />

        <motion.div
          variants={containerVariants}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((group) => (
            <motion.section
              key={group.category}
              variants={itemVariants}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-sm font-bold text-slate-900">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
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
