import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Farm Eden, ferme privée avec piscine à louer près de Rabat.',
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <section className="bg-[#F5EFE0] pt-28 pb-20">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <h1 className="font-display font-normal text-[#231C14] text-4xl mb-10">Mentions légales</h1>
        <div className="text-[#231C14]/70 text-sm leading-relaxed space-y-7">

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Éditeur du site</h2>
            <p>
              Le site farmeden.ma est édité par Farm Eden, ferme privée située à Ain Johra,
              Tiflet, dans la région Rabat-Salé-Kénitra, au Maroc. Vous pouvez nous contacter
              par WhatsApp depuis le site ou par courriel à l&apos;adresse contact@farmeden.ma.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Responsable de la publication</h2>
            <p>La publication du site est assurée par Farm Eden.</p>
          </div>

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Hébergement</h2>
            <p>
              Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
              États-Unis. Le site de l&apos;hébergeur est accessible à l&apos;adresse vercel.com.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site, notamment les textes, les photos
              et le logo, sont la propriété de Farm Eden. Toute reproduction, représentation ou
              diffusion, totale ou partielle, est interdite sans autorisation écrite préalable.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Responsabilité</h2>
            <p>
              Farm Eden s&apos;efforce de tenir les informations de ce site exactes et à jour, sans
              pouvoir en garantir l&apos;exhaustivité. Le site peut renvoyer vers des sites tiers,
              comme WhatsApp, Airbnb, Google ou Instagram. Farm Eden n&apos;est pas responsable du
              contenu ni des pratiques de ces sites.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Données personnelles</h2>
            <p>
              Le traitement de vos données est décrit dans notre{' '}
              <Link href="/confidentialite" className="text-[#52632E] hover:text-[#3f4d23] transition-colors">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Droit applicable</h2>
            <p>
              Le présent site et son utilisation sont régis par le droit marocain. En cas de
              litige, les tribunaux marocains sont seuls compétents.
            </p>
          </div>

          <p className="text-[#231C14]/45 pt-2">Dernière mise à jour : juin 2026.</p>
        </div>
      </div>
    </section>
  );
}
