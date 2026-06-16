/* Pictogrammes SVG réutilisables (compatibles composants serveur). */
import type { ReactElement } from 'react';

const PATHS: Record<string, ReactElement> = {
  pool: (
    <>
      <path d="M3 18c2.5-3.5 4.5-3.5 7 0s4.5 3.5 7 0 4.5-3.5 7 0" />
      <path d="M3 24c2.5-3.5 4.5-3.5 7 0s4.5 3.5 7 0 4.5-3.5 7 0" />
      <path d="M16 5v9" /><path d="M12 8h8" />
      <circle cx="16" cy="4" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  villa: (
    <>
      <path d="M3 14L16 4l13 10" /><path d="M7 14v13h18V14" />
      <rect x="13" y="20" width="6" height="7" rx="1.5" />
      <rect x="8" y="16" width="5" height="4" rx="1" /><rect x="19" y="16" width="5" height="4" rx="1" />
    </>
  ),
  cuisine: (
    <>
      <path d="M9 3v9c0 2.5-2 4-4.5 4S0 14.5 0 12V3" /><path d="M4.5 16v13" /><path d="M0 6h9" />
      <path d="M23 3c0 0 6 3.5 6 11v2H17v-2C17 6.5 23 3 23 3z" /><path d="M23 16v13" />
    </>
  ),
  sport: (
    <>
      <circle cx="22" cy="6" r="2.5" /><path d="M15 12l7-4 5 6-5 5-2 10" />
      <path d="M15 12l-6 9 4 4" /><path d="M9 28l1-4-4-4" />
    </>
  ),
  nature: (
    <>
      <path d="M16 28V17" /><path d="M7 11c0-5 4-9 9-9 4 0 8 4 8 9s-4 6-4 6h-9s-4-2-4-6z" />
      <path d="M16 17c-1-3-5-7-4-11" /><path d="M16 17c1-3 4-5 6-9" />
    </>
  ),
  private: (
    <>
      <rect x="7" y="14" width="18" height="14" rx="2.5" /><path d="M11 14v-4a5 5 0 0 1 10 0v4" />
      <circle cx="16" cy="22" r="2" fill="currentColor" stroke="none" /><path d="M16 22v3" />
    </>
  ),
};

export function Picto({ name, className = 'w-7 h-7' }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {PATHS[name] ?? PATHS.nature}
    </svg>
  );
}
