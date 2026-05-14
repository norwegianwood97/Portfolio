import SectionTitle from './SectionTitle.jsx';
import { profile } from '../data/portfolio.js';

const highlights = [
  'Java/Spring 기반 REST API 개발',
  '소형 LLM 챗봇 프로토타입',
  'Python 데이터 자동화',
  'EC2 기반 AI Agent 서버 운영 실습',
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="About"
          title="백엔드에서 AI Agent 운영까지 연결하는 개발자"
          description={profile.about}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-5 text-sm font-semibold text-navy-900"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
