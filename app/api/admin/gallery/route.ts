import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { saveGallery } from '@/lib/admin/store';
import type { GalleryRubric } from '@/lib/content';

export const runtime = 'nodejs';

export async function PUT(req: Request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: 'Stockage non configuré (Vercel Blob).' }, { status: 503 });
  }
  const data = (await req.json()) as GalleryRubric[];
  if (!Array.isArray(data)) return NextResponse.json({ error: 'Format invalide.' }, { status: 400 });
  await saveGallery(data);
  revalidatePath('/galerie');
  revalidatePath('/');
  return NextResponse.json({ ok: true });
}
