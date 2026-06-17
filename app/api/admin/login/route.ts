import { NextResponse } from 'next/server';
import { createToken, ADMIN_COOKIE } from '@/lib/admin/auth';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  let body: { email?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Requête invalide' }, { status: 400 });
  }

  const email = (body.email ?? '').trim();
  const password = body.password ?? '';
  const secret = process.env.ADMIN_SESSION_SECRET ?? '';
  const adminEmail = (process.env.ADMIN_EMAIL ?? '').trim();
  const adminPassword = process.env.ADMIN_PASSWORD ?? '';

  if (!secret || !adminEmail || !adminPassword) {
    return NextResponse.json({ error: "L'admin n'est pas encore configuré (variables d'environnement manquantes)." }, { status: 503 });
  }

  if (email.toLowerCase() !== adminEmail.toLowerCase() || password !== adminPassword) {
    return NextResponse.json({ error: 'Email ou mot de passe incorrect.' }, { status: 401 });
  }

  const token = await createToken(secret, email);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 14,
  });
  return res;
}
