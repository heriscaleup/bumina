"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [percent, setPercent] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setMounted(true);

    const duration = 500; // 0.5s loading time
    const intervalTime = 10;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setHidden(true);
            }, 500);
          }, 150);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  if (!mounted || hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#051813] transition-all duration-500 ease-in-out ${
        fadeOut ? "pointer-events-none -translate-y-full opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        <div className="flex items-center gap-3">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-base font-black uppercase tracking-[0.24em] text-white">
            Bumina<span className="text-emerald-300"> EENK</span>
          </span>
        </div>
        
        <div className="relative h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-400 to-emerald-300 transition-all duration-75 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        <span className="font-mono text-[10px] font-bold tracking-widest text-emerald-300/60">
          {Math.min(100, Math.floor(percent))}%
        </span>
      </div>
    </div>
  );
}
