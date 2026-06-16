import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import { WhatsAppBtn } from '@/components/WhatsAppFloat';
import { WA_MESSAGES } from '@/lib/content';

interface CTASectionProps {
  title: string;
  text: string;
  label?: string;
  message?: string;
  /** clé WA_MESSAGES, prioritaire sur message */
  wa?: keyof typeof WA_MESSAGES;
  image?: string;
  imageAlt?: string;
  tone?: 'olive' | 'brown';
}

/**
 * Bloc d'appel à l'action de fin de page, harmonisé sur tout le site.
 * Fond olive ou brun, titre en serif, photo optionnelle.
 */
export function CTASection({
  title,
  text,
  label = 'Réserver sur WhatsApp',
  message,
  wa,
  image,
  imageAlt = 'Farm Eden',
  tone = 'olive',
}: CTASectionProps) {
  const bg = tone === 'brown' ? 'bg-[#231C14]' : 'bg-[#52632E]';
  const msg = wa ? WA_MESSAGES[wa] : (message ?? WA_MESSAGES.reservation);

  return (
    <section className={`${bg} grain relative overflow-hidden`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <FadeIn>
              <h2
                className="font-display font-normal text-[#F5EFE0] leading-[1.1] mb-5"
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
              >
                {title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="text-[#F5EFE0]/75 text-lg leading-relaxed mb-8 max-w-md">{text}</p>
            </FadeIn>
            <FadeIn delay={0.14}>
              <WhatsAppBtn message={msg} label={label} variant="cream" size="lg" />
            </FadeIn>
          </div>

          {image && (
            <FadeIn delay={0.1} direction="left">
              <div
                className="relative w-full rounded-[1.75rem] overflow-hidden shadow-2xl shadow-black/25"
                style={{ aspectRatio: '4 / 3' }}
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                  quality={80}
                />
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
