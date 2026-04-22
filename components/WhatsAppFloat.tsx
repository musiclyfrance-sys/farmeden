'use client';

import { MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { WA_MESSAGES, whatsappUrl } from '@/lib/content';

/* ─── Bulle flottante fixe ───────────────────────────────── */
export function WhatsAppFloat() {
  const reduced = useReducedMotion();

  return (
    <motion.a
      href={whatsappUrl(WA_MESSAGES.reservation)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white
                 pl-4 pr-5 py-3 rounded-full shadow-lg shadow-black/15
                 font-medium text-sm hover:bg-[#1DAA53] transition-colors duration-200"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileTap={reduced ? {} : { scale: 0.95 }}
    >
      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">Réserver</span>
    </motion.a>
  );
}

/* ─── Bouton inline réutilisable ─────────────────────────── */
export type WhatsAppBtnVariant =
  | 'primary'   // brun foncé (#231C14)
  | 'terra'     // terracotta (#A84A26)
  | 'olive'     // vert olive (#52632E)
  | 'whatsapp'  // vert WhatsApp (#25D366)
  | 'cream'     // crème (pour sections sombres)
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
    'inline-flex items-center gap-2.5 rounded-full font-medium transition-all duration-200 cursor-pointer';

  const sizes = {
    sm: 'text-sm px-5 py-2.5 min-h-[40px]',
    md: 'text-sm px-6 py-3 min-h-[44px]',
    lg: 'text-base px-8 py-4 min-h-[52px]',
  };

  const variants: Record<WhatsAppBtnVariant, string> = {
    primary:  'bg-[#231C14] text-[#F5EFE0] hover:bg-[#3a2e22]',
    terra:    'bg-[#A84A26] text-white hover:bg-[#8f3d1f]',
    olive:    'bg-[#52632E] text-white hover:bg-[#3f4d23]',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#1DAA53]',
    cream:    'bg-[#F5EFE0] text-[#231C14] hover:bg-white',
    outline:  'border-2 border-[#231C14] text-[#231C14] hover:bg-[#231C14] hover:text-[#F5EFE0]',
    ghost:    'text-[#231C14] underline underline-offset-4 hover:text-[#A84A26]',
  };

  return (
    <motion.a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      whileTap={reduced ? {} : { scale: 0.97 }}
    >
      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
      {label}
    </motion.a>
  );
}
