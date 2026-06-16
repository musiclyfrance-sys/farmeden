'use client';

import Image from 'next/image';

export interface MarqueePhoto {
  src: string;
  alt: string;
}

interface InfiniteMarqueeProps {
  photos: MarqueePhoto[];
  /** durée d'un cycle complet (s) */
  duration?: number;
  direction?: 'left' | 'right';
}

/**
 * Bande photo qui défile à l'infini.
 * Le contenu est dupliqué pour un bouclage continu, la translation
 * de -50% ramène exactement au point de départ.
 */
export function InfiniteMarquee({
  photos,
  duration = 70,
  direction = 'left',
}: InfiniteMarqueeProps) {
  const loop = [...photos, ...photos];

  return (
    <div className="marquee-group relative w-full overflow-hidden">
      {/* Dégradés latéraux pour fondre les bords */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-[#F5EFE0] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-[#F5EFE0] to-transparent" />

      <div
        className="flex w-max gap-4 animate-marquee"
        style={{
          '--marquee-duration': `${duration}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        } as React.CSSProperties}
      >
        {loop.map((photo, i) => (
          <figure
            key={i}
            className="relative shrink-0 w-56 sm:w-64 md:w-72 rounded-2xl overflow-hidden bg-[#EDE5D0]"
            style={{ aspectRatio: '3 / 4' }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="288px"
              className="object-cover"
              quality={70}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
