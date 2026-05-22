import { motion } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";
import { profile } from "../data/portfolio.js";
import { containerVariants, itemVariants } from "../utils/animations.js";

const profileImage = `${import.meta.env.BASE_URL}assets/profile.png`;

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

export default function HomePage() {
  const resumeUrl = `${import.meta.env.BASE_URL}assets/choi-junhyeok-resume.pdf`;

  return (
    <PageSection
      id="home"
      className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_320px]"
      textClassName="text-slate-950"
    >
      <motion.div variants={containerVariants} className="max-w-3xl">
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold leading-[1.1] text-slate-950 sm:text-6xl lg:text-5xl"
        >
          {profile.Title}
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="mt-4 text-2xl font-medium tracking-wide text-slate-700 sm:text-3xl lg:text-2xl"
        >
          {profile.homeTitle}
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <a
            href="https://github.com/norwegianwood97"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
          <a
            href="#/projects"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            <ArrowRight size={18} aria-hidden="true" />
            Projects
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="justify-self-center lg:justify-self-end"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <img
            src={profileImage}
            alt="Choi JoonHeok profile"
            className="aspect-[4/5] w-[min(72vw,260px)] rounded-xl object-cover ring-1 ring-slate-200"
          />
        </div>
      </motion.div>
    </PageSection>
  );
}
