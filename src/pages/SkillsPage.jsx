import {
  Server,
  Bot,
  Brain,
  MonitorSmartphone,
  Cloud,
  Layers,
} from 'lucide-react';
import {
  PageShell,
  Eyebrow,
  PageHeading,
  SkillCard,
} from '../components';

const SKILLS = [
  {
    icon: Server,
    title: 'Backend',
    desc: '견고한 API와 데이터 흐름 설계',
    tags: ['Java', 'JSP', 'Spring', 'REST', 'PostgreSQL', 'Tomcat'],
    accent: 'purple',
  },
  {
    icon: Bot,
    title: 'Automation',
    desc: '반복 업무 자동화 (180h → 1h)',
    tags: ['Python', 'Selenium', 'BeautifulSoup'],
    accent: 'cyan',
  },
  {
    icon: Brain,
    title: 'AI / LLM',
    desc: 'sLLM 파인튜닝 + RAG 파이프라인',
    tags: ['LLaMA', 'RAG', 'GGUF', 'Q4 Quant'],
    accent: 'purple',
  },
  {
    icon: MonitorSmartphone,
    title: 'Frontend / Web',
    desc: '화면과 데이터를 잇는 UI 구현',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    accent: 'cyan',
  },
  {
    icon: Cloud,
    title: 'Tools / Infra',
    desc: '형상관리 · 배포 · 클라우드 인프라',
    tags: ['SVN', 'GitLab', 'GitHub', 'Git', 'AWS EC2', 'WebSocket'],
    accent: 'purple',
  },
  {
    icon: Layers,
    title: 'Message Queue',
    desc: '비동기 메시징과 캐시',
    tags: ['Redis', 'Kafka'],
    accent: 'cyan',
  },
];

export default function SkillsPage() {
  return (
    <PageShell active="Skills">
      <Eyebrow>Tech Stack</Eyebrow>
      <PageHeading>실무에 필요한 기술을 중심으로 익혀왔습니다.</PageHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILLS.map(skill => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </PageShell>
  );
}
