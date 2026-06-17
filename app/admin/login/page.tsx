'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setErr('');
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const j = await res.json().catch(() => ({}));
    if (res.ok) {
      router.replace('/admin');
      router.refresh();
    } else {
      setErr(j.error || 'Connexion impossible.');
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F5EFE0] flex items-center justify-center p-5">
      <form onSubmit={submit} className="bg-white rounded-2xl shadow-xl shadow-black/5 w-full max-w-sm p-8">
        <div className="flex items-center gap-2 mb-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-beige.svg" alt="Farm Eden" className="h-9 w-auto" />
        </div>
        <p className="text-neutral-500 text-sm mb-7">Espace d&apos;administration</p>

        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
        <input
          type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="username"
          className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#52632E]/40"
        />
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Mot de passe</label>
        <input
          type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password"
          className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm mb-5 focus:outline-none focus:ring-2 focus:ring-[#52632E]/40"
        />
        {err && <p className="text-sm text-red-600 mb-4">{err}</p>}
        <button type="submit" disabled={busy} className="w-full bg-[#52632E] text-white rounded-lg py-2.5 text-sm font-medium hover:bg-[#3f4d23] disabled:opacity-60 transition-colors">
          {busy ? 'Connexion…' : 'Se connecter'}
        </button>
      </form>
    </div>
  );
}
