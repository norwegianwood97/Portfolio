import SectionTitle from './SectionTitle.jsx';
import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="bg-navy-50 py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Skills"
          title="실무와 실험을 함께 쌓아온 기술 스택"
          description="백엔드 API 개발, LLM 프로토타이핑, 데이터 자동화, 클라우드 운영 실습까지 프로젝트 성격에 맞춰 조합해 사용했습니다."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group) => (
            <section
              key={group.category}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft"
            >
              <h3 className="text-lg font-bold text-navy-950">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-navy-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
