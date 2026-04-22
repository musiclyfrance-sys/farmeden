'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE, WA_MESSAGES, whatsappUrl } from '@/lib/content';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300
          ${scrolled
            ? 'bg-[#F5EFE0]/95 backdrop-blur-sm shadow-sm shadow-black/5'
            : 'bg-transparent'
          }`}
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 md:h-18 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="focus-visible:outline-[#A84A26] shrink-0"
            aria-label="Farm Eden — accueil"
          >
            <img
              src="/images/logo-beige.svg"
              alt="Farm Eden"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-150 relative
                    ${active ? 'text-[#231C14]' : 'text-[#231C14]/60 hover:text-[#231C14]'}`}
                >
                  {link.label}
                  {active && (
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#A84A26] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href={whatsappUrl(WA_MESSAGES.reservation)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#231C14] text-[#F5EFE0]
                       text-sm font-medium px-5 py-2.5 rounded-full
                       hover:bg-[#3a2e22] transition-colors duration-200 min-h-[40px]"
          >
            Réserver
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg
                       text-[#231C14] hover:bg-[#231C14]/6 transition-colors"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed top-16 inset-x-0 z-30 bg-[#F5EFE0] border-b border-[#231C14]/8
                       px-5 py-6 flex flex-col gap-5 md:hidden shadow-lg shadow-black/5"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors
                  ${pathname === link.href ? 'text-[#231C14]' : 'text-[#231C14]/60 hover:text-[#231C14]'}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappUrl(WA_MESSAGES.reservation)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center bg-[#231C14] text-[#F5EFE0]
                         font-medium py-3 rounded-full min-h-[44px] text-base"
            >
              Réserver sur WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
