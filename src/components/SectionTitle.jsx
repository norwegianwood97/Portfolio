import { motion } from "framer-motion";
import { itemVariants } from "../utils/animations.js";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  tone = 'light',
}) {
  const isDark = tone === 'dark';

  return (
    <motion.div variants={itemVariants} className="mb-10 max-w-3xl">
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.18em] ${
          isDark ? 'text-cyan-200' : 'text-cyan-700'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-bold sm:text-4xl ${
          isDark ? 'text-white' : 'text-navy-950'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-8 sm:text-lg ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
