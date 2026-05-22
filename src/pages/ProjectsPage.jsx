import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolio.js";
import SectionTitle from "../components/SectionTitle.jsx";
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

export default function ProjectsPage() {
  return (
    <PageSection id="projects">
      <div className="w-full">
        <SectionTitle
          eyebrow="Projects"
          title="구현하고 개선한 경험"
          description=""
        />

        <motion.div variants={containerVariants} className="grid gap-5">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-bold text-slate-500">
                {project.subtitle}
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-8 text-slate-950">
                {project.title}
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                {project.description}
              </p>

              {project.contributions && (
                <div className="mt-6">
                  <h4 className="text-sm font-bold text-slate-950">
                    Role / Contributions
                  </h4>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {project.contributions.map((contribution) => (
                      <li
                        key={contribution}
                        className="flex gap-2 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm font-semibold leading-7 text-slate-500">
                {project.tech}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={project.link}
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={18} aria-hidden="true" />
                  Notion
                </a>
                {project.repositories?.map((repository) => (
                  <a
                    key={repository.href}
                    href={repository.href}
                    className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={18} aria-hidden="true" />
                    {repository.label}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </PageSection>
  );
}
