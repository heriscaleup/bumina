import { Metadata } from 'next';
import { type Article } from '@/blog/articleHelpers';

// --- KONFIGURASI SEO GLOBAL ---
const siteConfig = {
  title: "Homestay Bumina EENK — Penginapan Terpercaya di Pangalengan",
  description: "Homestay Bumina EENK, rating 4.9★ di Agoda & Booking.com. Di tengah kebun teh Pangalengan, 5 mnt ke Taman Langit. Kapasitas 25 orang & perapian hangat.",
  url: "https://buminaeenk.com",
  ogImage: "https://buminaeenk.com/herohome.webp",
  author: "Homestay Bumina EENK",
  keywords: "homestay pangalengan, villa di pangalengan, penginapan kebun teh, sewa villa bandung, wisata pangalengan, bumina eenk, taman langit pangalengan",
  telephone: "+6285219460779",
  address: {
    street: "Desa Puncak Mulya, dekat Taman Langit",
    city: "Pangalengan",
    state: "Jawa Barat",
    zipCode: "40378",
    country: "Indonesia",
  },
  geo: {
    latitude: -7.2188,
    longitude: 107.5958,
  },
};

// --- FUNGSI GENERATOR METADATA DINAMIS ---
type GenerateMetadataProps = {
  title?: string;
  description?: string;
  keywords?: string[] | string;
  image?: string;
  canonical?: string;
};

export function generateMetadataObject({
  title,
  description,
  keywords,
  image,
  canonical,
}: GenerateMetadataProps): Metadata {
  const pageTitle = title ? `${title} | Bumina EENK` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const pageKeywords = keywords ? (Array.isArray(keywords) ? keywords.join(', ') : keywords) : siteConfig.keywords;
  const pageImage = image || siteConfig.ogImage;
  const canonicalUrl = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: siteConfig.author,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: 'id_ID',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// --- FUNGSI GENERATOR SCHEMA.ORG JSON-LD ---
export const SchemaOrg = {
  lodgingBusiness: () => ({
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: siteConfig.author,
    description: siteConfig.description,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    telephone: siteConfig.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zipCode,
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    priceRange: '$$',
    checkinTime: '14:00',
    checkoutTime: '12:00',
    petsAllowed: 'False',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Perapian', value: 'Yes' },
      { '@type': 'LocationFeatureSpecification', name: 'Dapur Lengkap', value: 'Yes' },
      { '@type': 'LocationFeatureSpecification', name: 'Parkir Luas', value: 'Yes' },
      { '@type': 'LocationFeatureSpecification', name: 'Kapasitas 25 Orang', value: 'Yes' },
    ],
  }),
  faqPage: (questions: { question: string; answer: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }),
  article: (post: Article) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: siteConfig.author,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.author,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.webp`,
      },
    },
  }),
};