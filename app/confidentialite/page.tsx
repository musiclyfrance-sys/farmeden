import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  robots: { index: false, follow: false },
};

export default function ConfidentialitePage() {
  return (
    <section className="bg-[#F5EFE0] pt-28 pb-20">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <h1 className="font-display font-normal text-[#231C14] text-4xl mb-10">Confidentialité</h1>
        <div className="text-[#231C14]/70 text-sm leading-relaxed space-y-6">
          <p className="text-[#A84A26] text-sm font-medium">
            Ce document sera complété avant la mise en ligne.
          </p>
          <p>Ce site ne collecte aucune donnée personnelle via des formulaires. Les échanges se font uniquement via WhatsApp.</p>
          <p>Aucun cookie de tracking n'est déposé sur votre appareil.</p>
        </div>
      </div>
    </section>
  );
}
