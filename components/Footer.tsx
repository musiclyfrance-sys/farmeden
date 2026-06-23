import Link from 'next/link';
import { MapPin, MessageCircle } from 'lucide-react';
import { NAV_LINKS, WA_MESSAGES, whatsappUrl } from '@/lib/content';
import { SocialLinks } from '@/components/SocialLinks';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#231C14] text-[#F5EFE0]" role="contentinfo">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1 md:pr-8">
          <img src="/images/logo-noir.svg" alt="Farm Eden" className="h-12 w-auto mb-4" />
          <p className="text-[#F5EFE0]/60 text-sm leading-relaxed max-w-xs">
            Une ferme avec piscine privée, rien que pour vous. Villa entière, verdure et cuisine
            marocaine, à 45 minutes de Rabat.
          </p>
        </div>

        {/* Navigation principale */}
        <nav aria-label="Pages du site">
          <p className="text-xs font-medium tracking-widest uppercase text-[#D4B78A] mb-5">Pages</p>
          <ul className="flex flex-col gap-3" role="list">
            <li>
              <Link href="/" className="text-[#F5EFE0]/60 hover:text-[#F5EFE0] text-sm transition-colors">
                Accueil
              </Link>
            </li>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[#F5EFE0]/60 hover:text-[#F5EFE0] text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* À découvrir */}
        <nav aria-label="À découvrir">
          <p className="text-xs font-medium tracking-widest uppercase text-[#D4B78A] mb-5">Découvrir</p>
          <ul className="flex flex-col gap-3" role="list">
            <li>
              <Link href="/journal" className="text-[#F5EFE0]/60 hover:text-[#F5EFE0] text-sm transition-colors">
                Journal
              </Link>
            </li>
            <li>
              <Link href="/privatiser-la-ferme" className="text-[#F5EFE0]/60 hover:text-[#F5EFE0] text-sm transition-colors">
                Privatiser la ferme
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-[#F5EFE0]/60 hover:text-[#F5EFE0] text-sm transition-colors">
                Questions fréquentes
              </Link>
            </li>
          </ul>
        </nav>

        {/* Infos pratiques */}
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-[#D4B78A] mb-5">Infos pratiques</p>
          <ul className="flex flex-col gap-4" role="list">
            <li className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 text-[#D4B78A] mt-0.5 shrink-0" aria-hidden="true" />
              <span className="text-[#F5EFE0]/60 text-sm leading-relaxed">
                Ain Johra, Tiflet<br />
                Rabat-Salé-Kénitra, Maroc
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <MessageCircle className="w-4 h-4 text-[#D4B78A] mt-0.5 shrink-0" aria-hidden="true" />
              <a href={whatsappUrl(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="text-[#F5EFE0]/60 hover:text-[#F5EFE0] text-sm transition-colors">
                Nous écrire sur WhatsApp
              </a>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5">
            <p className="text-[#F5EFE0]/30 text-xs">
              © {year} Farm Eden. Tous droits réservés.
            </p>
            <p className="text-[#F5EFE0]/30 text-xs">
              Site réalisé par{' '}
              <a href="https://yofield.com" target="_blank" rel="noopener" className="hover:text-[#F5EFE0]/60 transition-colors">
                Yofield
              </a>
            </p>
          </div>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="text-[#F5EFE0]/30 hover:text-[#F5EFE0]/60 text-xs transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-[#F5EFE0]/30 hover:text-[#F5EFE0]/60 text-xs transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
