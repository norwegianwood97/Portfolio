import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#/", path: "/" },
  { label: "About", href: "#/about", path: "/about" },
  { label: "Skills", href: "#/skills", path: "/skills" },
  { label: "Projects", href: "#/projects", path: "/projects" },
];

export default function Header({ currentPath = "/" }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#/"
          className="focus-ring text-sm font-bold text-navy-950 transition hover:text-cyan-700"
          onClick={closeMenu}
        >
          Choi's
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-full px-3 py-2 text-sm transition ${
                currentPath === item.path
                  ? "bg-cyan-50 font-semibold text-navy-950 shadow-sm ring-1 ring-cyan-100"
                  : "font-medium text-slate-600 hover:bg-slate-50 hover:text-navy-900"
              }`}
              aria-current={currentPath === item.path ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-navy-900 md:hidden"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="section-shell flex flex-col py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-lg px-3 py-3 text-sm transition hover:bg-navy-50 hover:text-navy-900 ${
                  currentPath === item.path
                    ? "bg-cyan-50 font-semibold text-navy-950 ring-1 ring-cyan-100"
                    : "font-medium text-slate-700"
                }`}
                onClick={closeMenu}
                aria-current={currentPath === item.path ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
