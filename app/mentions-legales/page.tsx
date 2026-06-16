import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <section className="bg-[#F5EFE0] pt-28 pb-20">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <h1 className="font-display font-normal text-[#231C14] text-4xl mb-10">Mentions légales</h1>
        <div className="prose prose-neutral text-[#231C14]/70 text-sm leading-relaxed space-y-6">
          <p className="text-[#A84A26] text-sm font-medium">
            Ces informations seront complétées avant la mise en ligne.
          </p>
          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Éditeur du site</h2>
            <p>Raison sociale : [À compléter]<br />Adresse : Ain Johra, Tifelt, Maroc<br />Téléphone : [À compléter]</p>
          </div>
          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Hébergement</h2>
            <p>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>
          </div>
          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Propriété intellectuelle</h2>
            <p>Tous les contenus de ce site (textes, photos, logo) sont la propriété de Farm Eden. Toute reproduction est interdite sans autorisation préalable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
