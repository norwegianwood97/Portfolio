import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import { pageVariants } from "./utils/animations.js";

const routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/skills": SkillsPage,
  "/projects": ProjectsPage,
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
      <div className="min-h-screen bg-white text-slate-900">
        <Header currentPath={currentPath} />
        <main className="relative isolate min-h-[calc(100vh-8.5rem)] overflow-hidden bg-navy-950">
          <img
            src={`${import.meta.env.BASE_URL}assets/home-ai-engineer.png`}
            alt=""
            className="fixed inset-0 z-0 h-screen w-screen object-cover"
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/45" />
          <div className="fixed inset-x-0 bottom-0 z-0 h-36 bg-gradient-to-t from-navy-950 to-transparent" />

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
        <Footer />
      </div>
    </MotionConfig>
  );
}
