import { ArrowRight, Github, ExternalLink, Mail } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   PageShell — 다크 배경 + 도트 패턴 + 보라 글로우 + 네비
   ───────────────────────────────────────────────────────── */
export function PageShell({ active, children }) {
  return (
    <div className="min-h-screen bg-ink-950 bg-dot-grid bg-[length:22px_22px] relative overflow-hidden">
      <div className="glow-purple" />
      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-8 sm:py-12">
        <NavBar active={active} />
        <main className="animate-fade-up">{children}</main>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   NavBar — 활성 페이지는 pill, 나머지는 muted
   ───────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Experience", to: "/experience" },
];

export function NavBar({ active }) {
  return (
    <nav className="flex justify-between items-center mb-12 sm:mb-16">
      <div className="text-ink-100 font-medium text-sm sm:text-base">
        Choi's
      </div>
      <div className="flex gap-1 items-center">
        {NAV_ITEMS.map(({ label, to }) => {
          const isActive = active === label;
          return (
            <a
              key={label}
              href={`#${to}`}
              className={
                isActive
                  ? "bg-ink-800 text-ink-100 text-sm px-4 py-1.5 rounded-full border border-ink-700"
                  : "text-ink-500 hover:text-ink-100 text-sm px-3 py-1.5 transition-colors"
              }
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────────────────
   StatusPill — 보라 배경 + 시안 점이 깜빡이는 상태 배지
   ───────────────────────────────────────────────────────── */
export function StatusPill({ children }) {
  return (
    <div className="inline-flex items-center gap-2 bg-accent-purple/10 text-accent-purple-soft text-base px-3 py-1 rounded-full border border-accent-purple/30 mb-4">
      <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse-soft" />
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Eyebrow + PageHeading — 페이지 상단 헤더 패턴
   ───────────────────────────────────────────────────────── */
export function Eyebrow({ children }) {
  return (
    <div className="font-mono text-xs text-ink-500 tracking-[0.14em] uppercase mb-3">
      {children}
    </div>
  );
}

export function PageHeading({ children }) {
  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-ink-100 tracking-tight leading-tight mb-10 sm:mb-14">
      {children}
    </h1>
  );
}

/* ─────────────────────────────────────────────────────────
   Tag — 카드 안에 들어가는 모노스페이스 pill
   ───────────────────────────────────────────────────────── */
export function Tag({ children }) {
  return (
    <span className="inline-block bg-ink-800 text-accent-purple-soft text-xs font-mono px-2.5 py-0.5 rounded-full border border-ink-700 mr-1 mb-1">
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────────────────
   Button — Primary (보라) / Outline (다크)
   ───────────────────────────────────────────────────────── */
export function PrimaryButton({ children, href, icon: Icon }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 bg-accent-purple hover:bg-accent-purple/90 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
    >
      {children}
      {Icon && <Icon size={14} />}
    </a>
  );
}

export function OutlineButton({ children, href, icon: Icon }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 bg-transparent hover:bg-ink-900 text-ink-100 text-sm px-4 py-2 rounded-md border border-ink-700 transition-colors"
    >
      {Icon && <Icon size={14} />}
      {children}
    </a>
  );
}

/* ─────────────────────────────────────────────────────────
   CodeEditor — Home 페이지 우측의 yaml 에디터 mockup
   ───────────────────────────────────────────────────────── */
export function CodeEditor({ filename = "whoami.yaml", children }) {
  return (
    <div className="bg-ink-900 rounded-lg border border-ink-700 overflow-hidden">
      <div className="bg-ink-800 px-3 py-2 flex gap-1.5 items-center border-b border-ink-700">
        <span className="w-2 h-2 bg-red-400/80 rounded-full" />
        <span className="w-2 h-2 bg-amber-400/80 rounded-full" />
        <span className="w-2 h-2 bg-green-400/80 rounded-full" />
        <span className="ml-2 text-ink-500 text-xs font-mono">{filename}</span>
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function YamlLine({ k, v, highlight }) {
  return (
    <div>
      <span className="text-syntax-key">{k}</span>
      <span className="text-ink-100">:</span>{" "}
      {v && <span className="text-syntax-string">{v}</span>}
      {highlight && <span className="text-syntax-highlight">{highlight}</span>}
    </div>
  );
}

export function YamlListItem({ children, highlight }) {
  return (
    <div className="pl-4">
      <span className="text-syntax-dash">-</span>{" "}
      <span className="text-syntax-string">{children}</span>
      {highlight && <span className="text-syntax-highlight">{highlight}</span>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   SkillCard — Skills 페이지 카테고리 카드
   ───────────────────────────────────────────────────────── */
export function SkillCard({
  icon: Icon,
  title,
  desc,
  tags,
  accent = "purple",
}) {
  const iconStyle =
    accent === "cyan"
      ? "bg-accent-cyan/15 text-accent-cyan-soft"
      : "bg-accent-purple/15 text-accent-purple-soft";

  return (
    <div className="bg-ink-900 border border-ink-700 rounded-xl p-5 hover:border-ink-500 transition-colors">
      <div
        className={`w-9 h-9 rounded-lg ${iconStyle} flex items-center justify-center mb-3`}
      >
        <Icon size={18} />
      </div>
      <div className="text-ink-100 font-medium text-sm mb-1">{title}</div>
      <div className="text-ink-500 text-xs leading-relaxed mb-3">{desc}</div>
      <div>
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   MetricBox — Projects 페이지 수치 카드
   ───────────────────────────────────────────────────────── */
export function MetricBox({ value, label, highlight = false }) {
  return (
    <div className="bg-ink-800 border border-ink-700 rounded-lg p-4">
      <div
        className={`text-2xl font-medium tracking-tight leading-none ${highlight ? "text-grad" : "text-ink-100"}`}
      >
        {value}
      </div>
      <div className="text-xs font-mono text-ink-500 mt-2">{label}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Bullet — Projects 페이지 contributions 리스트 아이템
   ───────────────────────────────────────────────────────── */
export function Bullet({ children }) {
  return (
    <div className="text-sm text-ink-300 leading-relaxed flex items-start gap-2">
      <span className="text-accent-purple-soft font-mono mt-0.5 flex-shrink-0">
        ▸
      </span>
      <span>{children}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   CareerItem — Experience 페이지 한 줄
   ───────────────────────────────────────────────────────── */
export function CareerItem({ title, badge, desc }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="text-sm font-medium text-ink-100 mb-1">
        {title}
        {badge && (
          <span className="ml-2 text-xs font-mono text-accent-purple-soft">
            · {badge}
          </span>
        )}
      </div>
      <div className="text-xs text-ink-500 leading-relaxed">{desc}</div>
    </div>
  );
}

export function SideCard({ eyebrow, children }) {
  return (
    <div className="bg-ink-900 border border-ink-700 rounded-xl p-4">
      <Eyebrow>{eyebrow}</Eyebrow>
      {children}
    </div>
  );
}

export function SideItem({ title, date, accent }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="text-sm text-ink-100">
        {title}
        {accent && (
          <span className="ml-1 text-accent-purple-soft">{accent}</span>
        )}
      </div>
      <div className="text-xs font-mono text-ink-500">{date}</div>
    </div>
  );
}

export { ArrowRight, Github, ExternalLink, Mail };
