import type { Metadata } from 'next';
import { generateMetadataObject } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

const WA_URL = 'https://wa.me/6285219460779?text=Halo%2C%20saya%20ingin%20tanya%20ketersediaan%20Homestay%20Bumina%20EENK%20Pangalengan';
const SITE_URL = 'https://buminaeenk.com';

export const metadata: Metadata = generateMetadataObject({
  title: 'Wisata Hutan Pinus Rahong Pangalengan — Camping, Healing & Spot Viral',
  description: 'Panduan wisata Hutan Pinus Rahong Pangalengan: tiket masuk, aktivitas, camping, dan tips. Sekitar 32 menit dari Homestay Bumina EENK.',
  keywords: ['wisata rahong pangalengan', 'hutan pinus rahong', 'camping rahong pangalengan', 'rahong pangalengan tiket', 'penginapan dekat rahong pangalengan', 'healing pangalengan'],
  canonical: '/wisata-rahong-pangalengan/',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Hutan Pinus Rahong Pangalengan',
  description: 'Destinasi wisata alam hutan pinus di Pangalengan. Ada hammock area, tubing sungai, camping, dan suasana hutan pinus yang instagramable dan healing.',
  url: `${SITE_URL}/wisata-rahong-pangalengan/`,
  address: { '@type': 'PostalAddress', addressLocality: 'Pangalengan', addressRegion: 'Jawa Barat', addressCountry: 'ID' },
  nearbyLodging: { '@type': 'LodgingBusiness', name: 'Homestay Bumina EENK', url: SITE_URL, telephone: '+6285219460779', description: 'Penginapan sekitar 32 menit dari Rahong. Basecamp privat untuk healing trip Pangalengan.' },
};

const faqs = [
  { q: 'Berapa tiket masuk Hutan Pinus Rahong Pangalengan?', a: 'Tiket masuk Rahong sekitar Rp 15.000 per orang. Harga bisa berubah tergantung musim dan event. Bayar di loket saat masuk.' },
  { q: 'Apakah boleh camping semalam di Rahong?', a: 'Ada fasilitas camping di area Rahong. Hubungi pengelola terlebih dahulu untuk info tarif dan ketersediaan spot. Alternatifnya, Bumina EENK berjarak sekitar 32 menit dan menawarkan rumah privat yang lebih nyaman.' },
  { q: 'Berapa jauh Rahong dari Kota Bandung?', a: 'Rahong berjarak sekitar 40–45 km dari pusat Kota Bandung, dengan waktu tempuh sekitar 1,5–2 jam menggunakan kendaraan pribadi via Jl. Raya Banjaran–Pangalengan.' },
  { q: 'Aman tidak untuk anak-anak?', a: 'Ya, Hutan Pinus Rahong relatif aman untuk anak-anak. Areanya tidak terlalu curam dan ada jalur yang nyaman untuk jalan santai. Pengawasan orang tua tetap diperlukan, terutama saat tubing atau di dekat sungai.' },
  { q: 'Berapa jarak Bumina EENK ke Rahong?', a: 'Perjalanan dari Bumina EENK ke Hutan Pinus Rahong sekitar 32 menit, bergantung lalu lintas. Homestay menerima maksimal 20 orang dan cocok untuk keluarga atau rombongan.' },
  { q: 'Aktivitas apa yang bisa dilakukan di Rahong?', a: 'Hammock di antara pohon pinus, tubing di sungai kecil, foto-foto instagramable dengan latar hutan pinus berkabut, camping, meditasi dan healing, serta trekking ringan di jalur hutan.' },
];

export default function WisataRahongPage() {
  return (
    <div className="font-sans antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header />

      <section className="relative min-h-[78vh] flex items-center justify-center overflow-hidden bg-green-950">
        <div className="absolute inset-0">
          <Image src="/images/editorial/rahong-pine-forest.webp" alt="Hutan Pinus Rahong yang berkabut pada pagi hari" fill priority unoptimized sizes="100vw" className="object-cover scale-[1.03]" />
          <div className="absolute inset-0 bg-gradient-to-b from-green-950/25 via-slate-950/50 to-slate-950/95" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-24 pb-16">
          <span className="inline-block bg-green-500/20 border border-green-400/30 text-green-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">🌲 Healing Spot Pangalengan</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
            Hutan Pinus Rahong Pangalengan<br /><span className="text-green-400">Surga Healing yang Bikin Nagih</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Pohon pinus menjulang tinggi, kabut tipis di pagi hari, dan keheningan yang bikin jiwa tenteram. Ini bukan foto editan — ini nyata di Pangalengan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#info" className="bg-green-700 hover:bg-green-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all">Info Wisata Rahong</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 px-8 rounded-xl transition-all">📱 Book Penginapan Terdekat</a>
          </div>
        </div>
      </section>

      <section id="info" className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { icon: '🎟️', label: 'Tiket Masuk', val: 'Rp 15 ribu' },
              { icon: '🚗', label: 'Dari Bumina EENK', val: '±32 menit' },
              { icon: '⛺', label: 'Camping', val: 'Tersedia' },
              { icon: '🕐', label: 'Buka', val: 'Setiap hari' },
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
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8">Tentang Hutan Pinus Rahong</h2>
          <div className="text-gray-600 space-y-5 text-lg leading-relaxed">
            <p><strong className="text-gray-900">Hutan Pinus Rahong</strong> adalah salah satu destinasi wisata alam yang semakin populer di Pangalengan, Bandung Selatan. Terletak di tengah hutan pinus yang lebat dengan pohon-pohon menjulang tinggi, tempat ini menawarkan suasana healing yang autentik.</p>
            <p>Bagi yang pernah menonton film horor lokal, suasana Rahong sering disebut mirip dengan setting <strong className="text-gray-900">film Rumah Pengabdi Setan</strong> — hutan pinus berkabut yang misterius namun justru membuat pengunjung penasaran dan ingin berfoto.</p>
          </div>

          <h3 className="text-2xl font-black text-gray-900 mt-12 mb-6">Aktivitas di Hutan Pinus Rahong</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '🪂', title: 'Hammock', desc: 'Pasang hammock di antara pohon pinus tinggi, nikmati angin sejuk' },
              { icon: '🏄', title: 'Tubing Sungai', desc: 'Menyusuri sungai kecil dengan ban — segar dan seru!' },
              { icon: '⛺', title: 'Camping', desc: 'Camping semalam di antara suara angin dan pohon pinus' },
              { icon: '📸', title: 'Spot Foto', desc: 'Latar hutan pinus berkabut yang sangat instagramable' },
              { icon: '🧘', title: 'Meditasi & Healing', desc: 'Keheningan hutan yang menenangkan pikiran' },
              { icon: '🥾', title: 'Trekking', desc: 'Jelajahi jalur setapak di dalam hutan' },
            ].map(a => (
              <div key={a.title} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-green-200 transition-colors">
                <span className="text-3xl flex-shrink-0">{a.icon}</span>
                <div><div className="font-bold text-gray-900 text-sm">{a.title}</div><div className="text-gray-500 text-sm">{a.desc}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-emerald-100 text-emerald-700 font-bold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-4">Rekomendasi Basecamp</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Bumina EENK — ±32 Menit dari Rahong</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Healing trip lebih nyaman dengan home base yang tepat. Dari Bumina EENK, kamu bisa menuju Rahong pagi hari lalu pulang ke rumah privat yang hangat.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '📍', label: 'Jarak ke Rahong', val: '±32 menit berkendara' },
              { icon: '👥', label: 'Kapasitas', val: 'Maksimal 20 orang' },
              { icon: '🔥', label: 'Perapian Hangat', desc: 'Malam di Pangalengan sangat dingin' },
              { icon: '⭐', label: 'Rating', val: '4.9/5 Booking.com' },
            ].map(f => (
              <div key={f.label} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                <span className="text-2xl">{f.icon}</span>
                <div><div className="text-gray-500 text-xs">{f.label}</div><div className="font-bold text-gray-900 text-sm">{f.val || f.desc}</div></div>
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
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">FAQ Wisata Rahong Pangalengan</h2>
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
