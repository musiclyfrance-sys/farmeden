import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité du site Farm Eden. Données collectées, finalités, cookies et vos droits.',
  robots: { index: false, follow: false },
};

export default function ConfidentialitePage() {
  return (
    <section className="bg-[#F5EFE0] pt-28 pb-20">
      <div className="mx-auto max-w-2xl px-5 md:px-8">
        <h1 className="font-display font-normal text-[#231C14] text-4xl mb-10">Politique de confidentialité</h1>
        <div className="text-[#231C14]/70 text-sm leading-relaxed space-y-7">

          <p>
            Farm Eden attache de l&apos;importance à la protection de votre vie privée. Cette page
            explique quelles données nous traitons, pourquoi, et quels sont vos droits. Le
            responsable du traitement est Farm Eden, joignable par WhatsApp depuis le site ou par
            courriel à l&apos;adresse contact@farmeden.ma.
          </p>

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Données que nous collectons</h2>
            <p>
              Le site ne comporte aucun formulaire et ne collecte aucune donnée à votre insu. Vous
              nous transmettez des informations uniquement lorsque vous nous contactez de votre
              plein gré, par WhatsApp ou par courriel. Il s&apos;agit alors de votre nom, de vos
              coordonnées, du contenu de votre message et, pour une réservation, des dates
              souhaitées et du nombre de personnes. Par ailleurs, comme tout site web, notre
              hébergeur enregistre des données techniques de connexion, par exemple l&apos;adresse IP
              et le type de navigateur, à des fins de fonctionnement et de sécurité.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Utilisation de vos données</h2>
            <p>
              Nous utilisons vos données pour répondre à vos demandes, organiser et confirmer votre
              réservation, et assurer le bon fonctionnement et la sécurité du site. Ce
              traitement repose sur votre consentement lorsque vous nous contactez de votre plein
              gré, et sur l&apos;exécution de mesures précontractuelles et contractuelles lorsque
              vous organisez et confirmez votre venue. Nous n&apos;utilisons jamais vos données à
              des fins publicitaires et ne les vendons à personne.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Partage avec des tiers</h2>
            <p>
              Les échanges par WhatsApp sont soumis à la politique de confidentialité de WhatsApp,
              édité par Meta. L&apos;hébergement est assuré par Vercel, dont les serveurs peuvent se
              situer en dehors du Maroc. Tout transfert de vos données en dehors du Maroc se limite
              à ces prestataires techniques strictement nécessaires au fonctionnement du site. En
              dehors de ces prestataires, nous ne transmettons vos données à aucun tiers à des fins
              commerciales.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Cookies</h2>
            <p>
              Le site ne dépose aucun cookie publicitaire ni de suivi. Seuls des cookies
              strictement nécessaires au bon fonctionnement du site peuvent être utilisés.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Conservation des données</h2>
            <p>
              Vos données sont conservées le temps nécessaire au traitement de votre demande et à
              l&apos;organisation de votre venue, puis elles sont supprimées.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Vos droits</h2>
            <p>
              Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;opposition et de
              suppression de vos données. Pour l&apos;exercer, contactez-nous par WhatsApp ou à
              l&apos;adresse contact@farmeden.ma. Conformément à la loi 09-08 relative à la
              protection des personnes physiques à l&apos;égard du traitement des données à
              caractère personnel, vous pouvez également saisir la CNDP, la Commission Nationale de
              contrôle de la protection des Données à caractère personnel.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures raisonnables pour protéger vos données contre tout
              accès non autorisé, toute perte et toute divulgation.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#231C14] text-base mb-2">Modifications</h2>
            <p>
              Cette politique peut évoluer. La version en vigueur est celle publiée sur cette page.
            </p>
          </div>

          <p className="text-[#231C14]/45 pt-2">Dernière mise à jour : juin 2026.</p>
        </div>
      </div>
    </section>
  );
}
