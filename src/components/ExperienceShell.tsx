"use client";

import { useEffect } from "react";

/**
 * Tiny interaction layer: no animation library, no layout reads inside React,
 * and it respects reduced-motion preferences. Kept global so every route gets
 * the same polished, tactile behaviour.
 */
export default function ExperienceShell() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const explicitRevealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const routeSections = Array.from(document.querySelectorAll<HTMLElement>("section")).slice(1);
    const revealItems = Array.from(new Set([...explicitRevealItems, ...routeSections]));
    revealItems.forEach((element) => element.setAttribute("data-reveal", element.dataset.reveal || ""));
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;

    root.classList.add("motion-ready");

    const update = () => {
      frame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", String(maxScroll > 0 ? window.scrollY / maxScroll : 0));

      if (!reducedMotion) {
        parallaxItems.forEach((element) => {
          const speed = Number(element.dataset.parallax || 0.08);
          const rect = element.getBoundingClientRect();
          const offset = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * speed;
          element.style.setProperty("--parallax-y", `${offset.toFixed(1)}px`);
        });
      }
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );

    revealItems.forEach((element) => observer.observe(element));
    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      root.classList.remove("motion-ready");
    };
  }, []);

  return <div className="site-scroll-progress" aria-hidden="true" />;
}
