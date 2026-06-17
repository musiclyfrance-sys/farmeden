import Image from 'next/image';
import type { Metadata } from 'next';
import { FadeIn } from '@/components/ui/FadeIn';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Photos',
  description:
    'Découvrez Farm Eden en photos. La villa marocaine, la piscine privée, les terrasses, le jardin verdoyant et les animaux de la ferme, à 45 minutes de Rabat.',
  alternates: { canonical: '/galerie' },
};

const SECTIONS = [
  {
    id: 'villa',
    label: 'La villa',
    desc: 'Une maison marocaine authentique avec quatre chambres, deux salons, une cuisine équipée et de larges terrasses.',
    photos: [
      { src: '/images/farm/salon.jpg', alt: 'Salon principal sous une arche en pierre' },
      { src: '/images/farm/sejour.jpg', alt: 'Séjour avec baie vitrée sur le jardin' },
      { src: '/images/farm/salon-marocain.jpg', alt: 'Salon marocain ouvert sur la cuisine' },
      { src: '/images/farm/salle-manger.jpg', alt: 'Salle à manger sous arche en pierre' },
      { src: '/images/farm/cuisine.jpg', alt: 'Cuisine avec bar en bois rustique' },
      { src: '/images/farm/couloir.jpg', alt: 'Couloir voûté de la villa' },
      { src: '/images/farm/chambre-double.jpg', alt: 'Chambre double lumineuse' },
      { src: '/images/farm/chambre-master.jpg', alt: 'Chambre principale aux tons chauds' },
      { src: '/images/farm/sdb-doree.jpg', alt: 'Salle de bain en pierre dorée' },
    ],
  },
  {
    id: 'piscine',
    label: 'Piscine et terrasses',
    desc: 'Une grande piscine privée entourée de pelouse et de palmiers, prolongée par des terrasses ombragées.',
    photos: [
      { src: '/images/farm/piscine.jpg', alt: 'Piscine privée et palmiers' },
      { src: '/images/farm/piscine-turquoise.jpg', alt: 'Piscine turquoise au milieu des arbres' },
      { src: '/images/farm/piscine-arbre.jpg', alt: 'Piscine à l\'ombre d\'un arbre' },
      { src: '/images/farm/terrasse-piscine.jpg', alt: 'Banquette de terrasse face à la piscine' },
      { src: '/images/farm/terrasse-repas.jpg', alt: 'Terrasse de repas couverte' },
      { src: '/images/farm/terrasse-salon.jpg', alt: 'Salon de terrasse avec coussins zellige' },
      { src: '/images/farm/daybed.jpg', alt: 'Lit gazebo posé sur la pelouse' },
      { src: '/images/farm/facade.jpg', alt: 'Façade et entrée principale de la villa' },
    ],
  },
  {
    id: 'jardin',
    label: 'Jardin et nature',
    desc: 'Un terrain de 1,5 hectare planté de palmiers, d\'arbres fruitiers et de fleurs, avec beaucoup d\'ombre et de calme.',
    photos: [
      { src: '/images/farm/palmeraie.jpg', alt: 'Palmeraie et prairie sous un ciel bleu' },
      { src: '/images/farm/jardin-tropical.jpg', alt: 'Allée dallée dans le jardin tropical' },
      { src: '/images/farm/allee-palmier.jpg', alt: 'Allée bordée de palmiers' },
      { src: '/images/farm/allee.jpg', alt: 'Allée dallée vers la villa et le bananier' },
      { src: '/images/farm/fleurs-jaunes.jpg', alt: 'Tapis de fleurs jaunes au printemps' },
      { src: '/images/farm/pechers.jpg', alt: 'Pêchers en fruits dans le champ fleuri' },
    ],
  },
  {
    id: 'animaux',
    label: 'Les animaux',
    desc: 'Paons, chèvres, lapins et tortues vivent en liberté sur la propriété. Les enfants adorent les observer.',
    photos: [
      { src: '/images/farm/paon-facade.jpg', alt: 'Paon devant la façade de la villa' },
      { src: '/images/farm/paon-terrasse.jpg', alt: 'Paon sur la terrasse en bois' },
      { src: '/images/farm/paon-coqs.jpg', alt: 'Paon et coqs en liberté' },
      { src: '/images/farm/chevre.jpg', alt: 'Chèvre et chevreau de la ferme' },
      { src: '/images/farm/tortue.jpg', alt: 'Tortue parmi les fleurs sauvages' },
    ],
  },
];

export default function GaleriePage() {
  return (
    <>
      {/* En-tête */}
      <section className="bg-[#F5EFE0] pt-28 md:pt-36 pb-14 md:pb-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-5">Photos</p></FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-display font-normal text-[#231C14] leading-[1.0]" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}>
              La ferme en images.
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[#231C14]/60 text-lg leading-relaxed max-w-lg mt-5 mb-10">
              La villa, la piscine, le jardin et les animaux. Découvrez Farm Eden avant même d&apos;arriver.
            </p>
          </FadeIn>
          <FadeIn delay={0.18}>
            <nav className="flex flex-wrap gap-2" aria-label="Sections">
              {SECTIONS.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#EBF0E2] text-[#52632E] hover:bg-[#52632E] hover:text-white">
                  {s.label}
                </a>
              ))}
            </nav>
          </FadeIn>
        </div>
      </section>

      {SECTIONS.map((section, si) => (
        <section key={section.id} id={section.id} className={`py-16 md:py-24 scroll-mt-20 ${si % 2 === 0 ? 'bg-white' : 'bg-[#F5EFE0]'}`}>
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <FadeIn>
              <p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-3">
                Rubrique {String(si + 1).padStart(2, '0')}
              </p>
              <h2 className="font-display font-normal text-[#231C14] leading-[1.04]" style={{ fontSize: 'clamp(2rem, 4.2vw, 3.4rem)' }}>
                {section.label}
              </h2>
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="text-[#231C14]/60 text-base leading-relaxed mb-10 mt-4 max-w-lg">{section.desc}</p>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {section.photos.map((photo, pi) => (
                <FadeIn key={pi} delay={(pi % 3) * 0.06} blur={false}>
                  <div className="relative aspect-[2/3] rounded-xl md:rounded-2xl overflow-hidden bg-[#EDE5D0]">
                    <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover hover:scale-[1.03] transition-transform duration-500 ease-[0.22,1,0.36,1]" quality={80} />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        title="Ça vous donne envie ?"
        text="Envoyez-nous un message sur WhatsApp pour vérifier les disponibilités et connaître le tarif."
        label="Réserver maintenant"
        wa="reservation"
      />
    </>
  );
}
