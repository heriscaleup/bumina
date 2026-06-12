import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export const ARTICLES_PER_PAGE = 9;

// Article type (no id). Content is HTML string rendered from Markdown.
export interface Article {
  title: string;
  excerpt: string;
  content: string; // HTML string
  category: string;
  date: string; // YYYY-MM-DD
  slug: string; // derived from filename
  image: string;
}

// Directory for local markdown collection
// Directory for local markdown collection
const POSTS_DIR = path.join(process.cwd(), 'src', 'blog');

const FALLBACK_IMAGES = [
  '/herohome-kebon-teh.webp',
  '/herohome-depan-villa.webp',
  '/pemandangan1.webp',
  '/pemandangan2.webp',
  '/tempat-wisata-pangalengan/pangalengan.jpg',
];

function fallbackImageFor(slug: string, category?: string) {
  const key = `${slug}-${category ?? ''}`;
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = (hash + key.charCodeAt(i) * (i + 1)) % FALLBACK_IMAGES.length;
  return FALLBACK_IMAGES[hash];
}

async function resolveImage(value: unknown, slug: string, category?: string) {
  const image = typeof value === 'string' ? value.trim() : '';
  if (!image) return fallbackImageFor(slug, category);
  if (image.startsWith('http://') || image.startsWith('https://')) return image;
  const normalized = image.startsWith('/') ? image : `/${image}`;
  try {
    await fs.access(path.join(process.cwd(), 'public', normalized.slice(1)));
    return normalized;
  } catch {
    return fallbackImageFor(slug, category);
  }
}

// Ensure important frontmatter exists, but never kill a blog page just because an image is missing.
function normalizeFrontmatter(data: { [key: string]: unknown }, slug:string) {
  if (!data.title) data.title = slug.replace(/-/g, ' ');
  if (!data.date) data.date = new Date().toISOString().slice(0, 10);
  if (!data.category) data.category = 'Panduan';
  if (!data.excerpt) data.excerpt = 'Panduan wisata dan penginapan Pangalengan dari Bumina EENK.';
  // image is resolved per article after async filesystem verification
}


async function listPostFilenames(): Promise<string[]> {
  try {
    const files = await fs.readdir(POSTS_DIR);
    return files.filter((f) => f.endsWith('.md'));
  } catch (e) {
    // if directory not exist, return empty list
    return [];
  }
}

function filenameToSlug(filename: string): string {
  return filename.replace(/\.md$/i, '');
}

async function markdownToHtml(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .use(rehypeAutolinkHeadings as any, { behavior: 'wrap' })
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
}

export async function getAllArticles(): Promise<Article[]> {
  const files = await listPostFilenames();
  const posts: Article[] = [];

  for (const filename of files) {
    const slug = filenameToSlug(filename);
    const fullPath = path.join(POSTS_DIR, filename);
    const raw = await fs.readFile(fullPath, 'utf-8');
    const { data, content } = matter(raw);
    normalizeFrontmatter(data, slug);

    posts.push({
      title: String(data.title),
      excerpt: String(data.excerpt),
      // For list page we do not need full HTML. Keep raw content rendered lightly (or empty). Render on detail only to save work.
      content: '',
      category: String(data.category),
      date: String(data.date),
      slug,
      image: await resolveImage(data.image, slug, String(data.category)),
    });
  }

  // Sort by date desc
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getArticleBySlug(slug: string) {
  const filepath = path.join(POSTS_DIR, `${slug}.md`);
  try {
    const raw = await fs.readFile(filepath, 'utf-8');
    const { data, content } = matter(raw);
    normalizeFrontmatter(data, slug);
    const html = await markdownToHtml(content);

    const post: Article = {
      title: String(data.title),
      excerpt: String(data.excerpt),
      content: html,
      category: String(data.category),
      date: String(data.date),
      slug,
      image: await resolveImage(data.image, slug, String(data.category)),
    };

    // Get related posts
    const allArticles = await getAllArticles();
    const relatedPosts = allArticles
      .filter(p => p.category === post.category && p.slug !== post.slug)
      .slice(0, 3);

    return {
      post,
      relatedPosts,
    };
  } catch (e) {
    return { post: null, relatedPosts: [] };
  }
}