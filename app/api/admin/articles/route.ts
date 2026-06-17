import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { savePosts } from '@/lib/admin/store';
import type { Post } from '@/lib/content';

export const runtime = 'nodejs';

export async function PUT(req: Request) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: 'Stockage non configuré (Vercel Blob).' }, { status: 503 });
  }
  const data = (await req.json()) as Post[];
  if (!Array.isArray(data)) return NextResponse.json({ error: 'Format invalide.' }, { status: 400 });
  await savePosts(data);
  revalidatePath('/journal');
  data.forEach((p) => p.slug && revalidatePath(`/journal/${p.slug}`));
  return NextResponse.json({ ok: true });
}
