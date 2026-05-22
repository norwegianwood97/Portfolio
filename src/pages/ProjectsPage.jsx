import {
  PageShell,
  Eyebrow,
  PageHeading,
  Tag,
  Bullet,
  MetricBox,
  PrimaryButton,
  OutlineButton,
  ExternalLink,
  Github,
} from "../components";

const PROJECTS = [
  {
    tags: ["백엔드 개발", "주문 API", "성능 개선", "팀 리딩"],
    title: "STOCKING",
    subtitle: "모의 주식 투자 서비스",
    description:
      "모의 주식 주문·체결 흐름을 구현한 팀 프로젝트입니다. 주문 API, DB 트랜잭션, WebSocket 통신, 메시지 큐 도입, 서버 분리 및 배포 자동화를 담당했습니다.",
    contributions: [
      "주문 API, 클라이언트 개발",
      "DB 트랜잭션, Multi-AZ, Read Replica 적용",
      "WebSocket 기반 서버 간·클라이언트 통신 구현",
      "Kafka 기반 메시지 큐 도입 및 서버 분리",
      "Docker / GitHub Actions 기반 배포 자동화",
      "테스트 코드 작성, 리팩토링, 발표 및 팀 리딩",
    ],
    metrics: [
      { value: "7.6×", label: "TPS 77.6 → 590.3", highlight: true },
      { value: "85% ↓", label: "응답시간 1211 → 177ms", highlight: true },
      { value: "100K", label: "부하 테스트 수행" },
      { value: "Best Project", label: "항해99 기수 프로젝트 선정" },
    ],
    links: {
      notion:
        "https://treasure-flare-e03.notion.site/Stocking-aa7272eb4edf442cb31bd183e1582908?pvs=143",
      backend: "https://github.com/norwegianwood97/Stocking_Backend",
      frontend: "https://github.com/norwegianwood97/Stocking_Frontend",
    },
  },
];

export default function ProjectsPage() {
  return (
    <PageShell active="Projects">
      <Eyebrow>Projects</Eyebrow>
      <PageHeading>구현하고 개선한 경험</PageHeading>

      <div className="flex flex-col gap-6">
        {PROJECTS.map((p, idx) => (
          <ProjectCard key={idx} {...p} />
        ))}
      </div>
    </PageShell>
  );
}

function ProjectCard({
  tags,
  title,
  subtitle,
  description,
  contributions,
  metrics,
  links,
}) {
  return (
    <article className="bg-ink-900 border border-ink-700 rounded-xl p-6 sm:p-8">
      {/* 카테고리 태그 */}
      <div className="mb-3">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {/* 타이틀 */}
      <h2 className="text-xl sm:text-2xl font-medium tracking-tight mb-2">
        <span className="text-grad">{title}</span>
        <span className="text-ink-300"> — {subtitle}</span>
      </h2>

      {/* 디스크립션 */}
      <p className="text-sm text-ink-500 leading-relaxed mb-5">{description}</p>

      {/* Role / Contributions */}
      <Eyebrow>Role / Contributions</Eyebrow>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-6">
        {contributions.map((c, i) => (
          <Bullet key={i}>{c}</Bullet>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {metrics.map((m, i) => (
          <MetricBox key={i} {...m} />
        ))}
      </div>

      {/* 링크 버튼 */}
      <div className="flex flex-wrap gap-2">
        <PrimaryButton href={links.notion} icon={ExternalLink}>
          Notion
        </PrimaryButton>
        <OutlineButton href={links.backend} icon={Github}>
          BE Repository
        </OutlineButton>
        <OutlineButton href={links.frontend} icon={Github}>
          FE Repository
        </OutlineButton>
      </div>
    </article>
  );
}
