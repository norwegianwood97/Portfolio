import { ArrowDown, Check, ExternalLink, Github, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio.js";

const portfolioUrl =
  "https://treasure-flare-e03.notion.site/AI-Agent-LLM-Java-Spring-48e039946151831e92b0817e1b7f3b43?pvs=143";
const emailAddress = "jhchoi1997@gmail.com";

function copyText(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  return Promise.resolve();
}

export default function Hero() {
  const [showToast, setShowToast] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const toastTimerRef = useRef(null);
  const hideTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    await copyText(emailAddress);

    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }

    setShowToast(true);
    window.requestAnimationFrame(() => setIsToastVisible(true));

    toastTimerRef.current = window.setTimeout(() => {
      setIsToastVisible(false);

      hideTimerRef.current = window.setTimeout(() => {
        setShowToast(false);
      }, 300);
    }, 1200);
  };

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-navy-950 text-white"
    >
      <img
        src={`${import.meta.env.BASE_URL}assets/hero-ai-engineer.png`}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/35" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-navy-950 to-transparent" />

      <div className="section-shell flex min-h-[calc(100vh-5.5rem)] items-center py-20 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-semibold text-cyan-100 sm:text-3xl">
            {profile.title}
          </p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={portfolioUrl}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={18} aria-hidden="true" />
              Portfolio
            </a>
            <a
              href="https://github.com/norwegianwood97"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <button
              type="button"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              onClick={handleCopyEmail}
            >
              <Mail size={18} aria-hidden="true" />
              Email
            </button>
          </div>
        </div>
      </div>

      {showToast && (
        <div
          className={`fixed bottom-6 left-1/2 z-[60] flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-slate-900/85 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-navy-950/25 backdrop-blur transition-all duration-300 sm:bottom-8 ${
            isToastVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0"
          }`}
          role="status"
          aria-live="polite"
        >
          <Check
            size={16}
            className="shrink-0 text-cyan-300"
            aria-hidden="true"
          />
          <span>이메일이 복사되었습니다</span>
        </div>
      )}
    </section>
  );
}
