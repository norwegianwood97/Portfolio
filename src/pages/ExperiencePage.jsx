import {
  PageShell,
  Eyebrow,
  PageHeading,
  CareerItem,
  SideCard,
  SideItem,
} from "../components";

const CAREER = {
  company: "㈜갈렙에이비씨",
  team: "개발팀",
  role: "백엔드/AI 자동화 개발",
  period: "2025.02 — 2026.01",
  stack:
    "Java · JSP · Spring · JavaScript · PostgreSQL · SVN/GitLab · Git · Python · AWS",
  items: [
    {
      title: "백엔드 유지보수",
      desc: "Java/JSP 기반 병원 원가관리·분석 솔루션 기능 수정, 개발, 운영 오류 대응",
    },
    {
      title: "업무 자동화",
      badge: "180h → 1h",
      desc: "Python 크롤링 자동화 시스템을 개발해 병원 데이터 수집 시간을 약 180시간에서 1시간 수준으로 단축",
    },
    {
      title: "챗봇 시스템 개발",
      desc: "고객 문의 데이터를 기반으로 LLaMA 계열 sLLM을 파인튜닝하고, 사내 문서 벡터 DB 기반 RAG 파이프라인을 구성하여 챗봇 개발",
    },
    {
      title: "레거시 환경 개선",
      desc: "C#, Windows 7 및 .NET 3.5 기반 솔루션을 최신화하고 빌드 오류 해결",
    },
    {
      title: "협업 프로세스 개선",
      desc: "SVN 기반 형상관리 환경을 GitLab으로 마이그레이션하여 Merge Request 기반 코드 리뷰 프로세스 도입",
    },
  ],
};

const EDUCATION = [
  { title: "인하대학교 컴퓨터공학과 졸업", date: "2024.02" },
  { title: "경기고등학교 이과계열 졸업", date: "2016.02" },
];

const TRAINING = [
  {
    title: "팀스파르타 항해99 백엔드 Node.js 과정 수료",
    date: "2024.02 — 2024.07",
  },
  { title: "한양대학교 NLP 연구실 인턴", date: "2021.12 — 2022.02" },
];

const LANGUAGE = [
  { title: "TOEIC Speaking ", accent: "180점 / Advanced Mid", date: "2024.06" },
  { title: "TOEIC ", accent: "920점", date: "2021.11" },
];

export default function ExperiencePage() {
  return (
    <PageShell active="Experience">
      <Eyebrow>Experience</Eyebrow>
      <PageHeading>경력 · 학력 · 활동</PageHeading>

      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-4 md:gap-6">
        {/* 좌측 — Career */}
        <div className="bg-ink-900 border border-ink-700 rounded-xl p-5 sm:p-6">
          <Eyebrow>Career</Eyebrow>
          <h3 className="text-lg font-medium text-ink-100 mb-1">
            {CAREER.company}
          </h3>
          <div className="text-xs text-ink-500 font-mono mb-3">
            {CAREER.team} · {CAREER.role} ·{" "}
            <span className="text-accent-purple-soft">{CAREER.period}</span>
          </div>
          <div className="text-xs font-mono text-ink-300 bg-ink-800 rounded-md px-3 py-2 mb-5 leading-relaxed">
            Tech Stack: {CAREER.stack}
          </div>
          <div>
            {CAREER.items.map((item, i) => (
              <CareerItem key={i} {...item} />
            ))}
          </div>
        </div>

        {/* 우측 — Education / Training / Language */}
        <div className="flex flex-col gap-3">
          <SideCard eyebrow="Education">
            {EDUCATION.map((e, i) => (
              <SideItem key={i} {...e} />
            ))}
          </SideCard>

          <SideCard eyebrow="Training & Activities">
            {TRAINING.map((t, i) => (
              <SideItem key={i} {...t} />
            ))}
          </SideCard>

          <SideCard eyebrow="Language & Military">
            {LANGUAGE.map((l, i) => (
              <SideItem key={i} {...l} />
            ))}
          </SideCard>
        </div>
      </div>
    </PageShell>
  );
}
