import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPagination from "@/components/BlogPagination";
import { getAllArticles, type Article, ARTICLES_PER_PAGE } from "@/blog/articleHelpers";
import { generateMetadataObject } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadataObject({
  title: "Blog Wisata Pangalengan — Tips & Panduan Liburan",
  description: "Temukan panduan, tips liburan, dan rekomendasi tempat wisata terbaik di Pangalengan dari blog Homestay Bumina EENK.",
  canonical: "/blog",
});

export default async function BlogPage() {
  const allArticles = await getAllArticles();
  const totalPages = Math.ceil(allArticles.length / ARTICLES_PER_PAGE);
  const articles = allArticles.slice(0, ARTICLES_PER_PAGE);
  const [featured, ...rest] = articles;
  const formatDate = (date: string) => new Date(date).toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });

  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden bg-[#f3f1e9] text-[#13251d]">
        <section className="relative border-b border-emerald-950/15">
          <div className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" data-parallax="0.08" />
          <div className="mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
            <div className="mb-12 flex items-center justify-between border-b border-emerald-950/15 pb-4 text-[10px] font-black uppercase tracking-[.22em] text-emerald-800">
              <Link href="/">← Bumina EENK</Link>
              <span>Stories from 1.400 mdpl</span>
              <span className="hidden sm:block">Pangalengan · Indonesia</span>
            </div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-emerald-700">Bumina Field Notes · Vol. 01</p>
            <h1 className="max-w-6xl text-[18vw] font-black leading-[.68] tracking-[-.09em] sm:text-[8.5rem] lg:text-[11rem]">
              FIELD<br /><span className="ml-[12vw] font-serif font-normal italic text-emerald-700 sm:ml-32">Notes.</span>
            </h1>
            <div className="mt-12 grid gap-6 border-t border-emerald-950/15 pt-6 sm:grid-cols-[1fr_1fr] lg:grid-cols-[1.4fr_.6fr]">
              <p className="max-w-2xl text-xl leading-8 sm:text-2xl">Catatan dari jalan berkabut, dapur yang tetap hangat, dan pagi yang dimulai sebelum matahari.</p>
              <p className="max-w-sm text-sm leading-6 text-emerald-950/60 lg:justify-self-end">Panduan lokal, itinerary, dan cerita Pangalengan—ditulis untuk dibawa pergi, bukan hanya dibaca lalu dilupakan.</p>
            </div>
          </div>
        </section>

        {featured && (
          <section className="border-b border-emerald-950/15 bg-[#13251d] text-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
              <div className="mb-8 flex items-center justify-between text-[10px] font-black uppercase tracking-[.22em] text-emerald-300"><span>Cover Story</span><span>01 / {String(allArticles.length).padStart(2, '0')}</span></div>
              <Link href={`/blog/${featured.slug}`} className="group grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
                <div className="relative aspect-[4/3] overflow-hidden bg-emerald-950 lg:aspect-[16/11]">
                  <Image src={featured.image} alt={featured.title} fill sizes="(min-width: 1024px) 65vw, 100vw" className="image-lift object-cover grayscale-[15%]" unoptimized priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                </div>
                <div className="pb-2">
                  <div className="mb-5 flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-emerald-300"><span>{featured.category}</span><span>—</span><time>{formatDate(featured.date)}</time></div>
                  <h2 className="text-4xl font-black leading-[.95] tracking-[-0.055em] sm:text-6xl">{featured.title}</h2>
                  <p className="mt-6 text-base leading-7 text-white/65">{featured.excerpt}</p>
                  <span className="mt-9 inline-flex items-center gap-4 border-b border-emerald-300 pb-2 text-xs font-black uppercase tracking-[.18em] text-emerald-200">Open the story <b className="transition-transform group-hover:translate-x-2">→</b></span>
                </div>
              </Link>
            </div>
          </section>
        )}

        <section className="py-16 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid items-end gap-5 border-b border-emerald-950/20 pb-7 sm:grid-cols-2"><h2 className="text-4xl font-black tracking-[-.055em] sm:text-6xl">Latest dispatches</h2><p className="text-sm text-emerald-950/55 sm:text-right">{allArticles.length} catatan lapangan · diperbarui berkala</p></div>
            <div>
              {rest.map((post: Article, index) => (
                <article key={post.slug} className="group grid gap-5 border-b border-emerald-950/15 py-8 sm:grid-cols-[3rem_1fr_11rem] lg:grid-cols-[4rem_1fr_18rem] lg:items-center">
                  <span className="text-xs font-black text-emerald-800">{String(index + 2).padStart(2, '0')}</span>
                  <div>
                    <div className="mb-3 flex items-center gap-3 text-[10px] font-black uppercase tracking-[.18em] text-emerald-700"><span>{post.category}</span><span>—</span><time>{formatDate(post.date)}</time></div>
                    <h3 className="max-w-3xl text-2xl font-black leading-[1.02] tracking-[-.04em] sm:text-4xl"><Link href={`/blog/${post.slug}`} className="transition-colors group-hover:text-emerald-700">{post.title}</Link></h3>
                    <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-6 text-emerald-950/55">{post.excerpt}</p>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="relative hidden aspect-[16/10] overflow-hidden bg-emerald-950 sm:block">
                    <Image src={post.image} alt={post.title} fill sizes="288px" className="image-lift object-cover grayscale-[18%]" unoptimized />
                  </Link>
                </article>
              ))}
            </div>
            <BlogPagination currentPage={1} totalPages={totalPages} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
