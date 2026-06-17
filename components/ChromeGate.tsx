'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

/** Masque la navbar, le footer et le bouton WhatsApp du site sur les pages /admin. */
export function ChromeGate({ nav, footer, children }: { nav: ReactNode; footer: ReactNode; children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) return <>{children}</>;

  return (
    <>
      {nav}
      <main>{children}</main>
      {footer}
      <WhatsAppFloat />
    </>
  );
}
