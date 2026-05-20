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
          최준혁 Portfolio
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`focus-ring text-sm transition hover:text-navy-900 ${
                currentPath === item.path
                  ? "font-semibold text-navy-950 underline decoration-cyan-500 decoration-2 underline-offset-8"
                  : "font-medium text-slate-600"
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
                className={`focus-ring rounded-lg px-2 py-3 text-sm transition hover:bg-navy-50 hover:text-navy-900 ${
                  currentPath === item.path
                    ? "font-semibold text-navy-950"
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
