import {
  PageShell,
  StatusPill,
  OutlineButton,
  CodeEditor,
  YamlLine,
  YamlListItem,
  Github,
  Mail,
} from "../components";
import { useEffect, useState } from "react";

const EMAIL_ADDRESS = "jhchoi1997@gmail.com";

export default function HomePage() {
  const [isEmailToastVisible, setIsEmailToastVisible] = useState(false);

  useEffect(() => {
    if (!isEmailToastVisible) return undefined;

    const toastTimer = window.setTimeout(() => {
      setIsEmailToastVisible(false);
    }, 1800);

    return () => window.clearTimeout(toastTimer);
  }, [isEmailToastVisible]);

  const copyEmailAddress = async () => {
    await navigator.clipboard.writeText(EMAIL_ADDRESS);
    setIsEmailToastVisible(true);
  };

  return (
    <PageShell active="Home">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center min-h-[60vh]">
        {/* 좌측 — 텍스트 영역 */}
        <div>
          <StatusPill>Practical Problem Solver</StatusPill>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.05] mb-3">
            <span className="text-ink-100">Choi </span>
            <span className="text-grad">JoonHeok</span>
          </h1>

          <div className="text-base text-ink-300 font-medium mb-2"></div>
          <div className="text-sm text-ink-500 leading-relaxed mb-6 max-w-md">
            <div className="mt-1 text-ink-300 font-mono text-xs">
              Java · JSP · Spring · PostgreSQL · Python · AWS
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 bg-accent-purple hover:bg-accent-purple/90 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
              onClick={copyEmailAddress}
            >
              Email
              <Mail size={14} />
            </button>
            <OutlineButton
              href="https://github.com/norwegianwood97"
              icon={Github}
            >
              GitHub
            </OutlineButton>
          </div>
        </div>

        {/* 우측 — 코드 에디터 */}
        <div>
          <CodeEditor filename="whoami.yaml">
            <YamlLine k="name" v="Choi JoonHeok" />
            <YamlLine k="role" v="Backend Engineer · AI/LLM Integration" />
            <YamlLine k="stack" />
            <YamlListItem>Java · JSP · Spring</YamlListItem>
            <YamlListItem>PostgreSQL · AWS</YamlListItem>
            <YamlListItem>Python · LLaMA</YamlListItem>
            <YamlLine k="wins" />
            <YamlListItem highlight="180h → 1h">crawler </YamlListItem>
            <YamlListItem highlight="7.6× TPS">api perf </YamlListItem>
            <YamlListItem highlight="LLaMA + RAG">chatbot </YamlListItem>
          </CodeEditor>
        </div>
      </div>

      {isEmailToastVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6 pointer-events-none"
          role="status"
          aria-live="polite"
        >
          <div className="animate-fade-up rounded-lg border border-accent-purple/40 bg-ink-900/95 px-5 py-4 text-sm font-medium text-ink-100 shadow-2xl shadow-accent-purple/20 backdrop-blur">
            Email주소가 복사되었습니다
          </div>
        </div>
      )}
    </PageShell>
  );
}
