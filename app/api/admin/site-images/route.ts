import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { saveSiteImages } from '@/lib/admin/store';
import type { SiteImageOverrides } from '@/lib/siteImages';

export const runtime = 'nodejs';

export async function PUT(req: Request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: 'Stockage non configuré (Vercel Blob).' }, { status: 503 });
  }
  const data = (await req.json()) as SiteImageOverrides;
  if (!data || typeof data !== 'object') return NextResponse.json({ error: 'Format invalide.' }, { status: 400 });
  await saveSiteImages(data);
  revalidatePath('/');
  revalidatePath('/la-ferme');
  revalidatePath('/experiences', 'layout');
  return NextResponse.json({ ok: true });
}
