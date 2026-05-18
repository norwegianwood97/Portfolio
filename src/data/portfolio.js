export const profile = {
  name: "최준혁",
  title: "Backend / AI Agent Engineer",
  summary:
    "Java/Spring 기반 백엔드 개발과 Python 기반 AI/LLM 프로젝트 경험을 함께 쌓고 있습니다. REST API, 데이터 자동화, 소형 LLM 챗봇 프로토타입, AWS EC2 기반 AI Agent 서버 운영까지 실무에 가까운 흐름으로 확장해왔습니다.",
  about:
    "백엔드 개발을 중심으로 REST API 개발, Java/JSP 기반 서비스 유지보수, Python 자동화, Hugging Face 기반 소형 LLM 챗봇 개발을 경험했습니다. 최근에는 AWS EC2 Ubuntu 환경에서 OpenClaw 서버와 OpenAI API, Telegram Bot 연동을 구성하며 AI Agent 기반 개발 및 운영 역량을 쌓고 있습니다.",
};

export const skills = [
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "JSP", "REST API", "Flask", "Express.js"],
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
    ],
  },
  {
    category: "Database / Cache",
    items: ["MySQL", "PostgreSQL", "Redis"],
  },
  {
    category: "Automation",
    items: ["Selenium", "BeautifulSoup"],
  },
  {
    category: "Infra / Tools",
    items: [
      "AWS EC2",
      "Docker",
      "GitHub Actions",
      "Linux CLI",
      "systemd",
      "RabbitMQ",
    ],
  },
];

export const projects = [
  {
    title: "소형 LLM 기반 고객 질의응답 챗봇 프로토타입",
    type: "Work Project / AI / LLM / Backend",
    period: "2025.06 ~ 2026.01",
    detailLink: "https://www.notion.so/llm-chatbot-detail-placeholder",
    stack: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "Flask",
      "GGUF",
      "4bit Quantization",
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
    stack: ["Java", "JSP", "JavaScript", "Tomcat", "SVN", "Eclipse", "REST API"],
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
    title: "OpenClaw EC2 AI Agent Lab",
    type: "Personal Project / AI Agent / Infra",
    period: "2026.05",
    detailLink: "https://www.notion.so/openclaw-ec2-ai-agent-lab-placeholder",
    stack: [
      "AWS EC2",
      "Ubuntu",
      "OpenClaw",
      "OpenAI API",
      "Telegram Bot",
      "systemd",
    ],
    details: [
      "AWS EC2 Ubuntu 환경에 OpenClaw 서버 구축",
      "OpenAI API 및 Telegram Bot 연동 구성",
      "systemd 서비스 실행, 로그 확인, 프로세스 관리 실습",
      "API Key 설정 오류, session lock, gateway 연결 문제 트러블슈팅",
    ],
  },
  {
    title: "STOCKING - 모의 주식 투자 서비스",
    type: "Team Project / Backend / Performance",
    period: "2024.03 ~ 2024.05",
    detailLink: "https://www.notion.so/stocking-detail-placeholder",
    highlight: "성과: TPS +660.7% 개선 / 10만 건 동시 요청 처리 테스트",
    stack: ["Spring Boot", "JPA", "MySQL", "Redis", "RabbitMQ", "AWS", "JUnit"],
    details: [
      "모의 주식 주문/거래 API 개발",
      "Redis 캐싱 및 RabbitMQ 기반 비동기 처리 구조 적용",
      "TPS +660.7% 성능 개선",
      "10만 건 동시 요청 처리 부하 테스트",
      "항해99 기수 최우수 프로젝트 선정",
    ],
  },
  {
    title: "Python 기반 병원 데이터 크롤링 자동화 시스템",
    type: "Work Project / Automation / Data",
    period: "2025.05 ~ 2025.06",
    detailLink: "https://www.notion.so/hospital-data-crawling-placeholder",
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
    title: "소규모 웹사이트 제작 및 배포 경험",
    type: "Freelance / Web / Deployment",
    period: "2026.01 ~ 2026.05",
    stack: ["React", "JavaScript", "Node.js", "AWS"],
    details: [
      "클라이언트 요구사항 분석",
      "웹사이트 화면 구성 및 기능 설계",
      "Node.js 기반 백엔드 API 개발",
      "AWS 환경의 서비스 배포 경험",
      "사용자 피드백 반영 및 오류 수정",
    ],
  },
];

export const experiences = [
  {
    company: "(주)갈렙에이비씨",
    role: "개발팀 / 사원",
    period: "2025.03 ~ 2026.01",
    details: [
      "소형 LLM 챗봇 프로토타입 개발",
      "Python 병원 데이터 크롤링 자동화 시스템 개발",
      "Java/JSP 기반 백엔드 서비스 유지보수 및 REST API 개발",
      "운영 중 발생한 오류 원인 분석, 예외 처리 개선, API 응답 구조 정리",
    ],
  },
  {
    company: "(주)에이치엔서브",
    role: "하나금융 파견 아르바이트",
    period: "2022.12 ~ 2023.02",
    details: [
      "챗봇 개발을 위한 금융 도메인 데이터 라벨링 및 검수",
      "질의응답 데이터 정리 및 업무 지원",
    ],
  },
  {
    company: "한양대학교 NLP 연구실",
    role: "인턴",
    period: "2021.12 ~ 2022.02",
    details: [
      "챗봇 개발을 위한 대화 데이터 수집 및 분석",
      "NLP 학습 데이터 정리 및 검증",
      "모델 파인튜닝을 위한 학습 데이터 정리 및 검수",
    ],
  },
];
