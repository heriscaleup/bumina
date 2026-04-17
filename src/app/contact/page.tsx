import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateMetadataObject, SchemaOrg } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadataObject({
  title: "Kontak & Lokasi Homestay Bumina EENK — Pangalengan Bandung",
  description: "Hubungi Homestay Bumina EENK untuk booking atau informasi. WhatsApp +62 852-1946-0779. Lokasi: Puncak Mulya, Pangalengan, Bandung Selatan. Cek juga Agoda & Booking.com.",
  canonical: "/contact",
});

const WA_URL = 'https://wa.me/6285219460779?text=Halo%2C%20saya%20ingin%20tanya%20ketersediaan%20Homestay%20Bumina%20EENK%20Pangalengan';
const AGODA_URL = 'https://www.agoda.com/en-za/homestay-bumina-eenk-bandung-pangalengan/hotel/palayangan-id.html';
const BOOKING_URL = 'https://www.booking.com/hotel/id/bumina-eenk.id.html';
const INSTAGRAM_URL = 'https://www.instagram.com/homestay_buminaeenk/';
const TIKTOK_URL = 'https://www.tiktok.com/@homestay_bandung';
const YOUTUBE_URL = 'https://www.youtube.com/watch?v=bfpnKx1WCQw';

const faqQuestions = [
  {
    question: "Berapa kapasitas maksimal homestay?",
    answer: "Homestay kami dapat menampung hingga 25 orang dengan nyaman, cocok untuk keluarga besar atau rombongan kantor.",
  },
  {
    question: "Fasilitas apa saja yang tersedia?",
    answer: "Kami menyediakan dapur lengkap, perapian hangat, parkir luas, camping ground berlantai kayu, dan pemandangan kebun teh Sosro yang indah.",
  },
  {
    question: "Bagaimana cara melakukan booking?",
    answer: "Cara paling cepat: chat WhatsApp +62 852-1946-0779. Bisa juga booking langsung via Agoda atau Booking.com untuk harga dan ketersediaan real-time.",
  },
  {
    question: "Jam berapa check-in dan check-out?",
    answer: "Check-in mulai pukul 14:00 dan check-out paling lambat pukul 12:00. Untuk request early check-in atau late check-out, silakan hubungi kami via WhatsApp.",
  },
  {
    question: "Apakah boleh membawa hewan peliharaan?",
    answer: "Untuk saat ini, kami belum bisa mengakomodasi hewan peliharaan demi menjaga kenyamanan semua tamu.",
  },
  {
    question: "Apakah ada minimum booking malam?",
    answer: "Kami tidak mewajibkan minimum malam. Namun untuk paket gathering atau event spesial, kami merekomendasikan minimum 2 malam agar pengalaman lebih optimal.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SchemaOrg.faqPage(faqQuestions)) }}
      />
      <Header />
      <main className="min-h-screen">

        {/* ─── HERO ─────────────────────────────── */}
        <section className="bg-emerald-950 py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block bg-emerald-800 text-emerald-300 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
              Kontak &amp; Lokasi
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Ada Pertanyaan?<br />
              <span className="text-emerald-400">Kami Siap Bantu</span>
            </h1>
            <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
              Tim kami merespons cepat — biasanya dalam hitungan menit. Jangan ragu tanya apapun soal booking, fasilitas, atau lokasi.
            </p>
          </div>
        </section>

        {/* ─── KONTAK UTAMA ───────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* Kontak Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
                    Informasi Kontak
                  </span>
                  <h2 className="text-3xl font-black text-gray-900 mb-8 leading-tight">
                    Hubungi Kami
                  </h2>
                </div>

                {/* WA - utama */}
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-2xl p-5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-black text-gray-900">WhatsApp — Respon Tercepat</div>
                    <div className="text-green-700 font-semibold">+62 852-1946-0779</div>
                    <div className="text-gray-400 text-xs mt-0.5">Biasanya respons dalam beberapa menit</div>
                  </div>
                </a>

                {/* Alamat */}
                <div className="flex items-start gap-4 p-5">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">📍</div>
                  <div>
                    <div className="font-black text-gray-900 mb-1">Alamat</div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Desa Puncak Mulya, dekat Taman Langit<br />
                      Pangalengan, Kabupaten Bandung<br />
                      Jawa Barat 40378, Indonesia
                    </p>
                  </div>
                </div>

                {/* Telepon */}
                <div className="flex items-start gap-4 p-5">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">📞</div>
                  <div>
                    <div className="font-black text-gray-900 mb-1">Telepon</div>
                    <a href="tel:+6285219460779" className="text-gray-600 hover:text-emerald-700 transition-colors font-semibold">
                      +62 852-1946-0779
                    </a>
                  </div>
                </div>

                {/* Jam operasional */}
                <div className="flex items-start gap-4 p-5">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">🕐</div>
                  <div>
                    <div className="font-black text-gray-900 mb-1">Jam Layanan</div>
                    <div className="text-gray-600 text-sm space-y-0.5">
                      <div>Check-in: <span className="font-semibold">14:00</span></div>
                      <div>Check-out: <span className="font-semibold">12:00</span></div>
                      <div className="text-gray-400">WhatsApp bisa kapanpun</div>
                    </div>
                  </div>
                </div>

                {/* Social & OTA links */}
                <div className="pt-2">
                  <div className="font-black text-gray-900 mb-4">Temukan Kami Di</div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Agoda', url: AGODA_URL, bg: 'bg-red-50 hover:bg-red-100 border-red-200 text-red-800', icon: '🏨' },
                      { label: 'Booking.com', url: BOOKING_URL, bg: 'bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-800', icon: '✅' },
                      { label: 'Instagram', url: INSTAGRAM_URL, bg: 'bg-pink-50 hover:bg-pink-100 border-pink-200 text-pink-800', icon: '📸' },
                      { label: 'TikTok', url: TIKTOK_URL, bg: 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-800', icon: '🎵' },
                      { label: 'YouTube', url: YOUTUBE_URL, bg: 'bg-red-50 hover:bg-red-100 border-red-200 text-red-800', icon: '▶️' },
                    ].map(p => (
                      <a key={p.label} href={p.url} target="_blank" rel="noopener noreferrer"
                        className={`flex items-center gap-2 border rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${p.bg}`}>
                        <span>{p.icon}</span>{p.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="lg:col-span-3">
                <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
                  FAQ
                </span>
                <h2 className="text-3xl font-black text-gray-900 mb-8 leading-tight">
                  Pertanyaan yang Sering Ditanyakan
                </h2>
                <div className="space-y-3">
                  {faqQuestions.map((faq, i) => (
                    <details key={i} className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                      <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-bold text-gray-900 hover:bg-gray-100 transition-colors list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-emerald-600 ml-4 flex-shrink-0 text-xl transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>

                {/* Booking CTA */}
                <div className="mt-10 bg-emerald-950 rounded-3xl p-8 text-center">
                  <div className="text-3xl mb-3">💬</div>
                  <h3 className="text-white font-black text-xl mb-2">Pertanyaan Lain?</h3>
                  <p className="text-emerald-300 text-sm mb-6">Tim kami siap menjawab apapun via WhatsApp — 24 jam, 7 hari seminggu.</p>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-400 text-white font-black px-8 py-3 rounded-xl transition-all hover:scale-105"
                  >
                    Chat Sekarang
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── GOOGLE MAPS ────────────────────────── */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block bg-emerald-50 text-emerald-700 font-bold text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-5">
                Lokasi
              </span>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Temukan Kami di Peta
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                Kami berada di Puncak Mulya, Pangalengan — dikelilingi keindahan alam dan kebun teh Sosro yang legendaris.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Homestay+Bumina+EENK+Pangalengan+Bandung&language=id&zoom=15`}
                width="100%"
                height="480"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Homestay Bumina EENK Pangalengan"
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maps.google.com/?q=Homestay+Bumina+EENK+Pangalengan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-emerald-500 text-gray-700 hover:text-emerald-700 font-bold px-6 py-3 rounded-xl transition-all shadow-sm"
              >
                <span>📍</span> Buka di Google Maps
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all"
              >
                <span>💬</span> Minta Panduan Jalan
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
