import type { Metadata } from 'next';
import { generateMetadataObject } from '@/lib/seo';

const WA_URL = 'https://wa.me/6285219460779?text=Halo%2C%20saya%20ingin%20tanya%20ketersediaan%20Homestay%20Bumina%20EENK%20Pangalengan';
const SITE_URL = 'https://buminaeenk.com';

export const metadata: Metadata = generateMetadataObject({
  title: 'Nimo Highland Pangalengan — Sky Bridge, Tiket & Cara Ke Sana 2025',
  description: 'Panduan lengkap wisata Nimo Highland Pangalengan: tiket masuk, sky bridge tapal kuda, jam buka, cara ke sana dari Bandung. Homestay Bumina EENK hanya 20 menit dari Nimo Highland.',
  keywords: ['nimo highland pangalengan', 'sky bridge nimo highland', 'tiket nimo highland', 'nimo highland bandung', 'nimo highland cara ke sana', 'wisata pangalengan nimo'],
  canonical: '/nimo-highland-pangalengan/',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Nimo Highland',
  description: 'Destinasi wisata Nimo Highland di Pangalengan dengan Glass Sky Bridge berbentuk tapal kuda (horseshoe). Panorama 360 derajat kebun teh dan Situ Cileunca dari ketinggian.',
  url: `${SITE_URL}/nimo-highland-pangalengan/`,
  address: { '@type': 'PostalAddress', streetAddress: 'Jl. Cisarua', addressLocality: 'Pangalengan', addressRegion: 'Jawa Barat', addressCountry: 'ID' },
  nearbyLodging: { '@type': 'LodgingBusiness', name: 'Homestay Bumina EENK', url: SITE_URL, telephone: '+6285219460779', description: 'Penginapan 20 menit dari Nimo Highland. Menginap semalam dan berangkat pagi untuk hindari keramaian.' },
};

const faqs = [
  { q: 'Berapa tiket masuk Nimo Highland Pangalengan?', a: 'Tiket masuk Nimo Highland sekitar Rp 30.000–50.000 per orang. Harga bisa berubah tergantung periode (weekday/weekend) dan event tertentu. Selalu cek info terbaru sebelum berangkat.' },
  { q: 'Nimo Highland buka jam berapa?', a: 'Nimo Highland umumnya buka pukul 07.00–17.00 WIB. Datang sebelum jam 09.00 sangat disarankan untuk menghindari keramaian dan mendapatkan view terbaik sebelum kabut muncul.' },
  { q: 'Dari Bandung ke Nimo Highland berapa lama?', a: 'Sekitar 2–2,5 jam dari pusat Kota Bandung menggunakan kendaraan pribadi via Jl. Banjaran–Pangalengan. Jika menginap di Bumina EENK, Nimo Highland hanya 20 menit dari homestay.' },
  { q: 'Apakah ada parkir di Nimo Highland?', a: 'Ya, tersedia area parkir untuk motor dan mobil. Area parkir bisa penuh di weekend dan hari libur, jadi usahakan datang pagi hari sebelum jam 09.00.' },
  { q: 'Penginapan mana yang terdekat dari Nimo Highland?', a: 'Homestay Bumina EENK hanya 20 menit berkendara dari Nimo Highland. Strategi terbaik: menginap di Bumina EENK, bangun pagi, sarapan, lalu berangkat ke Nimo sebelum ramai — dapat view terbaik, antrian lebih pendek.' },
  { q: 'Apakah Nimo Highland ramai? Kapan waktu terbaik?', a: 'Sangat ramai di weekend dan hari libur, terutama setelah jam 10.00. Waktu terbaik: weekday pagi (07.00–09.00) atau weekend subuh. Menginap semalam di dekat lokasi (Bumina EENK) adalah strategi terbaik.' },
];

export default function NimoHighlandPage() {
  return (
    <div className="font-sans antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="fixed top-0 inset-x-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-base">Bumina<span className="text-emerald-400"> EENK</span></a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm px-5 py-2 rounded-full transition-all">Book Sekarang</a>
        </div>
      </nav>

      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-950 via-indigo-900 to-blue-950">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,_#818cf8,_transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-24 pb-16">
          <span className="inline-block bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">🌉 Destinasi Viral Pangalengan</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
            Nimo Highland Pangalengan<br /><span className="text-indigo-400">Sky Bridge yang Bikin Takjub</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Glass Sky Bridge berbentuk tapal kuda dengan panorama 360° — hamparan kebun teh, Situ Cileunca dari ketinggian, dan gunung-gunung Pangalengan. Ini yang semua orang foto di sosmed.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['🎟️ Tiket Rp 30–50 ribu', '📍 Jl. Cisarua, Pangalengan', '🌅 Terbaik: Pagi hari', '🏨 20 mnt dari Bumina EENK'].map(b => (
              <span key={b} className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">{b}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#panduan" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all">Info & Tips Lengkap</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 px-8 rounded-xl transition-all">📱 Book Penginapan Terdekat</a>
          </div>
        </div>
      </section>

      <section id="panduan" className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { icon: '🎟️', label: 'Tiket Masuk', val: 'Rp 30–50 ribu' },
              { icon: '🕐', label: 'Jam Buka', val: '07.00–17.00' },
              { icon: '📍', label: 'Lokasi', val: 'Jl. Cisarua, Pangalengan' },
              { icon: '🏨', label: 'Dari Bumina', val: '20 menit' },
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
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8">Tentang Nimo Highland Pangalengan</h2>
          <div className="text-gray-600 space-y-5 text-lg leading-relaxed">
            <p><strong className="text-gray-900">Nimo Highland</strong> adalah destinasi wisata yang berlokasi di Jl. Cisarua, Pangalengan, Kabupaten Bandung. Yang menjadi daya tarik utama adalah <strong className="text-gray-900">Glass Sky Bridge berbentuk tapal kuda (horseshoe)</strong> — jembatan kaca yang membentang di atas jurang dengan pemandangan 360 derajat yang memukau.</p>
            <p>Dari atas jembatan, kamu bisa melihat hamparan kebun teh yang luas, danau Situ Cileunca dari ketinggian, dan barisan gunung-gunung Pangalengan. Tidak heran Nimo Highland menjadi salah satu destinasi <strong className="text-gray-900">paling viral di Instagram dan TikTok</strong> dalam beberapa tahun terakhir.</p>
          </div>

          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="font-black text-gray-900 mb-4">💡 Tips Penting Wisata ke Nimo Highland</h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              {[
                'Datang PAGI (sebelum jam 09.00) — sebelum ramai dan sebelum kabut menutupi view',
                'Beli tiket online jika tersedia untuk skip antrian',
                'Pakai sepatu yang nyaman — ada area jalan di kebun teh',
                'Bawa jaket — angin di atas jembatan bisa sangat kencang',
                'Charge HP dan kamera penuh — view-nya sayang dilewatkan',
                'Strategi terbaik: menginap semalam di Bumina EENK (20 mnt), berangkat pagi sebelum ramai',
              ].map(t => (
                <li key={t} className="flex gap-2"><span className="text-amber-500 flex-shrink-0">•</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-emerald-100 text-emerald-700 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">Strategi Terbaik</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Menginap di Bumina EENK, Berangkat Pagi ke Nimo</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Jarak hanya 20 menit. Bangun jam 06.00 dari homestay, sarapan, berangkat jam 07.00 — tiba di Nimo Highland sebelum ramai. View terbaik, antrian terpendek.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '⏰', step: 'Jam 05.30', desc: 'Sunrise Taman Langit (5 mnt jalan kaki dari Bumina)' },
              { icon: '🍳', step: 'Jam 06.30', desc: 'Sarapan di homestay, siap-siap berangkat' },
              { icon: '🌉', step: 'Jam 07.00', desc: 'Berangkat ke Nimo Highland, tiba sebelum ramai' },
            ].map(s => (
              <div key={s.step} className="bg-white rounded-xl p-5 text-center shadow-sm">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="font-black text-emerald-700 text-sm mb-1">{s.step}</div>
                <div className="text-gray-600 text-sm">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105">📱 Book Bumina EENK via WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">FAQ Nimo Highland Pangalengan</h2>
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
        <a href="/" className="font-bold text-white hover:text-emerald-400 transition-colors">Homestay Bumina EENK</a>
        <span className="mx-2">·</span><span>Pangalengan, Bandung Selatan</span>
        <span className="mx-2">·</span>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">WhatsApp</a>
      </footer>
    </div>
  );
}
