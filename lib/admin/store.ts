/* Stockage Vercel Blob avec repli sur le contenu statique.
   Si Blob n'est pas configuré (pas de token), le site utilise les valeurs par défaut.
   Les lectures sont mises en cache (data cache Next) avec un rafraîchissement toutes
   les 5 minutes, ce qui permet aux pages d'être servies en cache CDN (ISR). */
import 'server-only';
import { unstable_cache } from 'next/cache';
import { DEFAULT_GALLERY, POSTS, type GalleryRubric, type Post } from '@/lib/content';
import type { SiteImageOverrides } from '@/lib/siteImages';

const GALLERY_PATH = 'data/gallery.json';
const ARTICLES_PATH = 'data/articles.json';
const SITE_IMAGES_PATH = 'data/site-images.json';

const TAG_GALLERY = 'gallery';
const TAG_ARTICLES = 'articles';
const TAG_SITE_IMAGES = 'site-images';

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

/* Lectures mises en cache 5 minutes (data cache Next), repli sur le contenu statique. */
const readGallery = unstable_cache(
  () => readJson<GalleryRubric[]>(GALLERY_PATH),
  ['blob:gallery'],
  { tags: [TAG_GALLERY], revalidate: 300 },
);
const readArticles = unstable_cache(
  () => readJson<Post[]>(ARTICLES_PATH),
  ['blob:articles'],
  { tags: [TAG_ARTICLES], revalidate: 300 },
);
const readSiteImages = unstable_cache(
  () => readJson<SiteImageOverrides>(SITE_IMAGES_PATH),
  ['blob:site-images'],
  { tags: [TAG_SITE_IMAGES], revalidate: 300 },
);

/* ── Galerie ── */
export async function getGallery(): Promise<GalleryRubric[]> {
  const saved = await readGallery();
  if (!Array.isArray(saved) || !saved.length) return DEFAULT_GALLERY;
  // Fusion : on garde l'ordre et les rubriques par défaut, en utilisant la version
  // enregistrée quand elle existe.
  const savedById = Object.fromEntries(saved.map((r) => [r.id, r]));
  const merged = DEFAULT_GALLERY.map((d) => savedById[d.id] ?? d);
  for (const s of saved) if (!DEFAULT_GALLERY.some((d) => d.id === s.id)) merged.push(s);
  return merged;
}
export async function saveGallery(data: GalleryRubric[]): Promise<void> {
  await writeJson(GALLERY_PATH, data);
}

/* ── Articles ── */
export async function getPosts(): Promise<Post[]> {
  const saved = await readArticles();
  if (!Array.isArray(saved) || !saved.length) return POSTS;
  // Fusion : articles enregistrés (édités dans l'admin) + tout nouvel article par défaut.
  const savedSlugs = new Set(saved.map((p) => p.slug));
  const extras = POSTS.filter((p) => !savedSlugs.has(p.slug));
  return [...saved, ...extras];
}
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return (await getPosts()).find((p) => p.slug === slug);
}
export async function savePosts(data: Post[]): Promise<void> {
  await writeJson(ARTICLES_PATH, data);
}

/* ── Images du site (overrides par slot) ── */
export async function getSiteImages(): Promise<SiteImageOverrides> {
  const data = await readSiteImages();
  return data && typeof data === 'object' ? data : {};
}
export async function saveSiteImages(data: SiteImageOverrides): Promise<void> {
  await writeJson(SITE_IMAGES_PATH, data);
}

export const adminConfigured = hasBlob;
