import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { generateMetadataObject } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadataObject({
  title: "Tentang Kami - Homestay Bumina EENK | Cerita di Balik Villa Pangalengan",
  description: "Pelajari kisah Homestay Bumina EENK, penginapan terpercaya di Pangalengan Bandung Selatan. Villa kebun teh, kapasitas 25 orang, rating 4.9/5 di Agoda & Booking.com.",
  canonical: "/about",
});

const WA_URL = 'https://wa.me/6285219460779?text=Halo%2C%20saya%20ingin%20tanya%20ketersediaan%20Homestay%20Bumina%20EENK%20Pangalengan';

const stats = [
  { val: '200+', lbl: 'Tamu Puas' },
  { val: '4.9★', lbl: 'Rating Agoda & Booking' },
  { val: '25', lbl: 'Kapasitas Orang' },
  { val: '1.400', lbl: 'Meter di Atas Laut' },
];

const values = [
  { icon: '🛋️', title: 'Kenyamanan', desc: 'Setiap sudut villa dirancang agar tamu merasa nyaman seperti di rumah sendiri.' },
  { icon: '😊', title: 'Keramahan', desc: 'Pelayanan tulus dan ramah adalah prioritas utama kami, dari check-in hingga checkout.' },
  { icon: '🔥', title: 'Kehangatan', desc: 'Perapian, teh hangat, dan atmosfer pegunungan — kehangatan yang sesungguhnya.' },
  { icon: '✨', title: 'Kebersihan', desc: 'Standar kebersihan ketat dijaga di setiap ruangan dan area villa.' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* ─── HERO ─────────────────────────────── */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-emerald-950">
          <div className="absolute inset-0">
            <Image
              src="/herohome-kebon-teh.webp"
              alt="Kebun Teh Pangalengan — Homestay Bumina EENK"
              fill
              className="object-cover opacity-30"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 to-emerald-950" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24">
            <span className="inline-block bg-emerald-800 text-emerald-300 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
              Tentang Kami
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Cerita di Balik<br />
              <span className="text-emerald-400">Bumina EENK</span>
            </h1>
            <p className="text-emerald-200 text-lg sm:text-xl max-w-2xl mx-auto">
              Sebuah tempat untuk pulang — di mana kehangatan bertemu dengan sejuknya alam Pangalengan yang memukau.
            </p>
          </div>
        </section>

        {/* ─── STATS BAR ─────────────────────────── */}
        <section className="bg-emerald-900 border-y border-emerald-800">
          <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map(s => (
              <div key={s.lbl}>
                <div className="text-3xl font-black text-emerald-400">{s.val}</div>
                <div className="text-emerald-300 text-sm mt-1">{s.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── KISAH KAMI ─────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
                  Kisah Kami
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  Dari Mimpi Sederhana<br />Jadi Rumah Kedua
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    Homestay Bumina EENK berawal dari sebuah mimpi sederhana: menciptakan ruang di mana keluarga dan sahabat bisa berkumpul, melepaskan penat dari hiruk pikuk kota, dan kembali terhubung dengan alam.
                  </p>
                  <p>
                    Terletak di jantung perkebunan teh Pangalengan yang legendaris, kami membangun villa ini bukan hanya sebagai tempat menginap, tapi sebagai rumah kedua. Setiap sudutnya kami rancang untuk memberikan kenyamanan maksimal — dari perapian yang menghangatkan suasana hingga jendela besar yang membingkai pemandangan gunung yang megah.
                  </p>
                  <p>
                    Bagi kami, kebahagiaan adalah melihat tawa tamu saat berkumpul di malam hari, menyaksikan mereka menikmati secangkir teh hangat di pagi hari, dan menjadi bagian dari kenangan liburan yang tak terlupakan.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['/konten1.webp', '/konten2.webp', '/pemandangan1.webp'].map((src, i) => (
                      <div key={i} className="w-10 h-10 relative rounded-full overflow-hidden ring-2 ring-white">
                        <Image src={src} alt="Tamu Bumina EENK" fill className="object-cover" unoptimized loading="lazy" sizes="40px" />
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">200+ tamu sudah merasakan pengalamannya</span>
                </div>
              </div>
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/konten2.webp"
                  alt="Suasana villa Homestay Bumina EENK Pangalengan"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  unoptimized
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 flex items-center gap-3">
                    <span className="text-2xl">🏔️</span>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">Pangalengan, Bandung Selatan</div>
                      <div className="text-gray-500 text-xs">1.400 mdpl · Udara 17°C</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── VISI & MISI ────────────────────────── */}
        <section className="py-24 bg-emerald-950 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-emerald-800 text-emerald-300 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
                Tujuan Kami
              </span>
              <h2 className="text-4xl sm:text-5xl font-black mb-4">Visi &amp; Misi</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
                <div className="w-14 h-14 bg-emerald-800 rounded-2xl flex items-center justify-center text-3xl mb-6">🎯</div>
                <h3 className="text-2xl font-black mb-4 text-emerald-400">Visi</h3>
                <p className="text-emerald-100 leading-relaxed text-lg">
                  Menjadi destinasi penginapan pilihan utama di Pangalengan — dikenal karena kehangatan pelayanannya, kenyamanan fasilitasnya, dan keindahan alam yang otentik.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
                <div className="w-14 h-14 bg-emerald-800 rounded-2xl flex items-center justify-center text-3xl mb-6">🚀</div>
                <h3 className="text-2xl font-black mb-4 text-emerald-400">Misi</h3>
                <ul className="space-y-3 text-emerald-100">
                  {[
                    'Menyediakan fasilitas yang bersih, nyaman, dan lengkap',
                    'Memberikan pelayanan yang ramah dan personal seperti keluarga',
                    'Membantu tamu menjelajahi keindahan wisata lokal Pangalengan',
                    'Menciptakan kenangan liburan yang tak terlupakan bagi setiap tamu',
                  ].map(m => (
                    <li key={m} className="flex items-start gap-3">
                      <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── NILAI-NILAI ────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
                Nilai-Nilai Kami
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Apa yang Kami Jaga</h2>
              <p className="text-gray-500 text-lg">Prinsip yang menjadi fondasi pelayanan kami setiap hari.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(v => (
                <div key={v.title} className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">{v.icon}</div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── GALERI SINGKAT ─────────────────────── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
                Suasana Villa
              </span>
              <h2 className="text-4xl font-black text-gray-900">Lihat Sendiri Keindahannya</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { src: '/herohome-padang-yang-luas.webp', alt: 'Padang luas Bumina EENK Pangalengan', span: 'lg:col-span-2' },
                { src: '/pemandangan1.webp', alt: 'Pemandangan gunung dari Bumina EENK', span: '' },
                { src: '/konten1.webp', alt: 'Suasana dalam villa Bumina EENK', span: '' },
                { src: '/pemandangan2.webp', alt: 'Alam Pangalengan Bandung Selatan', span: '' },
                { src: '/herohome-tamanlangit.webp', alt: 'Taman Langit Pangalengan dekat Bumina EENK', span: '' },
              ].map((img, i) => (
                <div key={i} className={`h-60 relative rounded-2xl overflow-hidden group ${img.span}`}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized loading="lazy" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ────────────────────────────────── */}
        <section className="py-24 bg-emerald-950">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Siap Menciptakan Kenangan?
            </h2>
            <p className="text-emerald-300 text-lg mb-10">
              Jadikan Homestay Bumina EENK bagian dari cerita liburan Anda selanjutnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-400 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-2xl"
              >
                Chat WhatsApp
              </a>
              <Link
                href="/contact"
                className="border-2 border-emerald-600 hover:border-emerald-400 text-emerald-300 hover:text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all"
              >
                Lihat Lokasi &amp; Kontak
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
