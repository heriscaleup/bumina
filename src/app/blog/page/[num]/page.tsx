import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPagination from "@/components/BlogPagination";
import { getAllArticles, type Article, ARTICLES_PER_PAGE } from "@/blog/articleHelpers";
import { generateMetadataObject } from "@/lib/seo";
import { Metadata } from "next";

interface Props { params: Promise<{ num: string }>; }
export async function generateStaticParams() { const articles = await getAllArticles(); const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE); return Array.from({ length: totalPages - 1 }, (_, i) => ({ num: String(i + 2) })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { num } = await params; const page = parseInt(num, 10); return generateMetadataObject({ title: `Blog Wisata Pangalengan — Halaman ${page}`, description: `Artikel wisata, tips liburan, dan panduan Pangalengan — halaman ${page}.`, canonical: `/blog/page/${page}` }); }

export default async function BlogPageNum({ params }: Props) {
  const { num } = await params; const page = parseInt(num, 10); const allArticles = await getAllArticles(); const totalPages = Math.ceil(allArticles.length / ARTICLES_PER_PAGE); if (isNaN(page) || page < 2 || page > totalPages) notFound();
  const start = (page - 1) * ARTICLES_PER_PAGE; const articles = allArticles.slice(start, start + ARTICLES_PER_PAGE);
  return <><Header /><main className="min-h-screen bg-[#fbfaf7] text-neutral-950"><section className="border-b border-black/10"><div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"><Link href="/blog" className="mb-8 inline-flex text-sm font-semibold text-neutral-600 hover:text-neutral-950">← Kembali ke Blog</Link><p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-emerald-700">Halaman {page}</p><h1 className="text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl">Blog Bumina EENK</h1></div></section><section className="py-14 lg:py-20"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><div className="grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">{articles.map((post: Article) => <article key={post.slug} className="group border-b border-black/10 pb-8"><Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden rounded-3xl border border-black/10 bg-neutral-100"><Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" unoptimized /></Link><div className="pt-5"><div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-neutral-500"><span className="font-black uppercase tracking-[0.16em] text-emerald-700">{post.category}</span><span>•</span><time>{new Date(post.date).toLocaleDateString("id-ID", { day:"numeric", month:"short", year:"numeric" })}</time></div><h2 className="text-xl font-black leading-tight tracking-[-0.025em]"><Link href={`/blog/${post.slug}`} className="group-hover:text-neutral-600">{post.title}</Link></h2><p className="mt-3 line-clamp-3 text-[15px] leading-7 text-neutral-600">{post.excerpt}</p><Link href={`/blog/${post.slug}`} className="mt-5 inline-flex text-sm font-bold underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950">Baca selengkapnya</Link></div></article>)}</div><BlogPagination currentPage={page} totalPages={totalPages} /></div></section></main><Footer /></>;
}
