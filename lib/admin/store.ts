/* Stockage Vercel Blob avec repli sur le contenu statique.
   Si Blob n'est pas configuré (pas de token), le site utilise les valeurs par défaut. */
import 'server-only';
import { DEFAULT_GALLERY, POSTS, type GalleryRubric, type Post } from '@/lib/content';

const GALLERY_PATH = 'data/gallery.json';
const ARTICLES_PATH = 'data/articles.json';

function hasBlob(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function readJson<T>(pathname: string): Promise<T | null> {
  if (!hasBlob()) return null;
  try {
    const { head } = await import('@vercel/blob');
    const meta = await head(pathname);
    const res = await fetch(meta.url, { cache: 'no-store' });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

async function writeJson(pathname: string, data: unknown): Promise<void> {
  const { put } = await import('@vercel/blob');
  await put(pathname, JSON.stringify(data), {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
    cacheControlMaxAge: 0,
  });
}

/* ── Galerie ── */
export async function getGallery(): Promise<GalleryRubric[]> {
  const data = await readJson<GalleryRubric[]>(GALLERY_PATH);
  return Array.isArray(data) && data.length ? data : DEFAULT_GALLERY;
}
export async function saveGallery(data: GalleryRubric[]): Promise<void> {
  await writeJson(GALLERY_PATH, data);
}

/* ── Articles ── */
export async function getPosts(): Promise<Post[]> {
  const data = await readJson<Post[]>(ARTICLES_PATH);
  return Array.isArray(data) && data.length ? data : POSTS;
}
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return (await getPosts()).find((p) => p.slug === slug);
}
export async function savePosts(data: Post[]): Promise<void> {
  await writeJson(ARTICLES_PATH, data);
}

export const adminConfigured = hasBlob;
