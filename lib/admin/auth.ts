/* Sessions admin signées (compatibles edge middleware + node) */

const COOKIE = 'fe_admin';
const TTL_MS = 1000 * 60 * 60 * 24 * 14; // 14 jours

const enc = new TextEncoder();

function b64url(bytes: Uint8Array): string {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function utf8b64url(str: string): string {
  return b64url(enc.encode(str));
}

async function sign(secret: string, data: string): Promise<string> {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return b64url(new Uint8Array(sig));
}

export async function createToken(secret: string, email: string): Promise<string> {
  const payload = utf8b64url(JSON.stringify({ e: email, x: Date.now() + TTL_MS }));
  const sig = await sign(secret, payload);
  return `${payload}.${sig}`;
}

export async function verifyToken(secret: string, token: string | undefined): Promise<boolean> {
  if (!secret || !token) return false;
  const [payload, sig] = token.split('.');
  if (!payload || !sig) return false;
  const expected = await sign(secret, payload);
  if (expected.length !== sig.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ sig.charCodeAt(i);
  if (diff !== 0) return false;
  try {
    const json = JSON.parse(decodeURIComponent(escape(atob(payload.replace(/-/g, '+').replace(/_/g, '/')))));
    return typeof json.x === 'number' && json.x > Date.now();
  } catch {
    return false;
  }
}

export const ADMIN_COOKIE = COOKIE;
