"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const scenes = [
  {
    image: "/images/editorial/tea-road-dawn.webp",
    eyebrow: "01 — Tiba",
    title: "Kota tertinggal di belakang.",
    copy: "Jalan berkelok membuka hamparan hijau. Udara berubah, suara melambat, dan liburan benar-benar dimulai.",
  },
  {
    image: "/images/editorial/tea-leaves-dew.webp",
    eyebrow: "02 — Bernapas",
    title: "Bukit teh bergerak bersama scroll.",
    copy: "Kabut tipis menyapu perkebunan. Dari Bumina EENK, lanskap Pangalengan bukan latar—ia bagian dari pengalaman.",
  },
  {
    image: "/images/editorial/lake-sunrise-aerial.webp",
    eyebrow: "03 — Menjelajah",
    title: "Empat menit menuju langit.",
    copy: "Taman Langit hanya sekitar empat menit dari rumah. Sunrise datang tanpa alarm kota dan tanpa perjalanan panjang.",
  },
  {
    image: "/images/editorial/homestay-rain.webp",
    eyebrow: "04 — Pulang",
    title: "Malam berakhir di depan perapian.",
    copy: "Satu rumah privat untuk keluarga dan sahabat. Hangat, sederhana, dan cukup jauh dari segala yang melelahkan.",
  },
] as const;

export default function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let activeScene = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      const nextScene = Math.min(scenes.length - 1, Math.floor(progress * scenes.length));

      section.style.setProperty("--story-progress", reducedMotion ? "0" : progress.toFixed(4));
      section.style.setProperty("--story-shift", `${(progress * -120).toFixed(2)}px`);

      if (nextScene !== activeScene) {
        activeScene = nextScene;
        setActive(nextScene);
      }
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="scroll-story" aria-label="Perjalanan visual Bumina EENK">
      <div className="scroll-story__sticky">
        <div className="scroll-story__media" aria-hidden="true">
          {scenes.map((scene, index) => (
            <div key={scene.image} className={`scroll-story__scene ${active === index ? "is-active" : ""}`}>
              <Image
                src={scene.image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                unoptimized
              />
            </div>
          ))}
          <div className="scroll-story__wash" />
          <div className="grain-overlay absolute inset-0" />
        </div>

        <div className="scroll-story__giant" aria-hidden="true">PANGALENGAN</div>

        <div className="scroll-story__content">
          <div className="scroll-story__copy" key={active}>
            <p>{scenes[active].eyebrow}</p>
            <h2>{scenes[active].title}</h2>
            <span>{scenes[active].copy}</span>
          </div>

          <div className="scroll-story__rail" aria-label={`Bagian ${active + 1} dari ${scenes.length}`}>
            {scenes.map((scene, index) => (
              <button
                key={scene.eyebrow}
                type="button"
                className={active === index ? "is-active" : ""}
                aria-label={`Lihat ${scene.eyebrow}`}
                onClick={() => {
                  const section = sectionRef.current;
                  if (!section) return;
                  const distance = section.offsetHeight - window.innerHeight;
                  window.scrollTo({ top: section.offsetTop + distance * (index / scenes.length) + 2, behavior: "smooth" });
                }}
              />
            ))}
          </div>
        </div>

        <div className="scroll-story__scroll-hint" aria-hidden="true">
          <span>Scroll to explore</span>
          <i />
        </div>
      </div>
    </section>
  );
}
