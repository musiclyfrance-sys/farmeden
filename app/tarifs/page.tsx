import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { WhatsAppBtn } from '@/components/WhatsAppFloat';
import { CTASection } from '@/components/CTASection';
import { WA_MESSAGES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Tarifs et devis de la ferme près de Rabat',
  description:
    'Tarifs de la ferme avec piscine privée à louer près de Rabat, à partir de 2000 DH. Privatisation de la villa entière. Demandez votre devis rapide sur WhatsApp.',
  alternates: { canonical: '/tarifs' },
};

const INCLUS = [
  'La villa entière et ses 4 chambres',
  'La piscine privée, rien que pour votre groupe',
  'Le grand jardin et tous les espaces extérieurs',
  'Les animaux de la ferme et les activités sur place',
  'Un seul groupe à la fois, aucun autre client',
  'La cuisine marocaine préparée sur place, selon vos besoins',
];

const FACTEURS = [
  { t: 'La période', d: 'Le tarif varie selon la période de votre venue.' },
  { t: 'Le nombre de personnes', d: 'De quelques invités jusqu\'à seize personnes.' },
  { t: 'Les repas et services', d: 'Cuisine marocaine, petit-déjeuner et intendance selon vos envies.' },
  { t: 'Le type d\'occasion', d: 'Séjour, séminaire, anniversaire, EVJF, retraite ou brunch.' },
];

export default function TarifsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5EFE0] pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-4">Tarifs</p></FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-display font-normal text-[#231C14] leading-[1.0]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Un tarif clair, <em className="italic text-[#52632E]">un devis rapide.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[#231C14]/60 text-lg leading-relaxed max-w-xl mt-6">
              Farm Eden est une ferme avec piscine privée à louer près de Rabat. Le prix dépend de votre projet, et commence à partir de 2000 DH pour privatiser toute la ferme.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Bloc prix */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn>
            <div className="bg-[#52632E] grain rounded-3xl p-8 md:p-12 text-center text-[#F5EFE0]">
              <p className="text-xs font-medium tracking-widest uppercase text-[#D4B78A] mb-4">Privatisation de la ferme entière</p>
              <p className="text-[#F5EFE0]/70 text-sm mb-1">À partir de</p>
              <p className="font-display font-normal leading-none mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}>2000 DH</p>
              <p className="text-[#F5EFE0]/75 text-base leading-relaxed max-w-md mx-auto mb-8">
                Le tarif exact est personnalisé selon votre demande. Envoyez-nous vos dates et votre nombre de personnes, nous vous répondons rapidement avec un devis.
              </p>
              <div className="flex justify-center">
                <WhatsAppBtn message={WA_MESSAGES.reservation} label="Demander un devis" variant="cream" size="lg" icon="calendar" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ce qui est compris */}
      <section className="bg-[#F5EFE0] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#52632E] mb-5">Tout est compris</p></FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-display font-normal text-[#231C14] leading-[1.1] mb-10" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>
              Ce que comprend la privatisation.
            </h2>
          </FadeIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
            {INCLUS.map((item, i) => (
              <FadeIn key={item} delay={i * 0.05}>
                <li className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-[#231C14]/6 h-full">
                  <span className="w-7 h-7 rounded-full bg-[#EBF0E2] text-[#52632E] flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                    <Check className="w-4 h-4" strokeWidth={2} />
                  </span>
                  <span className="text-[#231C14]/75 text-sm leading-relaxed">{item}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Ce qui fait varier le tarif */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">Comment se fixe le prix</p></FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-display font-normal text-[#231C14] leading-[1.1] mb-10" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>
              Ce qui fait varier le tarif.
            </h2>
          </FadeIn>
          <div className="flex flex-col divide-y divide-[#231C14]/10">
            {FACTEURS.map((f, i) => (
              <FadeIn key={f.t} delay={i * 0.05}>
                <div className="py-5">
                  <p className="font-medium text-[#231C14] text-base mb-1">{f.t}</p>
                  <p className="text-[#231C14]/60 text-sm leading-relaxed">{f.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à connaître votre tarif ?"
        text="Envoyez-nous vos dates et votre nombre de personnes. Nous vous répondons rapidement avec les disponibilités et le devis."
        label="Demander un devis sur WhatsApp"
        wa="reservation"
      />
    </>
  );
}
