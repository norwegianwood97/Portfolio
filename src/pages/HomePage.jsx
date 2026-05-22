import { motion } from "framer-motion";
import { Check, Github, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { profile } from "../data/portfolio.js";
import { containerVariants, itemVariants } from "../utils/animations.js";

const emailAddress = "jhchoi1997@gmail.com";
const profileImage = `${import.meta.env.BASE_URL}assets/profile.png`;

function PageSection({
  id,
  children,
  className = "",
  textClassName = "text-slate-900",
}) {
  return (
    <section id={id} className={textClassName}>
      <motion.div
        variants={containerVariants}
        className={`section-shell min-h-[calc(100vh-7rem)] py-12 sm:py-14 lg:py-16 ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}

function fallbackCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  textarea.style.opacity = "0";

  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand("copy");
  } finally {
    document.body.removeChild(textarea);
  }
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      fallbackCopyText(text);
      return;
    }
  }

  fallbackCopyText(text);
}

export default function HomePage() {
  const [showToast, setShowToast] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const showTimerRef = useRef(null);
  const toastTimerRef = useRef(null);
  const hideTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (showTimerRef.current) {
        window.clearTimeout(showTimerRef.current);
      }
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await copyText(emailAddress);
    } catch {
      // Toast still appears so the click has visible feedback.
    }

    if (showTimerRef.current) {
      window.clearTimeout(showTimerRef.current);
    }
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }

    setShowToast(true);
    setIsToastVisible(false);

    showTimerRef.current = window.setTimeout(() => {
      setIsToastVisible(true);
    }, 10);

    toastTimerRef.current = window.setTimeout(() => {
      setIsToastVisible(false);

      hideTimerRef.current = window.setTimeout(() => {
        setShowToast(false);
      }, 250);
    }, 1400);
  };

  const toast = showToast
    ? createPortal(
        <div
          className={`fixed left-1/2 top-1/2 z-[9999] flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-slate-800/10 bg-slate-900/90 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-slate-950/25 backdrop-blur transition-all duration-300 ${
            isToastVisible
              ? "-translate-y-1/2 scale-100 opacity-100"
              : "-translate-y-[45%] scale-95 opacity-0"
          }`}
          role="status"
          aria-live="polite"
        >
          <Check
            size={16}
            className="shrink-0 text-slate-200"
            aria-hidden="true"
          />
          <span>메일 주소가 복사되었습니다.</span>
        </div>,
        document.body,
      )
    : null;

  return (
    <PageSection
      id="home"
      className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_320px]"
      textClassName="text-slate-950"
    >
      <motion.div variants={containerVariants} className="max-w-3xl">
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold leading-[1.1] text-slate-950 sm:text-6xl lg:text-5xl"
        >
          {profile.Title}
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="mt-4 text-2xl font-medium tracking-wide text-slate-700 sm:text-3xl lg:text-2xl"
        >
          {profile.homeTitle}
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <a
            href="https://github.com/norwegianwood97"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
          <button
            type="button"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100"
            onClick={handleCopyEmail}
          >
            <Mail size={18} aria-hidden="true" />
            Email
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="justify-self-center lg:justify-self-end"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <img
            src={profileImage}
            alt="Choi JoonHeok profile"
            className="aspect-[4/5] w-[min(72vw,260px)] rounded-xl object-cover ring-1 ring-slate-200"
          />
        </div>
      </motion.div>

      {toast}
    </PageSection>
  );
}
