import type { Metadata } from 'next';
import { FadeIn } from '@/components/ui/FadeIn';
import { FaqAccordion } from '@/components/FaqAccordion';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Questions fréquentes sur la ferme près de Rabat',
  description:
    "Questions fréquentes sur la location d'une ferme avec piscine privée près de Rabat : ce que vous réservez, la capacité, l'accès, les repas et le devis.",
  alternates: { canonical: '/faq' },
};

const FAQ_PAGE = [
  {
    q: "Qu'est-ce qu'on loue exactement à Farm Eden ?",
    a: "Vous louez toute la ferme. La villa et ses quatre chambres, la piscine privée, le grand jardin et tous les espaces sont à vous. Il n'y a aucun autre client pendant votre venue.",
  },
  {
    q: "Où se trouve Farm Eden et c'est à combien de Rabat ?",
    a: "La ferme est à Ain Johra, près de Tiflet, dans la région Rabat-Salé-Kénitra. Comptez environ 45 minutes de route depuis Rabat. Nous envoyons les coordonnées GPS exactes à la réservation.",
  },
  {
    q: "Combien de personnes peut accueillir la ferme ?",
    a: "La ferme accueille confortablement jusqu'à 12 personnes, entre les quatre chambres et les espaces supplémentaires.",
  },
  {
    q: "Comment connaître le tarif et réserver ?",
    a: "Tout se fait sur WhatsApp. Envoyez-nous vos dates et votre nombre de personnes, et nous vous répondons rapidement avec les disponibilités et un devis adapté à votre demande.",
  },
  {
    q: "Le tarif dépend de quoi ?",
    a: "Il dépend surtout de la période, du nombre de personnes et des services choisis, comme les repas ou un événement particulier. Le plus simple est de nous écrire pour obtenir un prix précis.",
  },
  {
    q: "Peut-on manger sur place ?",
    a: "Oui. Notre équipe prépare la cuisine marocaine sur place, comme le tagine, le couscous et le méchoui. Le petit-déjeuner et le service de ménage sont disponibles selon vos besoins.",
  },
  {
    q: "La piscine est-elle privée ?",
    a: "Oui, la piscine est entièrement privée et réservée à votre groupe. Personne d'autre n'y a accès pendant votre venue.",
  },
  {
    q: "Y a-t-il des animaux à la ferme ?",
    a: "Oui, c'est une vraie ferme. Des moutons, des chèvres, des lapins et des paons vivent sur place, pour le plus grand plaisir des enfants comme des adultes.",
  },
  {
    q: "Quelles activités sont possibles sur place ?",
    a: "Vous profitez de la piscine, du grand jardin et d'activités comme le trampoline, le ping-pong, le badminton et le football. Tout est compris dans la privatisation.",
  },
  {
    q: "Peut-on organiser un événement, un séminaire ou un EVJF ?",
    a: "Oui, la ferme se privatise pour tous vos événements : séminaire d'entreprise, anniversaire, EVJF, retraite ou brunch. Contactez-nous et nous trouvons ensemble la formule qui vous convient.",
  },
  {
    q: "Comment se passe la réservation et le paiement ?",
    a: "Après votre message sur WhatsApp, nous confirmons la disponibilité et le tarif. Les modalités de réservation et d'arrhes vous sont précisées au moment de la confirmation.",
  },
  {
    q: "Peut-on voir la ferme avant de réserver ?",
    a: "Écrivez-nous sur WhatsApp pour en parler. Vous pouvez aussi découvrir la ferme en images dans notre galerie photo en attendant votre venue.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://farmeden.ma/faq',
    mainEntity: FAQ_PAGE.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-[#F5EFE0] pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-4">Questions fréquentes</p></FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-display font-normal text-[#231C14] leading-[1.0]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              Vos questions, <em className="italic text-[#52632E]">nos réponses.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[#231C14]/60 text-lg leading-relaxed max-w-xl mt-6">
              Tout ce qu&apos;il faut savoir pour préparer votre venue à Farm Eden, la ferme avec piscine privée à louer près de Rabat.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Liste FAQ */}
      <section className="bg-[#F5EFE0] pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <FadeIn delay={0.1}><FaqAccordion items={FAQ_PAGE} /></FadeIn>
        </div>
      </section>

      <CTASection
        title="Une autre question ?"
        text="Écrivez-nous sur WhatsApp. Nous vous répondons rapidement avec les disponibilités et le tarif."
        label="Nous écrire sur WhatsApp"
        wa="general"
      />
    </>
  );
}
