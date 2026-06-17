import Link from 'next/link';
import { getGallery, getPosts, adminConfigured } from '@/lib/admin/store';

export const dynamic = 'force-dynamic';

export default async function AdminHome() {
  const configured = adminConfigured();
  const [gallery, posts] = await Promise.all([getGallery(), getPosts()]);
  const photoCount = gallery.reduce((n, r) => n + r.photos.length, 0);
  const publishedCount = posts.filter((p) => p.published !== false).length;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-1">Tableau de bord</h1>
      <p className="text-neutral-500 text-sm mb-8">Gérez les photos et les articles du site Farm Eden.</p>

      {!configured && (
        <div className="mb-8 rounded-xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
          <p className="font-semibold mb-1">Stockage à activer</p>
          <p>Le stockage Vercel Blob n&apos;est pas encore configuré. Vous pouvez parcourir l&apos;admin, mais l&apos;enregistrement des modifications sera disponible une fois le stockage activé.</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Link href="/admin/photos" className="block rounded-2xl border border-neutral-200 bg-white p-7 hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-[#52632E] mb-2">Photos</p>
          <p className="text-3xl font-semibold mb-1">{photoCount}</p>
          <p className="text-neutral-500 text-sm">photos réparties dans {gallery.length} rubriques. Ajoutez, recadrez en 3:2 et réorganisez.</p>
        </Link>
        <Link href="/admin/journal" className="block rounded-2xl border border-neutral-200 bg-white p-7 hover:shadow-md transition-shadow">
          <p className="text-sm font-medium text-[#52632E] mb-2">Journal</p>
          <p className="text-3xl font-semibold mb-1">{publishedCount}</p>
          <p className="text-neutral-500 text-sm">articles publiés. Rédigez avec le coach SEO et publiez en un clic.</p>
        </Link>
      </div>
    </div>
  );
}
