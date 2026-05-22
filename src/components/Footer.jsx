const links = [
  { label: "Email", href: "mailto:jhchoi1997@gmail.com" },
  { label: "GitHub", href: "https://github.com/norwegianwood97" },
  { label: "Portfolio", href: "https://norwegianwood97.github.io/Portfolio" },
];

export default function Footer() {
  const resumeUrl = `${import.meta.env.BASE_URL}assets/choi-junhyeok-resume.pdf`;

  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="section-shell flex flex-col gap-5 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-semibold text-navy-950">Choi JoonHeok Portfolio</p>
          <p className="mt-1">Copyright © 2026</p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="focus-ring rounded text-sm font-semibold text-slate-600 transition hover:text-cyan-700"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href={resumeUrl}
            className="focus-ring rounded text-sm font-semibold text-slate-600 transition hover:text-cyan-700"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
