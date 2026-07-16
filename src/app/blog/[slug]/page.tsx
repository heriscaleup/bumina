import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { getAllArticles, getArticleBySlug, type Article } from "@/blog/articleHelpers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateMetadataObject, SchemaOrg } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((post: Article) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { post } = await getArticleBySlug(slug);
  if (!post) return generateMetadataObject({ title: "Artikel Tidak Ditemukan" });
  return generateMetadataObject({ title: post.title, description: post.excerpt, canonical: `/blog/${post.slug}`, image: post.image });
}

export default async function BlogPostDetail({ params }: PageProps) {
  const { slug } = await params;
  const { post, relatedPosts } = await getArticleBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SchemaOrg.article(post)) }} />
      <Header />
      <main className="bg-[#fbfaf7] text-neutral-950">
        <article className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8 lg:pb-20 lg:pt-32">
          <div className="min-w-0">
            <nav className="mb-10 text-sm text-neutral-500" aria-label="Breadcrumb">
              <Link href="/" className="font-semibold hover:text-neutral-950">Beranda</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="font-semibold hover:text-neutral-950">Journal</Link>
            </nav>
            <header className="border-b border-black/10 pb-8">
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                <span className="font-black uppercase tracking-[0.18em] text-emerald-700">{post.category}</span><span>•</span>
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</time>
              </div>
              <h1 className="max-w-4xl text-balance text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{post.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600 sm:text-xl">{post.excerpt}</p>
              <div className="mt-7 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border border-black/10 bg-emerald-50"><Image src="/logo.webp" alt="Logo Bumina EENK" fill sizes="44px" className="object-cover" unoptimized /></div>
                <div><p className="text-sm font-bold">Tim Homestay Bumina EENK</p><p className="text-xs text-neutral-500">Penulis &amp; Pemandu Wisata Lokal Pangalengan</p></div>
              </div>
            </header>
            <figure className="relative my-10 aspect-[16/9] overflow-hidden rounded-[2rem] border border-black/10 bg-neutral-100"><Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 860px, 100vw" className="object-cover" unoptimized priority /></figure>
            <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:tracking-[-0.035em] prose-headings:text-neutral-950 prose-p:leading-8 prose-p:text-neutral-700 prose-a:font-bold prose-a:text-neutral-950 prose-strong:text-neutral-950 prose-li:text-neutral-700" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-3xl border border-black/10 bg-white p-6">
              <h2 className="text-lg font-black">Booking Homestay?</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-600">Tanya ketersediaan, lokasi, dan rekomendasi aktivitas Pangalengan.</p>
              <a href="https://wa.me/6285219460779?text=Halo%2C%20saya%20mau%20booking%20Homestay%20Bumina%20EENK" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white hover:bg-emerald-800">Booking Sekarang</a>
            </div>
          </aside>
        </article>
        {relatedPosts.length > 0 && (
          <section className="border-t border-black/10 py-14">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 flex items-end justify-between border-b border-black/10 pb-5"><h2 className="text-2xl font-black tracking-[-0.03em]">Baca Juga</h2><Link href="/blog" className="text-sm font-bold text-neutral-600 hover:text-neutral-950">Lihat semua →</Link></div>
              <div className="grid gap-7 md:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link href={`/blog/${related.slug}`} key={related.slug} className="group border-b border-black/10 pb-7">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-black/10 bg-neutral-100"><Image src={related.image} alt={related.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" unoptimized /></div>
                    <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">{related.category}</p><h3 className="mt-2 text-lg font-black leading-tight group-hover:text-neutral-600">{related.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
