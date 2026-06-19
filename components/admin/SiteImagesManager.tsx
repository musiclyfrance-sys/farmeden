'use client';

import { useMemo, useState } from 'react';
import { ImagePicker } from './ImagePicker';
import type { ImageSlot, SiteImageOverrides } from '@/lib/siteImages';

type Vals = Record<string, { src: string; alt: string }>;

export function SiteImagesManager({ groups, initial }: { groups: { group: string; slots: ImageSlot[] }[]; initial: SiteImageOverrides }) {
  const defaults = useMemo(() => {
    const m: Record<string, ImageSlot> = {};
    for (const g of groups) for (const s of g.slots) m[s.id] = s;
    return m;
  }, [groups]);

  const [vals, setVals] = useState<Vals>(() => {
    const m: Vals = {};
    for (const g of groups) for (const s of g.slots) {
      const o = initial[s.id];
      m[s.id] = { src: o?.src || s.defaultSrc, alt: o?.alt || s.defaultAlt };
    }
    return m;
  });
  const [dirty, setDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  function set(id: string, patch: Partial<{ src: string; alt: string }>) {
    setVals((v) => ({ ...v, [id]: { ...v[id], ...patch } }));
    setDirty(true); setMsg('');
  }
  function reset(id: string) {
    const s = defaults[id];
    set(id, { src: s.defaultSrc, alt: s.defaultAlt });
  }

  async function save() {
    setSaving(true); setMsg('');
    const payload: SiteImageOverrides = {};
    for (const g of groups) for (const s of g.slots) {
      const v = vals[s.id];
      if (v.src !== s.defaultSrc || v.alt !== s.defaultAlt) payload[s.id] = v;
    }
    try {
      const res = await fetch('/api/admin/site-images', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
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
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-1">Médias du site</h1>
        <p className="text-neutral-500 text-sm">Toutes les photos du site, page par page. Cliquez une image pour la remplacer ou la recadrer. Le format est ajusté automatiquement.</p>
      </div>

      <div className="flex flex-col gap-4">
        {groups.map((g, gi) => (
          <details key={g.group} open={gi < 2} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden group">
            <summary className="cursor-pointer select-none px-6 py-4 font-semibold text-[#231C14] flex items-center justify-between">
              <span>{g.group}</span>
              <span className="text-xs font-normal text-neutral-400">{g.slots.length} photo{g.slots.length > 1 ? 's' : ''}</span>
            </summary>
            <div className="px-6 pb-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {g.slots.map((s) => (
                <div key={s.id} className="rounded-xl border border-neutral-200 bg-neutral-50 p-2.5">
                  <p className="text-xs font-medium text-neutral-600 mb-1.5 truncate" title={s.label}>{s.label}</p>
                  <ImagePicker value={vals[s.id].src} aspect={s.aspect} label={vals[s.id].alt} onChange={(url) => set(s.id, { src: url })} />
                  <input
                    value={vals[s.id].alt}
                    onChange={(e) => set(s.id, { alt: e.target.value })}
                    placeholder="Texte alternatif (SEO)"
                    className="mt-2 w-full text-xs rounded-md border border-neutral-200 px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#52632E]/40"
                  />
                  <button onClick={() => reset(s.id)} className="mt-1.5 text-[11px] text-neutral-400 hover:text-neutral-700">Réinitialiser</button>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>

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
