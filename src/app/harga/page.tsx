import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const SITE_URL = 'https://buminaeenk.com';
const WA_HARGA = 'https://wa.me/6285219460779?text=Halo%2C%20saya%20mau%20tanya%20info%20harga%20dan%20booking%20Homestay%20Bumina%20EENK%20Pangalengan';
const AGODA_URL = 'https://www.agoda.com/en-za/homestay-bumina-eenk-bandung-pangalengan/hotel/palayangan-id.html';
const BOOKING_URL = 'https://www.booking.com/hotel/id/bumina-eenk.id.html';

export const metadata: Metadata = {
  title: 'Harga Homestay Syariah Bumina EENK | Mulai Rp 850 Ribu',
  description:
    'Homestay syariah privat di Pangalengan mulai Rp 850 ribu/malam untuk 5 orang. Tambahan tamu Rp 70 ribu/orang, maksimal 20 orang.',
  keywords: [
    'harga homestay pangalengan',
    'tarif villa pangalengan',
    'biaya menginap pangalengan',
    'harga sewa villa pangalengan',
    'harga villa rombongan pangalengan',
    'tarif homestay bumina eenk',
    'harga penginapan pangalengan bandung',
    'villa 20 orang pangalengan harga',
    'sewa villa keluarga pangalengan murah',
    'harga villa kebun teh pangalengan',
    'penginapan rombongan bandung selatan',
    'tarif villa pangalengan weekday weekend',
  ],
  alternates: {
    canonical: `${SITE_URL}/harga`,
  },
  openGraph: {
    title: 'Harga Homestay Syariah Bumina EENK | Mulai Rp 850 Ribu/Malam',
    description:
      'Rumah privat maksimal 20 orang di tengah kebun teh Pangalengan. Weekday Rp 850 ribu untuk 5 orang, fasilitas lengkap dan harga transparan.',
    url: `${SITE_URL}/harga`,
    siteName: 'Homestay Bumina EENK',
    images: [
      {
        url: `${SITE_URL}/herohome.webp`,
        width: 1200,
        height: 630,
        alt: 'Harga Homestay Bumina EENK Pangalengan',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harga Homestay Bumina EENK Pangalengan | Mulai Rp 850 Ribu/Malam',
    description: 'Homestay syariah privat maksimal 20 orang di kebun teh Pangalengan. Tarif transparan, booking via WhatsApp.',
    images: [`${SITE_URL}/herohome.webp`],
  },
};

const faqItems = [
  {
    q: 'Berapa harga sewa Homestay Bumina EENK per malam?',
    a: 'Weekday Rp 850.000, weekend Rp 900.000, long holiday Rp 1.000.000, dan high season Rp 1.500.000 per malam untuk 5 orang. Tambahan tamu Rp 70.000/orang, maksimal 20 orang.',
  },
  {
    q: 'Apakah harga sudah termasuk fasilitas lengkap?',
    a: 'Ya. Semua paket mencakup seluruh rumah privat: 3 kamar tidur, 2 kamar mandi, ruang keluarga, perapian dalam dan luar, dapur beserta alat masak dan makan, serta area parkir luas.',
  },
  {
    q: 'Berapa kapasitas maksimal untuk satu malam sewa?',
    a: 'Kapasitas maksimal homestay adalah 20 orang. Untuk rombongan di atas 20 orang tersedia tenda gratis sesuai ketentuan booking.',
  },
  {
    q: 'Bagaimana cara booking dan sistem pembayaran?',
    a: 'Booking dilakukan setelah tanggal dikonfirmasi melalui WhatsApp. DP minimal 40%. Kami tidak melayani survei pada hari kedatangan.',
  },
  {
    q: 'Apakah tenda bisa disewa?',
    a: 'Bisa, khusus untuk tamu homestay dengan harga Rp150.000. Untuk rombongan lebih dari 20 orang, tenda diberikan gratis sesuai ketentuan booking.',
  },
  {
    q: 'Apakah ada diskon booking lebih awal?',
    a: 'Ada. Booking 1 bulan sebelumnya diskon 10%, 2 bulan sebelumnya 15%, dan 3 bulan atau lebih 20%. Saat high season, diskon maksimal 15%.',
  },
  {
    q: 'Jam berapa check-in dan check-out?',
    a: 'Check-in mulai pukul 14.00 WIB dan check-out pukul 12.00 WIB. Early check-in atau late check-out dapat diatur sesuai ketersediaan — hubungi kami terlebih dahulu.',
  },
  {
    q: 'Apakah ada biaya tambahan untuk tamu?',
    a: 'Harga dasar berlaku untuk 5 orang. Setiap tamu tambahan dikenakan Rp70.000 per orang, sampai kapasitas maksimal 20 orang.',
  },
];

export default function HargaPage() {
  const schemaProduct = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Homestay Bumina EENK Pangalengan',
    description: 'Homestay syariah privat maksimal 20 orang di tengah kebun teh Pangalengan, dengan 3 kamar, 2 kamar mandi, dua perapian, dan dapur lengkap.',
    image: `${SITE_URL}/herohome.webp`,
    brand: {
      '@type': 'Brand',
      name: 'Bumina EENK',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Paket Weekday',
        description: 'Sewa homestay privat Senin–Kamis untuk 5 orang',
        price: '850000',
        priceCurrency: 'IDR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '850000',
          priceCurrency: 'IDR',
          unitText: 'per malam',
        },
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/harga`,
        seller: {
          '@type': 'Organization',
          name: 'Homestay Bumina EENK',
        },
      },
      {
        '@type': 'Offer',
        name: 'Paket Long Holiday',
        description: 'Sewa homestay privat saat long holiday untuk 5 orang',
        price: '1000000',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/harga`,
      },
      {
        '@type': 'Offer',
        name: 'Paket High Season',
        description: 'Sewa homestay privat saat high season untuk 5 orang',
        price: '1500000',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/harga`,
      },
      {
        '@type': 'Offer',
        name: 'Paket Weekend',
        description: 'Sewa homestay privat Jumat–Minggu untuk 5 orang',
        price: '900000',
        priceCurrency: 'IDR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '900000',
          priceCurrency: 'IDR',
          unitText: 'per malam',
        },
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/harga`,
        seller: {
          '@type': 'Organization',
          name: 'Homestay Bumina EENK',
        },
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
    },
  };

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* ══════════════════════════════════════
          HERO — HARGA & VALUE PROPOSITION
      ══════════════════════════════════════ */}
      <section className="relative min-h-[74vh] bg-emerald-950 overflow-hidden flex items-center">
        <div className="absolute -inset-6 pointer-events-none" data-parallax="0.055">
          <Image src="/images/editorial/fireplace-interior.webp" alt="" fill priority unoptimized sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/35 via-slate-950/65 to-emerald-950/95" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-36 lg:pb-32">
          <div className="text-center">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Harga Transparan · Tanpa Biaya Tersembunyi
            </span>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Satu Rumah Privat, Maksimal 20 Orang<br />
              <span className="text-emerald-400">Mulai Rp 850 Ribu</span> per Malam
            </h1>

            <p className="text-emerald-100 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
              Nikmati seluruh homestay di tengah kebun teh Pangalengan —{' '}
              <strong className="text-white">hanya untuk keluarga atau rombongan kamu</strong>.{' '}
              Tiga kamar, dua kamar mandi, dapur lengkap, serta perapian dalam dan luar sudah termasuk.
            </p>

            <p className="text-emerald-400 font-semibold text-sm mb-10">
              Rating 4.9/5 · Terverifikasi di Agoda & Booking.com
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA_HARGA}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-emerald-900/50 text-base"
              >
                💬 Tanya Harga via WhatsApp
              </a>
              <a
                href="#daftar-harga"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-all text-base"
              >
                Lihat Detail Harga ↓
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-emerald-300">
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Check-in 14.00
              </span>
              <span className="text-emerald-700">·</span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Check-out 12.00
              </span>
              <span className="text-emerald-700">·</span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Maksimal 20 Orang
              </span>
              <span className="text-emerald-700">·</span>
              <span className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Villa Privat Eksklusif
              </span>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════
          KENAPA PESAN LANGSUNG — 3 ALASAN
      ══════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
              Keuntungan Pesan Langsung
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Harga Terbaik Langsung dari Kami
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '💰',
                title: 'Harga Tanpa Markup',
                desc: 'Pesan via WhatsApp = harga langsung dari pemilik. Tidak ada komisi platform yang dibebankan ke kamu.',
              },
              {
                icon: '⚡',
                title: 'Konfirmasi Instan',
                desc: 'Tanya ketersediaan dan dapat kepastian booking dalam hitungan menit, bukan jam.',
              },
              {
                icon: '🎁',
                title: 'Penawaran Spesial',
                desc: 'Dapatkan diskon menginap ≥ 3 malam atau penawaran bundling eksklusif yang tidak tersedia di OTA.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DAFTAR HARGA — 3 PAKET
      ══════════════════════════════════════ */}
      <section id="daftar-harga" className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
              Daftar Harga Terbaru
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Pilih Paket yang Sesuai
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Semua paket sudah termasuk sewa <strong>seluruh villa privat</strong> — tidak dibagi dengan tamu lain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* ── Paket Weekday ── */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="mb-7">
                <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
                  Weekday
                </span>
                <div className="text-gray-400 text-sm mb-1">Senin – Kamis</div>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-5xl font-black text-gray-900">Rp 850K</span>
                </div>
                <div className="text-gray-400 text-sm">per malam · untuk 5 orang</div>
                <div className="text-gray-400 text-xs mt-0.5">+ <strong className="text-gray-600">Rp 70.000</strong> per tamu tambahan</div>
              </div>

              <ul className="space-y-3 text-sm text-gray-600 flex-grow mb-8">
                {[
                  'Seluruh area villa privat',
                  'Perapian di dalam & luar rumah',
                  'Dapur dan alat masak lengkap',
                  '3 kamar tidur & 2 kamar mandi',
                  'Ruang keluarga',
                  'Parkir luas gratis',
                  'Maksimal 20 orang',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_HARGA}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold py-3.5 rounded-2xl transition-colors block text-sm"
              >
                Tanya Ketersediaan
              </a>
            </div>

            {/* ── Paket Weekend — FEATURED ── */}
            <div className="bg-emerald-900 rounded-3xl p-8 border border-emerald-700 shadow-2xl shadow-emerald-900/30 flex flex-col relative overflow-hidden md:-mt-4 md:mb-0">
              {/* Badge populer */}
              <div className="absolute top-5 right-5">
                <span className="bg-emerald-400 text-emerald-950 font-black text-xs px-3 py-1 rounded-full">
                  PALING DICARI
                </span>
              </div>

              <div className="mb-7">
                <span className="inline-block bg-emerald-800 text-emerald-300 font-bold text-xs tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
                  Weekend
                </span>
                <div className="text-emerald-400 text-sm mb-1">Jumat – Minggu &amp; Hari Libur</div>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-5xl font-black text-white">Rp 900K</span>
                </div>
                <div className="text-emerald-400 text-sm">per malam · untuk 5 orang</div>
                <div className="text-emerald-500 text-xs mt-0.5">+ <strong className="text-emerald-300">Rp 70.000</strong> per tamu tambahan</div>
              </div>

              <ul className="space-y-3 text-sm text-emerald-200 flex-grow mb-8">
                {[
                  'Seluruh area villa privat',
                  'Perapian di dalam & luar rumah',
                  'Dapur dan alat masak lengkap',
                  '3 kamar tidur & 2 kamar mandi',
                  'Ruang keluarga',
                  'Parkir luas gratis',
                  'Maksimal 20 orang',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_HARGA}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black py-3.5 rounded-2xl transition-all hover:scale-105 block text-sm"
              >
                Book Sekarang
              </a>
            </div>

            {/* ── Musim liburan ── */}
            <div className="bg-white rounded-3xl p-8 border border-amber-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="mb-7">
                <span className="inline-block bg-amber-50 text-amber-700 font-bold text-xs tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
                  Musim Liburan
                </span>
                <div className="text-gray-400 text-sm mb-1">Long holiday</div>
                <div className="text-4xl font-black text-gray-900">Rp 1JT</div>
                <div className="mt-5 text-gray-400 text-sm mb-1">High season</div>
                <div className="text-4xl font-black text-gray-900">Rp 1,5JT</div>
                <div className="text-amber-600 text-xs mt-2 font-semibold">per malam · untuk 5 orang</div>
              </div>

              <ul className="space-y-3 text-sm text-gray-600 flex-grow mb-8">
                {[
                  'Seluruh area rumah privat',
                  'Tamu tambahan Rp 70.000/orang',
                  'Maksimal 20 orang',
                  'Fasilitas lengkap tetap termasuk',
                  'Diskon high season maksimal 15%',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_HARGA}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold py-3.5 rounded-2xl transition-colors block text-sm"
              >
                Cek Tanggal Liburan
              </a>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-10 bg-emerald-50 rounded-2xl p-6 text-center border border-emerald-100">
            <p className="text-emerald-800 font-semibold mb-1">
              Harga dasar untuk 5 orang · Tambahan Rp70.000/orang · Maksimal 20 orang
            </p>
            <p className="text-emerald-600 text-sm">
              Check-in 14:00 · Check-out 12:00 · Cek ketersediaan real-time di{' '}
              <a href={AGODA_URL} target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-emerald-800 transition-colors">
                Agoda
              </a>{' '}
              dan{' '}
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-emerald-800 transition-colors">
                Booking.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TABEL PERBANDINGAN FASILITAS
      ══════════════════════════════════════ */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
              Detail Fasilitas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Apa Saja yang Sudah Termasuk?
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto">
              Semua yang kamu butuhkan untuk liburan sempurna sudah tersedia — tinggal datang dan nikmati.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-900 text-white text-center text-xs sm:text-sm font-bold py-4">
              <div className="px-4 text-left text-gray-400">Fasilitas</div>
              <div>Weekday</div>
              <div>Weekend</div>
              <div>Liburan</div>
            </div>

            {[
              { label: 'Villa privat eksklusif', w: true, we: true, s: true },
              { label: 'Maksimal 20 orang', w: true, we: true, s: true },
              { label: 'Perapian dalam & luar', w: true, we: true, s: true },
              { label: 'Dapur & alat masak lengkap', w: true, we: true, s: true },
              { label: '3 kamar tidur', w: true, we: true, s: true },
              { label: '2 kamar mandi', w: true, we: true, s: true },
              { label: 'Ruang keluarga', w: true, we: true, s: true },
              { label: 'Parkir luas gratis', w: true, we: true, s: true },
              { label: 'Alat makan & minum', w: true, we: true, s: true },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-4 text-center py-4 border-t border-gray-100 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
              >
                <div className="px-4 text-left text-gray-700 font-medium">{row.label}</div>
                <div>{row.w ? <span className="text-emerald-500 font-bold text-base">✓</span> : <span className="text-gray-300 text-base">—</span>}</div>
                <div>{row.we ? <span className="text-emerald-500 font-bold text-base">✓</span> : <span className="text-gray-300 text-base">—</span>}</div>
                <div>{row.s ? <span className="text-amber-500 font-bold text-base">✓</span> : <span className="text-gray-300 text-base">—</span>}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ADD-ON SERVICES
      ══════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-50 text-amber-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-4">
              Layanan Tambahan
            </span>
            <h2 className="text-3xl font-black text-gray-900 mb-3">Add-On Tersedia</h2>
            <p className="text-gray-500 text-base">Bisa ditambahkan saat booking — harga transparan, tidak ada kejutan.</p>
          </div>

          <div className="mx-auto max-w-2xl rounded-[2rem] border border-amber-100 bg-[#fbfaf7] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div className="flex items-start gap-4">
              <span className="text-4xl" aria-hidden="true">⛺</span>
              <div>
                <h3 className="font-black text-gray-900">Sewa Tenda · Khusus Tamu</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">Tambahan ruang tidur untuk rombongan. Gratis untuk grup lebih dari 20 orang sesuai ketentuan booking.</p>
              </div>
            </div>
            <p className="mt-5 shrink-0 text-2xl font-black text-emerald-800 sm:mt-0">Rp150K</p>
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            Konfirmasi kebutuhan tenda saat memesan.{' '}
            <a href={WA_HARGA} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold hover:underline">
              Tanya via WhatsApp →
            </a>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PERBANDINGAN HARGA PASAR
      ══════════════════════════════════════ */}
      <section className="bg-emerald-950 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
              Nilai Terbaik
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Bandingkan Sendiri Nilainya
            </h2>
            <p className="text-emerald-300 text-base max-w-xl mx-auto">
              Untuk akomodasi sejenis di kawasan Bandung & Pangalengan, inilah perbandingan harga rata-rata pasar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: 'Hotel Bintang 2–3 Bandung',
                kapasitas: '2–4 orang / kamar',
                harga: 'Rp 300–600 rb/kamar',
                total: '≈ Rp 1,9–3,7 Jt untuk 6 kamar',
                note: 'Tidak privat · Fasilitas terpisah',
                highlight: false,
              },
              {
                label: 'Homestay Bumina EENK',
                kapasitas: 'Maksimal 20 orang',
                harga: 'Rp 850 ribu–1,5 juta/malam',
                total: '≈ Rp 95–127,5 rb/orang saat penuh',
                note: 'Rumah privat · Harga dasar 5 orang',
                highlight: true,
              },
              {
                label: 'Villa Sejenis Pangalengan',
                kapasitas: '15–20 orang',
                harga: 'Rp 2–4 Jt/malam',
                total: 'Fasilitas bervariasi',
                note: 'Kadang fasilitas tidak sepadan',
                highlight: false,
              },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl p-6 border text-center ${
                  item.highlight
                    ? 'bg-emerald-400 border-emerald-300 text-emerald-950 shadow-2xl shadow-emerald-900/50'
                    : 'bg-white/5 border-white/10 text-white'
                }`}
              >
                {item.highlight && (
                  <div className="text-xs font-black tracking-widest uppercase mb-3 bg-emerald-950 text-emerald-400 inline-block px-3 py-1 rounded-full">
                    Rekomendasi
                  </div>
                )}
                <h3 className={`font-black text-base mb-4 ${item.highlight ? 'text-emerald-950' : 'text-white'}`}>
                  {item.label}
                </h3>
                <div className={`text-sm mb-1 ${item.highlight ? 'text-emerald-800' : 'text-gray-400'}`}>
                  {item.kapasitas}
                </div>
                <div className={`text-2xl font-black mb-1 ${item.highlight ? 'text-emerald-950' : 'text-white'}`}>
                  {item.harga}
                </div>
                <div className={`text-sm font-bold mb-3 ${item.highlight ? 'text-emerald-900' : 'text-emerald-400'}`}>
                  {item.total}
                </div>
                <div className={`text-xs ${item.highlight ? 'text-emerald-800' : 'text-gray-500'}`}>
                  {item.note}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-emerald-500 text-xs mt-8">
            *Perbandingan berdasarkan harga rata-rata pasar. Harga aktual dapat berbeda tergantung tanggal dan ketersediaan.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ HARGA
      ══════════════════════════════════════ */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
              Pertanyaan Seputar Harga & Booking
            </h2>
            <p className="text-gray-500 text-base">Semua yang perlu kamu tahu sebelum booking.</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="font-bold text-gray-900 text-sm sm:text-base pr-4">{item.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-black group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONI SINGKAT
      ══════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-1 text-yellow-400 text-2xl mb-2">
              {'★★★★★'}
            </div>
            <p className="font-black text-gray-900 text-lg">Rating 4.9 / 5</p>
            <p className="text-gray-400 text-sm">dari ratusan tamu terverifikasi di Agoda &amp; Booking.com</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Keluarga Hendra',
                asal: 'Jakarta',
                quote: 'Worth banget! Bawa 20 orang, semua senang. Perapiannya bikin suasana makin hangat di malam hari. Harganya juga sangat reasonable untuk kapasitas segitu.',
                rating: 5,
              },
              {
                name: 'Tim Arisan Ibu-Ibu',
                asal: 'Bandung',
                quote: 'Kami gathering 18 orang di sini. Fasilitasnya lengkap, pemandangan kebun tehnya luar biasa. Pasti balik lagi! Harga weekday sangat terjangkau.',
                rating: 5,
              },
              {
                name: 'Rombongan Kantor',
                asal: 'Bekasi',
                quote: 'Ruang keluarganya enak untuk berkumpul, parkirnya luas, dan perapian luar menjadi pusat obrolan kami sampai malam.',
                rating: 5,
              },
            ].map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-0.5 text-yellow-400 text-sm mb-3">
                  {'★'.repeat(t.rating)}
                </div>
                <blockquote className="text-gray-700 text-sm leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.asal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-950 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            Siap Liburan?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Cek Ketersediaan &amp; Dapatkan{' '}
            <span className="text-emerald-400">Harga Terbaik</span> Sekarang
          </h2>
          <p className="text-emerald-200 text-lg mb-10 leading-relaxed">
            Jangan tunda! Tanggal weekend dan hari libur sering habis cepat.
            Chat kami sekarang dan pastikan tanggal pilihanmu tersedia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={WA_HARGA}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black px-10 py-5 rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-emerald-900/50 text-lg"
            >
              💬 WhatsApp Sekarang
            </a>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={AGODA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-5 rounded-2xl transition-colors text-center text-sm"
              >
                Cek di Agoda
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-5 rounded-2xl transition-colors text-center text-sm"
              >
                Cek di Booking.com
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-emerald-400 text-sm">
            <span className="flex items-center gap-2">
              <span>✓</span> Respon cepat
            </span>
            <span className="text-emerald-700">·</span>
            <span className="flex items-center gap-2">
              <span>✓</span> Harga transparan
            </span>
            <span className="text-emerald-700">·</span>
            <span className="flex items-center gap-2">
              <span>✓</span> Tanpa biaya tersembunyi
            </span>
            <span className="text-emerald-700">·</span>
            <span className="flex items-center gap-2">
              <span>✓</span> Booking fleksibel
            </span>
          </div>

          <div className="mt-10 pt-8 border-t border-emerald-800">
            <p className="text-emerald-500 text-sm">
              Punya pertanyaan lain?{' '}
              <Link href="/contact" className="text-emerald-400 font-bold hover:text-emerald-300 hover:underline transition-colors">
                Lihat halaman Kontak kami
              </Link>{' '}
              atau{' '}
              <Link href="/" className="text-emerald-400 font-bold hover:text-emerald-300 hover:underline transition-colors">
                kembali ke Beranda
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
