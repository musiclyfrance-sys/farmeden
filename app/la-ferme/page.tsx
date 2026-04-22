import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { WhatsAppBtn } from '@/components/WhatsAppFloat';
import { WA_MESSAGES, SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'La Ferme — Farm Eden, villa avec piscine privée près de Rabat',
  description:
    "Découvrez Farm Eden : villa complète avec piscine privée, 4 chambres, jardin de 1,5 ha, animaux de ferme et activités. Tout est privatisé pour vous, à Ain Johra près de Tifelt.",
};

const GALERIE = [
  { src: '/images/lieu-hero.jpg', alt: 'Façade de la villa Farm Eden' },
  { src: '/images/hero.jpg',      alt: 'Piscine privée de Farm Eden' },
  { src: '/images/exp-brunch.jpg',alt: 'Jardin et espace repas extérieur' },
  { src: '/images/exp-sejour.jpg',alt: 'Intérieur de la villa' },
  { src: '/images/lieu-hero.jpg', alt: 'Terrasse ombragée' },
  { src: '/images/hero.jpg',      alt: 'Vue de la piscine depuis le jardin' },
];

const DETAILS = [
  {
    title: 'La villa',
    items: [
      '4 chambres (2 suites + 2 chambres)',
      '2 salons avec cheminée',
      'Cuisine entièrement équipée',
      'Salle à manger intérieure et extérieure',
      'Terrasses et espaces détente',
    ],
  },
  {
    title: 'La piscine',
    items: [
      'Grande piscine privée sans vis-à-vis',
      'Transats et parasols inclus',
      'Espace sécurisé',
      'Ouverte toute l\'année',
    ],
  },
  {
    title: 'Le terrain',
    items: [
      '1,5 hectare de terrain verdoyant',
      'Oliveraie centenaire',
      'Espace animaux (moutons, chèvres, lapins, paons)',
      'Aire de jeux et activités sportives',
      'Parking privé pour plusieurs voitures',
    ],
  },
  {
    title: 'Les services',
    items: [
      'Équipe sur place 7j/7',
      'Cuisine marocaine en supplément',
      'Petit-déjeuner marocain en supplément',
      'Ménage quotidien en supplément',
      'WiFi haut débit',
    ],
  },
];

export default function LaFermePage() {
  return (
    <>
      {/* ── En-tête page — fond crème, pas de photo cachant la navbar ── */}
      <section className="bg-[#F5EFE0] pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">
              La Ferme
            </p>
          </FadeIn>
          <FadeIn delay={0.07}>
            <h1
              className="font-display font-normal text-[#231C14] leading-[1.0] max-w-2xl"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
            >
              Un endroit calme,<br />
              <em className="italic">grand et beau.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[#231C14]/60 text-lg leading-relaxed max-w-lg mt-5">
              Farm Eden, c&apos;est 1,5 hectare de terrain verdoyant avec une villa complète, une piscine privée et tout ce qu&apos;il faut pour souffler.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Photo principale — sous le header, pas par-dessus ── */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/images/lieu-hero.jpg"
          alt="Vue d'ensemble de la ferme Farm Eden, Ain Johra"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
      </div>

      {/* ── Introduction ── */}
      <section className="bg-[#F5EFE0] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <FadeIn>
              <h2
                className="font-display font-normal text-[#231C14] leading-[1.1]"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
              >
                Tout le domaine<br />
                <em className="italic">rien que pour vous.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-4 text-[#231C14]/65 text-base leading-relaxed">
                <p>
                  Farm Eden se trouve à Ain Johra, dans la région de Tifelt — à 45 minutes de Rabat. C&apos;est une vraie ferme, avec un grand terrain verdoyant, une oliveraie, des animaux et une belle villa.
                </p>
                <p>
                  Quand vous réservez, vous prenez <strong className="text-[#231C14]">toute la propriété</strong>. Aucun autre client. La piscine, la villa et le jardin sont entièrement pour vous.
                </p>
                <p>
                  On peut accueillir jusqu&apos;à <strong className="text-[#231C14]">12 personnes</strong> confortablement — idéal pour une réunion de famille, un groupe d&apos;amis, ou une équipe en séminaire.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Galerie photos ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {GALERIE.map((img, i) => (
              <FadeIn key={`${img.src}-${i}`} delay={i * 0.07}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#EDE5D0]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover hover:scale-[1.04] transition-transform duration-500 ease-[0.22,1,0.36,1]"
                    quality={80}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.15} className="mt-8">
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 text-[#231C14] font-medium
                         border-b border-[#231C14]/25 hover:border-[#231C14] pb-0.5
                         transition-colors text-sm"
            >
              Voir toute la galerie
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Ce qui est inclus ── */}
      <section className="bg-[#F5EFE0] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-4">
              Ce qui est inclus
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2
              className="font-display font-normal text-[#231C14] leading-[1.1] mb-14"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              Tout ce qu&apos;il vous faut<br />
              <em className="italic">dans un seul endroit.</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DETAILS.map((section, i) => (
              <FadeIn key={section.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7">
                  <h3 className="font-semibold text-[#231C14] mb-4 text-base">{section.title}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[#231C14]/65 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4B78A] mt-1.5 shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comment venir — section olive, design attractif ── */}
      <section className="bg-[#52632E] grain relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-[#D4B78A] mb-5">
              Comment venir
            </p>
          </FadeIn>
          <FadeIn delay={0.07}>
            <h2
              className="font-display font-normal text-[#F5EFE0] leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
            >
              La campagne est plus proche<br />
              <em className="italic">que vous ne le pensez.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-[#F5EFE0]/65 text-base leading-relaxed mb-12 max-w-lg">
              Ain Johra se trouve à quelques kilomètres de Tifelt, sur la route de Meknès — un trajet facile et agréable depuis les grandes villes. Parking privé sur place.
            </p>
          </FadeIn>

          {/* Cartes distances */}
          <FadeIn delay={0.16}>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { time: '45 min', label: 'depuis Rabat',        note: 'Autoroute + route directe' },
                { time: '1h',     label: 'depuis Casablanca',   note: 'Autoroute A3 direction Rabat' },
                { time: '10 min', label: 'du centre de Tifelt', note: 'Commerces & services à proximité' },
              ].map((d) => (
                <div key={d.label} className="bg-white/10 border border-white/15 rounded-2xl p-5 md:p-7 flex flex-col gap-1">
                  <span
                    className="font-display font-normal text-[#F5EFE0] leading-none"
                    style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}
                  >
                    {d.time}
                  </span>
                  <span className="text-[#F5EFE0]/80 text-sm font-medium mt-1">{d.label}</span>
                  <span className="text-[#F5EFE0]/40 text-xs leading-snug hidden md:block">{d.note}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.22}>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D4B78A] text-sm font-medium
                         hover:text-[#F5EFE0] transition-colors"
            >
              Voir le trajet sur Google Maps
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F5EFE0] py-20 md:py-24 text-center">
        <div className="mx-auto max-w-xl px-5 md:px-8">
          <FadeIn>
            <h2
              className="font-display font-normal text-[#231C14] leading-[1.1] mb-4"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)' }}
            >
              Envie de venir ?
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-[#231C14]/60 text-base mb-8 leading-relaxed">
              Écrivez-nous sur WhatsApp avec vos dates et on vous répond rapidement.
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <WhatsAppBtn message={WA_MESSAGES.reservation} label="Demander les disponibilités" size="lg" />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
