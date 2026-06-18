import { FadeIn } from '@/components/ui/FadeIn';
import { WhatsAppBtn } from '@/components/WhatsAppFloat';
import { WA_MESSAGES } from '@/lib/content';

interface CTASectionProps {
  title: string;
  text: string;
  label?: string;
  message?: string;
  wa?: keyof typeof WA_MESSAGES;
  eyebrow?: string;
  /** conservés pour compat, non utilisés (le CTA n'affiche plus de photo) */
  image?: string;
  imageAlt?: string;
}

/**
 * Bloc d'appel à l'action de fin de page.
 * Fond olive avec motif décoratif, centré et percutant, sans photo.
 */
export function CTASection({
  title,
  text,
  label = 'Réserver sur WhatsApp',
  message,
  wa,
  eyebrow = 'Réservation',
}: CTASectionProps) {
  const msg = wa ? WA_MESSAGES[wa] : (message ?? WA_MESSAGES.reservation);

  return (
    <section className="relative overflow-hidden bg-[#52632E]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5d7037] via-[#52632E] to-[#3c4a22]" aria-hidden="true" />

      {/* Feuillage décoratif (haut droite, même motif que le bas gauche, pivoté) */}
      <svg className="absolute -top-24 -right-20 w-[340px] h-[340px] text-white/[0.06] rotate-180" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
        <path d="M100 20c-30 30-30 90 0 160 30-70 30-130 0-160Z" /><path d="M40 80c40 10 80 50 100 110M160 80c-40 10-80 50-100 110" />
      </svg>
      {/* Feuillage décoratif (bas gauche) */}
      <svg className="absolute -bottom-28 -left-20 w-[360px] h-[360px] text-white/[0.05]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
        <path d="M100 20c-30 30-30 90 0 160 30-70 30-130 0-160Z" /><path d="M40 80c40 10 80 50 100 110M160 80c-40 10-80 50-100 110" />
      </svg>

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 py-24 md:py-32 text-center">
        <FadeIn>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#F5EFE0] bg-white/12 border border-white/15 px-4 py-2 rounded-full mb-7">
            {eyebrow}
          </span>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h2 className="font-display font-normal text-[#F5EFE0] leading-[1.08] mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            {title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="text-[#F5EFE0]/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">{text}</p>
        </FadeIn>
        <FadeIn delay={0.18}>
          <WhatsAppBtn message={msg} label={label} variant="cream" size="lg" />
        </FadeIn>
      </div>
    </section>
  );
}
