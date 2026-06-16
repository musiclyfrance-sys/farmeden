import type { Metadata } from 'next';
import { MessageCircle, Phone, Clock } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { SITE, WA_MESSAGES, whatsappUrl } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez Farm Eden par WhatsApp pour réserver ou poser vos questions. Ferme avec piscine privée à Ain Johra, à 45 minutes de Rabat.',
  alternates: { canonical: '/contact' },
};

const CONTEXTS = [
  { label: 'Réserver un séjour',      message: WA_MESSAGES.reservation },
  { label: 'Séminaire d\'entreprise', message: WA_MESSAGES.seminaire },
  { label: 'Anniversaire ou fête',    message: WA_MESSAGES.evenement },
  { label: 'Question générale',       message: WA_MESSAGES.general },
];

export default function ContactPage() {
  return (
    <>
      {/* ── En-tête ── */}
      <section className="bg-[#F5EFE0] pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-4">
              Contact
            </p>
          </FadeIn>
          <FadeIn delay={0.07}>
            <h1
              className="font-display font-normal text-[#231C14] leading-[1.0] max-w-xl"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              On vous répond<br />
              <em className="italic">rapidement.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[#231C14]/60 text-lg leading-relaxed max-w-lg mt-5">
              Pour réserver ou poser une question, le plus simple est de nous écrire sur WhatsApp.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Boutons de contact ── */}
      <section className="bg-[#F5EFE0] pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

            {/* WhatsApp CTAs */}
            <div>
              <FadeIn>
                <p className="text-xs font-medium tracking-widest uppercase text-[#231C14]/40 mb-6">
                  Choisissez votre sujet
                </p>
              </FadeIn>
              <div className="flex flex-col gap-3">
                {CONTEXTS.map((ctx, i) => (
                  <FadeIn key={ctx.label} delay={i * 0.07}>
                    <a
                      href={whatsappUrl(ctx.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4 bg-white border border-[#231C14]/8
                                 hover:border-[#231C14]/20 hover:shadow-sm rounded-xl px-5 py-4
                                 transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                          <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                        </div>
                        <span className="text-[#231C14] font-medium text-sm">{ctx.label}</span>
                      </div>
                      <svg
                        className="w-4 h-4 text-[#231C14]/30 group-hover:text-[#231C14]/60 transition-colors shrink-0"
                        viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}
                      >
                        <path d="M3 8h10M9 4l4 4-4 4"/>
                      </svg>
                    </a>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.35} className="mt-6">
                <p className="text-[#231C14]/45 text-sm">
                  Vous pouvez aussi nous appeler directement :
                  <a href={`tel:${SITE.phone}`} className="ml-1.5 text-[#231C14] font-medium hover:text-[#A84A26] transition-colors">
                    {SITE.phone}
                  </a>
                </p>
              </FadeIn>
            </div>

            {/* Infos pratiques */}
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-[#231C14]/40 mb-5">
                    Infos pratiques
                  </p>
                  <ul className="flex flex-col gap-5">
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#231C14]/6 flex items-center justify-center shrink-0 mt-0.5">
                        <svg viewBox="0 0 16 16" className="w-4 h-4 text-[#231C14]/60" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
                          <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5c0-2.5-2-4.5-4.5-4.5z"/>
                          <circle cx="8" cy="6" r="1.5"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#231C14] text-sm mb-0.5">Adresse</p>
                        <p className="text-[#231C14]/60 text-sm leading-relaxed">
                          Ain Johra, commune de Tifelt<br />
                          Rabat-Salé-Kénitra, Maroc
                        </p>
                        <a
                          href={SITE.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#A84A26] text-sm mt-1 inline-block hover:underline"
                        >
                          Voir sur Google Maps
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#231C14]/6 flex items-center justify-center shrink-0 mt-0.5">
                        <Phone className="w-4 h-4 text-[#231C14]/60" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium text-[#231C14] text-sm mb-0.5">Téléphone</p>
                        <a href={`tel:${SITE.phone}`} className="text-[#231C14]/60 text-sm hover:text-[#231C14] transition-colors">
                          {SITE.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#231C14]/6 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="w-4 h-4 text-[#231C14]/60" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium text-[#231C14] text-sm mb-0.5">Disponibilité</p>
                        <p className="text-[#231C14]/60 text-sm leading-relaxed">
                          On répond généralement dans la journée,<br />7 jours sur 7.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Encart WhatsApp */}
                <div className="bg-[#231C14] rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[#F5EFE0] font-semibold text-sm">WhatsApp, le plus rapide</p>
                      <p className="text-[#F5EFE0]/50 text-xs mt-0.5">Réponse sous quelques heures</p>
                    </div>
                  </div>
                  <a
                    href={whatsappUrl(WA_MESSAGES.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DAA53]
                               text-white font-medium text-sm py-3 rounded-xl transition-colors min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    Nous écrire maintenant
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Google Maps ── */}
      <section className="bg-[#EDE5D0] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <p className="text-xs font-medium tracking-widest uppercase text-[#52632E] mb-4">
              Localisation
            </p>
          </FadeIn>
          <FadeIn delay={0.07}>
            <h2
              className="font-display font-normal text-[#231C14] leading-[1.1] mb-2"
              style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)' }}
            >
              À 45 minutes de Rabat,<br />
              <em className="italic">dans la région de Tifelt.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-[#231C14]/55 text-sm mt-2 mb-8">
              Parking privé sur place. On vous envoie les coordonnées GPS exactes à la réservation.
            </p>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="rounded-2xl overflow-hidden shadow-sm" style={{ height: '420px' }}>
              <iframe
                src={SITE.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de Farm Eden, Ain Johra, Tifelt, Maroc"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
