import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { SITE, NAV_LINKS } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#231C14] text-[#F5EFE0]" role="contentinfo">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="md:pr-8">
          <img src="/images/logo-noir.svg" alt="Farm Eden" className="h-10 w-auto mb-4" />
          <p className="text-[#F5EFE0]/60 text-sm leading-relaxed max-w-xs">
            Une ferme avec piscine privée, rien que pour vous. Villa entière, verdure et cuisine
            marocaine, à 45 minutes de Rabat.
          </p>
        </div>

        {/* Navigation */}
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
            <li>
              <Link href="/journal" className="text-[#F5EFE0]/60 hover:text-[#F5EFE0] text-sm transition-colors">
                Journal
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
            <li className="flex gap-3 items-center">
              <Phone className="w-4 h-4 text-[#D4B78A] shrink-0" aria-hidden="true" />
              <a href={`tel:${SITE.phone}`} className="text-[#F5EFE0]/60 hover:text-[#F5EFE0] text-sm transition-colors">
                {SITE.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#F5EFE0]/30 text-xs">
            © {year} Farm Eden. Tous droits réservés.
          </p>
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
