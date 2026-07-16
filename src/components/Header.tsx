"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Experience", href: "/#experience", section: "experience" },
  { name: "The Stay", href: "/#stay", section: "stay" },
  { name: "Facilities", href: "/#facilities", section: "facilities" },
  { name: "Rates", href: "/#rates", section: "rates" },
  { name: "Journal", href: "/blog", section: "blog" },
] as const;

const WA_URL = "https://wa.me/6285219460779?text=Halo%2C%20saya%20mau%20tanya%20info%20booking%20Homestay%20Bumina%20EENK";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (section: string) => section === "blog" && pathname.startsWith("/blog");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#061b15]/72 text-white shadow-[0_1px_0_rgba(255,255,255,.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Bumina EENK — kembali ke beranda">
          <span className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full border border-white/15">
            <Image src="/logo.webp" alt="" fill sizes="32px" className="object-cover transition duration-500 group-hover:scale-110" unoptimized />
          </span>
          <span className="text-base font-black leading-none tracking-[-.035em] text-white">
            Bumina<span className="text-emerald-300"> EENK</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={isActive(item.section) ? "page" : undefined}
              className={`relative py-2 text-[.68rem] font-black uppercase tracking-[.14em] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-emerald-300 after:transition-transform ${isActive(item.section) ? "text-emerald-300 after:scale-x-100" : "text-white/68 after:scale-x-0 hover:text-emerald-200 hover:after:scale-x-100"}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden text-[.68rem] font-bold text-emerald-200/80 xl:inline">Agoda &amp; Booking.com · 4.9★</span>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-black text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-300 sm:px-5 sm:text-sm">
            Book Sekarang
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 lg:hidden"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <i className={`absolute left-0 top-1 block h-px w-5 bg-white transition ${isMenuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
              <i className={`absolute bottom-1 left-0 block h-px w-5 bg-white transition ${isMenuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className={`overflow-hidden border-t border-white/10 bg-[#061b15]/96 transition-[max-height,opacity] duration-500 lg:hidden ${isMenuOpen ? "max-h-[28rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"}`} aria-label="Navigasi mobile">
        <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
          {navigation.map((item, index) => (
            <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-black uppercase tracking-[.13em] ${isActive(item.section) ? "bg-emerald-300 text-emerald-950" : "text-white/75 hover:bg-white/5 hover:text-white"}`}>
              <span>{item.name}</span><span className="text-[10px] opacity-45">0{index + 1}</span>
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="mt-1 rounded-xl border border-white/10 px-4 py-3 text-sm font-black uppercase tracking-[.13em] text-white/75">Contact &amp; Location</Link>
        </div>
      </nav>
    </header>
  );
}
