import { MetadataRoute } from 'next'
import { getAllArticles } from '@/blog/articleHelpers'

export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://buminaeenk.com'

  // Mengambil semua artikel untuk sitemap
  const articles = await getAllArticles()
  const blogPostUrls = articles.map(article => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    images: article.image ? [{ url: `${baseUrl}${article.image}` }] : undefined,
  }))

  // Halaman statis
  const staticUrls = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/harga`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // Landing pages SEO — target intent pencarian lokal
    {
      url: `${baseUrl}/wisata-situ-cileunca-pangalengan/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rafting-pangalengan-situ-cileunca/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/villa-dekat-situ-cileunca/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/itinerary-pangalengan-2-hari-1-malam/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wisata-rahong-pangalengan/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nimo-highland-pangalengan/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wayang-windu-pangalengan/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // Static landing pages — pangalengan SEO expansion
    {
      url: `${baseUrl}/glamping-pangalengan/`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/offroad-pangalengan/`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rafting-pangalengan/`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/situ-cileunca/`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/camping-ground-pangalengan/`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sunrise-point-cukul/`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/family-gathering-pangalengan/`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/outbound-pangalengan/`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tempat-wisata-pangalengan/`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/penginapan-pangalengan/`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ]

  return [...staticUrls, ...blogPostUrls]
}