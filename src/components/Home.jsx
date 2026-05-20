import { Check, Github, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PageSection from "./PageSection.jsx";
import { profile } from "../data/portfolio.js";

const emailAddress = "jhchoi1997@gmail.com";
const profileImage = `${import.meta.env.BASE_URL}assets/profile.png`;

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

export default function Home() {
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
    <PageSection
      id="home"
      className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_320px]"
    >
      <div className="max-w-3xl">
        <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100 backdrop-blur">
          Choi Joon Heok
        </p>
        <h1 className="text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-4xl">
          {profile.homeTitle}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

      <div className="justify-self-center lg:justify-self-end">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-3 shadow-xl shadow-navy-950/35 backdrop-blur">
          <img
            src={profileImage}
            alt="최준혁 프로필 사진"
            className="aspect-[4/5] w-[min(72vw,260px)] rounded-xl object-cover ring-1 ring-white/25"
          />
        </div>
      </div>

      {showToast && (
        <div
          className={`fixed left-1/2 top-1/2 z-[60] flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-slate-900/90 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-navy-950/25 backdrop-blur transition-all duration-300 ${
            isToastVisible
              ? "-translate-y-1/2 scale-100 opacity-100"
              : "-translate-y-[45%] scale-95 opacity-0"
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
    </PageSection>
  );
}
