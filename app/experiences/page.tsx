import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Volleyball, PawPrint, UtensilsCrossed } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { CTASection } from '@/components/CTASection';
import { EXPERIENCES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Expériences',
  description:
    'Séjour en famille, en couple ou entre amis, séminaire, anniversaire, mariage, EVJF, retraite bien-être ou brunch. Farm Eden se privatise pour chaque occasion, à 45 minutes de Rabat.',
  alternates: { canonical: '/experiences' },
};

const INCLUS = [
  {
    icon: Volleyball,
    title: 'Activités pour tous',
    items: ['Trampoline', 'Ping-pong', 'Badminton', 'Football', 'Tir à l\'arc', 'Fléchettes'],
  },
  {
    icon: PawPrint,
    title: 'Espace animaux',
    items: ['Moutons', 'Chèvres', 'Lapins', 'Oies', 'Paons', 'Oiseaux'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Services sur place',
    items: ['Cuisine marocaine', 'Petit-déjeuner', 'Méchoui', 'Ménage'],
  },
];

export default function ExperiencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5EFE0] pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-4">Expériences</p></FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-display font-normal text-[#231C14] leading-[1.0] max-w-2xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Pour chaque occasion,<br /><em className="italic text-[#52632E]">on s&apos;adapte.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[#231C14]/60 text-lg leading-relaxed max-w-xl mt-6">
              La ferme se privatise entièrement pour vous. Choisissez l&apos;occasion qui vous ressemble et découvrez la page dédiée.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Grille expériences */}
      <section className="bg-[#F5EFE0] pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-6">
          {EXPERIENCES.map((exp, i) => (
            <FadeIn key={exp.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/experiences/${exp.slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden ring-1 ring-[#231C14]/5
                           hover:ring-[#52632E]/30 hover:shadow-xl hover:shadow-black/8 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EDE5D0]">
                  <Image
                    src={exp.cardImage}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:scale-[1.05]"
                    quality={80}
                  />
                  <span className="absolute top-3 left-3 text-[11px] font-semibold tracking-wide uppercase
                                   px-3 py-1.5 rounded-full bg-white/95 text-[#52632E] shadow-md shadow-black/15">
                    {exp.tag}
                  </span>
                </div>
                <div className="p-4 md:p-6 flex items-center justify-between gap-3 flex-1">
                  <h2 className="font-display font-normal text-[#231C14] text-lg md:text-xl leading-tight">{exp.title}</h2>
                  <span className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#EBF0E2] text-[#52632E]
                                   group-hover:bg-[#52632E] group-hover:text-white flex items-center justify-center
                                   transition-colors duration-300" aria-hidden="true">
                    <ArrowRight className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* La ferme, c'est aussi */}
      <section className="bg-white py-20 md:py-28 border-t border-[#231C14]/6">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl mb-12 md:mb-16">
            <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-4">La ferme, c&apos;est aussi</p></FadeIn>
            <FadeIn delay={0.07}>
              <h2 className="font-display font-normal text-[#231C14] leading-[1.1]" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>
                Bien plus que<br /><em className="italic text-[#52632E]">des occasions.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="text-[#231C14]/60 text-base leading-relaxed mt-5">
                Quelle que soit l&apos;occasion, vous profitez des mêmes atouts. Des activités pour tous les âges, une vraie ferme avec ses animaux et une équipe qui s&apos;occupe de tout sur place.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {INCLUS.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.08}>
                <div className="bg-[#F5EFE0] rounded-2xl p-7 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-[#EBF0E2] text-[#52632E] flex items-center justify-center mb-6">
                    <b.icon className="w-6 h-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display font-normal text-[#231C14] text-xl mb-5">{b.title}</h3>
                  <ul className="flex flex-wrap gap-2 mt-auto" role="list">
                    {b.items.map((it) => (
                      <li key={it} className="text-sm bg-white text-[#231C14]/70 font-medium px-3.5 py-1.5 rounded-full border border-[#231C14]/6">{it}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Une autre idée d'événement ?"
        text="Présentez-nous votre projet et nous trouvons ensemble une formule qui vous convient."
        label="Nous contacter"
        wa="evenement"
        eyebrow="Sur mesure"
      />
    </>
  );
}
