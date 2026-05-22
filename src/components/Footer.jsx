import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

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

export default function Footer() {
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
      }, 250);
    }, 1400);
  };

  const toast = showToast
    ? createPortal(
        <div
          className={`fixed left-1/2 top-1/2 z-[60] flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-slate-800/10 bg-slate-900/90 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-slate-950/25 backdrop-blur transition-all duration-300 ${
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
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="section-shell flex flex-col gap-5 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mt-1">Copyright © 2026</p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <button
            type="button"
            className="focus-ring rounded text-sm font-semibold text-slate-600 transition hover:text-slate-950"
            onClick={handleCopyEmail}
          >
            Email: {emailAddress}
          </button>
        </div>
      </div>

      {toast}
    </footer>
  );
}
