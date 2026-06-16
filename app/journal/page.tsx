import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { CTASection } from '@/components/CTASection';
import { POSTS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Conseils, idées et inspirations pour profiter de la campagne près de Rabat. Guides pour louer une ferme avec piscine, organiser un séminaire ou une escapade nature.',
  alternates: { canonical: '/journal' },
};

export default function JournalPage() {
  const [lead, ...rest] = POSTS;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5EFE0] pt-28 md:pt-36 pb-14 md:pb-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-4">Le journal</p></FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-display font-normal text-[#231C14] leading-[1.0] max-w-2xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Idées et inspirations<br /><em className="italic text-[#52632E]">pour s&apos;évader.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[#231C14]/60 text-lg leading-relaxed max-w-xl mt-6">
              Nos conseils pour profiter de la campagne autour de Rabat, organiser vos événements et préparer votre venue à la ferme.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Article à la une */}
      <section className="bg-[#F5EFE0] pb-12">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <Link href={`/journal/${lead.slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white rounded-3xl overflow-hidden p-4 md:p-5 hover:shadow-lg hover:shadow-black/8 transition-shadow duration-300">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-[#EDE5D0]">
                <Image src={lead.cover} alt={lead.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" quality={80} priority />
              </div>
              <div className="px-2 md:px-6 py-4">
                <div className="flex items-center gap-3 mb-4 text-xs">
                  <span className="font-semibold tracking-wide uppercase bg-[#EBF0E2] text-[#52632E] px-3 py-1.5 rounded-full">{lead.tag}</span>
                  <span className="text-[#231C14]/40">{lead.dateLabel}</span>
                </div>
                <h2 className="font-display font-normal text-[#231C14] leading-[1.15] mb-4" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)' }}>{lead.title}</h2>
                <p className="text-[#231C14]/60 text-base leading-relaxed mb-5">{lead.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-[#52632E] font-medium text-sm group-hover:gap-3 transition-all">
                  Lire l&apos;article<ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Autres articles */}
      <section className="bg-[#F5EFE0] pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <FadeIn key={post.slug} delay={(i % 3) * 0.07}>
              <Link href={`/journal/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden h-full hover:shadow-lg hover:shadow-black/8 transition-shadow duration-300">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EDE5D0]">
                  <Image src={post.cover} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" quality={78} />
                </div>
                <div className="p-7 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="font-semibold tracking-wide uppercase bg-[#EBF0E2] text-[#52632E] px-3 py-1.5 rounded-full">{post.tag}</span>
                    <span className="text-[#231C14]/40">{post.readingTime}</span>
                  </div>
                  <h2 className="font-display font-normal text-[#231C14] text-xl leading-snug">{post.title}</h2>
                  <p className="text-[#231C14]/60 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTASection
        title="Envie de vivre la ferme vous-même ?"
        text="Envoyez-nous vos dates et votre nombre de personnes. Nous vous répondons avec les disponibilités et le tarif."
        label="Réserver sur WhatsApp"
        wa="reservation"
        image="/images/farm/palmeraie.jpg"
        imageAlt="Palmeraie de Farm Eden"
      />
    </>
  );
}
