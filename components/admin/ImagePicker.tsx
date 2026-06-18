'use client';

import { useCallback, useRef, useState } from 'react';
import Cropper, { type Area } from 'react-easy-crop';

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function makeBlob(src: string, area: Area, aspect: number): Promise<Blob> {
  const img = await loadImage(src);
  const longSide = 1600;
  const outW = aspect >= 1 ? longSide : Math.round(longSide * aspect);
  const outH = aspect >= 1 ? Math.round(longSide / aspect) : longSide;
  const canvas = document.createElement('canvas');
  canvas.width = outW;
  canvas.height = outH;
  const ctx = canvas.getContext('2d')!;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, area.x, area.y, area.width, area.height, 0, 0, outW, outH);
  return new Promise((resolve) => canvas.toBlob((b) => resolve(b!), 'image/jpeg', 0.82));
}

interface ImagePickerProps {
  value?: string;
  aspect?: number; // largeur / hauteur. 2/3 portrait par défaut.
  label?: string;
  onChange: (url: string) => void;
}

export function ImagePicker({ value, aspect = 2 / 3, label = 'Photo', onChange }: ImagePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [area, setArea] = useState<Area | null>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  const onComplete = useCallback((_: Area, pixels: Area) => setArea(pixels), []);

  function pick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => { setSrc(reader.result as string); setZoom(1); setCrop({ x: 0, y: 0 }); };
    reader.readAsDataURL(f);
    e.target.value = '';
  }

  async function confirm() {
    if (!src || !area) return;
    setBusy(true); setErr('');
    try {
      const blob = await makeBlob(src, area, aspect);
      const fd = new FormData();
      fd.append('file', blob, 'photo.jpg');
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Échec de l\'envoi');
      onChange(json.url);
      setSrc(null);
    } catch (e) {
      setErr(e instanceof Error ? e.message : 'Erreur');
    } finally {
      setBusy(false);
    }
  }

  function recrop() {
    if (value) { setSrc(value); setZoom(1); setCrop({ x: 0, y: 0 }); }
  }

  return (
    <div>
      <div className="relative rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200" style={{ aspectRatio: String(aspect) }}>
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt={label} className="w-full h-full object-cover" />
        ) : (
          <button type="button" onClick={() => inputRef.current?.click()} className="absolute inset-0 flex flex-col items-center justify-center text-neutral-400 hover:text-[#52632E] hover:bg-[#EBF0E2]/40 transition-colors gap-1">
            <span className="text-3xl leading-none">+</span>
            <span className="text-sm font-medium">Ajouter une photo</span>
          </button>
        )}
        {value && (
          <div className="absolute bottom-0 inset-x-0 flex divide-x divide-white/20">
            <button type="button" onClick={() => inputRef.current?.click()} className="flex-1 flex items-center justify-center gap-1.5 bg-black/55 hover:bg-black/75 text-white text-xs font-medium py-2.5 transition-colors">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 16l5-5 4 4 3-3 4 4M4 6h16" /></svg>
              Remplacer
            </button>
            <button type="button" onClick={recrop} className="flex-1 flex items-center justify-center gap-1.5 bg-black/55 hover:bg-black/75 text-white text-xs font-medium py-2.5 transition-colors">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2v14a2 2 0 0 0 2 2h14M18 22V8a2 2 0 0 0-2-2H2" /></svg>
              Recadrer
            </button>
          </div>
        )}
      </div>
      <input ref={inputRef} type="file" accept="image/*" onChange={pick} className="hidden" />

      {src && (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4" role="dialog">
          <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden flex flex-col" style={{ maxHeight: '92vh' }}>
            <div className="relative w-full bg-neutral-900" style={{ height: 'min(60vh, 460px)' }}>
              <Cropper
                image={src}
                crop={crop}
                zoom={zoom}
                aspect={aspect}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onComplete}
                objectFit="contain"
              />
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-neutral-500 w-12">Zoom</span>
                <input type="range" min={1} max={3} step={0.01} value={zoom} onChange={(e) => setZoom(Number(e.target.value))} className="flex-1 accent-[#52632E]" />
              </div>
              {err && <p className="text-sm text-red-600">{err}</p>}
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setSrc(null)} className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-600 hover:bg-neutral-100">Annuler</button>
                <button type="button" onClick={confirm} disabled={busy} className="px-4 py-2 rounded-lg text-sm font-medium bg-[#52632E] text-white hover:bg-[#3f4d23] disabled:opacity-60">
                  {busy ? 'Envoi…' : 'Valider le recadrage'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
