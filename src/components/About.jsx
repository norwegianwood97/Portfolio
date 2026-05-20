import PageSection from "./PageSection.jsx";
import SectionTitle from "./SectionTitle.jsx";

const education = [
  {
    title: "인하대학교 컴퓨터공학과 졸업",
    period: "2022.03 ~ 2024.02",
  },
  {
    title: "강남대학교 컴퓨터공학과 중퇴 / 편입",
    period: "2017.03 ~ 2019.09",
  },
  {
    title: "경기고등학교 이과계열 졸업",
    period: "2013.03 ~ 2016.02",
  },
];

const careers = [
  {
    title: "㈜갈렙에이비씨 개발팀 사원",
    period: "2025.03 ~ 2026.01",
    details: [
      "고객 질의응답 목적 소형 LLM 챗봇 프로토타입 개발, 파인튜닝 및 Flask/Python 기반 API 연동",
      "Python 기반 병원 데이터 크롤링 자동화 시스템 개발",
      "Java/JSP 기반 백엔드 시스템 유지보수 및 REST API 개발",
      "운영 중 발생한 오류 원인 분석, 예외 처리 개선, API 응답 구조 정리",
    ],
  },
  {
    title: "에이치엔서브 (하나금융 파견)",
    period: "2022.12 ~ 2023.02",
    details: [
      "챗봇 개발을 위한 금융 도메인 데이터 라벨링 및 검수",
      "질의응답 데이터 정리 및 사무 지원",
    ],
  },
  {
    title: "한양대학교 NLP 연구실 인턴",
    period: "2021.12 ~ 2022.02",
    details: [
      "챗봇 개발을 위한 대화 데이터 수집 및 분석",
      "NLP 학습 데이터 정리 및 품질 검수",
      "모델 파인튜닝을 위한 학습 데이터 정리 및 검수",
    ],
  },
];

const languages = [
  {
    title: "TOEIC Speaking Test 180점 / Advanced Mid",
    period: "2024.06",
  },
  {
    title: "TOEIC 920점",
    period: "2021.11",
  },
];

const cardClass =
  "rounded-lg border border-white/20 bg-white/10 px-5 py-5 text-white shadow-xl shadow-navy-950/20 backdrop-blur";

export default function About() {
  return (
    <PageSection id="about" className="flex items-center">
      <div className="w-full">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)]">
          <div className="space-y-6">
            <section>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                학력
              </h3>
              <div className="space-y-3">
                {education.map((item) => (
                  <article key={item.title} className={cardClass}>
                    <h4 className="text-base font-semibold leading-7">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm font-medium text-slate-300">
                      {item.period}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                어학
              </h3>
              <div className="space-y-3">
                {languages.map((item) => (
                  <article key={item.title} className={cardClass}>
                    <h4 className="text-base font-semibold leading-7">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm font-medium text-slate-300">
                      {item.period}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <section>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
              경력
            </h3>
            <div className="space-y-4">
              {careers.map((career) => (
                <article key={career.title} className={cardClass}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <h4 className="text-base font-semibold leading-7">
                      {career.title}
                    </h4>
                    <p className="shrink-0 text-sm font-semibold text-cyan-200">
                      {career.period}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-200">
                    {career.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageSection>
  );
}
