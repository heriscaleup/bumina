import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#09271e] text-white">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Info Perusahaan */}
          <div className="col-span-1 md:col-span-2">
            <p className="mb-3 text-xs font-black uppercase tracking-[.22em] text-emerald-300">Pangalengan, Jawa Barat</p>
            <h3 className="text-3xl font-black tracking-[-.045em] text-white mb-4">
              Homestay Bumina EENK
            </h3>
            <p className="text-emerald-100/75 mb-4">
              Penginapan nyaman di tengah sejuknya kebun teh Pangalengan, Bandung. Tempat terbaik untuk liburan keluarga dan rombongan.
            </p>
          </div>

          {/* Link Cepat */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-emerald-100/75 hover:text-emerald-300 transition-colors">Beranda</Link></li>
              <li><Link href="/about" className="text-emerald-100/75 hover:text-emerald-300 transition-colors">Tentang Kami</Link></li>
              <li><Link href="/blog" className="text-emerald-100/75 hover:text-emerald-300 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-emerald-100/75 hover:text-emerald-300 transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Info Kontak */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-emerald-100/75">
              <li>WhatsApp: +62 852-1946-0779</li>
              <li>Alamat: QG8C+QJR, Sukaluyu, Kec. Pangalengan, Kabupaten Bandung, Jawa Barat 40378</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-emerald-100/50">
          <p>&copy; 2026 Homestay Bumina EENK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
