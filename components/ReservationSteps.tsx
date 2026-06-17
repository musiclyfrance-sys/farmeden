'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';

export interface Step {
  n: string;
  title: string;
  desc: string;
}

/**
 * Étapes de réservation : les pastilles s'allument une à une au scroll
 * et le trait reliant chaque étape se remplit. Le trait ne dépasse jamais.
 */
export function ReservationSteps({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 78%', 'end 68%'],
  });
  const [active, setActive] = useState(reduced ? steps.length : 0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (reduced) return;
    // bias plus généreux pour que la 3e étape s'allume un peu plus tôt
    setActive(Math.min(steps.length, Math.floor(v * steps.length + 0.55)));
  });

  return (
    <ol ref={ref} className="flex flex-col">
      {steps.map((s, i) => {
        const on = active > i;
        const nextOn = active > i + 1;
        const isLast = i === steps.length - 1;
        return (
          <li key={s.n} className={`relative flex gap-6 ${isLast ? '' : 'pb-10'}`}>
            {/* Connecteur entre cette pastille et la suivante */}
            {!isLast && (
              <span className="absolute left-[27px] top-14 w-[2px] -bottom-0 bg-[#52632E]/15" aria-hidden="true">
                <span
                  className="block w-full bg-[#52632E] origin-top transition-transform duration-500 ease-out"
                  style={{ height: '100%', transform: `scaleY(${nextOn ? 1 : 0})` }}
                />
              </span>
            )}
            <div
              className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center
                          font-display text-xl shrink-0 transition-all duration-500
                          ${on ? 'bg-[#52632E] text-white shadow-lg shadow-[#52632E]/25' : 'bg-[#EBF0E2] text-[#52632E]/45'}`}
            >
              {s.n}
            </div>
            <div className="pt-2.5">
              <h3 className={`font-semibold text-lg mb-1 transition-colors duration-500 ${on ? 'text-[#231C14]' : 'text-[#231C14]/45'}`}>
                {s.title}
              </h3>
              <p className={`text-sm leading-relaxed transition-colors duration-500 ${on ? 'text-[#231C14]/60' : 'text-[#231C14]/35'}`}>
                {s.desc}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
