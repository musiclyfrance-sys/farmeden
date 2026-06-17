import type { MetadataRoute } from 'next';
import { EXPERIENCES } from '@/lib/content';
import { getPosts } from '@/lib/admin/store';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://farmeden.ma';
  const now = new Date();
  const POSTS = (await getPosts()).filter((p) => p.published !== false);

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/la-ferme`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/experiences`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/galerie`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/journal`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
  ];

  const experiencePages: MetadataRoute.Sitemap = EXPERIENCES.map((e) => ({
    url: `${base}/experiences/${e.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const postPages: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${base}/journal/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticPages, ...experiencePages, ...postPages];
}
