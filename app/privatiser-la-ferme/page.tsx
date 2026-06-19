import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Waves, UtensilsCrossed } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { CTASection } from '@/components/CTASection';
import { InfiniteMarquee } from '@/components/InfiniteMarquee';
import { WhatsAppBtn } from '@/components/WhatsAppFloat';
import { WA_MESSAGES } from '@/lib/content';
import { getGallery } from '@/lib/admin/store';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Privatiser une ferme avec piscine près de Rabat',
  description:
    'Découvrez comment privatiser une ferme avec piscine près de Rabat : tout le domaine pour votre seul groupe, sans aucun autre client. Réservation par WhatsApp.',
  alternates: { canonical: '/privatiser-la-ferme' },
  openGraph: {
    title: 'Privatiser une ferme avec piscine près de Rabat',
    description: 'Toute la propriété rien que pour votre groupe, à 45 minutes de Rabat. Villa, piscine et jardin privatisés.',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Ferme privatisée avec piscine près de Rabat' }],
  },
};

const POUR_QUI = [
  { label: 'Familles et proches', href: '/experiences/sejour-famille' },
  { label: 'Groupes d\'amis', href: '/experiences/sejour-amis' },
  { label: 'Séminaires d\'entreprise', href: '/experiences/seminaire' },
  { label: 'Anniversaires et fêtes', href: '/experiences/anniversaire' },
  { label: 'EVJF et EVG', href: '/experiences/evjf-evg' },
  { label: 'Brunchs et retraites', href: '/experiences/brunch' },
];

const FAQ = [
  { q: 'Qu\'est-ce que privatiser la ferme ?', a: 'Vous réservez la propriété entière pour votre seul groupe : la villa, la piscine, le jardin et tous les espaces. Il n\'y a aucun autre client pendant votre venue.' },
  { q: 'Combien de personnes peut-on être ?', a: 'La ferme privatisée accueille confortablement jusqu\'à 12 personnes, entre les quatre chambres et les espaces supplémentaires.' },
  { q: 'Peut-on privatiser pour un événement ?', a: 'Oui. Séminaire, anniversaire, EVJF, brunch ou retraite : la ferme se privatise pour chaque occasion, avec cuisine marocaine et intendance sur place.' },
  { q: 'Comment réserver une ferme privatisée près de Rabat ?', a: 'Tout se fait sur WhatsApp. Envoyez vos dates et votre nombre de personnes, et nous revenons vers vous rapidement avec les disponibilités et le tarif.' },
];

export default async function PrivatiserPage() {
  const gallery = await getGallery();
  const marquee = gallery.flatMap((r) => r.photos).slice(0, 16).map((p) => ({ src: p.src, alt: p.alt }));

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://farmeden.ma' },
      { '@type': 'ListItem', position: 2, name: 'Privatiser la ferme', item: 'https://farmeden.ma/privatiser-la-ferme' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="bg-[#F5EFE0] pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            <FadeIn direction="right" className="order-2 md:order-1">
              <div className="relative w-full rounded-[1.75rem] overflow-hidden shadow-2xl shadow-[#231C14]/15" style={{ aspectRatio: '4 / 5' }}>
                <Image src="/images/farm/piscine-turquoise.jpg" alt="Ferme privatisée avec piscine privée près de Rabat" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" quality={86} />
              </div>
            </FadeIn>
            <div className="order-1 md:order-2">
              <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">Privatisation</p></FadeIn>
              <FadeIn delay={0.06}>
                <h1 className="font-display font-normal text-[#231C14] leading-[1.05]" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
                  Privatisez la ferme, <em className="italic text-[#52632E]">rien que pour vous.</em>
                </h1>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="text-[#231C14]/65 text-lg leading-relaxed mt-5 max-w-md">
                  Une ferme privatisée près de Rabat, où tout le domaine vous appartient le temps de votre venue. Aucun autre client, juste vous et vos invités.
                </p>
              </FadeIn>
              <FadeIn delay={0.18} className="mt-8">
                <WhatsAppBtn message={WA_MESSAGES.reservation} label="Réserver la ferme" variant="olive" size="lg" icon="calendar" />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <FadeIn>
            <p className="font-display text-[#231C14] leading-[1.4]" style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)' }}>
              Privatiser une ferme avec piscine près de Rabat, c’est s’offrir un domaine entier sans le partager. Vous fixez le rythme, vous recevez qui vous voulez, et vous profitez d’un cadre naturel à seulement 45 minutes de la ville.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="bg-[#EBF0E2] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#52632E] mb-10">Comment ça marche</p></FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, title: 'Un seul groupe à la fois', text: 'La propriété est réservée à vous et vos invités. Personne d’autre ne partage les lieux pendant votre venue.' },
              { icon: Waves, title: 'Tout le domaine inclus', text: 'La villa, la piscine, le jardin de 1,5 hectare et les espaces extérieurs sont entièrement à votre disposition.' },
              { icon: UtensilsCrossed, title: 'Une équipe qui s’occupe de tout', text: 'Cuisine marocaine préparée sur place, petit-déjeuner et intendance, selon vos besoins.' },
            ].map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 h-full flex flex-col gap-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#EBF0E2] text-[#52632E]"><b.icon className="w-6 h-6" strokeWidth={1.6} /></div>
                  <div><h2 className="font-semibold text-[#231C14] mb-2 text-base">{b.title}</h2><p className="text-[#231C14]/60 text-sm leading-relaxed">{b.text}</p></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">Pour qui</p></FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-display font-normal text-[#231C14] leading-[1.1] mb-4" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>
              Une ferme privatisée <em className="italic text-[#52632E]">pour chaque occasion.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[#231C14]/60 text-base leading-relaxed mb-10 max-w-xl">
              Que vous soyez en famille, entre amis ou en équipe, la ferme privatisée s’adapte à votre projet. Choisissez l’occasion qui vous ressemble.
            </p>
          </FadeIn>
          <div className="flex flex-wrap gap-3">
            {POUR_QUI.map((p) => (
              <Link key={p.href} href={p.href} className="inline-flex items-center gap-2 bg-[#F5EFE0] hover:bg-[#EBF0E2] text-[#231C14] text-sm font-medium px-5 py-3 rounded-full transition-colors">
                {p.label}<ArrowRight className="w-4 h-4 text-[#52632E]" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <FadeIn delay={0.14} className="mt-10">
            <Link href="/la-ferme" className="inline-flex items-center gap-2 text-[#231C14] font-medium border-b border-[#52632E]/40 hover:border-[#52632E] pb-0.5 transition-colors text-base">
              Découvrir le domaine en détail<ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Galerie défilante */}
      <section className="bg-[#F5EFE0] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8 mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#52632E] mb-5">La galerie</p></FadeIn>
              <FadeIn delay={0.06}>
                <h2 className="font-display font-normal text-[#231C14] leading-[1.1] max-w-lg" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>
                  La ferme <em className="italic text-[#52632E]">que vous privatisez.</em>
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.1}>
              <Link href="/galerie" className="inline-flex items-center gap-2.5 bg-[#52632E] text-white text-base font-medium px-8 py-4 rounded-full min-h-[52px] hover:bg-[#3f4d23] transition-colors duration-200">
                Voir toutes les photos<ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </FadeIn>
          </div>
        </div>
        <FadeIn delay={0.05} blur={false}><InfiniteMarquee photos={marquee} duration={60} /></FadeIn>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-10">Questions fréquentes</p></FadeIn>
          <div className="flex flex-col divide-y divide-[#231C14]/10">
            {FAQ.map((f) => (
              <FadeIn key={f.q}>
                <div className="py-6">
                  <h2 className="font-display font-normal text-[#231C14] text-xl mb-2">{f.q}</h2>
                  <p className="text-[#231C14]/65 text-base leading-relaxed">{f.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Réservez la ferme entière"
        text="Envoyez-nous vos dates et votre nombre de personnes. Nous vous répondons rapidement avec les disponibilités et le tarif."
        label="Réserver sur WhatsApp"
        wa="reservation"
        eyebrow="Privatisation"
      />
    </>
  );
}
