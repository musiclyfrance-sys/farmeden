'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { WA_MESSAGES, whatsappUrl } from '@/lib/content';

/* ─── Glyphe WhatsApp ─────────────────────────────────────── */
function WhatsAppGlyph({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.04 4c-6.6 0-11.96 5.36-11.96 11.96 0 2.11.55 4.17 1.6 5.99L4 28l6.2-1.63a11.93 11.93 0 0 0 5.83 1.49h.01c6.6 0 11.96-5.36 11.96-11.96 0-3.2-1.24-6.2-3.5-8.46A11.86 11.86 0 0 0 16.04 4Zm0 21.84h-.01c-1.78 0-3.53-.48-5.05-1.38l-.36-.21-3.68.96.98-3.59-.24-.37a9.9 9.9 0 0 1-1.52-5.29c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.15 1.04 7.03 2.92a9.88 9.88 0 0 1 2.91 7.03c0 5.48-4.46 9.94-9.94 9.94Zm5.45-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

/* ─── Bulle flottante (apparaît après le hero) ────────────── */
export function WhatsAppFloat() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // apparaît une fois le hero et la bande photo dépassés
      setVisible(window.scrollY > window.innerHeight * 1.05);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappUrl(WA_MESSAGES.reservation)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Réserver sur WhatsApp"
          className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 group"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduced ? {} : { scale: 1.06 }}
          whileTap={reduced ? {} : { scale: 0.95 }}
        >
          {/* Halos pulsés */}
          {!reduced && (
            <>
              <span className="wa-ping absolute inset-0 rounded-full bg-[#25D366]" aria-hidden="true" />
              <span
                className="wa-ping absolute inset-0 rounded-full bg-[#25D366]"
                style={{ animationDelay: '1.3s' }}
                aria-hidden="true"
              />
            </>
          )}
          {/* Bouton */}
          <span
            className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16
                       rounded-full bg-[#25D366] text-white shadow-lg shadow-[#1DAA53]/40
                       group-hover:bg-[#1DAA53] transition-colors duration-200"
          >
            <WhatsAppGlyph className="w-7 h-7 md:w-8 md:h-8" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

/* ─── Bouton inline réutilisable ─────────────────────────── */
export type WhatsAppBtnVariant =
  | 'primary'   // brun foncé
  | 'olive'     // vert olive (accent principal)
  | 'terra'     // terracotta (accent secondaire, usage rare)
  | 'cream'     // crème (sur fond sombre)
  | 'outline'   // contour brun
  | 'ghost';    // texte souligné

interface WhatsAppBtnProps {
  message?: string;
  label?: string;
  variant?: WhatsAppBtnVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function WhatsAppBtn({
  message = WA_MESSAGES.general,
  label = 'Réserver sur WhatsApp',
  variant = 'primary',
  size = 'md',
  className = '',
}: WhatsAppBtnProps) {
  const reduced = useReducedMotion();

  const base =
    'inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-colors duration-200 cursor-pointer';

  const sizes = {
    sm: 'text-sm px-5 py-2.5 min-h-[40px]',
    md: 'text-sm px-6 py-3 min-h-[44px]',
    lg: 'text-base px-8 py-4 min-h-[52px]',
  };

  const variants: Record<WhatsAppBtnVariant, string> = {
    primary: 'bg-[#231C14] text-[#F5EFE0] hover:bg-[#3a2e22]',
    olive:   'bg-[#52632E] text-white hover:bg-[#3f4d23]',
    terra:   'bg-[#A84A26] text-white hover:bg-[#8f3d1f]',
    cream:   'bg-[#F5EFE0] text-[#231C14] hover:bg-white',
    outline: 'border border-[#231C14]/25 text-[#231C14] hover:border-[#231C14] hover:bg-[#231C14] hover:text-[#F5EFE0]',
    ghost:   'text-[#231C14] underline underline-offset-4 hover:text-[#52632E]',
  };

  return (
    <motion.a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      whileTap={reduced ? {} : { scale: 0.97 }}
    >
      <WhatsAppGlyph className="w-4 h-4 shrink-0" />
      {label}
    </motion.a>
  );
}
