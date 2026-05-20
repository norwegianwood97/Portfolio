import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

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
    <div className="min-h-screen bg-white text-slate-900">
      <Header currentPath={currentPath} />
      <main className="min-h-[calc(100vh-8.5rem)]">
        <CurrentPage />
      </main>
      <Footer />
    </div>
  );
}
