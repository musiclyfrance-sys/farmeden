import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { CTASection } from '@/components/CTASection';
import { SITE } from '@/lib/content';
import { getSiteImages } from '@/lib/admin/store';
import { resolveImg, LAFERME_GALLERY_DEFAULT } from '@/lib/siteImages';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'La ferme avec piscine privée près de Rabat',
  description:
    'Découvrez Farm Eden : villa avec piscine privée et terrain de 1,5 hectare à Ain Johra, près de Tiflet. Quatre chambres, jardin et animaux, à 45 min de Rabat.',
  alternates: { canonical: '/la-ferme' },
};

const DETAILS = [
  {
    title: 'La villa',
    items: [
      'Quatre chambres, dont deux suites',
      'Deux salons marocains',
      'Cuisine entièrement équipée',
      'Salle à manger intérieure et extérieure',
      'Terrasses et espaces de détente',
    ],
  },
  {
    title: 'La piscine',
    items: [
      'Grande piscine privée sans vis-à-vis',
      'Transats et coins d\'ombre',
      'Espace dégagé et sécurisé',
      'Accessible toute l\'année',
    ],
  },
  {
    title: 'Le terrain',
    items: [
      'Un terrain verdoyant de 1,5 hectare',
      'Palmeraie et arbres fruitiers',
      'Espace animaux en liberté',
      'Aire de jeux et activités sportives',
      'Parking privé pour plusieurs voitures',
    ],
  },
  {
    title: 'Les services',
    items: [
      'Équipe présente sur place',
      'Cuisine marocaine en option',
      'Petit-déjeuner marocain en option',
      'Ménage pendant votre venue en option',
      'WiFi haut débit',
    ],
  },
];

export default async function LaFermePage() {
  const ov = await getSiteImages();
  const intro = resolveImg('laferme.intro', ov);
  const galerie = LAFERME_GALLERY_DEFAULT.map((_, i) => resolveImg(`laferme.gallery.${i}`, ov));
  return (
    <>
      {/* En-tête */}
      <section className="bg-[#F5EFE0] pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">La Ferme</p></FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-display font-normal text-[#231C14] leading-[1.0] max-w-2xl" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}>
              Un endroit calme,<br /><em className="italic text-[#52632E]">grand et beau.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[#231C14]/60 text-lg leading-relaxed max-w-lg mt-5">
              Farm Eden, c&apos;est un terrain verdoyant de 1,5 hectare avec une villa entière, une piscine privée et tout ce qu&apos;il faut pour souffler.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction (photo à gauche, texte à droite) */}
      <section className="bg-[#F5EFE0] pb-20 md:pb-28 pt-4">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn direction="right" className="order-2 md:order-1">
              <div className="relative w-full rounded-[1.75rem] overflow-hidden shadow-2xl shadow-[#231C14]/15" style={{ aspectRatio: '4 / 5' }}>
                <Image src={intro.src} alt={intro.alt} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" quality={86} />
              </div>
            </FadeIn>
            <div className="order-1 md:order-2">
              <FadeIn>
                <h2 className="font-display font-normal text-[#231C14] leading-[1.1] mb-6" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)' }}>
                  Tout le domaine<br /><em className="italic text-[#52632E]">rien que pour vous.</em>
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="flex flex-col gap-4 text-[#231C14]/65 text-base leading-relaxed">
                  <p>
                    Farm Eden se trouve à Ain Johra, dans la région de Tiflet, à 45 minutes de Rabat. C&apos;est une vraie ferme, avec un grand terrain verdoyant, une palmeraie, des animaux et une belle villa marocaine.
                  </p>
                  <p>
                    Quand vous réservez, vous <Link href="/privatiser-la-ferme" className="text-[#52632E] underline underline-offset-2 hover:text-[#3f4d23]">privatisez toute la propriété</Link>. Il n&apos;y a aucun autre client. La piscine, la villa et le jardin sont entièrement pour vous.
                  </p>
                  <p>
                    La ferme accueille jusqu&apos;à <strong className="text-[#231C14]">12 personnes</strong> confortablement. C&apos;est l&apos;endroit idéal pour une réunion de famille, un groupe d&apos;amis ou une équipe en séminaire.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galerie.map((img, i) => (
              <FadeIn key={`${img.src}-${i}`} delay={(i % 3) * 0.07} blur={false}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#EDE5D0]">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover hover:scale-[1.04] transition-transform duration-500 ease-[0.22,1,0.36,1]" quality={80} />
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.15} className="mt-8">
            <Link href="/galerie" className="inline-flex items-center gap-2 text-[#231C14] font-medium border-b border-[#52632E]/40 hover:border-[#52632E] pb-0.5 transition-colors text-sm">
              Voir toutes les photos<ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="bg-[#F5EFE0] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-4">Ce qui est inclus</p></FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-display font-normal text-[#231C14] leading-[1.1] mb-14" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
              Tout ce qu&apos;il vous faut<br /><em className="italic text-[#52632E]">dans un seul endroit.</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DETAILS.map((section, i) => (
              <FadeIn key={section.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 h-full">
                  <h3 className="font-semibold text-[#231C14] mb-4 text-base">{section.title}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[#231C14]/65 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#52632E] mt-1.5 shrink-0" aria-hidden="true" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comment venir */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">Comment venir</p></FadeIn>
          <FadeIn delay={0.07}>
            <h2 className="font-display font-normal text-[#231C14] leading-[1.1] mb-4" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}>
              La campagne est plus proche<br /><em className="italic text-[#52632E]">que vous ne le pensez.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-[#231C14]/60 text-base leading-relaxed mb-12 max-w-lg">
              Ain Johra se situe à quelques kilomètres de Tiflet, sur la route de Meknès. Le trajet est facile et agréable depuis les grandes villes. Un parking privé vous attend sur place.
            </p>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { time: '45 min', label: 'depuis Rabat', note: 'Autoroute puis route directe' },
                { time: '1h', label: 'depuis Casablanca', note: 'Autoroute A3 vers Rabat' },
                { time: '10 min', label: 'du centre de Tiflet', note: 'Commerces et services à proximité' },
              ].map((d) => (
                <div key={d.label} className="bg-[#EBF0E2] rounded-2xl p-5 md:p-7 flex flex-col gap-1">
                  <span className="font-display font-normal text-[#52632E] leading-none" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}>{d.time}</span>
                  <span className="text-[#231C14] text-sm font-medium mt-1">{d.label}</span>
                  <span className="text-[#231C14]/45 text-xs leading-snug hidden md:block">{d.note}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.22}>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#52632E] text-sm font-medium hover:text-[#3f4d23] transition-colors">
              Voir le trajet sur Google Maps<ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Envie de venir ?"
        text="Écrivez-nous sur WhatsApp avec vos dates et votre nombre de personnes. Nous vous répondons rapidement."
        label="Demander les disponibilités"
        wa="reservation"
      />
    </>
  );
}
