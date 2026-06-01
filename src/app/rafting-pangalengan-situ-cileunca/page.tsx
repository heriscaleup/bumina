import type { Metadata } from 'next';
import { generateMetadataObject } from '@/lib/seo';
import Link from 'next/link';

const WA_URL = 'https://wa.me/6285219460779?text=Halo%2C%20saya%20ingin%20tanya%20ketersediaan%20Homestay%20Bumina%20EENK%20Pangalengan';
const SITE_URL = 'https://buminaeenk.com';

export const metadata: Metadata = generateMetadataObject({
  title: 'Rafting Pangalengan Situ Cileunca — Harga, Rute & Tips 2025',
  description: 'Panduan rafting Pangalengan di Sungai Palayangan Situ Cileunca: harga Rp150-250rb, jarak 4-5km, tips & rekomendasi penginapan terdekat. Homestay Bumina EENK 15 menit dari lokasi rafting.',
  keywords: ['rafting pangalengan', 'rafting situ cileunca', 'rafting sungai palayangan', 'harga rafting pangalengan', 'arung jeram pangalengan', 'penginapan dekat rafting pangalengan'],
  canonical: '/rafting-pangalengan-situ-cileunca/',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Rafting Sungai Palayangan Situ Cileunca',
  description: 'Aktivitas rafting di Sungai Palayangan, Pangalengan. Jarak tempuh 4-5km, cocok untuk pemula hingga menengah. Berangkat dari sekitar Situ Cileunca.',
  url: `${SITE_URL}/rafting-pangalengan-situ-cileunca/`,
  address: { '@type': 'PostalAddress', addressLocality: 'Pangalengan', addressRegion: 'Jawa Barat', addressCountry: 'ID' },
  nearbyLodging: {
    '@type': 'LodgingBusiness',
    name: 'Homestay Bumina EENK',
    url: SITE_URL,
    telephone: '+6285219460779',
    description: 'Penginapan 15 menit dari lokasi rafting. Ideal untuk menginap malam sebelum rafting pagi hari.',
  },
};

const faqs = [
  { q: 'Berapa harga rafting di Pangalengan Situ Cileunca?', a: 'Harga rafting di Sungai Palayangan Pangalengan berkisar Rp 150.000–250.000 per orang tergantung operator dan paket yang dipilih. Biasanya sudah termasuk peralatan keselamatan, pemandu, dan transportasi kembali ke start point.' },
  { q: 'Berapa minimal peserta untuk rafting?', a: 'Minimal 4–6 orang per perahu. Untuk grup kecil, biasanya bisa join dengan grup lain atau membayar slot kosong. Hubungi operator langsung untuk info terkini.' },
  { q: 'Berapa usia minimal untuk rafting di Pangalengan?', a: 'Umumnya usia minimal 7–10 tahun, dengan catatan anak harus bisa berenang dan didampingi orang tua di perahu yang sama. Setiap peserta wajib mengenakan pelampung dan helm yang disediakan.' },
  { q: 'Apa yang harus dibawa saat rafting?', a: 'Bawa: baju ganti (wajib — pasti basah!), sandal yang aman, sunscreen, kacamata renang opsional, dan simpan barang berharga di mobil atau titipkan ke penginapan. Jangan bawa HP ke perahu kecuali ada waterproof case.' },
  { q: 'Penginapan mana yang paling dekat dengan lokasi rafting?', a: 'Homestay Bumina EENK adalah penginapan terdekat — hanya 15 menit berkendara dari Situ Cileunca dan area rafting. Kapasitas 25 orang, ada perapian hangat yang sangat nyaman setelah basah-basahan rafting seharian.' },
  { q: 'Waktu terbaik rafting di Pangalengan?', a: 'Waktu terbaik adalah pagi hari antara jam 08.00–10.00 WIB — debit air stabil, cuaca belum terlalu panas, dan belum terlalu ramai. Hindari musim hujan lebat karena arus bisa terlalu deras.' },
];

export default function RaftingPangalenganPage() {
  return (
    <div className="font-sans antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="fixed top-0 inset-x-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-extrabold text-white text-base">Bumina<span className="text-emerald-400"> EENK</span></Link>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm px-5 py-2 rounded-full transition-all">Book Sekarang</a>
        </div>
      </nav>

      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-950 via-cyan-900 to-blue-950">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom,_#06b6d4,_transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-24 pb-16">
          <span className="inline-block bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">🚣 Arung Jeram Pangalengan</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
            Rafting Pangalengan<br /><span className="text-cyan-400">Situ Cileunca — Serunya Abis!</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Tantang diri di Sungai Palayangan — 4–5 km arus deras, pemandangan hutan tropis, dan adrenalin yang bikin nagih. Cocok untuk pemula sampai yang udah jago.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#info" className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all">Info Lengkap Rafting</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 px-8 rounded-xl transition-all">📱 Tanya Penginapan Terdekat</a>
          </div>
        </div>
      </section>

      <section id="info" className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { icon: '💰', label: 'Harga', val: 'Rp 150–250 ribu' },
              { icon: '📏', label: 'Jarak Tempuh', val: '4–5 km' },
              { icon: '⏱️', label: 'Durasi', val: '2–3 jam' },
              { icon: '👶', label: 'Usia Minimal', val: '7 tahun' },
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
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8">Rafting di Sungai Palayangan Pangalengan</h2>
          <div className="text-gray-600 space-y-5 text-lg leading-relaxed">
            <p><strong className="text-gray-900">Sungai Palayangan</strong> adalah sungai yang mengalir dari Situ Cileunca, menawarkan pengalaman rafting dengan arus yang bervariasi — ideal untuk pemula hingga menengah. Jarak tempuh sekitar 4–5 km dengan waktu di air sekitar 2–3 jam.</p>
            <p>Sepanjang jalur rafting, kamu akan disuguhi pemandangan tebing berbatu, hutan tropis yang lebat, dan udara segar pegunungan Pangalengan di ketinggian sekitar 1.400 mdpl.</p>
          </div>
          <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Yang Termasuk dalam Paket Rafting</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '🦺', title: 'Perlengkapan Safety', desc: 'Pelampung, helm, dayung — semua disediakan operator' },
              { icon: '🧑‍✈️', title: 'Pemandu Berpengalaman', desc: 'Guide profesional bersertifikat di tiap perahu' },
              { icon: '🚐', title: 'Transportasi Balik', desc: 'Antar kembali ke titik start setelah selesai' },
              { icon: '📸', title: 'Dokumentasi', desc: 'Beberapa operator menyediakan foto/video (tanya dulu)' },
            ].map(f => (
              <div key={f.title} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-cyan-200 transition-colors">
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div><div className="font-bold text-gray-900 text-sm">{f.title}</div><div className="text-gray-500 text-sm">{f.desc}</div></div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="font-black text-gray-900 mb-3">⚠️ Tips Penting Sebelum Rafting</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {['Wajib bawa baju ganti — pasti basah kuyup', 'Pakai sandal gunung atau sepatu yang aman di air', 'Simpan HP dan barang berharga di mobil atau penginapan', 'Datang pagi (sebelum jam 10.00) untuk arus terbaik', 'Jangan rafting saat hujan lebat atau banjir'].map(t => (
                <li key={t} className="flex gap-2"><span className="text-amber-500">•</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-emerald-100 text-emerald-700 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">Rekomendasi Penginapan</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Menginap Malam Sebelum Rafting?<br /><span className="text-emerald-600">Bumina EENK — 15 Menit dari Start Point</span></h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Rafting paling seru kalau berangkat pagi. Menginap di Bumina EENK semalam sebelumnya — bangun segar, sarapan, langsung gas ke Situ Cileunca.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '📍', label: 'Jarak ke Start Point', val: '15 menit berkendara' },
              { icon: '👥', label: 'Kapasitas Grup', val: 'Hingga 25 orang' },
              { icon: '🔥', label: 'Setelah Basah-basahan', val: 'Perapian hangat tersedia' },
              { icon: '🍳', label: 'Sarapan Sebelum Rafting', val: 'Dapur lengkap, masak sendiri' },
              { icon: '⭐', label: 'Rating OTA', val: '4.9/5 Booking.com' },
              { icon: '🌿', label: 'Suasana Malam', val: 'Kebun teh, udara 17°C' },
            ].map(f => (
              <div key={f.label} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                <span className="text-2xl">{f.icon}</span>
                <div><div className="text-gray-500 text-xs">{f.label}</div><div className="font-bold text-gray-900 text-sm">{f.val}</div></div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105">📱 Chat WhatsApp untuk Booking</a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">FAQ Rafting Pangalengan</h2>
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
