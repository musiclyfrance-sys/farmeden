'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';

export interface Step {
  n: string;
  title: string;
  desc: string;
}

/**
 * Étapes de réservation : un trait vertical se remplit au scroll
 * et chaque étape s'allume à mesure qu'on descend.
 */
export function ReservationSteps({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 55%'],
  });
  const [active, setActive] = useState(reduced ? steps.length : 0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (reduced) return;
    setActive(Math.min(steps.length, Math.floor(v * steps.length + 0.15)));
  });

  return (
    <div ref={ref} className="relative max-w-2xl">
      {/* Rail */}
      <div className="absolute left-[27px] top-7 bottom-7 w-[2px] bg-[#52632E]/15" aria-hidden="true" />
      <motion.div
        className="absolute left-[27px] top-7 w-[2px] bg-[#52632E] origin-top"
        style={{ height: 'calc(100% - 3.5rem)', scaleY: reduced ? 1 : scrollYProgress }}
        aria-hidden="true"
      />

      <ol className="flex flex-col gap-9">
        {steps.map((s, i) => {
          const on = active > i;
          return (
            <li key={s.n} className="flex gap-6 items-start">
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
                <p className={`text-sm leading-relaxed max-w-md transition-colors duration-500 ${on ? 'text-[#231C14]/60' : 'text-[#231C14]/35'}`}>
                  {s.desc}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
