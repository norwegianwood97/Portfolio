import { CalendarDays } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import { experiences } from "../data/portfolio.js";

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Experience"
          title="AI와 백엔드 경험으로 이어지는 타임라인"
          description="데이터 라벨링과 NLP 연구실 경험에서 시작해 백엔드 실무, LLM 프로토타입, Agent 서버 운영 실습까지 확장해왔습니다."
        />

        <div className="relative border-l border-slate-300 pl-6 sm:pl-8">
          {experiences.map((experience) => (
            <article key={experience.company} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-4 border-white bg-cyan-600 shadow" />
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-navy-950">
                      {experience.company}
                    </h3>
                    <p className="mt-2 inline-flex rounded-full bg-navy-50 px-3 py-1 text-sm font-semibold text-navy-800">
                      {experience.role}
                    </p>
                  </div>
                  <p className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-bold text-cyan-700">
                    <CalendarDays size={15} aria-hidden="true" />
                    {experience.period}
                  </p>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                  {experience.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-700" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
