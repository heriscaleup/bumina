import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles, getArticleBySlug, type Article } from "@/blog/articleHelpers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateMetadataObject, SchemaOrg } from "@/lib/seo";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((post: Article) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { post } = await getArticleBySlug(slug);

  if (!post) {
    return generateMetadataObject({ title: "Artikel Tidak Ditemukan" });
  }

  return generateMetadataObject({
    title: post.title,
    description: post.excerpt,
    canonical: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogPostDetail({ params }: PageProps) {
  const { slug } = await params;
  const { post, relatedPosts } = await getArticleBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SchemaOrg.article(post)) }}
      />
      <Header />
      <main className="min-h-screen bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <header className="mb-8 text-center border-b pb-8">
              <div className="w-full h-64 relative mb-6 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
              </div>
              <p className="text-base text-gray-500 mb-2">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="mx-2">•</span>
                <span>{post.category}</span>
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                {post.title}
              </h1>
            </header>
            
            {/* Author block — E-E-A-T signal */}
            <div className="flex items-center gap-3 py-5 mb-8 border-b border-gray-100">
              <div className="w-10 h-10 relative rounded-full overflow-hidden flex-shrink-0 bg-emerald-50 border border-emerald-100">
                <Image src="/logo.webp" alt="Logo Bumina EENK" fill className="object-cover" unoptimized />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 leading-tight">Tim Homestay Bumina EENK</p>
                <p className="text-xs text-gray-500 mt-0.5">Penulis & Pemandu Wisata Lokal Pangalengan</p>
              </div>
              <span className="hidden sm:flex items-center gap-1.5 text-emerald-700 text-xs font-semibold bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full flex-shrink-0">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Penulis Lokal Terverifikasi
              </span>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                 dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </main>

      {/* Related Articles Section */}
      {relatedPosts && relatedPosts.length > 0 && (
        <aside className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Baca Juga Artikel Lainnya
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link href={`/blog/${related.slug}`} key={related.slug} className="block group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="w-full h-40 relative">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        unoptimized
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-3 inline-block">
                        {related.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-green-600 transition-colors">
                        {related.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      )}

      <Footer />
    </>
  );
}