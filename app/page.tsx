import { HomeClient } from '@/components/HomeClient';
import { getSiteImages, getGallery } from '@/lib/admin/store';
import { resolveImg } from '@/lib/siteImages';
import { EXPERIENCES, FEATURED_EXPERIENCE_SLUGS } from '@/lib/content';
import type { Metadata } from 'next';

export const revalidate = 300;

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default async function HomePage() {
  const [ov, gallery] = await Promise.all([getSiteImages(), getGallery()]);

  const hero = resolveImg('home.hero', ov);
  const heroAccent = resolveImg('home.hero-accent', ov);

  const featured = FEATURED_EXPERIENCE_SLUGS
    .map((slug) => EXPERIENCES.find((e) => e.slug === slug))
    .filter((e): e is NonNullable<typeof e> => Boolean(e))
    .map((e) => ({ ...e, cardImage: resolveImg(`exp.${e.slug}.card`, ov).src }));

  const marquee = gallery.flatMap((r) => r.photos).slice(0, 16).map((p) => ({ src: p.src, alt: p.alt }));

  return <HomeClient hero={hero} heroAccent={heroAccent} featured={featured} marquee={marquee} />;
}
