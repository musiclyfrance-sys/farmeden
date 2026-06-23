import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { CTASection } from '@/components/CTASection';
import { getPosts, getPostBySlug } from '@/lib/admin/store';

export const revalidate = 300;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.filter((p) => p.published !== false).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.date,
      images: [{ url: post.cover, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post || post.published === false) notFound();

  const others = (await getPosts()).filter((p) => p.slug !== post.slug && p.published !== false).slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: `https://farmeden.ma${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Farm Eden' },
    publisher: { '@type': 'Organization', name: 'Farm Eden', logo: { '@type': 'ImageObject', url: 'https://farmeden.ma/images/logo-noir.svg' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://farmeden.ma/journal/${post.slug}` },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://farmeden.ma' },
      { '@type': 'ListItem', position: 2, name: 'Journal', item: 'https://farmeden.ma/journal' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://farmeden.ma/journal/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* En-tête */}
      <article className="bg-[#F5EFE0]">
        <header className="mx-auto max-w-3xl px-5 md:px-8 pt-28 md:pt-36 pb-10 text-center">
          <FadeIn>
            <Link href="/journal" className="inline-flex items-center gap-2 text-[#52632E] hover:text-[#3f4d23] text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Le journal
            </Link>
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="flex items-center justify-center gap-3 mb-5 text-xs">
              <span className="font-semibold tracking-wide uppercase bg-[#EBF0E2] text-[#52632E] px-3 py-1.5 rounded-full">{post.tag}</span>
              <span className="text-[#231C14]/40">{post.dateLabel}</span>
              <span className="text-[#231C14]/40">·</span>
              <span className="text-[#231C14]/40">{post.readingTime}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h1 className="font-display font-normal text-[#231C14] leading-[1.1]" style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)' }}>{post.title}</h1>
          </FadeIn>
        </header>

        <FadeIn delay={0.1} blur={false}>
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-[#EDE5D0]">
              <Image src={post.cover} alt={post.coverAlt || post.title} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" quality={82} />
            </div>
          </div>
        </FadeIn>

        {/* Corps */}
        <div className="mx-auto max-w-2xl px-5 md:px-8 py-16 md:py-20">
          {post.bodyHtml ? (
            <FadeIn>
              <div className="article-body" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
            </FadeIn>
          ) : (
            <div className="flex flex-col gap-10">
              {post.sections.map((section, i) => (
                <FadeIn key={i}>
                  <div>
                    {section.heading && (
                      <h2 className="font-display font-normal text-[#231C14] leading-[1.2] mb-4" style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)' }}>{section.heading}</h2>
                    )}
                    <div className="flex flex-col gap-4">
                      {section.paragraphs.map((p, j) => (
                        <p key={j} className="text-[#231C14]/75 text-lg leading-relaxed">{p}</p>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </article>

      <CTASection
        title="Vivez l'expérience à votre tour"
        text="La ferme entière se réserve pour vous. Écrivez-nous vos dates et nous nous occupons du reste."
        label="Réserver sur WhatsApp"
        wa="reservation"
      />

      {/* Articles liés */}
      {others.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-10">À lire aussi</p></FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((o, i) => (
                <FadeIn key={o.slug} delay={i * 0.08}>
                  <Link href={`/journal/${o.slug}`} className="group flex gap-5 items-center bg-[#F5EFE0] rounded-2xl overflow-hidden p-3 hover:shadow-lg hover:shadow-black/8 transition-shadow duration-300">
                    <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden bg-[#EDE5D0]">
                      <Image src={o.cover} alt={o.title} fill sizes="112px" className="object-cover transition-transform duration-500 group-hover:scale-[1.05]" quality={75} />
                    </div>
                    <div className="pr-3">
                      <h3 className="font-display font-normal text-[#231C14] text-lg leading-snug mb-1">{o.title}</h3>
                      <span className="inline-flex items-center gap-1.5 text-[#52632E] font-medium text-sm">Lire<ArrowRight className="w-3.5 h-3.5" aria-hidden="true" /></span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
