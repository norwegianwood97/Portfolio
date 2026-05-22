import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import { pageVariants } from "./utils/animations.js";

const routes = {
  "/": HomePage,
  "/skills": SkillsPage,
  "/projects": ProjectsPage,
  "/experience": ExperiencePage,
};

function getHashPath() {
  const path = window.location.hash.replace(/^#/, "") || "/";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return routes[normalizedPath] ? normalizedPath : "/";
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(getHashPath);
  const CurrentPage = routes[currentPath];

  useEffect(() => {
    const handleHashChange = () => setCurrentPath(getHashPath());

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-white text-slate-900">
        <Header currentPath={currentPath} />
        <main className="relative isolate flex-1 overflow-hidden bg-slate-50">
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPath}
                variants={pageVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <CurrentPage />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
        <div className="border-t border-slate-200 bg-white py-2 text-center text-xs text-slate-400">
          Copyright © 2026
        </div>
      </div>
    </MotionConfig>
  );
}
