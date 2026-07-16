import type { Metadata } from 'next';
import { generateMetadataObject } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';

const WA_URL = 'https://wa.me/6285219460779?text=Halo%2C%20saya%20ingin%20tanya%20ketersediaan%20Homestay%20Bumina%20EENK%20Pangalengan';
const SITE_URL = 'https://buminaeenk.com';

export const metadata: Metadata = generateMetadataObject({
  title: 'Wayang Windu Panenjoan Pangalengan — Spot Sunrise Terbaik Bandung 2026',
  description: 'Panduan wisata Wayang Windu Panenjoan Pangalengan: sunrise terbaik, tiket masuk, jam terbaik, dan rute dari Bandung. Homestay Bumina EENK hanya 25 menit — strategi sunrise terbaik.',
  keywords: ['wayang windu pangalengan', 'wayang windu panenjoan', 'sunrise wayang windu', 'kebun teh wayang windu', 'spot sunrise bandung', 'wisata wayang windu tiket'],
  canonical: '/wayang-windu-pangalengan/',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Wayang Windu Panenjoan',
  description: 'Spot sunrise terbaik di Pangalengan, Bandung. Hamparan kebun teh seluas mata memandang dengan jembatan kayu ikonik. Sunrise spektakuler sekitar jam 05.30 dari ketinggian 1.600 mdpl.',
  url: `${SITE_URL}/wayang-windu-pangalengan/`,
  address: { '@type': 'PostalAddress', addressLocality: 'Pangalengan', addressRegion: 'Jawa Barat', addressCountry: 'ID' },
  nearbyLodging: { '@type': 'LodgingBusiness', name: 'Homestay Bumina EENK', url: SITE_URL, telephone: '+6285219460779', description: 'Penginapan 25 menit dari Wayang Windu. Strategi terbaik: menginap dan berangkat subuh untuk sunrise.' },
};

const faqs = [
  { q: 'Sunrise di Wayang Windu jam berapa?', a: 'Sunrise terbaik di Wayang Windu Panenjoan sekitar pukul 05.30–06.00 WIB. Disarankan tiba di lokasi sebelum jam 05.30 untuk mendapatkan spot foto terbaik. Berangkat dari Bumina EENK jam 05.00 = tiba tepat waktu.' },
  { q: 'Berapa tiket masuk Wayang Windu Panenjoan?', a: 'Tiket masuk Wayang Windu sekitar Rp 15.000–20.000 per orang. Harga parkir terpisah. Pastikan bawa uang cash karena belum tentu ada pembayaran digital.' },
  { q: 'Dari Bandung ke Wayang Windu berapa lama?', a: 'Sekitar 2–2,5 jam dari pusat Kota Bandung via Jl. Banjaran–Pangalengan. Jika menginap di Bumina EENK, jarak ke Wayang Windu hanya 25 menit berkendara.' },
  { q: 'Penginapan terdekat dari Wayang Windu apa?', a: 'Homestay Bumina EENK adalah pilihan terbaik — 25 menit dari Wayang Windu. Dengan menginap di sini, kamu bisa berangkat subuh jam 05.00 dan tiba di Wayang Windu tepat sebelum sunrise. Tidak perlu rush dari Bandung dini hari.' },
  { q: 'Apakah Wayang Windu bagus kalau tidak sunrise?', a: 'Tetap bagus! Kebun teh yang luas, jembatan kayu, dan pemandangan gunung tetap indah di siang hari. Namun untuk pengalaman terbaik, sunrise memang yang paling spektakuler — langit oranye di atas hamparan hijau kebun teh.' },
  { q: 'Apa yang ada di Wayang Windu Panenjoan?', a: 'Ada: hamparan kebun teh PTPN VIII seluas mata memandang, jembatan kayu yang viral di sosmed, sunrise point dengan view Gunung Wayang, jalur trekking di antara kebun teh, dan beberapa warung kopi di sekitar area.' },
];

export default function WayangWinduPage() {
  return (
    <div className="font-sans antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="fixed top-0 inset-x-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-extrabold text-white text-base">Bumina<span className="text-emerald-400"> EENK</span></Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm px-5 py-2 rounded-full transition-all">Book Sekarang</a>
        </div>
      </nav>

      <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden bg-amber-950">
        <div className="absolute inset-0">
          <Image src="/images/editorial/wayang-windu-deck.webp" alt="Dek pandang Wayang Windu saat matahari terbit" fill priority unoptimized sizes="100vw" className="object-cover scale-[1.03]" />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-950/25 via-amber-950/45 to-slate-950/95" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-24 pb-16">
          <span className="inline-block bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">🌅 Spot Sunrise Terbaik Bandung</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
            Wayang Windu Panenjoan<br /><span className="text-amber-400">Sunrise Paling Epik di Pangalengan</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Langit oranye menyala di atas hamparan kebun teh hijau — dari 1.600 mdpl, ini pemandangan yang bikin orang nangis haru. Beneran.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['🌅 Sunrise jam 05.30', '🎟️ Tiket Rp 15–20 ribu', '📏 1.600 mdpl', '🏨 25 mnt dari Bumina EENK'].map(b => (
              <span key={b} className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">{b}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#panduan" className="bg-amber-700 hover:bg-amber-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all">Info Lengkap</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 px-8 rounded-xl transition-all">📱 Book Penginapan Terdekat</a>
          </div>
        </div>
      </section>

      <section id="panduan" className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { icon: '🌅', label: 'Waktu Sunrise', val: '05.30 WIB' },
              { icon: '🎟️', label: 'Tiket Masuk', val: 'Rp 15–20 ribu' },
              { icon: '🏔️', label: 'Ketinggian', val: '1.600 mdpl' },
              { icon: '🚗', label: 'Dari Bumina', val: '25 menit' },
            ].map(s => (
              <div key={s.label} className="p-4 rounded-xl bg-gray-50">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="font-black text-gray-900 text-lg">{s.val}</div>
                <div className="text-gray-500 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8">Tentang Wayang Windu Panenjoan</h2>
          <div className="text-gray-600 space-y-5 text-lg leading-relaxed">
            <p><strong className="text-gray-900">Wayang Windu Panenjoan</strong> adalah kawasan kebun teh PTPN VIII di Pangalengan yang menjadi salah satu spot sunrise terbaik di Bandung Selatan. Terletak di ketinggian sekitar 1.600 mdpl, pengunjung bisa menyaksikan matahari terbit dari balik Gunung Wayang dengan latar hamparan kebun teh hijau yang luas.</p>
            <p>Yang membuat Wayang Windu semakin viral adalah <strong className="text-gray-900">jembatan kayu ikonik</strong> yang dibangun di tengah kebun teh — menjadi spot foto favorit yang sudah dibagikan jutaan kali di Instagram dan TikTok.</p>
          </div>

          <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Yang Bisa Dilihat & Dilakukan</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '🌅', title: 'Sunrise Spektakuler', desc: 'Matahari terbit dari balik Gunung Wayang, langit oranye di atas kebun teh' },
              { icon: '🌿', title: 'Hamparan Kebun Teh', desc: 'Ribuan hektar kebun teh PTPN VIII yang hijau memukau' },
              { icon: '🌉', title: 'Jembatan Kayu Viral', desc: 'Spot foto ikonik yang sudah viral di seluruh sosial media' },
              { icon: '☕', title: 'Kopi Pagi', desc: 'Beberapa warung kopi tersedia untuk menghangatkan badan' },
              { icon: '📸', title: 'Golden Hour', desc: 'Cahaya golden hour di atas kebun teh — surga bagi fotografer' },
              { icon: '🥾', title: 'Trekking', desc: 'Jalur santai di antara kebun teh dengan udara segar 1.600 mdpl' },
            ].map(a => (
              <div key={a.title} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors">
                <span className="text-3xl flex-shrink-0">{a.icon}</span>
                <div><div className="font-bold text-gray-900 text-sm">{a.title}</div><div className="text-gray-500 text-sm">{a.desc}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber-100 text-amber-700 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">Strategi Sunrise Terbaik</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Menginap di Bumina EENK, Berangkat Subuh ke Wayang Windu</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Hanya 25 menit dari homestay. Tidak perlu rush dari Bandung jam 03.00 pagi — menginap di Bumina, tidur lebih nyaman, berangkat jam 05.00 dan tiba tepat untuk sunrise.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100 mb-8">
            <h3 className="font-black text-gray-900 mb-5">Jadwal Ideal Sunrise Wayang Windu dari Bumina EENK</h3>
            <div className="space-y-3">
              {[
                { time: '04.30', activity: 'Bangun di Bumina EENK', desc: 'Kopi panas, jaket tebal, siap-siap' },
                { time: '05.00', activity: 'Berangkat ke Wayang Windu', desc: '25 menit perjalanan — gelap, jadi pastikan HP/kamera terisi penuh' },
                { time: '05.25', activity: 'Tiba di lokasi', desc: 'Pilih spot foto terbaik sebelum keramaian datang' },
                { time: '05.30', activity: '🌅 SUNRISE!', desc: 'Langit mulai menyala, gunung terlihat jelas, momen terbaik untuk foto' },
                { time: '07.00', activity: 'Balik ke Bumina, sarapan', desc: 'Energi balik setelah dinginnya pagi hari' },
              ].map(({ time, activity, desc }) => (
                <div key={time} className="flex gap-4 items-start">
                  <span className="font-black text-amber-600 w-12 flex-shrink-0 text-sm">{time}</span>
                  <div><div className="font-semibold text-gray-900 text-sm">{activity}</div><div className="text-gray-500 text-xs">{desc}</div></div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105">📱 Book Bumina EENK via WhatsApp</a>
            <p className="text-gray-500 text-sm mt-3">Maksimal 20 orang · Perapian hangat · 4.9★ Booking.com</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">FAQ Wayang Windu Panenjoan</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 list-none">{q}<span className="text-emerald-500 ml-4 flex-shrink-0 group-open:rotate-180 transition-transform">▼</span></summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-gray-400 py-10 text-center text-sm">
        <Link href="/" className="font-bold text-white hover:text-emerald-400 transition-colors">Homestay Bumina EENK</Link>
        <span className="mx-2">·</span><span>Pangalengan, Bandung Selatan</span>
        <span className="mx-2">·</span>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">WhatsApp</a>
      </footer>
    </div>
  );
}
