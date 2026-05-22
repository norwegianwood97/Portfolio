export const profile = {
  name: "Choi Junhyeok",
  title: "Backend Engineer · AI/LLM Integration",
  homeTitle: "Backend Engineer · AI/LLM Integration",
  subtitle:
    "Java/JSP 기반 백엔드 유지보수와 REST API 개발을 중심으로, Python 자동화와 LLM 챗봇 프로토타입 개발까지 경험한 백엔드 개발자입니다.",
  summary:
    "고객사 병원 원가관리·분석 솔루션 운영, 병원 데이터 크롤링 자동화, LLaMA 계열 sLLM 파인튜닝 및 Flask 챗봇 API 연동을 경험했습니다. 운영 중인 시스템에서는 빠른 구현보다 기존 기능 보존과 영향 범위 확인을 중요하게 생각합니다.",
  aboutSections: [
    {
      title: "개발 방향성",
      description:
        "운영 중인 시스템에서는 빠른 구현보다 기존 기능 보존과 영향 범위 확인이 중요하다고 생각합니다. 레거시 코드 분석, 기능 수정, 오류 원인 추적, 배포 대응 과정에서 안정적인 변경과 유지보수성을 중요하게 다뤄왔습니다.",
    },
    {
      title: "강점",
      description:
        "Java/JSP 기반 백엔드 유지보수, Python 자동화, LLM 챗봇 프로토타입, 데이터 처리, 형상관리 마이그레이션, 웹사이트 제작 및 배포 경험 등 서로 다른 성격의 업무를 경험했습니다. 익숙하지 않은 기술도 필요한 자료를 찾아 학습하고 실제 결과로 연결하는 편입니다.",
    },
    {
      title: "관심 분야",
      description:
        "LLM과 AI Agent를 단순히 사용하는 것을 넘어, 데이터 수집, 모델 활용, API 연동, 운영 흐름 안에 안정적으로 연결하는 백엔드 개발에 관심이 있습니다.",
    },
  ],
};

export const heroBadges = [
  "Java/JSP Backend",
  "180h → 1h Automation",
  "LLM Fine-tuning",
  "TPS 77.6/s → 590.3/s",
];

export const skills = [
  {
    category: "Backend/API",
    items: ["Java", "JSP", "REST API", "Node.js", "Express.js", "Flask"],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    category: "AI/LLM",
    items: [
      "Python",
      "PyTorch",
      "Hugging Face",
      "LLaMA 계열 sLLM",
      "LoRA/Adapter",
      "4bit Quantization",
      "GGUF",
      "OpenAI API",
    ],
  },
  {
    category: "DB/Cache/ORM",
    items: ["PostgreSQL", "MySQL", "Redis", "Prisma"],
  },
  {
    category: "Crawling/Automation",
    items: ["Selenium", "BeautifulSoup"],
  },
  {
    category: "Infra/Deployment",
    items: [
      "AWS EC2",
      "AWS ECR",
      "AWS ECS",
      "AWS ALB",
      "Docker",
      "Tomcat",
      "Linux CLI",
      "SSH",
    ],
  },
  {
    category: "Tools/Version Control",
    items: ["Git", "GitHub", "GitHub Actions", "SVN", "Eclipse", "GitLab"],
  },
  {
    category: "Messaging/Realtime/Monitoring",
    items: ["Kafka", "WebSocket", "Prometheus", "Grafana"],
  },
  {
    category: "Testing/Performance",
    items: ["JMeter"],
  },
];

export const projects = [
  {
    title: "STOCKING — 모의 주식 투자 서비스",
    type: "Team Project / Backend / Performance",
    period: "2024.03 - 2024.05",
    role: "백엔드 개발 / 성능 개선 / 팀 리딩",
    highlight: "항해99 기수 최우수 프로젝트",
    stack: [
      "Node.js",
      "JavaScript",
      "MySQL",
      "Redis",
      "Prisma",
      "Passport",
      "WebSocket",
      "Kafka",
      "Docker",
      "AWS ECR",
      "AWS ECS",
      "AWS ALB",
      "GitHub Actions",
      "JMeter",
      "Prometheus",
      "Grafana",
    ],
    details: [
      "모의 주식 주문/거래 API 개발 및 Redis 기반 주문·매칭 처리 구조 개선",
      "Kafka 기반 메시지 큐로 주문 처리 흐름 분리",
      "JMeter 부하 테스트로 병목 확인 및 개선",
      "TPS 77.6/s에서 590.3/s로 개선",
      "평균 응답시간 1211.3ms에서 177ms로 감소",
      "10만 건 부하 테스트 수행",
      "Docker, AWS ECR/ECS/ALB 배포 구조와 Prometheus/Grafana 모니터링 구성",
    ],
  },
  {
    title: "OpenClaw AI Agent 서버 구축 실습",
    type: "Practice / AI Agent Runtime",
    period: "2026.05",
    role: "서버 구축 / API 연동 / Telegram Bot 테스트",
    stack: [
      "AWS EC2",
      "Ubuntu",
      "SSH",
      "OpenClaw",
      "OpenAI API",
      "Brave Search API",
      "Telegram Bot",
      "Linux CLI",
    ],
    details: [
      "AWS EC2 Ubuntu 인스턴스에 OpenClaw 설치 및 실행 환경 구성",
      "OpenAI API Key, Brave Search API Key, Telegram Bot 연동 및 동작 테스트",
      "서버 실행 상태, 로그, 프로세스 점검을 통해 오픈소스 AI Agent 운영 흐름 경험",
    ],
  },
];

export const experience = [
  {
    title: "㈜갈렙에이비씨",
    role: "개발팀 | 백엔드/AI 자동화 개발",
    period: "2025.02 - 2026.01",
    stack: [
      "Java 5~13",
      "JSP",
      "JavaScript",
      "PostgreSQL",
      "Tomcat",
      "SVN",
      "Eclipse",
      "Python",
      "Selenium",
      "BeautifulSoup",
      "PyTorch",
      "Hugging Face",
      "Flask",
      "AWS EC2",
      "C#",
      ".NET",
      "GitLab",
    ],
    details: [
      "Java/JSP 기반 병원 원가관리·분석 솔루션 유지보수 및 고객사 요구사항 기반 기능 수정/신규 개발",
      "REST API 신규 개발 및 기존 API 수정, 예외 처리 개선, API 응답 구조 정리 등 유지보수성 개선",
      "PostgreSQL 데이터 조회, 로그 및 코드 흐름 확인을 통한 운영 오류 원인 분석 및 수정 대응",
      "Python 기반 병원 데이터 크롤링 자동화 시스템 개발 및 리딩, 수동 작업 평균 180시간을 1시간 수준으로 단축",
      "고객 문의 데이터를 기반으로 질의응답 데이터셋 구성, LLaMA 계열 sLLM 파인튜닝 및 Flask 챗봇 API 연동",
      "SVN 기반 형상관리 환경을 GitLab으로 마이그레이션하고 Merge Request 기반 코드 리뷰 프로세스 도입",
      "C#/.NET 기존 시스템 버전 최신화 및 빌드 오류 의존성 정리, 병원 대용량 데이터 Excel/Python 처리 및 분석",
    ],
  },
  {
    title: "웹사이트 제작",
    role: "프리랜서",
    period: "2024.06 - 2025.02, 2026.01 - 2026.05",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "AWS EC2",
      "AWS ECR",
      "AWS ECS",
      "Git",
    ],
    details: [
      "클라이언트 요구사항 기반 소규모 웹사이트 화면 구성 및 기능 설계",
      "React/JavaScript 기반 프론트엔드 구현",
      "Node.js/Express.js 기반 간단한 백엔드 API 개발",
      "AWS EC2 환경 배포, 사용자 피드백 반영 및 오류 수정 대응",
    ],
  },
];

export const education = [
  {
    title: "인하대학교 컴퓨터공학과 편입/졸업",
    period: "2022.03 - 2024.02",
  },
  {
    title: "강남대학교 컴퓨터공학과 중퇴",
    period: "2017.03 - 2019.09",
  },
  {
    title: "경기고등학교 이과계열 졸업",
    period: "2013.03 - 2016.02",
  },
  {
    title: "한양대학교 NLP 연구실 인턴",
    period: "2021.12 - 2022.02",
  },
  {
    title: "팀스파르타 항해99 백엔드 Node.js 과정 수료",
    period: "2024.01 - 2024.05",
    note: "기수 최우수 프로젝트 선정",
  },
];

export const credentials = [
  {
    title: "TOEIC Speaking Test 180점 / Advanced Mid",
    period: "2024.06",
  },
  {
    title: "TOEIC 920점",
    period: "2021.11",
  },
  {
    title: "육군 수도기계화보병사단 AOC 병장 만기전역",
    period: "2020.01 - 2021.07",
  },
];
