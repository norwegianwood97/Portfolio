export const profile = {
  name: "최준혁",
  title: "Backend / AI Engineer",
  homeTitle: "Backend Engineer · AI/LLM Integration",
  summary:
    "Java/Python 기반 개발 경험과 서버 운영 경험을 바탕으로, LLM·자동화·백엔드 기능을 실제 서비스 흐름에 연결해왔습니다.",
  about: [
    "백엔드 개발 실무에서는 Java/JSP 기반 레거시 시스템 유지보수, REST API 개발, 오류 원인 분석과 예외 처리 개선을 경험했습니다. 또한 Python 기반 병원 데이터 크롤링 자동화와 Hugging Face 기반 소형 LLM 챗봇 프로토타입 개발을 수행하며, 데이터 수집부터 모델 활용, API 연동까지 이어지는 흐름을 경험했습니다.",
    "최근에는 AWS EC2 Ubuntu 환경에 OpenClaw 서버를 구축하고 OpenAI API 및 Telegram Bot 연동을 구성하며, AI Agent를 실제 서버 환경에서 실행하고 운영하는 과정을 실습했습니다.",
  ],
};

export const skills = [
  {
    category: "Backend",
    items: ["Java", "JSP", "REST API", "Node.js", "Express.js", "Flask"],
  },
  {
    category: "AI / LLM",
    items: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "OpenAI API",
      "GGUF",
      "4bit Quantization",
      "LLaMA 계열 sLLM",
      "LoRA/Adapter",
    ],
  },
  {
    category: "Database / Cache",
    items: ["MySQL", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    category: "Automation",
    items: ["Selenium", "BeautifulSoup", "JMeter"],
  },
  {
    category: "Infra / Tools",
    items: [
      "AWS EC2",
      "AWS ECS",
      "AWS ALB",
      "Docker",
      "GitHub Actions",
      "Linux CLI",
      "systemd",
      "SVN",
      "Eclipse",
      "Tomcat",
    ],
  },
  {
    category: "Monitoring / Messaging",
    items: ["Kafka", "Prometheus", "Grafana", "WebSocket"],
  },
];

export const projects = [
  {
    title: "소형 LLM 기반 고객 질의응답 챗봇 개발",
    type: "Work Project / AI / LLM / Backend",
    period: "2025.06 ~ 2026.01",
    stack: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "LLaMA 계열 sLLM",
      "LoRA/Adapter",
      "4bit Quantization",
      "GGUF",
      "Flask",
      "AWS EC2",
    ],
    details: [
      "고객 제공 데이터를 기반으로 질의응답 목적의 소형 LLM 챗봇 프로토타입 개발",
      "파인튜닝, 4bit 양자화, GGUF 변환 흐름 적용",
      "Flask/Python 기반 API 형태로 챗봇 기능 연동",
      "회사 보안상 실제 코드와 데이터는 비공개",
    ],
  },
  {
    title: "병원 원가관리·분석 솔루션 백엔드 유지보수 및 기능개발",
    type: "Work Project / Backend / Legacy Maintenance",
    period: "2025.03 ~ 2026.01",
    stack: [
      "Java",
      "Spring",
      "JSP",
      "JavaScript",
      "PostgreSQL",
      "Tomcat",
      "SVN",
      "Eclipse",
      "AWS EC2",
      "REST API",
    ],
    details: [
      "고객사 병원의 원가관리·분석 솔루션에서 Java/JSP 기반 백엔드 유지보수와 기능개발 수행",
      "고객사 요구사항에 따른 기능 수정, 신규 기능 개발, REST API 개발 및 기존 API 수정",
      "Java 5~13 코드가 혼재된 레거시 환경에서 기존 구조와 영향 범위를 분석한 뒤 보수적으로 수정",
      "운영 중 발생한 오류를 로그와 코드 흐름으로 추적해 원인을 파악하고 수정 대응",
      "예외 처리 개선, API 응답 구조 정리 등 유지보수성 개선",
      "Eclipse, SVN, Tomcat 기반 개발·배포 환경에서 작업했으며 회사 보안상 실제 코드와 데이터는 비공개",
    ],
  },
  {
    title: "Python 기반 병원 데이터 크롤링 자동화 시스템",
    type: "Work Project / Automation / Data",
    period: "2025.05 ~ 2025.06",
    stack: ["Python", "Selenium", "BeautifulSoup", "MySQL", "PostgreSQL"],
    details: [
      "병원 데이터 크롤링 자동화 로직 개발",
      "동적 페이지 로딩 대응",
      "수집 데이터 정제 및 검증 흐름 구성",
      "MySQL/PostgreSQL 저장 구조 설계",
      "회사 보안상 실제 코드와 데이터는 비공개",
    ],
  },
  {
    title: "STOCKING — 모의 주식 투자 서비스",
    type: "Team Project / Backend / Performance",
    period: "2024.03 ~ 2024.05",
    highlight:
      "TPS +660.7% 개선 / 평균 응답시간 85.39% 감소 / 10만 건 부하 테스트",
    stack: [
      "Node.js",
      "MySQL",
      "Redis",
      "Kafka",
      "Docker",
      "AWS ECS",
      "JMeter",
      "Prometheus",
      "Grafana",
    ],
    details: [
      "Node.js 기반 모의 주식 투자 서비스 백엔드 개발",
      "Redis 기반 주문/매칭 처리 구조 개선",
      "Kafka 기반 메시지 큐를 적용하여 주문 처리 흐름 분리",
      "JMeter 기반 부하 테스트 수행",
      "TPS 77.6/s → 590.3/s 개선",
      "평균 응답시간 1211.3ms → 177ms 감소",
      "Docker, ECR, ECS, ALB 기반 배포 구조 적용",
      "Prometheus, Grafana 기반 모니터링 구성",
      "항해99 기수 최우수 프로젝트 선정",
    ],
  },
  {
    title: "OpenClaw AI Agent 서버 구축",
    type: "Personal Project / AI Agent / Infra",
    period: "2026.05",
    stack: [
      "AWS EC2",
      "Ubuntu",
      "OpenClaw",
      "OpenAI API",
      "Telegram Bot",
      "systemd",
      "Linux CLI",
    ],
    details: [
      "AWS EC2 Ubuntu 환경에 OpenClaw 서버 구축",
      "OpenAI API 및 Telegram Bot 연동 구성",
      "systemd 서비스 실행, 로그 확인, 프로세스 관리 실습",
      "API Key 설정 오류, session lock, gateway 연결 문제 트러블슈팅",
    ],
  },

  {
    title: "소규모 웹사이트 제작 및 배포 경험",
    type: "Freelance / Web / Deployment",
    period: "2026.01 ~ 2026.05",
    stack: ["React", "JavaScript", "Node.js", "AWS"],
    details: [
      "클라이언트 요구사항 기반 소규모 웹사이트 제작 및 배포 경험",
      "화면 구성, Node.js 기반 API 개발, AWS 배포, 피드백 반영 수행",
    ],
  },
];
