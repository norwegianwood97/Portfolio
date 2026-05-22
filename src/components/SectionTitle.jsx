import { motion } from "framer-motion";
import { itemVariants } from "../utils/animations.js";

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div variants={itemVariants} className="mb-8 max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
