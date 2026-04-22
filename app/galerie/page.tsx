import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { WhatsAppBtn } from '@/components/WhatsAppFloat';
import { WA_MESSAGES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Galerie — Farm Eden, ferme avec piscine privée près de Rabat',
  description:
    'Découvrez la villa, la piscine, le jardin et les animaux de Farm Eden en photos. Une ferme de charme à 45 minutes de Rabat.',
};

/* ─── Toutes les cellules ont le même ratio 4/3 → jamais d'espace blanc ── */
const SECTIONS = [
  {
    id: 'villa',
    label: 'La Villa',
    accentBg: 'bg-[#F5E6DF]',
    accentText: 'text-[#A84A26]',
    accentLine: 'bg-[#A84A26]',
    desc: 'Une maison marocaine authentique avec 4 chambres, deux salons, une cuisine équipée et de grandes terrasses.',
    photos: [
      { src: '/images/lieu-hero.jpg',        alt: 'Façade de la villa Farm Eden' },
      { src: '/images/hero.jpg',             alt: 'Espace de vie extérieur' },
      { src: '/images/exp-sejour.jpg',       alt: 'Salon intérieur de la villa' },
      { src: '/images/exp-anniversaire.jpg', alt: 'Chambre de la villa' },
      { src: '/images/lieu-hero.jpg',        alt: 'Terrasse ombragée' },
      { src: '/images/exp-seminaire.jpg',    alt: 'Salle polyvalente' },
    ],
  },
  {
    id: 'piscine',
    label: 'La Piscine',
    accentBg: 'bg-[#EBF0E2]',
    accentText: 'text-[#52632E]',
    accentLine: 'bg-[#52632E]',
    desc: 'Une grande piscine entourée de verdure, entièrement privée. Pas de vis-à-vis, pas de partage.',
    photos: [
      { src: '/images/hero.jpg',      alt: 'Vue d\'ensemble de la piscine' },
      { src: '/images/lieu-hero.jpg', alt: 'Bord de piscine et transats' },
      { src: '/images/hero.jpg',      alt: 'Piscine au coucher du soleil' },
      { src: '/images/lieu-hero.jpg', alt: 'La piscine vue de la terrasse' },
    ],
  },
  {
    id: 'jardin',
    label: 'Le Jardin',
    accentBg: 'bg-[#231C14]/6',
    accentText: 'text-[#231C14]/60',
    accentLine: 'bg-[#231C14]/40',
    desc: '1,5 hectare de terrain verdoyant — arbres fruitiers, espaces d\'ombre, zones de jeux et beaucoup de calme.',
    photos: [
      { src: '/images/exp-brunch.jpg',       alt: 'Brunch dans le jardin' },
      { src: '/images/lieu-hero.jpg',        alt: 'Allée ombragée dans le jardin' },
      { src: '/images/exp-sejour.jpg',       alt: 'Espace repas extérieur sous les arbres' },
      { src: '/images/exp-anniversaire.jpg', alt: 'Décoration pour un événement' },
      { src: '/images/exp-brunch.jpg',       alt: 'Les arbres fruitiers du jardin' },
      { src: '/images/lieu-hero.jpg',        alt: 'Zone de barbecue et détente' },
    ],
  },
  {
    id: 'animaux',
    label: 'Les Animaux',
    accentBg: 'bg-[#FAF3E8]',
    accentText: 'text-[#8B6B3D]',
    accentLine: 'bg-[#D4B78A]',
    desc: 'Moutons, chèvres, lapins, paons — les animaux de la ferme font partie de l\'expérience. Les enfants adorent les découvrir.',
    photos: [
      { src: '/images/exp-sejour.jpg',  alt: 'Moutons de la ferme' },
      { src: '/images/exp-brunch.jpg',  alt: 'Lapins et chèvres' },
      { src: '/images/lieu-hero.jpg',   alt: 'Paons dans le jardin' },
      { src: '/images/exp-sejour.jpg',  alt: 'Enfants avec les animaux' },
    ],
  },
];

export default function GaleriePage() {
  return (
    <>
      {/* ── En-tête ── */}
      <section className="bg-[#F5EFE0] pt-28 md:pt-36 pb-14 md:pb-18">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">
              La galerie
            </p>
          </FadeIn>
          <FadeIn delay={0.07}>
            <h1
              className="font-display font-normal text-[#231C14] leading-[1.0]"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
            >
              La ferme en images.
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[#231C14]/60 text-lg leading-relaxed max-w-lg mt-5 mb-10">
              La villa, la piscine, le jardin et les animaux — découvrez Farm Eden avant même d&apos;arriver.
            </p>
          </FadeIn>

          {/* Navigation ancrée */}
          <FadeIn delay={0.18}>
            <nav className="flex flex-wrap gap-2" aria-label="Sections">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors
                             ${s.accentBg} ${s.accentText}`}
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </FadeIn>
        </div>
      </section>

      {/* ── Sections photos — grille uniforme sans espaces blancs ── */}
      {SECTIONS.map((section, si) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-16 md:py-24 ${si % 2 === 0 ? 'bg-white' : 'bg-[#F5EFE0]'}`}
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <FadeIn>
              <div className="flex items-center gap-3 mb-3">
                <span className={`h-0.5 w-8 rounded-full ${section.accentLine}`} aria-hidden="true" />
                <span className={`text-xs font-medium tracking-widest uppercase ${section.accentText}`}>
                  {section.label}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="text-[#231C14]/60 text-base leading-relaxed mb-10 max-w-lg">
                {section.desc}
              </p>
            </FadeIn>

            {/* Grille uniforme : toutes les cellules en aspect-[4/3] — aucun espace blanc */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {section.photos.map((photo, pi) => (
                <FadeIn key={pi} delay={pi * 0.06}>
                  <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-[#EDE5D0]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover hover:scale-[1.03] transition-transform duration-500 ease-[0.22,1,0.36,1]"
                      quality={80}
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA final — olive ── */}
      <section className="bg-[#52632E] grain relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8 text-center">
          <FadeIn>
            <h2
              className="font-display font-normal text-[#F5EFE0] leading-[1.1] mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Ça vous donne envie ?<br />
              <em className="italic">La ferme vous attend.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[#F5EFE0]/70 text-lg leading-relaxed mb-10 max-w-md mx-auto">
              Envoyez-nous un message sur WhatsApp pour vérifier les disponibilités et connaître le tarif.
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <div className="flex flex-wrap justify-center gap-4">
              <WhatsAppBtn
                message={WA_MESSAGES.reservation}
                label="Réserver maintenant"
                variant="cream"
                size="lg"
              />
              <Link
                href="/la-ferme"
                className="inline-flex items-center gap-2 text-[#F5EFE0]/80 hover:text-[#F5EFE0]
                           text-base font-medium transition-colors
                           border-b border-[#F5EFE0]/30 hover:border-[#F5EFE0] pb-0.5"
              >
                Visiter la ferme
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
