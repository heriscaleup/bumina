"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Pengalaman", href: "/#experience" },
    { name: "Fasilitas", href: "/#facilities" },
    { name: "Harga", href: "/#rates" },
    { name: "Blog", href: "/blog" },
    { name: "Kontak", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-950/10 bg-[#f7f8f5]/85 text-gray-800 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3.5">
          {/* Logo & Nama Homestay */}
          <Link href="/" className="group flex items-center gap-2.5" aria-label="Ke halaman beranda">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-950 text-xs font-black tracking-tighter text-emerald-300 transition-transform duration-500 group-hover:rotate-[14deg]">BE</span>
            <span className="text-lg font-black tracking-[-0.045em] text-emerald-950 sm:text-xl">
              Bumina <span className="text-emerald-600">EENK</span>
            </span>
          </Link>

          {/* Navigasi Desktop */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Navigasi utama">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`relative text-sm font-bold transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-emerald-700 after:transition-all ${pathname === item.href ? "text-emerald-800 after:w-full" : "text-gray-600 hover:text-emerald-800 after:w-0 hover:after:w-full"}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Tombol CTA (Call to Action) */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6285219460779?text=Halo%2C%20saya%20mau%20tanya%20info%20booking%20Homestay%20Bumina%20EENK"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-emerald-950/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl"
              aria-label="Booking sekarang via WhatsApp"
            >
              Booking Sekarang
            </a>
          </div>

          {/* Tombol Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full border border-emerald-950/10 p-2 md:hidden"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center" aria-hidden>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${ isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5" }`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${ isMenuOpen ? "opacity-0" : "opacity-100" }`}></span>
              <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${ isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5" }`}></span>
            </div>
          </button>
        </div>

        {/* Navigasi Mobile */}
        {isMenuOpen && (
          <div className="md:hidden pb-4" id="mobile-nav">
            <nav className="mt-3 flex flex-col rounded-2xl border border-emerald-950/10 bg-white p-3 shadow-xl shadow-emerald-950/5" aria-label="Navigasi mobile">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-xl px-3 py-2.5 text-sm font-bold text-gray-700 hover:bg-emerald-50 hover:text-emerald-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/6285219460779?text=Halo%2C%20saya%20mau%20tanya%20info%20booking%20Homestay%20Bumina%20EENK"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-xl bg-emerald-800 px-6 py-3 text-center text-sm font-black text-white"
                aria-label="Booking via WhatsApp"
              >
                Booking Sekarang
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
