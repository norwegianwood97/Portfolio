import { motion } from "framer-motion";
import { profile } from "../data/portfolio.js";
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

export default function AboutPage() {
  return (
    <PageSection id="about" className="flex items-center">
      <div className="w-full">
        <SectionTitle
          eyebrow="About Me"
          title="실용성 · 꼼꼼함 · 유지보수성 · 편리함"
          description="실제로 쓰이는 기능을 디테일하게 만들고, 이후에도 유지보수하기 쉬운 구조로 개선합니다."
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
      </div>
    </PageSection>
  );
}
