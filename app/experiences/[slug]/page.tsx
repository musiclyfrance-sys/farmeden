import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Picto } from '@/components/ui/Pictos';
import { CTASection } from '@/components/CTASection';
import { WhatsAppBtn } from '@/components/WhatsAppFloat';
import { EXPERIENCES, getExperience, WA_MESSAGES } from '@/lib/content';

export function generateStaticParams() {
  return EXPERIENCES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) return {};
  return {
    title: exp.metaTitle,
    description: exp.metaDescription,
    alternates: { canonical: `/experiences/${exp.slug}` },
    openGraph: {
      title: exp.metaTitle,
      description: exp.metaDescription,
      images: [{ url: exp.heroImage, width: 1200, height: 630, alt: exp.title }],
    },
  };
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) notFound();

  const others = EXPERIENCES.filter((e) => e.slug !== exp.slug).slice(0, 3);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://farmeden.ma' },
      { '@type': 'ListItem', position: 2, name: 'Expériences', item: 'https://farmeden.ma/experiences' },
      { '@type': 'ListItem', position: 3, name: exp.title, item: `https://farmeden.ma/experiences/${exp.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ═══ Hero (split, photo à gauche) ═══ */}
      <section className="bg-[#F5EFE0] pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <Link href="/experiences" className="inline-flex items-center gap-2 text-[#52632E] hover:text-[#3f4d23] text-sm font-medium mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Toutes les expériences
            </Link>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            <FadeIn direction="right" className="order-2 md:order-1">
              <div className="relative w-full rounded-[1.75rem] overflow-hidden shadow-2xl shadow-[#231C14]/15" style={{ aspectRatio: '4 / 5' }}>
                <Image src={exp.heroImage} alt={exp.title} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" quality={86} />
              </div>
            </FadeIn>
            <div className="order-1 md:order-2">
              <FadeIn>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-[#EBF0E2] text-[#52632E] px-4 py-2 rounded-full mb-5">{exp.heroKicker}</span>
              </FadeIn>
              <FadeIn delay={0.06}>
                <h1 className="font-display font-normal text-[#231C14] leading-[1.04]" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>{exp.title}</h1>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="text-[#231C14]/65 text-lg leading-relaxed mt-5 max-w-md">{exp.subtitle}</p>
              </FadeIn>
              <FadeIn delay={0.18} className="mt-8">
                <WhatsAppBtn message={WA_MESSAGES[exp.wa]} label={exp.cta.label} variant="olive" size="lg" icon="calendar" />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Intro ═══ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <FadeIn>
            <p className="font-display text-[#231C14] leading-[1.4]" style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)' }}>{exp.intro}</p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Récit ═══ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8 flex flex-col gap-14 md:gap-20">
          {exp.story.map((block, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
              <FadeIn className="md:col-span-4">
                <span className="font-display text-5xl text-[#52632E]/25 leading-none block mb-3">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="font-display font-normal text-[#231C14] leading-[1.15]" style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2rem)' }}>{block.title}</h2>
              </FadeIn>
              <FadeIn delay={0.08} className="md:col-span-8">
                <p className="text-[#231C14]/70 text-lg leading-relaxed">{block.body}</p>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ Points forts ═══ */}
      <section className="bg-[#EBF0E2] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#52632E] mb-10">Ce qui fait la différence</p></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {exp.highlights.map((h, i) => (
              <FadeIn key={h.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 h-full flex flex-col gap-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#EBF0E2] text-[#52632E]">
                    <Picto name={h.icon} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#231C14] mb-2 text-base">{h.title}</h3>
                    <p className="text-[#231C14]/60 text-sm leading-relaxed">{h.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Galerie ═══ */}
      <section className="bg-[#F5EFE0] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-10">En images</p></FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {exp.gallery.map((src, i) => (
              <FadeIn key={src} delay={(i % 3) * 0.06} blur={false}>
                <div className={`relative rounded-2xl overflow-hidden bg-[#EDE5D0] ${i % 5 === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                  <Image src={src} alt={`${exp.title}, photo ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover hover:scale-[1.04] transition-transform duration-500" quality={78} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTASection title={exp.cta.title} text={exp.cta.text} label={exp.cta.label} wa={exp.wa} />

      {/* ═══ Autres expériences ═══ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-10">Autres occasions</p></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((o, i) => (
              <FadeIn key={o.slug} delay={i * 0.08}>
                <Link href={`/experiences/${o.slug}`} className="group block bg-[#F5EFE0] rounded-2xl overflow-hidden h-full hover:shadow-lg hover:shadow-black/8 transition-shadow duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EDE5D0]">
                    <Image src={o.cardImage} alt={o.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" quality={78} />
                  </div>
                  <div className="p-6 flex items-center justify-between gap-3">
                    <h3 className="font-display font-normal text-[#231C14] text-lg">{o.title}</h3>
                    <ArrowRight className="w-4 h-4 text-[#52632E] shrink-0 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
