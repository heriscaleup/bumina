import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollStory from '@/components/ScrollStory';
import Header from '@/components/Header';

const SITE_URL = 'https://buminaeenk.com';

export const metadata: Metadata = {
  title: 'Homestay Bumina EENK Pangalengan | Villa Kebun Teh Bandung',
  description:
    'Homestay syariah privat di tengah kebun teh Pangalengan. 3 kamar, perapian, kapasitas hingga 20 orang, dan hanya 4 menit ke Taman Langit.',
  keywords: [
    'homestay pangalengan',
    'penginapan pangalengan',
    'villa pangalengan bandung',
    'bumina eenk',
    'homestay bumina eenk',
    'villa kebun teh pangalengan',
    'penginapan dekat taman langit pangalengan',
    'villa rombongan pangalengan',
    'penginapan bandung selatan',
    'villa pangalengan 20 orang',
    'homestay pangalengan agoda',
    'homestay pangalengan booking.com',
    'villa perapian pangalengan',
    'penginapan murah pangalengan',
    'villa keluarga pangalengan',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Homestay Bumina EENK | Villa Kebun Teh Pangalengan Bandung — Rating 4.9★',
    description:
      'Homestay syariah privat di Pangalengan, 4 menit ke Taman Langit, 3 kamar, dua perapian, dan kapasitas hingga 20 orang.',
    url: SITE_URL,
    siteName: 'Homestay Bumina EENK',
    images: [{ url: `${SITE_URL}/herohome.webp`, width: 1200, height: 630, alt: 'Homestay Bumina EENK Pangalengan — Villa Kebun Teh Bandung Selatan' }],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homestay Bumina EENK | Villa Kebun Teh di Pangalengan Bandung',
    description: 'Homestay syariah privat, 4 menit ke Taman Langit. 3 kamar, dua perapian, dapur lengkap, dan kapasitas hingga 20 orang.',
    images: [`${SITE_URL}/herohome.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

// ─── JSON-LD STRUCTURED DATA ─────────────────────────────────
// Ini yang dibaca oleh Google, Gemini, ChatGPT, Claude, Perplexity
// untuk memverifikasi & merekomendasikan bisnis ini.

const jsonLdLodging = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  '@id': `${SITE_URL}#homestay`,
  name: 'Homestay Bumina EENK',
  alternateName: ['Bumina EENK', 'Villa Bumina EENK Pangalengan'],
  description:
    'Homestay Syariah Bumina EENK adalah rumah privat di tengah kebun teh Pangalengan Bandung Selatan. Sekitar 4 menit ke Taman Langit, memiliki 3 kamar tidur, 2 kamar mandi, perapian dalam dan luar, dapur lengkap, serta kapasitas maksimal 20 orang.',
  url: SITE_URL,
  image: [
    `${SITE_URL}/herohome.webp`,
    `${SITE_URL}/herohome-kebon-teh.webp`,
    `${SITE_URL}/herohome-tamanlangit.webp`,
    `${SITE_URL}/herohome-depan-villa.webp`,
  ],
  telephone: '+6285219460779',
  priceRange: '$$',
  checkinTime: '14:00',
  checkoutTime: '12:00',
  numberOfRooms: 3,
  petsAllowed: false,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'QG8C+QJR, Sukaluyu, Kec. Pangalengan',
    addressLocality: 'Kabupaten Bandung',
    addressRegion: 'Jawa Barat',
    postalCode: '40378',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -7.2188,
    longitude: 107.5958,
  },
  // sameAs = kunci utama untuk AI engines mengverifikasi identitas bisnis
  sameAs: [
    'https://buminaeenk.com',
    'https://www.agoda.com/en-za/homestay-bumina-eenk-bandung-pangalengan/hotel/palayangan-id.html',
    'https://www.booking.com/hotel/id/bumina-eenk.id.html',
    'https://www.instagram.com/homestay_buminaeenk/',
    'https://www.tiktok.com/@homestay_bandung',
    'https://www.youtube.com/watch?v=bfpnKx1WCQw',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '200',
    reviewCount: '200',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Keluarga Budi Santoso' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Pengalaman menginap yang luar biasa! Suasana kebun teh yang hijau dan udara sejuk pegunungan membuat kami sangat nyaman. Perapian di dalam rumah benar-benar menghangatkan malam yang dingin. Highly recommended!',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Rombongan PT Maju Bersama' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Rumahnya luas untuk rombongan. Fasilitas lengkap, dapur bersih, dan pemandangan gunung di pagi hari bikin tim kami tidak mau pulang.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Keluarga Sari Wijaya' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Lokasi strategis, sekitar empat menit ke Taman Langit. Pagi terasa tenang dan suasana alamnya masih asri.',
    },
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Perapian dalam rumah', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Dapur lengkap', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Parkir luas', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Perapian luar rumah', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Kapasitas maksimal 20 orang', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Pemandangan kebun teh', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Pemandangan gunung', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Udara sejuk 17°C', value: true },
  ],
  containsPlace: [
    { '@type': 'Accommodation', name: 'Villa Utama', accommodationCategory: 'Villa' },
    { '@type': 'Accommodation', name: 'Tenda Tambahan', accommodationCategory: 'Tent' },
  ],
  nearbyAttractions: [
    { '@type': 'TouristAttraction', name: 'Taman Langit Pangalengan', distance: 'sekitar 4 menit' },
    { '@type': 'TouristAttraction', name: 'Sunrise Point Cukul', distance: 'sekitar 7 menit' },
    { '@type': 'TouristAttraction', name: 'Situ Cileunca', distance: 'sekitar 26 menit' },
    { '@type': 'TouristAttraction', name: 'Hutan Pinus Rahong', distance: 'sekitar 32 menit' },
    { '@type': 'TouristAttraction', name: 'Nimo Highland', distance: 'sekitar 45 menit' },
  ],
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apa itu Homestay Bumina EENK dan di mana lokasinya?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Homestay Bumina EENK adalah penginapan atau villa yang berlokasi di QG8C+QJR, Sukaluyu, Kec. Pangalengan, Kabupaten Bandung, Jawa Barat 40378. Lokasinya berada di kawasan sejuk Pangalengan, cocok untuk liburan keluarga dan rombongan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Berapa kapasitas Homestay Bumina EENK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Homestay Bumina EENK berkapasitas maksimal 20 orang. Rombongan lebih besar dapat menggunakan fasilitas tenda sesuai ketentuan booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah Homestay Bumina EENK terdaftar di Agoda dan Booking.com?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya, Homestay Bumina EENK terdaftar dan terverifikasi resmi di Agoda dan Booking.com — dua platform pemesanan akomodasi internasional terpercaya. Rating di Booking.com adalah 4.9 dari 5. Anda juga bisa menemukan kami di Instagram (@homestay_buminaeenk) dan TikTok (@homestay_bandung).',
      },
    },
    {
      '@type': 'Question',
      name: 'Apa saja wisata terdekat dari Homestay Bumina EENK Pangalengan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Destinasi terdekat meliputi Taman Langit (sekitar 4 menit), Sunrise Point Cukul (7 menit), Situ Cileunca (26 menit), Hutan Pinus Rahong (32 menit), Nimo Highland (45 menit), Rumah Pengabdi Setan (48 menit), Carita Alam (49 menit), dan Kawah Wayang (sekitar 1 jam).',
      },
    },
    {
      '@type': 'Question',
      name: 'Bagaimana cara memesan atau booking Homestay Bumina EENK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anda bisa memesan Homestay Bumina EENK melalui: (1) WhatsApp langsung di +62 852-1946-0779, (2) Agoda, atau (3) Booking.com. Kami responsif 7 hari seminggu dan siap membantu konsultasi gratis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Penginapan apa yang direkomendasikan di Pangalengan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Homestay Syariah Bumina EENK adalah rumah privat di tengah kebun teh, sekitar 4 menit ke Taman Langit, berkapasitas maksimal 20 orang, dengan 3 kamar, 2 kamar mandi, dua perapian, dan dapur lengkap.',
      },
    },
    {
      '@type': 'Question',
      name: 'Berapa harga menginap di Homestay Bumina EENK Pangalengan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Harga menginap di Homestay Bumina EENK bervariasi tergantung tanggal dan musim. Hubungi kami via WhatsApp di +62 852-1946-0779 untuk mendapatkan harga terbaru, atau cek langsung di Agoda dan Booking.com untuk harga dan ketersediaan real-time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah Homestay Bumina EENK cocok untuk keluarga dengan anak-anak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Homestay menyediakan ruang keluarga, halaman dan parkir luas, dapur siap pakai, serta lingkungan kebun teh yang cocok untuk perjalanan keluarga.',
      },
    },
  ],
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Homestay Bumina EENK — Penginapan Pangalengan', item: SITE_URL },
  ],
};

const jsonLdVideo = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Video Tour Homestay Bumina EENK Pangalengan — Villa Kebun Teh Bandung',
  description: 'Video suasana Homestay Syariah Bumina EENK, kebun teh, dua perapian, dan fasilitas rumah privat untuk maksimal 20 orang.',
  thumbnailUrl: `${SITE_URL}/herohome.webp`,
  uploadDate: '2024-01-01',
  contentUrl: 'https://www.youtube.com/watch?v=bfpnKx1WCQw',
  embedUrl: 'https://www.youtube.com/embed/bfpnKx1WCQw',
  publisher: {
    '@type': 'Organization',
    name: 'Homestay Bumina EENK',
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.webp` },
  },
};

// ─── CONSTANTS ───────────────────────────────────────────────
const WA_URL = 'https://wa.me/6285219460779?text=Halo%2C%20saya%20ingin%20tanya%20ketersediaan%20Homestay%20Bumina%20EENK%20Pangalengan';
const AGODA_URL = 'https://www.agoda.com/en-za/homestay-bumina-eenk-bandung-pangalengan/hotel/palayangan-id.html';
const BOOKING_URL = 'https://www.booking.com/hotel/id/bumina-eenk.id.html';
const YOUTUBE_URL = 'https://www.youtube.com/watch?v=bfpnKx1WCQw';
const INSTAGRAM_URL = 'https://www.instagram.com/homestay_buminaeenk/';
const TIKTOK_URL = 'https://www.tiktok.com/@homestay_bandung';

// ─── SVG LOGOS ───────────────────────────────────────────────
const LogoWhatsApp = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

const LogoInstagram = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LogoTikTok = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.22 8.22 0 004.81 1.55V6.79a4.85 4.85 0 01-1.04-.1z" />
  </svg>
);

const LogoYouTube = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LogoAgoda = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden>
    <rect width="40" height="40" rx="8" fill="#E8002D"/>
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="11">agoda</text>
  </svg>
);

const LogoBooking = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden>
    <rect width="40" height="40" rx="8" fill="#003580"/>
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="7.5">booking</text>
  </svg>
);

// ─── DATA ────────────────────────────────────────────────────
const platforms = [
  {
    name: 'Agoda',
    handle: 'Homestay Bumina EENK',
    desc: 'Terdaftar & terverifikasi resmi',
    color: 'from-red-500 to-red-700',
    border: 'border-red-200',
    url: AGODA_URL,
    Logo: LogoAgoda,
    badge: 'OTA Internasional',
    badgeColor: 'bg-red-100 text-red-700',
  },
  {
    name: 'Booking.com',
    handle: 'Bumina EENK',
    desc: 'Rating 4.9/5 — Verified Property',
    color: 'from-blue-600 to-blue-800',
    border: 'border-blue-200',
    url: BOOKING_URL,
    Logo: LogoBooking,
    badge: 'OTA Internasional',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'YouTube',
    handle: '@buminaeenk',
    desc: 'Lihat video tour & review asli',
    color: 'from-red-600 to-red-800',
    border: 'border-red-200',
    url: YOUTUBE_URL,
    Logo: LogoYouTube,
    badge: 'Video Tour',
    badgeColor: 'bg-red-100 text-red-700',
  },
  {
    name: 'Instagram',
    handle: '@homestay_buminaeenk',
    desc: 'Foto & cerita asli dari tamu',
    color: 'from-purple-500 to-pink-600',
    border: 'border-purple-200',
    url: INSTAGRAM_URL,
    Logo: LogoInstagram,
    badge: 'Feed & Reels',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    name: 'TikTok',
    handle: '@homestay_bandung',
    desc: 'Video viral kebun teh & fasilitas',
    color: 'from-gray-800 to-gray-950',
    border: 'border-gray-200',
    url: TIKTOK_URL,
    Logo: LogoTikTok,
    badge: 'Short Video',
    badgeColor: 'bg-gray-100 text-gray-700',
  },
];

const nearbyAttractions = [
  { icon: '🌤️', name: 'Taman Langit', distance: '±4 menit', tag: 'Terdekat', tagColor: 'bg-emerald-500', desc: 'Spot terdekat untuk menunggu matahari terbit atau pulang—dikelilingi garis bukit dan kebun teh.' },
  { icon: '🌅', name: 'Sunrise Point Cukul', distance: '±7 menit', tag: 'Sunrise', tagColor: 'bg-orange-500', desc: 'Pagi yang pelan, kabut yang turun rendah, dan sudut pandang luas ke hamparan perkebunan.' },
  { icon: '🚣', name: 'Situ Cileunca', distance: '±26 menit', tag: 'Adventure', tagColor: 'bg-blue-500', desc: 'Danau ikonik untuk rafting, offroad, dan perjalanan sehari yang lebih berani.' },
  { icon: '🌲', name: 'Hutan Pinus Rahong', distance: '±32 menit', tag: 'Forest', tagColor: 'bg-amber-600', desc: 'Hutan pinus berkabut untuk berjalan pelan, berhenti sejenak, dan mengambil foto tanpa keramaian kota.' },
  { icon: '🌉', name: 'Nimo Highland', distance: '±45 menit', tag: 'Sky bridge', tagColor: 'bg-red-500', desc: 'Jembatan langit dan panorama 360° Pangalengan—datang pagi untuk suasana paling tenang.' },
  { icon: '🏚️', name: 'Rumah Pengabdi Setan', distance: '±48 menit', tag: 'Explore', tagColor: 'bg-gray-700', desc: 'Bangunan kolonial ikonik dengan atmosfer sinematik untuk pencinta sejarah dan eksplorasi.' },
  { icon: '♨️', name: 'Carita Alam', distance: '±49 menit', tag: 'Hot spring', tagColor: 'bg-rose-600', desc: 'Pemandian air panas untuk menutup perjalanan dengan tubuh rileks dan pikiran lebih ringan.' },
  { icon: '🌋', name: 'Kawah Wayang', distance: '±1 jam', tag: 'Volcanic', tagColor: 'bg-purple-600', desc: 'Lanskap kawah yang mentah dan dramatis—tujuan eksplorasi untuk perjalanan yang lebih panjang.' },
];

const facilities = [
  { icon: '🛏️', title: '3 Kamar Tidur', desc: 'Ruang privat untuk beristirahat' },
  { icon: '🚿', title: '2 Kamar Mandi', desc: 'Nyaman untuk rombongan' },
  { icon: '🛋️', title: 'Ruang Keluarga', desc: 'Tempat semua cerita berkumpul' },
  { icon: '🔥', title: 'Dua Perapian', desc: 'Di dalam dan luar rumah' },
  { icon: '🍳', title: 'Dapur Siap Pakai', desc: 'Alat masak & makan lengkap' },
  { icon: '⛺', title: 'Tenda Tamu', desc: 'Tersedia khusus tamu homestay' },
  { icon: '🚗', title: 'Parkir Luas', desc: 'Aman untuk rombongan' },
  { icon: '🌿', title: 'Di Kebun Teh', desc: 'Pagi datang bersama kabut' },
];

const testimonials = [
  {
    name: 'Keluarga Budi Santoso',
    location: 'Jakarta',
    source: 'Booking.com',
    sourceColor: 'text-blue-600',
    text: 'Pengalaman menginap yang luar biasa! Suasana kebun teh yang hijau dan udara sejuk pegunungan membuat kami sangat nyaman. Perapian di dalam rumah benar-benar menghangatkan malam yang dingin.',
  },
  {
    name: 'Rombongan PT Maju Bersama',
    location: 'Surabaya',
    source: 'Agoda',
    sourceColor: 'text-red-600',
    text: 'Rumahnya luas untuk rombongan kami. Fasilitas lengkap, dapur bersih, dan pemandangan gunung di pagi hari bikin tim tidak mau pulang.',
  },
  {
    name: 'Keluarga Sari Wijaya',
    location: 'Bandung',
    source: 'Google Review',
    sourceColor: 'text-emerald-600',
    text: 'Lokasinya strategis—sekitar empat menit ke Taman Langit. Paginya tenang dan suasana alamnya masih asri; kami ingin kembali lagi.',
  },
];

const faqs = [
  { q: 'Berapa kapasitas Homestay Bumina EENK?', a: 'Kapasitas homestay maksimal 20 orang. Untuk rombongan lebih besar tersedia tenda gratis sesuai ketentuan booking.' },
  { q: 'Seberapa dekat dari Taman Langit Pangalengan?', a: 'Sekitar 4 menit dari homestay—ideal untuk mengejar sunrise maupun menikmati sunset.' },
  { q: 'Apakah benar terdaftar di Agoda & Booking.com?', a: 'Ya, 100% resmi dan terverifikasi di kedua platform internasional tersebut. Anda bisa cek langsung di Agoda dan Booking.com untuk membaca ribuan review asli dari tamu sebelumnya.' },
  { q: 'Bagaimana cara booking yang aman?', a: 'Booking via WhatsApp langsung dengan kami, atau pesan melalui Agoda/Booking.com yang menjamin keamanan pembayaran Anda. Kami juga aktif di Instagram @homestay_buminaeenk dan TikTok @homestay_bandung.' },
  { q: 'Apakah tersedia fasilitas memasak sendiri?', a: 'Ya! Dapur lengkap tersedia. Bawa bahan makanan dan masak sendiri — hemat pengeluaran, terutama untuk rombongan besar.' },
  { q: 'Kenapa harus percaya Homestay Bumina EENK?', a: 'Kami terdaftar resmi di Agoda & Booking.com (tidak bisa asal daftar, ada verifikasi ketat), punya YouTube, Instagram, dan TikTok aktif dengan konten asli, serta ratusan review positif yang bisa dibaca siapa saja.' },
];

// ─── COMPONENTS ──────────────────────────────────────────────
const StarRow = ({ count = 5, size = 'text-yellow-400 text-lg' }: { count?: number; size?: string }) => (
  <div className="flex gap-0.5" aria-label={`Rating ${count} bintang`}>
    {Array.from({ length: count }).map((_, i) => <span key={i} className={size}>⭐</span>)}
  </div>
);

const CheckBadge = () => (
  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export default function HomePage() {
  return (
    <div className="font-sans antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLodging) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }} />

      <Header />

      {/* ════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute -inset-6" data-parallax="0.075">
          <Image src="/herohome.webp" alt="Villa Kebun Teh Pangalengan Homestay Bumina EENK" fill className="object-cover" priority unoptimized />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/90" />
        </div>
        <div className="grain-overlay absolute inset-0" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white pt-24 pb-20">

          {/* Trust badge row */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8" data-reveal>
            <a href={AGODA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-red-600/90 backdrop-blur-sm border border-red-400/30 rounded-full px-3.5 py-1.5 text-xs font-bold hover:bg-red-500 transition-colors">
              <span className="text-sm">🏨</span> Agoda Verified
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-sm border border-blue-400/30 rounded-full px-3.5 py-1.5 text-xs font-bold hover:bg-blue-500 transition-colors">
              <span className="text-sm">✅</span> Booking.com 4.9★
            </a>
            <span className="flex items-center gap-1.5 bg-emerald-700/80 backdrop-blur-sm border border-emerald-400/30 rounded-full px-3.5 py-1.5 text-xs font-bold">
              <span className="text-sm">🏔️</span> 4 mnt ke Taman Langit
            </span>
          </div>

          <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-emerald-300">A private hillside stay · Pangalengan</p>
          <h1 className="text-5xl sm:text-7xl lg:text-[7.8rem] font-black tracking-[-0.07em] leading-[0.82] mb-8" data-reveal="slow">
            Di sini, kota<br />
            <span className="font-serif font-normal italic text-emerald-300">kehilangan suaranya.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto mb-3">
            <strong className="text-white">Bumina EENK</strong> adalah homestay syariah privat di antara kebun teh dan kabut Pangalengan—tempat keluarga pulang dengan cerita baru.
          </p>
          <p className="text-emerald-300 font-semibold text-sm sm:text-base mb-12">
            Sukaluyu · 3 kamar · Hingga 20 tamu · 4 menit ke Taman Langit
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all hover:scale-105 shadow-2xl shadow-green-900/50 w-full sm:w-auto">
              <LogoWhatsApp size={24} />
              Chat WhatsApp
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-600/80 hover:bg-blue-500/90 border border-blue-400/40 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all hover:scale-105 backdrop-blur-sm w-full sm:w-auto">
              Cek Booking.com
            </a>
          </div>

          {/* Social proof bar */}
          <div className="flex flex-wrap justify-center gap-6 text-center text-sm">
            {[
              { val: '4.9★', lbl: 'Rating Booking.com' },
              { val: '200+', lbl: 'Review Verified' },
              { val: '5 Platform', lbl: 'Digital Presence' },
              { val: '0', lbl: 'Kasus Penipuan' },
            ].map(s => (
              <div key={s.lbl} className="flex flex-col items-center">
                <span className="text-2xl font-black text-emerald-300">{s.val}</span>
                <span className="text-gray-400 text-xs mt-0.5">{s.lbl}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <ScrollStory />

      {/* ════════════════════════════════════════
          SECTION 2 — TRUST / CREDIBILITY BLOCK
          "Takut kena tipu? Ini buktinya."
      ════════════════════════════════════════ */}
      <section id="proof" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading with hook */}
          <div className="text-center mb-4">
            <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
              Kenapa Bisa Dipercaya?
            </span>
          </div>
          <div className="text-center mb-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Kepercayaan tidak lahir
              <span className="block font-serif font-normal italic text-emerald-700">dari tombol booking.</span>
            </h2>
          </div>
          <p className="text-center text-gray-500 text-lg max-w-2xl mx-auto mb-16">
            Ia lahir dari jejak yang bisa diperiksa. Karena itu, identitas dan kanal resmi Bumina EENK kami buka tanpa lapisan yang dibuat-buat.
          </p>

          {/* Platform cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-white border-2 ${p.border} rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 overflow-hidden`}
              >
                {/* Gradient top accent */}
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${p.color}`} />

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shadow-md`}>
                      <p.Logo size={26} />
                    </div>
                    <div>
                      <div className="font-black text-gray-900 text-base">{p.name}</div>
                      <div className="text-gray-500 text-xs">{p.handle}</div>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.badgeColor}`}>{p.badge}</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <CheckBadge />
                    <span>Akun Terverifikasi</span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 group-hover:underline">
                    Lihat Langsung →
                  </span>
                </div>
              </a>
            ))}

            {/* Extra trust card */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-6 text-white flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-black text-xl mb-2">Jaminan Aman 100%</h3>
                <p className="text-emerald-100 text-sm leading-relaxed mb-4">
                  Pembayaran via Booking.com &amp; Agoda dilindungi sistem payment internasional.
                  Booking via WA? Chat langsung dengan pemilik — bukan calo.
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  'Tidak ada calo atau makelar',
                  'Harga transparan, tidak ada hidden fee',
                  'Batalkan & refund sesuai kebijakan platform',
                ].map(txt => (
                  <li key={txt} className="flex items-start gap-2 text-sm text-emerald-100">
                    <CheckBadge />
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* YouTube embed CTA */}
          <div className="bg-gray-950 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-red-900/40">
              <LogoYouTube size={40} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="text-white font-black text-2xl sm:text-3xl mb-2">
                Masih Ragu? Tonton Video Tour-nya
              </div>
              <p className="text-gray-400 text-base mb-5">
                Lihat sendiri kondisi nyata villa, kebun teh, perapian, dan semua fasilitas — langsung dari YouTube. Tidak bisa bohong di video.
              </p>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-7 rounded-xl transition-all hover:scale-105"
              >
                <LogoYouTube size={22} />
                Tonton di YouTube Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — SOCIAL PROOF (IG + TikTok)
      ════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
              Sosial Media Kami
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
              Yang nyata tidak perlu<br />
              <span className="font-serif font-normal italic text-emerald-700">terlalu banyak filter.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Follow kami dan lihat sendiri kenapa Bumina EENK jadi destinasi healing favorit ribuan orang dari seluruh Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

            {/* Instagram card */}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-8 text-white hover:shadow-2xl hover:shadow-pink-900/30 transition-all hover:-translate-y-1">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_white,_transparent)]" />
              <div className="relative z-10 flex flex-col h-full gap-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <LogoInstagram size={32} />
                  </div>
                  <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">Feed & Reels</span>
                </div>
                <div>
                  <div className="font-black text-2xl sm:text-3xl mb-1">Instagram</div>
                  <div className="text-pink-200 font-semibold text-sm mb-3">@homestay_buminaeenk</div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Foto dan Reels asli yang menampilkan suasana kebun teh, kamar, perapian, dan momen seru tamu-tamu kami setiap hari.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 rounded-xl overflow-hidden">
                  {['/herohome-kebon-teh.webp', '/herohome-tamanlangit.webp', '/herohome-depan-villa.webp'].map((src, i) => (
                    <div key={i} className="h-20 relative rounded-lg overflow-hidden">
                      <Image src={src} alt={`Instagram post Bumina EENK ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized loading="lazy" sizes="80px" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 font-bold text-sm">
                  <span>Lihat Feed Instagram</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>

            {/* TikTok card */}
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden bg-gray-950 p-8 text-white hover:shadow-2xl hover:shadow-black/40 transition-all hover:-translate-y-1 border border-gray-800">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_bottom_left,_#00f2ea,_transparent)]" />
              <div className="relative z-10 flex flex-col h-full gap-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                    <LogoTikTok size={32} />
                  </div>
                  <span className="text-xs font-bold bg-white/10 border border-white/10 px-3 py-1 rounded-full">Short Video</span>
                </div>
                <div>
                  <div className="font-black text-2xl sm:text-3xl mb-1">TikTok</div>
                  <div className="text-[#69C9D0] font-semibold text-sm mb-3">@homestay_bandung</div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Video viral suasana kebun teh pagi hari, momen bersama keluarga, dan tips liburan hemat ke Pangalengan — semuanya organik, dari hati.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 rounded-xl overflow-hidden">
                  {['/herohome-padang-yang-luas.webp', '/herohome-pantai-buaya.webp', '/pemandangan1.webp'].map((src, i) => (
                    <div key={i} className="h-20 relative rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5" />
                        </div>
                      </div>
                      <Image src={src} alt={`TikTok Bumina EENK ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized loading="lazy" sizes="80px" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 font-bold text-sm text-[#69C9D0]">
                  <span>Tonton di TikTok</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          </div>

          {/* All platforms mini bar */}
          <div className="flex flex-wrap justify-center items-center gap-4 py-6 border-y border-gray-200">
            <span className="text-gray-400 text-sm font-medium">Temukan kami di:</span>
            {[
              { url: AGODA_URL, label: 'Agoda', Logo: LogoAgoda, color: 'hover:text-red-600' },
              { url: BOOKING_URL, label: 'Booking.com', Logo: LogoBooking, color: 'hover:text-blue-700' },
              { url: YOUTUBE_URL, label: 'YouTube', Logo: LogoYouTube, color: 'hover:text-red-600' },
              { url: INSTAGRAM_URL, label: 'Instagram', Logo: LogoInstagram, color: 'hover:text-pink-600' },
              { url: TIKTOK_URL, label: 'TikTok', Logo: LogoTikTok, color: 'hover:text-gray-900' },
            ].map(({ url, label, Logo, color }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2 text-gray-500 ${color} font-semibold text-sm transition-colors px-3 py-2 rounded-lg hover:bg-gray-100`}>
                <Logo size={20} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3B — GOOGLE MAPS LOCATION
      ════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
              Lokasi
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 leading-tight">
              Temukan Kami di Google Maps
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              QG8C+QJR, Sukaluyu, Pangalengan — buka Google Maps untuk menuju lokasi Homestay Bumina EENK.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Map */}
            <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <iframe
                title="Lokasi Homestay Bumina EENK di Google Maps"
                src="https://www.google.com/maps?q=QG8C%2BQJR%2C%20Sukaluyu%2C%20Kec.%20Pangalengan%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2040378&hl=id&z=15&output=embed"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info card */}
            <div className="flex flex-col gap-4">
              {/* Google Business badge */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-100">
                    {/* Google G logo */}
                    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-black text-gray-900 text-sm">Google Business</div>
                    <div className="text-xs text-gray-500">Profil Resmi Terverifikasi</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-sm">⭐</span>)}
                  <span className="font-black text-gray-900 text-sm ml-1">4.9</span>
                </div>
                <p className="text-gray-500 text-xs mb-4">200+ ulasan terverifikasi</p>
                <a
                  href="https://maps.app.goo.gl/QuE23efP6yoJxFLn7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm py-2.5 px-4 rounded-xl transition-colors"
                >
                  Buka di Google Maps →
                </a>
              </div>

              {/* Address card */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 mb-3 text-sm">📍 Alamat Lengkap</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  QG8C+QJR, Sukaluyu,<br />
                  Kec. Pangalengan, Kabupaten Bandung,<br />
                  Jawa Barat 40378
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>🏔️</span>
                    <span>Ketinggian 1.400 mdpl</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>🚗</span>
                    <span>~40 km dari Kota Bandung</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>🌤️</span>
                    <span>±4 menit ke Taman Langit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 — ABOUT / CERITA
      ════════════════════════════════════════ */}
      <section id="stay" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-72 relative rounded-3xl overflow-hidden shadow-xl">
                <Image src="/herohome-kebon-teh.webp" alt="Kebun teh di sekitar Homestay Bumina EENK Pangalengan" fill className="object-cover" unoptimized loading="lazy" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="h-48 relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/herohome-depan-villa.webp" alt="Tampak depan Villa Bumina EENK" fill className="object-cover" unoptimized loading="lazy" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="h-48 relative rounded-2xl overflow-hidden shadow-lg">
                <Image src="/herohome-tamanlangit.webp" alt="Taman Langit Pangalengan — sekitar 4 menit dari Bumina EENK" fill className="object-cover" unoptimized loading="lazy" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            </div>

            <div>
              <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
                Tentang Homestay
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
                Sebuah rumah, ditulis
                <span className="block font-serif font-normal italic text-emerald-700">oleh kabut dan perapian.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                Bumina EENK adalah <strong className="text-gray-800">rumah hangat di tengah kebun teh Sosro</strong> yang menjadi basecamp sempurna untuk liburan di Pangalengan. Bayangkan: bangun pagi, kabut tipis menyapu teras, dan hijau kebun teh sejauh mata memandang.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Malamnya? Kumpul bersama di depan <strong className="text-gray-800">perapian hangat</strong>, ngobrol, tertawa, dan melupakan sejenak hiruk-pikuk kota.
              </p>
              <ul className="space-y-3">
                {[
                  'Sekitar 4 menit ke Taman Langit Pangalengan',
                  'Kapasitas maksimal 20 orang',
                  'Dapur lengkap — masak sendiri, lebih hemat',
                  'Perapian hangat untuk malam yang dingin',
                  'Camping ground berlantai kayu tersedia',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckBadge />
                    </div>
                    <span className="text-gray-700 font-medium">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-7 rounded-xl transition-all hover:scale-105">
                  <LogoWhatsApp size={22} />
                  Tanya Ketersediaan via WA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5 — WISATA TERDEKAT
      ════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
              Lokasi Strategis
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
              Bangun di tengah<br />
              <span className="font-serif font-normal italic text-emerald-700">peta perjalanan.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Bumina EENK adalah <em>home base</em> ideal untuk menjelajahi seluruh Bandung Selatan dalam satu trip hemat.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {nearbyAttractions.map((place) => (
              <div key={place.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{place.icon}</span>
                  <span className={`${place.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>{place.tag}</span>
                </div>
                <h3 className="font-black text-gray-900 text-base mb-1">{place.name}</h3>
                <p className="text-emerald-600 text-sm font-semibold mb-3">📍 {place.distance}</p>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{place.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 6 — FASILITAS
      ════════════════════════════════════════ */}
      <section id="facilities" className="py-24 bg-emerald-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-800 text-emerald-300 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
              Fasilitas
            </span>
            <h2 className="text-5xl sm:text-7xl font-black tracking-[-0.06em] leading-[.9] mb-5">Yang kamu butuhkan.<br /><span className="font-serif font-normal italic text-emerald-300">Tanpa yang berlebihan.</span></h2>
            <p className="text-emerald-200/70 text-lg max-w-2xl mx-auto">Ruang untuk berkumpul, sudut untuk menyendiri, dan api yang tetap menyala saat udara turun.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {facilities.map((f) => (
              <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="text-4xl mb-3">{f.icon}</div>
                <div className="font-bold text-white mb-1">{f.title}</div>
                <div className="text-sm text-emerald-300">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION HARGA — PAKET & TARIF
      ════════════════════════════════════════ */}
      <section id="rates" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid items-end gap-7 border-b border-emerald-950/15 pb-10 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Stay, simply</span>
              <h2 className="mt-5 text-5xl font-black leading-[0.88] tracking-[-0.065em] text-gray-950 sm:text-7xl">
                Satu rumah.<br /><span className="font-serif font-normal italic text-emerald-700">Banyak cerita.</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-gray-600 lg:justify-self-end">Tarif yang jelas untuk homestay syariah privat. Lima tamu pertama sudah termasuk; datang lebih ramai, tinggal tambahkan per orang.</p>
          </div>

          <div className="mb-10 grid gap-px overflow-hidden rounded-[2rem] bg-emerald-950/15 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { season: 'Weekday', price: '850K', note: 'Senin — Kamis' },
              { season: 'Weekend', price: '900K', note: 'Jumat — Minggu' },
              { season: 'Long holiday', price: '1JT', note: 'Libur panjang' },
              { season: 'High season', price: '1.5JT', note: 'Peak dates' },
            ].map((rate, index) => (
              <article key={rate.season} className={`group relative min-h-80 p-7 transition-colors sm:p-8 ${index === 3 ? 'bg-emerald-950 text-white' : 'bg-white hover:bg-emerald-50'}`}>
                <div className={`text-[10px] font-black uppercase tracking-[0.22em] ${index === 3 ? 'text-emerald-300' : 'text-emerald-700'}`}>{String(index + 1).padStart(2, '0')} / {rate.season}</div>
                <div className="mt-12 font-serif text-6xl italic tracking-[-0.07em] sm:text-7xl">{rate.price}</div>
                <p className={`mt-3 text-sm ${index === 3 ? 'text-emerald-200' : 'text-gray-500'}`}>per malam · untuk 5 tamu</p>
                <div className={`absolute inset-x-7 bottom-7 border-t pt-5 text-sm leading-6 ${index === 3 ? 'border-white/15 text-emerald-100' : 'border-black/10 text-gray-600'}`}>
                  {rate.note}<br />Tamu tambahan <strong>Rp70.000/orang</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
            <div className="rounded-[2rem] bg-emerald-100 p-7 sm:p-9">
              <p className="text-xs font-black uppercase tracking-[.2em] text-emerald-800">Early escape privilege</p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[['H−1 bulan', '10%'], ['H−2 bulan', '15%'], ['H−3 bulan+', '20%']].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-white/70 px-3 py-5"><strong className="block text-2xl text-emerald-950 sm:text-3xl">{value}</strong><span className="mt-1 block text-xs text-emerald-800">{label}</span></div>
                ))}
              </div>
              <p className="mt-4 text-xs text-emerald-800/70">High season: diskon maksimal 15%.</p>
            </div>
            <div className="rounded-[2rem] bg-[#13251d] p-7 text-white sm:p-9">
              <p className="text-xs font-black uppercase tracking-[.2em] text-emerald-300">Good to know</p>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-white/75">
                <li>• Maksimal 20 tamu di homestay</li>
                <li>• Sewa tenda khusus tamu: Rp150.000</li>
                <li>• Tenda gratis untuk rombongan di atas 20 orang</li>
                <li>• DP minimal 40% untuk mengunci tanggal</li>
                <li>• Survei tidak dilayani pada hari H</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 7 — GALERI
      ════════════════════════════════════════ */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
              Galeri
            </span>
            <h2 className="text-5xl sm:text-7xl font-black tracking-[-0.06em] leading-[.9] text-gray-950 mb-5">Pangalengan dalam<br /><span className="font-serif font-normal italic text-emerald-700">beberapa bingkai.</span></h2>
            <p className="text-gray-500 text-lg">Foto suasana tanpa wajah buatan, tanpa adegan yang dipaksakan—hanya ruang, cahaya, dan lanskap sebagaimana adanya.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 h-80 relative rounded-3xl overflow-hidden group">
              <Image src="/images/editorial/homestay-rain.webp" alt="Homestay hangat dalam kabut Pangalengan" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized loading="lazy" sizes="(max-width: 768px) 100vw, 66vw" />
            </div>
            <div className="h-80 relative rounded-3xl overflow-hidden group">
              <Image src="/images/editorial/bedroom-rain.webp" alt="Kamar tidur hangat menghadap hujan Pangalengan" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="h-60 relative rounded-2xl overflow-hidden group">
              <Image src="/images/editorial/fireplace-interior.webp" alt="Perapian dalam rumah yang hangat" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized loading="lazy" sizes="(max-width: 768px) 50vw, 33vw" />
            </div>
            <div className="h-60 relative rounded-2xl overflow-hidden group">
              <Image src="/images/editorial/homestay-kitchen.webp" alt="Dapur lengkap siap dipakai" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized loading="lazy" sizes="(max-width: 768px) 50vw, 33vw" />
            </div>
            <div className="h-60 relative rounded-2xl overflow-hidden group">
              <Image src="/images/editorial/outdoor-fireplace.webp" alt="Perapian luar rumah pada malam berkabut" fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized loading="lazy" sizes="(max-width: 768px) 50vw, 33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 8 — TESTIMONI
      ════════════════════════════════════════ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
              Testimoni
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.055em] text-gray-950 mb-3">
              Cerita yang tertinggal<br /><span className="font-serif font-normal italic text-emerald-700">setelah checkout.</span>
            </h2>
            <StarRow count={5} size="text-yellow-400 text-2xl" />
            <p className="text-gray-500 mt-2">Rating 4.9/5 dari ratusan tamu terverifikasi</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <article key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                <StarRow />
                <blockquote className="text-gray-600 italic leading-relaxed flex-grow my-5">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                  <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-emerald-950 font-serif text-lg italic text-emerald-200" aria-hidden="true">BE</div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.location}</div>
                    <div className={`text-xs font-bold ${t.sourceColor}`}>via {t.source}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 9 — FAQ
      ════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">FAQ</span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.055em] text-gray-950 mb-4">Hal kecil yang baik<br /><span className="font-serif font-normal italic text-emerald-700">untuk diketahui.</span></h2>
            <p className="text-gray-500 text-lg">Semua yang perlu kamu tahu sebelum booking.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer font-bold text-gray-900 text-base list-none select-none hover:bg-gray-100 transition-colors gap-4">
                  <span>{faq.q}</span>
                  <span className="text-emerald-600 flex-shrink-0">
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 10 — FINAL CTA
      ════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/herohome-kebon-teh.webp" alt="Kebun teh Pangalengan" fill className="object-cover" unoptimized loading="lazy" sizes="100vw" />
          <div className="absolute inset-0 bg-emerald-950/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <span className="inline-block text-emerald-400 font-bold text-xs tracking-[0.2em] uppercase mb-6">Yuk, Liburan!</span>
          <h2 className="text-4xl sm:text-6xl font-black mb-4 leading-tight">
            Datang sebelum akhir pekan<br />
            <span className="font-serif font-normal italic text-emerald-300">belajar terlalu ramai.</span>
          </h2>
          <p className="text-xl text-emerald-200 mb-4 max-w-2xl mx-auto">
            Ribuan tamu sudah membuktikan. Kamu yang belum.
          </p>
          <p className="text-gray-400 text-sm mb-10">
            Terdaftar resmi di Agoda &amp; Booking.com · Aktif di Instagram &amp; TikTok · 0 kasus penipuan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-5 px-10 rounded-2xl text-xl transition-all hover:scale-105 shadow-2xl shadow-green-900/50 w-full sm:w-auto">
              <LogoWhatsApp size={26} />
              Chat WhatsApp Sekarang
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-600/80 hover:bg-blue-500/90 border border-blue-400/30 text-white font-bold py-5 px-10 rounded-2xl text-xl transition-all hover:scale-105 backdrop-blur-sm w-full sm:w-auto">
              Pesan di Booking.com
            </a>
          </div>
          {/* Platform icons row */}
          <div className="flex justify-center items-center gap-5 opacity-60">
            {[
              { url: AGODA_URL, Logo: LogoAgoda, label: 'Agoda' },
              { url: BOOKING_URL, Logo: LogoBooking, label: 'Booking.com' },
              { url: YOUTUBE_URL, Logo: LogoYouTube, label: 'YouTube' },
              { url: INSTAGRAM_URL, Logo: LogoInstagram, label: 'Instagram' },
              { url: TIKTOK_URL, Logo: LogoTikTok, label: 'TikTok' },
            ].map(({ url, Logo, label }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="text-white hover:opacity-100 transition-opacity">
                <Logo size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 py-10 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-emerald-400 font-bold text-xl mb-2">Homestay Bumina EENK</div>
          <p className="mb-1">QG8C+QJR, Sukaluyu, Kec. Pangalengan, Kabupaten Bandung, Jawa Barat 40378</p>
          <p className="mb-5">
            +62 852-1946-0779 ·{' '}
            <a href="https://buminaeenk.com" className="hover:text-white transition-colors">buminaeenk.com</a>
          </p>
          <div className="flex justify-center gap-4 mb-5">
            {[
              { url: AGODA_URL, Logo: LogoAgoda, label: 'Agoda' },
              { url: BOOKING_URL, Logo: LogoBooking, label: 'Booking.com' },
              { url: YOUTUBE_URL, Logo: LogoYouTube, label: 'YouTube' },
              { url: INSTAGRAM_URL, Logo: LogoInstagram, label: 'Instagram' },
              { url: TIKTOK_URL, Logo: LogoTikTok, label: 'TikTok' },
            ].map(({ url, Logo, label }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="text-gray-600 hover:text-white transition-colors">
                <Logo size={22} />
              </a>
            ))}
          </div>
          <p className="text-gray-700">© 2026 Homestay Bumina EENK. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
