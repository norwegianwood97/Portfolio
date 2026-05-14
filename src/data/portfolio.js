export const profile = {
  name: "최준혁",
  title: "Backend / AI Agent Engineer",
  summary:
    "AI Agent와 LLM 활용 경험을 보유한 Java/Spring 기반 백엔드 개발자입니다. REST API 개발, Python 자동화, Hugging Face 기반 소형 LLM 챗봇 개발, AWS EC2 기반 AI Agent 서버 구축 경험이 있습니다.",
  about:
    "Java/Spring 기반 백엔드 개발을 중심으로 REST API 개발, Java/JSP 기반 레거시 시스템 유지보수, Python 자동화, Hugging Face 기반 소형 LLM 챗봇 개발을 경험했습니다. 최근에는 AWS EC2 Ubuntu 환경에서 OpenClaw 서버를 구축하고 OpenAI API 및 Telegram Bot 연동을 구성하며 AI Agent 기반 개발·운영 워크플로우를 실습했습니다.",
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
    category: "Data / Automation",
    items: ["Selenium", "BeautifulSoup", "MySQL", "PostgreSQL", "Redis"],
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
    stack: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "Flask",
      "GGUF",
      "4bit Quantization",
    ],
    details: [
      "고객사 제공 데이터를 기반으로 질의응답 목적의 소형 LLM 챗봇 프로토타입을 개발",
      "파인튜닝, 4bit 양자화, GGUF 변환 적용",
      "Flask/Python 기반 API 형태로 챗봇 기능 연동",
      "회사 보안상 실제 코드와 데이터는 비공개",
    ],
  },
  {
    title: "OpenClaw EC2 AI Agent Lab",
    type: "Personal Project / AI Agent / Infra",
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
      "OpenAI API 및 Telegram Bot 연동",
      "systemd 서비스 실행, 로그 확인, 프로세스 관리",
      "API Key 설정 오류, session lock, gateway 연결 문제 트러블슈팅",
    ],
  },
  {
    title: "STOCKING — 모의 주식 투자 서비스",
    type: "Team Project / Backend / Performance",
    stack: ["Spring Boot", "JPA", "MySQL", "Redis", "RabbitMQ", "AWS", "JUnit"],
    details: [
      "모의 주식 주문/거래 API 개발",
      "Redis 캐싱 및 RabbitMQ 기반 비동기 처리 구조 적용",
      "TPS 약 660.7% 개선",
      "10만 건 동시 요청 처리 테스트",
      "항해99 기수 최우수 프로젝트 선정",
    ],
  },
  {
    title: "Python 기반 병원 데이터 크롤링 자동화 시스템",
    type: "Work Project / Automation / Data",
    stack: ["Python", "Selenium", "BeautifulSoup", "MySQL", "PostgreSQL"],
    details: [
      "병원 데이터 크롤링 자동화 로직 개발",
      "동적 페이지 로딩 대응",
      "수집 데이터 정제 및 품질 확인",
      "MySQL/PostgreSQL 저장 구조 설계",
      "회사 보안상 실제 코드와 데이터는 비공개",
    ],
  },
  {
    title: "소규모 웹사이트 제작 및 배포 경험",
    type: "Freelance / Web / Deployment",
    stack: ["React", "JavaScript", "Node.js", "AWS"],
    details: [
      "클라이언트 요구사항 분석",
      "웹사이트 화면 구성 및 기능 설계",
      "Node.js 기반 백엔드 API 개발",
      "AWS 환경을 활용한 웹 서비스 배포",
      "사용자 피드백 반영 및 오류 수정",
    ],
  },
];

export const experiences = [
  {
    company: "㈜갈렙에이비씨",
    role: "개발팀 / 사원",
    period: "2025.03 ~ 2026.01",
    details: [
      "소형 LLM 챗봇 프로토타입 개발",
      "Python 병원 데이터 크롤링 자동화 시스템 개발",
      "Java/JSP 기반 백엔드 시스템 유지보수 및 REST API 개발",
      "운영 중 발생한 오류 원인 분석, 예외 처리 개선, API 응답 구조 정리",
    ],
  },
  {
    company: "에이치엔서브",
    role: "하나금융 파견 아르바이트",
    period: "2022.12 ~ 2023.02",
    details: [
      "챗봇 개발을 위한 금융 도메인 데이터 라벨링 및 검수",
      "질의응답 데이터 정리 및 사무 지원",
    ],
  },
  {
    company: "한양대학교 NLP 연구실",
    role: "인턴",
    period: "2021.12 ~ 2022.02",
    details: [
      "챗봇 개발을 위한 대화 데이터 수집 및 분석",
      "NLP 학습 데이터 정리 및 품질 검수",
      "모델 파인튜닝을 위한 학습 데이터 정리 및 검수",
    ],
  },
];

export const contacts = [
  {
    label: "Portfolio",
    value:
      "https://treasure-flare-e03.notion.site/AI-Agent-LLM-Java-Spring-48e039946151831e92b0817e1b7f3b43?pvs=143",
    href: "https://treasure-flare-e03.notion.site/AI-Agent-LLM-Java-Spring-48e039946151831e92b0817e1b7f3b43?pvs=143",
  },
  {
    label: "GitHub",
    value: "https://github.com/norwegianwood97",
    href: "https://github.com/norwegianwood97",
  },
];
