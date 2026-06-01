import type { Metadata } from 'next';
import { generateMetadataObject } from '@/lib/seo';

const WA_URL = 'https://wa.me/6285219460779?text=Halo%2C%20saya%20ingin%20tanya%20ketersediaan%20Homestay%20Bumina%20EENK%20Pangalengan';
const SITE_URL = 'https://buminaeenk.com';

export const metadata: Metadata = generateMetadataObject({
  title: 'Itinerary Pangalengan 2 Hari 1 Malam — Rencana Wisata Terlengkap 2025',
  description: 'Itinerary Pangalengan 2 hari 1 malam paling worth it: Taman Langit, Nimo Highland, Situ Cileunca, Wayang Windu. Budget, tips packing, dan rekomendasi home base terbaik di Bumina EENK.',
  keywords: ['itinerary pangalengan 2 hari 1 malam', 'rencana wisata pangalengan', 'trip pangalengan', 'jadwal wisata pangalengan', 'pangalengan weekend trip', 'wisata pangalengan 2024 2025'],
  canonical: '/itinerary-pangalengan-2-hari-1-malam/',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Itinerary Pangalengan 2 Hari 1 Malam — Rencana Wisata Terlengkap 2025',
  description: 'Panduan itinerary lengkap wisata Pangalengan 2D1N dengan basecamp Homestay Bumina EENK — semua destinasi populer bisa dijangkau dalam satu trip.',
  url: `${SITE_URL}/itinerary-pangalengan-2-hari-1-malam/`,
  author: { '@type': 'Organization', name: 'Homestay Bumina EENK', url: SITE_URL },
};

const hari1 = [
  { time: '15.00', activity: 'Berangkat dari Bandung', detail: 'Via Jl. Banjaran–Pangalengan. Estimasi 1,5–2 jam tergantung lalu lintas.' },
  { time: '17.00', activity: 'Check-in Bumina EENK', detail: 'Taruh koper, bersih-bersih, jalan-jalan sebentar di sekitar kebun teh.' },
  { time: '18.30', activity: 'Masak atau order makan malam', detail: 'Dapur lengkap tersedia. Bisa juga order makanan dari warung sekitar.' },
  { time: '20.00', activity: 'Duduk di depan perapian', detail: 'Ngobrol, main kartu, atau sekadar menikmati malam dingin Pangalengan bersama.' },
  { time: '22.00', activity: 'Tidur awal', detail: 'Besok bangun subuh untuk sunrise. Jangan begadang!' },
];

const hari2 = [
  { time: '05.00', activity: 'Bangun & siap-siap', detail: 'Jaket tebal wajib. Udara pagi sekitar 13–15°C.' },
  { time: '05.30', activity: '🌤️ Taman Langit — Sunrise', detail: '5 menit jalan kaki dari Bumina! Spot sunrise terbaik dengan jembatan kayu ikonik.' },
  { time: '07.30', activity: 'Balik & sarapan di homestay', detail: 'Masak nasi goreng atau mie instan — lebih enak di udara dingin.' },
  { time: '09.00', activity: '🌉 Nimo Highland — Sky Bridge', detail: '20 menit berkendara. Datang sebelum ramai. Glass bridge tapal kuda dengan view 360°.' },
  { time: '11.00', activity: '🚣 Situ Cileunca', detail: '15 menit dari Nimo. Makan siang dulu di warung sekitar, lalu keliling danau atau rafting.' },
  { time: '14.00', activity: '🍃 Wayang Windu Panenjoan', detail: '25 menit dari Situ Cileunca. Hamparan kebun teh dan jembatan kayu yang viral.' },
  { time: '16.00', activity: 'Balik ke Bandung', detail: 'Estimasi 1,5–2 jam perjalanan pulang.' },
];

const faqs = [
  { q: 'Berapa total budget untuk 5 orang trip Pangalengan 2D1N?', a: 'Estimasi per orang: Transport PP Rp 40–80 ribu (kalau bagi-bagi bensin), penginapan Rp 300–400 ribu/orang (villa Rp 1,5–2 juta dibagi 5 orang), tiket wisata 4 destinasi Rp 60–80 ribu, makan Rp 100–150 ribu. Total sekitar Rp 500–700 ribu per orang untuk trip yang sangat worth it.' },
  { q: 'Naik apa ke Pangalengan?', a: 'Paling nyaman naik kendaraan pribadi (motor/mobil). Ada angkutan umum dari Terminal Leuwipanjang Bandung ke Pangalengan, tapi agak tidak praktis untuk wisata karena destinasi tersebar. Disarankan sewa mobil jika tidak punya kendaraan.' },
  { q: 'Perlu booking berapa hari sebelumnya?', a: 'Untuk weekend dan musim liburan, booking minimal H-7 sampai H-14. Untuk weekday, H-3 biasanya masih tersedia. Bumina EENK kapasitasnya hanya 1 villa (eksklusif), jadi cepat penuh saat akhir pekan.' },
  { q: 'Bawa apa untuk trip Pangalengan?', a: 'Wajib: jaket tebal (malam bisa 13°C), sepatu nyaman untuk trekking, baju ganti ekstra (kalau rafting), sunscreen untuk siang hari, kamera, powerbank, uang cash (ATM terbatas), dan obat-obatan pribadi.' },
  { q: 'Aman tidak untuk anak kecil?', a: 'Ya, sangat aman dan cocok untuk keluarga. Taman Langit, Wayang Windu, dan Bumina EENK sangat ramah anak. Untuk rafting, ada batasan usia minimal (7–10 tahun). Nimo Highland juga family-friendly.' },
];

export default function ItineraryPangalenganPage() {
  return (
    <div className="font-sans antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="fixed top-0 inset-x-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-base">Bumina<span className="text-emerald-400"> EENK</span></a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm px-5 py-2 rounded-full transition-all">Book Sekarang</a>
        </div>
      </nav>

      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-amber-950 via-orange-900 to-emerald-950">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_#f59e0b,_transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-24 pb-16">
          <span className="inline-block bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">🗺️ Panduan Trip Pangalengan</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
            Itinerary Pangalengan<br /><span className="text-amber-400">2 Hari 1 Malam Paling Worth It</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Taman Langit → Nimo Highland → Situ Cileunca → Wayang Windu. Semua bisa dalam 1 trip, semua dekat dari <strong className="text-emerald-400">Bumina EENK</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#itinerary" className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all">Lihat Itinerary Lengkap</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 px-8 rounded-xl transition-all">📱 Book Home Base</a>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { icon: '📍', label: 'Destinasi', val: '4 Spot Hits' },
              { icon: '💰', label: 'Budget/Orang', val: 'Rp 500–700 ribu' },
              { icon: '🕔', label: 'Durasi', val: '2 Hari 1 Malam' },
              { icon: '🏠', label: 'Home Base', val: 'Bumina EENK' },
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

      <section id="itinerary" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-12 text-center">Jadwal Perjalanan Detail</h2>

          <div className="mb-16">
            <div className="inline-flex items-center gap-3 bg-emerald-600 text-white font-black px-6 py-2.5 rounded-full mb-8">
              <span>📅</span> Hari 1 — Perjalanan & Check-in
            </div>
            <div className="space-y-4">
              {hari1.map(({ time, activity, detail }) => (
                <div key={time} className="flex gap-4">
                  <div className="w-16 flex-shrink-0 text-right">
                    <span className="font-black text-emerald-600 text-sm">{time}</span>
                  </div>
                  <div className="w-px bg-emerald-200 flex-shrink-0 relative">
                    <div className="absolute top-1 -left-1.5 w-3 h-3 bg-emerald-500 rounded-full" />
                  </div>
                  <div className="pb-6">
                    <div className="font-bold text-gray-900 mb-1">{activity}</div>
                    <div className="text-gray-500 text-sm">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-3 bg-amber-600 text-white font-black px-6 py-2.5 rounded-full mb-8">
              <span>🌅</span> Hari 2 — Full Wisata Pangalengan
            </div>
            <div className="space-y-4">
              {hari2.map(({ time, activity, detail }) => (
                <div key={time} className="flex gap-4">
                  <div className="w-16 flex-shrink-0 text-right">
                    <span className="font-black text-amber-600 text-sm">{time}</span>
                  </div>
                  <div className="w-px bg-amber-200 flex-shrink-0 relative">
                    <div className="absolute top-1 -left-1.5 w-3 h-3 bg-amber-500 rounded-full" />
                  </div>
                  <div className="pb-6">
                    <div className="font-bold text-gray-900 mb-1">{activity}</div>
                    <div className="text-gray-500 text-sm">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-black text-gray-900 mb-6">🎒 Checklist Perlengkapan</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {['Jaket tebal (malam bisa 13°C)', 'Sepatu nyaman untuk trekking', 'Baju ganti ekstra', 'Sunscreen untuk siang hari', 'Kamera / tripod kecil', 'Powerbank penuh', 'Uang cash (ATM terbatas)', 'Obat-obatan pribadi', 'Plastik untuk barang elektronik (kalau rafting)', 'Sleeping bag (opsional, kalau camping)'].map(item => (
              <div key={item} className="flex gap-3 items-start text-sm text-gray-700 bg-white rounded-lg px-4 py-3">
                <span className="text-emerald-500 flex-shrink-0">✓</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-600">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Bumina EENK — Home Base Sempurna untuk Trip Ini</h2>
          <p className="text-emerald-100 mb-2">Taman Langit 5 menit jalan kaki · Nimo Highland 20 mnt · Situ Cileunca 15 mnt · Wayang Windu 25 mnt</p>
          <p className="text-emerald-100 mb-8">Kapasitas 25 orang · Perapian hangat · Dapur lengkap · Terdaftar Agoda & Booking.com 4.9★</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-emerald-800 font-black py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105">
            📱 Book Bumina EENK via WhatsApp
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">FAQ Trip Pangalengan 2D1N</h2>
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
