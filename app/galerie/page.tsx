import Image from 'next/image';
import type { Metadata } from 'next';
import { FadeIn } from '@/components/ui/FadeIn';
import { CTASection } from '@/components/CTASection';
import { getGallery } from '@/lib/admin/store';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Photos de la ferme avec piscine près de Rabat',
  description:
    'Photos d’une ferme avec piscine privée près de Rabat : la villa marocaine, la piscine, les terrasses, le jardin et les animaux à voir avant de réserver.',
  alternates: { canonical: '/galerie' },
};

export default async function GaleriePage() {
  const sections = await getGallery();

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
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#EBF0E2] text-[#52632E] hover:bg-[#52632E] hover:text-white">
                  {s.label}
                </a>
              ))}
            </nav>
          </FadeIn>
        </div>
      </section>

      {sections.map((section, si) => (
        <section key={section.id} id={section.id} className={`py-16 md:py-24 scroll-mt-20 ${si % 2 === 0 ? 'bg-white' : 'bg-[#F5EFE0]'}`}>
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <FadeIn>
              <h2 className="font-display font-normal text-[#231C14] leading-[1.04]" style={{ fontSize: 'clamp(2rem, 4.2vw, 3.4rem)' }}>
                {section.label}
              </h2>
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="text-[#231C14]/60 text-base leading-relaxed mb-10 mt-4 max-w-lg">{section.desc}</p>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {section.photos.map((photo, pi) => (
                <FadeIn key={photo.id} delay={(pi % 3) * 0.06} blur={false}>
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
