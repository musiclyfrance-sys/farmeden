import type { Metadata } from 'next';
import { MapPin, Phone, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { SITE, WA_MESSAGES, whatsappUrl } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez Farm Eden par WhatsApp pour réserver ou poser vos questions. Ferme avec piscine privée à Ain Johra, à 45 minutes de Rabat.',
  alternates: { canonical: '/contact' },
};

const CONTEXTS = [
  { label: 'Réserver un séjour', message: WA_MESSAGES.reservation },
  { label: 'Séminaire d\'entreprise', message: WA_MESSAGES.seminaire },
  { label: 'Anniversaire ou fête', message: WA_MESSAGES.evenement },
  { label: 'Question générale', message: WA_MESSAGES.general },
];

const INFOS = [
  { icon: MapPin, title: 'Adresse', lines: ['Ain Johra, commune de Tiflet', 'Rabat-Salé-Kénitra, Maroc'] },
  { icon: Phone, title: 'Téléphone', lines: [SITE.phone] },
  { icon: Clock, title: 'Disponibilité', lines: ['Nous répondons dans la journée,', '7 jours sur 7.'] },
];

export default function ContactPage() {
  return (
    <>
      {/* En-tête */}
      <section className="bg-[#F5EFE0] pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#A84A26] mb-4">Contact</p></FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-display font-normal text-[#231C14] leading-[1.0] max-w-xl" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              On vous répond<br /><em className="italic text-[#52632E]">rapidement.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[#231C14]/60 text-lg leading-relaxed max-w-lg mt-5">
              Pour réserver ou poser une question, le plus simple est de nous écrire sur WhatsApp.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Deux colonnes alignées */}
      <section className="bg-[#F5EFE0] pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* Colonne sujets */}
          <FadeIn className="h-full">
            <div className="bg-white rounded-2xl border border-[#231C14]/6 p-7 md:p-9 h-full flex flex-col">
              <p className="text-xs font-medium tracking-widest uppercase text-[#231C14]/40 mb-6">Choisissez votre sujet</p>
              <div className="flex flex-col gap-3 flex-1">
                {CONTEXTS.map((ctx) => (
                  <a
                    key={ctx.label}
                    href={whatsappUrl(ctx.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 bg-[#F5EFE0] hover:bg-[#EBF0E2] rounded-xl px-5 py-4 transition-colors duration-200 group"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-full bg-[#25D366]/12 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-4 h-4 text-[#1DAA53]" aria-hidden="true" />
                      </span>
                      <span className="text-[#231C14] font-medium text-sm">{ctx.label}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#231C14]/30 group-hover:text-[#52632E] transition-colors shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="text-[#231C14]/45 text-sm mt-6">
                Vous préférez appeler ?
                <a href={`tel:${SITE.phone}`} className="ml-1.5 text-[#231C14] font-medium hover:text-[#52632E] transition-colors">{SITE.phone}</a>
              </p>
            </div>
          </FadeIn>

          {/* Colonne infos pratiques */}
          <FadeIn delay={0.1} className="h-full">
            <div className="bg-[#231C14] rounded-2xl p-7 md:p-9 h-full flex flex-col text-[#F5EFE0]">
              <p className="text-xs font-medium tracking-widest uppercase text-[#D4B78A] mb-6">Infos pratiques</p>
              <ul className="flex flex-col gap-6 flex-1">
                {INFOS.map((info) => (
                  <li key={info.title} className="flex items-start gap-3.5">
                    <span className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center shrink-0 mt-0.5">
                      <info.icon className="w-4 h-4 text-[#D4B78A]" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">{info.title}</p>
                      {info.lines.map((l) => (
                        <p key={l} className="text-[#F5EFE0]/55 text-sm leading-relaxed">{l}</p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DAA53] text-white font-medium text-sm py-3.5 rounded-xl transition-colors min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Nous écrire sur WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Carte */}
      <section className="bg-[#EBF0E2] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn><p className="text-xs font-medium tracking-widest uppercase text-[#52632E] mb-4">Où nous trouver</p></FadeIn>
          <FadeIn delay={0.07}>
            <h2 className="font-display font-normal text-[#231C14] leading-[1.1] mb-2" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)' }}>
              À 45 minutes de Rabat,<br /><em className="italic text-[#52632E]">dans la région de Tiflet.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="text-[#231C14]/55 text-sm mt-2 mb-8">
              {SITE.addressLine}. Un parking privé vous attend sur place, et nous vous envoyons les coordonnées GPS exactes à la réservation.
            </p>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#231C14]/8" style={{ height: '440px' }}>
              <iframe
                src={SITE.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Farm Eden - Ferme Rabat, XJ6V+44H, Tiflet, Maroc"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#52632E] text-sm font-medium hover:text-[#3f4d23] transition-colors mt-5">
              Ouvrir dans Google Maps<ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
