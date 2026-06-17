'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

const NAV = [
  { href: '/admin', label: 'Tableau de bord' },
  { href: '/admin/photos', label: 'Photos' },
  { href: '/admin/journal', label: 'Journal' },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.replace('/admin/login');
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-beige.svg" alt="Farm Eden" className="h-8 w-auto" />
            <nav className="hidden sm:flex items-center gap-1">
              {NAV.map((n) => {
                const active = n.href === '/admin' ? pathname === '/admin' : pathname?.startsWith(n.href);
                return (
                  <Link key={n.href} href={n.href} className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-[#EBF0E2] text-[#52632E]' : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'}`}>
                    {n.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" target="_blank" className="text-sm text-neutral-500 hover:text-neutral-900">Voir le site</Link>
            <button onClick={logout} className="text-sm font-medium text-neutral-600 hover:text-red-600">Déconnexion</button>
          </div>
        </div>
        <nav className="sm:hidden flex items-center gap-1 px-5 pb-3 -mt-1">
          {NAV.map((n) => {
            const active = n.href === '/admin' ? pathname === '/admin' : pathname?.startsWith(n.href);
            return (
              <Link key={n.href} href={n.href} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${active ? 'bg-[#EBF0E2] text-[#52632E]' : 'text-neutral-500'}`}>
                {n.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-8">{children}</main>
    </div>
  );
}
