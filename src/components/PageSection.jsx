import { motion } from "framer-motion";
import { containerVariants } from "../utils/animations.js";

export default function PageSection({ id, children, className = "" }) {
  return (
    <section id={id} className="text-white">
      <motion.div
        variants={containerVariants}
        className={`section-shell min-h-[calc(100vh-5.5rem)] py-16 sm:py-20 lg:py-24 ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
