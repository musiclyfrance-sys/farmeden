'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface FaqItem {
  q: string;
  a: string;
}

/** Accordéon FAQ : une seule question ouverte à la fois. */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const reduced = useReducedMotion();

  return (
    <div className="flex flex-col divide-y divide-[#231C14]/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="py-1">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex justify-between items-center gap-4 py-5 text-left
                           font-medium text-[#231C14] text-base hover:text-[#52632E] transition-colors"
              >
                {item.q}
                <span
                  className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#52632E]' : 'text-[#231C14]/35'}`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-[#231C14]/60 text-sm leading-relaxed pr-8 pb-5">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
