'use client';

import { useState } from 'react';
import { ImagePicker } from './ImagePicker';
import type { GalleryRubric } from '@/lib/content';

function autoAlt(label: string): string {
  return `${label} à Farm Eden, ferme avec piscine privée près de Rabat`;
}
function uid(): string {
  return 'n' + Date.now().toString(36) + Math.round(Math.random() * 1e6).toString(36);
}

export function PhotosManager({ initial }: { initial: GalleryRubric[] }) {
  const [rubrics, setRubrics] = useState<GalleryRubric[]>(initial);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');
  const [dirty, setDirty] = useState(false);

  function mutate(ri: number, fn: (r: GalleryRubric) => GalleryRubric) {
    setRubrics((rs) => rs.map((r, i) => (i === ri ? fn(r) : r)));
    setDirty(true); setMsg('');
  }
  const setPhoto = (ri: number, pi: number, patch: Partial<GalleryRubric['photos'][number]>) =>
    mutate(ri, (r) => ({ ...r, photos: r.photos.map((p, i) => (i === pi ? { ...p, ...patch } : p)) }));
  const removePhoto = (ri: number, pi: number) =>
    mutate(ri, (r) => ({ ...r, photos: r.photos.filter((_, i) => i !== pi) }));
  const movePhoto = (ri: number, pi: number, dir: -1 | 1) =>
    mutate(ri, (r) => {
      const next = [...r.photos];
      const j = pi + dir;
      if (j < 0 || j >= next.length) return r;
      [next[pi], next[j]] = [next[j], next[pi]];
      return { ...r, photos: next };
    });
  const addPhoto = (ri: number, url: string) =>
    mutate(ri, (r) => ({ ...r, photos: [...r.photos, { id: uid(), src: url, alt: autoAlt(r.label) }] }));

  async function save() {
    setSaving(true); setMsg('');
    try {
      const res = await fetch('/api/admin/gallery', {
        method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(rubrics),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || 'Erreur');
      setMsg('Enregistré. Le site se met à jour.'); setDirty(false);
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Erreur');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="pb-24">
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Photos</h1>
          <p className="text-neutral-500 text-sm">Tout est recadré en 3:2 automatiquement. Cliquez une photo pour la remplacer ou la recadrer.</p>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {rubrics.map((r, ri) => (
          <section key={r.id}>
            <input
              value={r.label}
              onChange={(e) => mutate(ri, (x) => ({ ...x, label: e.target.value }))}
              className="text-xl font-semibold bg-transparent border-b border-transparent hover:border-neutral-200 focus:border-[#52632E] focus:outline-none mb-2 w-full max-w-md"
            />
            <textarea
              value={r.desc}
              onChange={(e) => mutate(ri, (x) => ({ ...x, desc: e.target.value }))}
              rows={2}
              className="block w-full max-w-2xl text-sm text-neutral-500 bg-neutral-50 rounded-lg border border-neutral-200 px-3 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-[#52632E]/30"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {r.photos.map((p, pi) => (
                <div key={p.id} className="rounded-xl border border-neutral-200 bg-white p-2.5">
                  <ImagePicker value={p.src} aspect={2 / 3} label={p.alt} onChange={(url) => setPhoto(ri, pi, { src: url })} />
                  <input
                    value={p.alt}
                    onChange={(e) => setPhoto(ri, pi, { alt: e.target.value })}
                    placeholder="Texte alternatif (SEO)"
                    className="mt-2 w-full text-xs rounded-md border border-neutral-200 px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#52632E]/40"
                  />
                  <div className="flex items-center justify-between mt-1.5">
                    <div className="flex gap-1">
                      <button onClick={() => movePhoto(ri, pi, -1)} className="text-neutral-400 hover:text-neutral-700 text-xs px-1" aria-label="Déplacer à gauche">←</button>
                      <button onClick={() => movePhoto(ri, pi, 1)} className="text-neutral-400 hover:text-neutral-700 text-xs px-1" aria-label="Déplacer à droite">→</button>
                    </div>
                    <button onClick={() => removePhoto(ri, pi)} className="text-xs text-red-500 hover:text-red-700">Supprimer</button>
                  </div>
                </div>
              ))}
              <div className="rounded-xl border border-dashed border-neutral-300 bg-white p-2.5">
                <ImagePicker aspect={2 / 3} label="Nouvelle photo" onChange={(url) => addPhoto(ri, url)} />
                <p className="mt-2 text-xs text-neutral-400 text-center">Ajouter une photo</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Barre d'enregistrement */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-neutral-200 z-40">
        <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
          <span className="text-sm text-neutral-500">{msg || (dirty ? 'Modifications non enregistrées' : 'À jour')}</span>
          <button onClick={save} disabled={saving || !dirty} className="bg-[#52632E] text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-[#3f4d23] disabled:opacity-50">
            {saving ? 'Enregistrement…' : 'Enregistrer'}
          </button>
        </div>
      </div>
    </div>
  );
}
