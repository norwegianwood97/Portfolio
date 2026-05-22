export const profile = {
  name: "Choi JoonHeok",
  Title: "Choi JoonHeok",
  homeTitle: "Practical Problem Solver",
  summary:
    "병원 원가관리·분석 솔루션 운영, Python 기반 데이터 수집 자동화, LLaMA 계열 sLLM 챗봇 시스템 구축을 경험했습니다. 운영 중인 시스템에서는 빠른 구현보다 기존 기능 보존과 영향 범위 확인을 중요하게 생각합니다.",
  aboutSections: [
    {
      title: "백엔드 유지보수",
      description:
        "Java/JSP 기반 병원 원가관리·분석 솔루션 기능 수정, 개발, 오류 해결",
    },
    {
      title: "업무 자동화",
      description: "Python 크롤링 자동화 시스템으로 데이터 수집 업무 자동화",
    },
    {
      title: "챗봇 시스템 개발",
      description: "고객 문의 데이터 기반 LLaMA 계열 챗봇 시스템 개발",
    },
  ],
};

export const heroBadges = [
  "Java/JSP Backend",
  "Python Automation",
  "LLM Chatbot",
  "180h → 1h",
];

export const skills = [
  {
    category: "Backend",
    items: ["Java", "JSP", "REST API", "PostgreSQL", "Tomcat"],
  },
  {
    category: "Automation",
    items: ["Python", "Selenium", "BeautifulSoup"],
  },
  {
    category: "AI / LLM",
    items: ["LLaMA", "RAG", "GGUF", "Q4 Quantization"],
  },
  {
    category: "Frontend / Web",
    items: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    category: "Tools / Infra",
    items: ["SVN/GitLab/GitHub", "Git", "AWS EC2", "WebSocket"],
  },
  {
    category: "Message Queue",
    items: ["Redis", "Kafka"],
  },
];

export const projects = [
  {
    title: "STOCKING — 모의 주식 투자 서비스",
    subtitle:
      "항해99 기수 최우수 프로젝트 · 백엔드 개발 / 주문 API / 성능 개선 / 팀 리딩",
    description:
      "모의 주식 주문·체결 흐름을 구현한 팀 프로젝트입니다. 주문 API, DB 트랜잭션, WebSocket 통신, 메시지 큐 도입, 서버 분리 및 배포 자동화 작업을 담당했고, TPS 개선과 평균 응답시간 감소를 경험했습니다.",
    contributions: [
      "주문 API, 클라이언트 개발",
      "DB 트랜잭션, Multi-AZ, Read Replica 적용",
      "WebSocket 기반 서버 간·클라이언트 통신 구현",
      "Kafka 기반 메시지 큐 도입 및 서버 분리",
      "Docker / GitHub Actions 기반 배포 자동화",
      "테스트 코드 작성, 리팩토링, 발표 및 팀 리딩",
    ],
    highlights: [
      "TPS 77.6/s → 590.3/s",
      "평균 응답시간 1211.3ms → 177ms",
      "10만 건 부하 테스트 수행",
      "항해99 기수 최우수 프로젝트 선정",
    ],
    tech: "Node.js · MySQL · Redis · Kafka · WebSocket · Docker · AWS ECR/ECS/ALB · GitHub Actions · JMeter",
    link: "https://treasure-flare-e03.notion.site/Stocking-aa7272eb4edf442cb31bd183e1582908?pvs=143",
    repositories: [
      {
        label: "BE Repository",
        href: "https://github.com/norwegianwood97/Stocking_Backend",
      },
      {
        label: "FE Repository",
        href: "https://github.com/norwegianwood97/Stocking_Frontend",
      },
    ],
  },
];

export const education = [
  {
    title: "인하대학교 컴퓨터공학과 졸업",
    period: "2024.02",
  },
  {
    title: "경기고등학교 이과계열 졸업",
    period: "2016.02",
  },
];

export const trainingActivities = [
  {
    title: "팀스파르타 항해99 백엔드 Node.js 과정 수료",
    period: "2024.02 - 2024.07",
  },
  {
    title: "한양대학교 NLP 연구실 인턴",
    period: "2021.12 - 2022.02",
  },
];

export const languageMilitary = [
  {
    title: "TOEIC Speaking Test 180점 / Advanced Mid",
    period: "2024.06",
  },
  {
    title: "TOEIC 920점",
    period: "2021.11",
  },
  {
    title: "육군 병장 만기전역",
    period: "2020.01 - 2021.07",
  },
];
