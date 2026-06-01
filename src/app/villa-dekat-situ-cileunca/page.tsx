import type { Metadata } from 'next';
import { generateMetadataObject } from '@/lib/seo';

const WA_URL = 'https://wa.me/6285219460779?text=Halo%2C%20saya%20ingin%20tanya%20ketersediaan%20Homestay%20Bumina%20EENK%20Pangalengan';
const SITE_URL = 'https://buminaeenk.com';

export const metadata: Metadata = generateMetadataObject({
  title: 'Villa & Penginapan Dekat Situ Cileunca Pangalengan — Terpercaya 4.9★',
  description: 'Cari villa atau penginapan dekat Situ Cileunca Pangalengan? Homestay Bumina EENK hanya 15 menit, kapasitas 25 orang, terdaftar Agoda & Booking.com rating 4.9. Perapian, dapur lengkap, kebun teh.',
  keywords: ['villa dekat situ cileunca', 'penginapan dekat situ cileunca', 'villa situ cileunca pangalengan', 'homestay situ cileunca', 'villa pangalengan 25 orang', 'penginapan pangalengan terpercaya'],
  canonical: '/villa-dekat-situ-cileunca/',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Homestay Bumina EENK',
  description: 'Villa dan penginapan terdekat dari Situ Cileunca Pangalengan. Hanya 15 menit berkendara. Kapasitas 25 orang, perapian hangat, dapur lengkap, kebun teh Sosro.',
  url: SITE_URL,
  telephone: '+6285219460779',
  address: { '@type': 'PostalAddress', streetAddress: 'Desa Puncak Mulya', addressLocality: 'Pangalengan', addressRegion: 'Jawa Barat', addressCountry: 'ID' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', bestRating: '5', ratingCount: '200' },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Perapian', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Dapur Lengkap', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Kapasitas 25 Orang', value: true },
  ],
};

const faqs = [
  { q: 'Berapa jauh Bumina EENK dari Situ Cileunca?', a: 'Homestay Bumina EENK berjarak sekitar 15 menit berkendara dari Situ Cileunca — sangat ideal sebagai basecamp untuk wisata di Pangalengan.' },
  { q: 'Berapa kapasitas Homestay Bumina EENK?', a: 'Kapasitas hingga 25 orang — cocok untuk keluarga besar, rombongan kantor, gathering, arisan, atau reunian bersama.' },
  { q: 'Apakah bisa masak sendiri di Bumina EENK?', a: 'Ya! Dapur lengkap tersedia. Bawa bahan makanan sendiri dan masak bersama — lebih hemat untuk rombongan besar dan lebih seru.' },
  { q: 'Berapa harga menginap di Bumina EENK?', a: 'Harga weekday mulai Rp 1,5 juta per malam (keseluruhan villa, hingga 25 orang). Weekend Rp 2 juta per malam. Hubungi WhatsApp untuk harga terkini dan ketersediaan.' },
  { q: 'Bagaimana cara booking Homestay Bumina EENK?', a: 'Bisa via WhatsApp langsung di +62 852-1946-0779, atau pesan melalui Agoda dan Booking.com. Kami responsif 7 hari seminggu.' },
  { q: 'Apakah Bumina EENK terdaftar resmi di OTA?', a: 'Ya, terdaftar dan terverifikasi resmi di Agoda dan Booking.com dengan rating 4.9/5 dari 200+ review tamu nyata.' },
];

export default function VillaDekaSituCileuncaPage() {
  return (
    <div className="font-sans antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="fixed top-0 inset-x-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-base">Bumina<span className="text-emerald-400"> EENK</span></a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm px-5 py-2 rounded-full transition-all">Book Sekarang</a>
        </div>
      </nav>

      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_#34d399,_transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-24 pb-16">
          <span className="inline-block bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">🏨 Penginapan Terdekat</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
            Penginapan Dekat<br /><span className="text-emerald-400">Situ Cileunca yang Terpercaya</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
            Hanya <strong className="text-emerald-400">15 menit berkendara</strong> dari Situ Cileunca. Kapasitas 25 orang. Terdaftar Agoda & Booking.com rating <strong className="text-yellow-400">4.9★</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['✅ Agoda Verified', '✅ Booking.com 4.9★', '🔥 Perapian Hangat', '👥 Hingga 25 Orang'].map(b => (
              <span key={b} className="bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">{b}</span>
            ))}
          </div>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105">
            📱 Cek Ketersediaan via WhatsApp
          </a>
        </div>
      </section>

      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { icon: '📍', label: 'Jarak ke Situ Cileunca', val: '15 menit' },
              { icon: '👥', label: 'Kapasitas', val: '25 orang' },
              { icon: '⭐', label: 'Rating', val: '4.9 / 5' },
              { icon: '💰', label: 'Mulai dari', val: 'Rp 1,5 juta/malam' },
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
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8">Kenapa Bumina EENK Pilihan Terbaik Dekat Situ Cileunca?</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { icon: '📍', title: '15 Menit dari Situ Cileunca', desc: 'Jarak paling dekat di antara penginapan berkualitas di Pangalengan.' },
              { icon: '👥', title: 'Kapasitas Hingga 25 Orang', desc: 'Sewa keseluruhan villa untuk grup — lebih privat, lebih hemat dibagi.' },
              { icon: '🔥', title: 'Perapian Hangat', desc: 'Setelah rafting atau seharian di danau, sambut malam dengan perapian.' },
              { icon: '🍳', title: 'Dapur Lengkap', desc: 'Masak sendiri untuk rombongan — jauh lebih hemat dari makan di luar.' },
              { icon: '✅', title: 'Verified di Agoda & Booking.com', desc: 'Bukan penginapan abal-abal. Bisa cek review 200+ tamu nyata.' },
              { icon: '🌿', title: 'Kebun Teh & Udara 17°C', desc: 'Lokasi di tengah kebun teh Sosro, 1.400 mdpl. Pagi hari berkabut sejuk.' },
            ].map(f => (
              <div key={f.title} className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all">
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div><div className="font-bold text-gray-900 mb-1">{f.title}</div><div className="text-gray-500 text-sm">{f.desc}</div></div>
              </div>
            ))}
          </div>

          <div className="bg-emerald-900 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-black mb-2">Destinasi Lain yang Bisa Dijangkau dari Bumina EENK</h3>
            <p className="text-emerald-300 text-sm mb-6">Bumina EENK adalah basecamp ideal untuk seluruh Pangalengan — bukan cuma Situ Cileunca.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { dest: 'Situ Cileunca', dist: '15 mnt' },
                { dest: 'Hutan Pinus Rahong', dist: '10 mnt' },
                { dest: 'Nimo Highland', dist: '20 mnt' },
                { dest: 'Wayang Windu', dist: '25 mnt' },
                { dest: 'Taman Langit', dist: '5 mnt jalan kaki' },
                { dest: 'Sunrise Point Cukul', dist: '30 mnt' },
              ].map(d => (
                <div key={d.dest} className="flex items-center justify-between bg-emerald-800/50 rounded-lg px-4 py-2.5">
                  <span className="text-sm font-medium">{d.dest}</span>
                  <span className="text-emerald-400 text-xs font-bold">{d.dist}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-500">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Siap Booking Penginapan Dekat Situ Cileunca?</h2>
          <p className="text-emerald-100 mb-8">Chat WhatsApp langsung dengan pemilik — tidak ada perantara, tidak ada hidden fee.</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-emerald-800 font-black py-4 px-10 rounded-2xl text-lg transition-all hover:scale-105 shadow-xl">
            📱 Chat WhatsApp Sekarang
          </a>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">FAQ Penginapan Dekat Situ Cileunca</h2>
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
