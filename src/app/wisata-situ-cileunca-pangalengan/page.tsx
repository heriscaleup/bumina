import type { Metadata } from 'next';
import { generateMetadataObject } from '@/lib/seo';

const WA_URL = 'https://wa.me/6285219460779?text=Halo%2C%20saya%20ingin%20tanya%20ketersediaan%20Homestay%20Bumina%20EENK%20Pangalengan';
const SITE_URL = 'https://buminaeenk.com';

export const metadata: Metadata = generateMetadataObject({
  title: 'Wisata Situ Cileunca Pangalengan — Panduan Lengkap + Penginapan Terdekat',
  description: 'Panduan wisata Situ Cileunca Pangalengan: tiket masuk, aktivitas rafting, rute dari Bandung, dan rekomendasi penginapan terdekat. Homestay Bumina EENK hanya 15 menit dari Situ Cileunca.',
  keywords: ['wisata situ cileunca', 'situ cileunca pangalengan', 'rafting situ cileunca', 'penginapan dekat situ cileunca', 'tiket masuk situ cileunca', 'situ cileunca bandung'],
  canonical: '/wisata-situ-cileunca-pangalengan/',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Situ Cileunca',
  description: 'Danau vulkanik di Pangalengan, Bandung Selatan. Destinasi wisata air dengan aktivitas rafting, perahu kayak, camping, dan memancing di tepi danau dikelilingi perbukitan hijau.',
  url: `${SITE_URL}/wisata-situ-cileunca-pangalengan/`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pangalengan',
    addressRegion: 'Jawa Barat',
    addressCountry: 'ID',
  },
  nearbyLodging: {
    '@type': 'LodgingBusiness',
    name: 'Homestay Bumina EENK',
    url: SITE_URL,
    telephone: '+6285219460779',
    description: 'Homestay terdekat dari Situ Cileunca, hanya 15 menit berkendara. Kapasitas 25 orang, perapian, dapur lengkap.',
  },
};

const faqs = [
  { q: 'Berapa tiket masuk Situ Cileunca Pangalengan?', a: 'Tiket masuk Situ Cileunca sekitar Rp 10.000–15.000 per orang. Untuk aktivitas rafting dikenakan biaya tambahan sekitar Rp 150.000–250.000 per orang tergantung operator.' },
  { q: 'Berapa jauh Situ Cileunca dari Kota Bandung?', a: 'Situ Cileunca berjarak sekitar 40 km dari pusat Kota Bandung, atau sekitar 1,5–2 jam perjalanan menggunakan kendaraan pribadi via Jl. Raya Banjaran–Pangalengan.' },
  { q: 'Aktivitas apa saja yang bisa dilakukan di Situ Cileunca?', a: 'Ada banyak aktivitas: rafting di Sungai Palayangan (4–5 km), perahu kayak di danau, memancing, camping tepi danau, dan menikmati pemandangan perbukitan hijau.' },
  { q: 'Penginapan mana yang paling dekat dengan Situ Cileunca?', a: 'Homestay Bumina EENK adalah salah satu penginapan terdekat — hanya 15 menit berkendara dari Situ Cileunca. Kapasitas hingga 25 orang, terdaftar di Agoda & Booking.com (rating 4.9/5), dilengkapi perapian dan dapur lengkap.' },
  { q: 'Apakah bisa camping di Situ Cileunca?', a: 'Ya, ada area camping di sekitar Situ Cileunca. Namun untuk kenyamanan lebih, banyak wisatawan memilih menginap di homestay atau villa terdekat seperti Bumina EENK yang berjarak 15 menit.' },
];

export default function WisataSituCileuncaPage() {
  return (
    <div className="font-sans antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-base">Bumina<span className="text-emerald-400"> EENK</span></a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm px-5 py-2 rounded-full transition-all">
            Book Sekarang
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-950">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_#34d399,_transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-24 pb-16">
          <span className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            🚣 Wisata Air Pangalengan
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
            Wisata Situ Cileunca Pangalengan<br />
            <span className="text-emerald-400">Panduan Lengkap 2025</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Danau vulkanik paling menakjubkan di Bandung Selatan — rafting, kayak, camping, dan panorama perbukitan hijau yang bikin betah seharian.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#panduan" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-8 rounded-xl transition-all">
              Baca Panduan Wisata
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 px-8 rounded-xl transition-all">
              📱 Tanya Penginapan Terdekat
            </a>
          </div>
        </div>
      </section>

      {/* INFO CEPAT */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { icon: '🎟️', label: 'Tiket Masuk', val: 'Rp 10–15 ribu' },
              { icon: '🚗', label: 'Dari Bandung', val: '~1,5–2 jam' },
              { icon: '🚣', label: 'Rafting', val: 'Rp 150–250 ribu' },
              { icon: '🏨', label: 'Penginapan Terdekat', val: '15 menit' },
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

      {/* PANDUAN */}
      <section id="panduan" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8">Tentang Situ Cileunca</h2>
          <div className="prose prose-lg text-gray-600 space-y-5">
            <p>
              <strong className="text-gray-900">Situ Cileunca</strong> adalah danau vulkanik yang terletak di Kecamatan Pangalengan, Kabupaten Bandung, Jawa Barat. Berada di ketinggian sekitar 1.400 mdpl, danau ini dikelilingi perbukitan hijau dan hutan pinus yang menghadirkan suasana sejuk dan tenang.
            </p>
            <p>
              Danau seluas ±1.400 hektar ini menjadi destinasi wisata favorit terutama untuk aktivitas air. Yang paling populer adalah <strong className="text-gray-900">rafting di Sungai Palayangan</strong> — anak sungai yang mengalir dari Situ Cileunca dengan jarak tempuh sekitar 4–5 km, cocok untuk pemula hingga menengah.
            </p>
          </div>

          <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Aktivitas di Situ Cileunca</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '🚣', title: 'Rafting Sungai Palayangan', desc: '4–5 km, cocok pemula, harga Rp 150–250 ribu/orang' },
              { icon: '🛶', title: 'Perahu Kayak', desc: 'Menyusuri danau, sewa perahu tersedia di tepi danau' },
              { icon: '🎣', title: 'Memancing', desc: 'Spot mancing favorit warga lokal, ikan mas & nila' },
              { icon: '⛺', title: 'Camping Tepi Danau', desc: 'Nikmati malam di tepi danau dengan bintang-bintang' },
              { icon: '📸', title: 'Spot Foto', desc: 'Danau berlatar perbukitan hijau yang sangat instagramable' },
              { icon: '🥾', title: 'Trekking', desc: 'Jalur trekking ringan mengelilingi area danau' },
            ].map(a => (
              <div key={a.title} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-emerald-200 transition-colors">
                <span className="text-3xl flex-shrink-0">{a.icon}</span>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{a.title}</div>
                  <div className="text-gray-500 text-sm">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-black text-gray-900 mt-12 mb-4">Rute dari Bandung ke Situ Cileunca</h3>
          <div className="bg-blue-50 rounded-2xl p-6 text-gray-700 text-sm space-y-2">
            <p>🚗 <strong>Via Jl. Raya Banjaran–Pangalengan</strong> (rekomendasi)</p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Dari Bandung → arah Banjaran via Tol Soreang atau jalan biasa</li>
              <li>Teruskan ke Kecamatan Pangalengan (~40 km dari Bandung)</li>
              <li>Ikuti petunjuk arah ke Situ Cileunca</li>
              <li>Total waktu: ±1,5–2 jam tergantung lalu lintas</li>
            </ol>
          </div>
        </div>
      </section>

      {/* PENGINAPAN TERDEKAT */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-emerald-100 text-emerald-700 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              Rekomendasi Penginapan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Menginap Dekat Situ Cileunca?<br />
              <span className="text-emerald-600">Bumina EENK — 15 Menit dari Sini</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Jadikan Bumina EENK sebagai basecamp liburanmu. Bangun pagi, sarapan di tengah kebun teh, lalu berangkat ke Situ Cileunca cuma 15 menit.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '📍', label: 'Jarak ke Situ Cileunca', val: '15 menit berkendara' },
              { icon: '👥', label: 'Kapasitas', val: 'Hingga 25 orang' },
              { icon: '🔥', label: 'Fasilitas Unggulan', val: 'Perapian + dapur lengkap' },
              { icon: '⭐', label: 'Rating', val: '4.9/5 di Booking.com' },
              { icon: '🍃', label: 'Lokasi', val: 'Tengah kebun teh Sosro' },
              { icon: '🏔️', label: 'Ketinggian', val: '1.400 mdpl, udara 17°C' },
            ].map(f => (
              <div key={f.label} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <div className="text-gray-500 text-xs">{f.label}</div>
                  <div className="font-bold text-gray-900 text-sm">{f.val}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105 shadow-lg shadow-emerald-900/30">
              📱 Chat WhatsApp untuk Cek Ketersediaan
            </a>
            <p className="text-gray-500 text-sm mt-3">Responsif 7 hari seminggu · Tidak ada biaya konsultasi</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">Pertanyaan yang Sering Ditanya</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 list-none">
                  {q}
                  <span className="text-emerald-500 ml-4 flex-shrink-0 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-10 text-center text-sm">
        <a href="/" className="font-bold text-white hover:text-emerald-400 transition-colors">Homestay Bumina EENK</a>
        <span className="mx-2">·</span>
        <span>Pangalengan, Bandung Selatan</span>
        <span className="mx-2">·</span>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">WhatsApp</a>
      </footer>
    </div>
  );
}
