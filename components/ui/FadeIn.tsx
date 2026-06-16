'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** distance de déplacement en px */
  distance?: number;
  /** ajoute un léger flou au départ pour un rendu plus doux */
  blur?: boolean;
  className?: string;
}

const OFFSETS = {
  up:    (d: number) => ({ y: d,  x: 0 }),
  down:  (d: number) => ({ y: -d, x: 0 }),
  left:  (d: number) => ({ x: d,  y: 0 }),
  right: (d: number) => ({ x: -d, y: 0 }),
  none:  () => ({ x: 0, y: 0 }),
};

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  distance = 28,
  blur = true,
  className,
}: FadeInProps) {
  const reduced = useReducedMotion();
  const offset = reduced ? { x: 0, y: 0 } : OFFSETS[direction](distance);

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...offset,
        filter: blur && !reduced ? 'blur(6px)' : 'blur(0px)',
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Alias sémantique */
export const Reveal = FadeIn;
