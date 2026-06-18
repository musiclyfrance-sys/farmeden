'use client';

import { useMemo, useState } from 'react';
import { ImagePicker } from './ImagePicker';
import { RichEditor } from './RichEditor';
import { scoreArticle, slugify, sectionsToHtml, type ArticleDraft } from '@/lib/admin/seo';
import type { Post } from '@/lib/content';

interface Editor {
  index: number | null;
  title: string; slug: string; keyword: string; tag: string;
  excerpt: string; metaDescription: string; cover: string; coverAlt: string;
  bodyHtml: string; published: boolean;
}

const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

function postToEditor(p: Post, index: number): Editor {
  return {
    index, title: p.title, slug: p.slug, keyword: p.keyword ?? '', tag: p.tag,
    excerpt: p.excerpt, metaDescription: p.metaDescription, cover: p.cover, coverAlt: p.coverAlt ?? '',
    bodyHtml: p.bodyHtml || sectionsToHtml(p.sections || []),
    published: p.published !== false,
  };
}
function emptyEditor(): Editor {
  return { index: null, title: '', slug: '', keyword: '', tag: 'Guide', excerpt: '', metaDescription: '', cover: '', coverAlt: '', bodyHtml: '', published: true };
}
function editorToDraft(e: Editor): ArticleDraft {
  return { title: e.title, slug: e.slug, keyword: e.keyword, excerpt: e.excerpt, metaDescription: e.metaDescription, tag: e.tag, coverUrl: e.cover, coverAlt: e.coverAlt, bodyHtml: e.bodyHtml };
}
function editorToPost(e: Editor): Post {
  const words = (e.bodyHtml.replace(/<[^>]+>/g, ' ').match(/\S+/g) || []).length;
  const now = new Date();
  return {
    slug: e.slug || slugify(e.title), title: e.title, excerpt: e.excerpt,
    date: now.toISOString().slice(0, 10),
    dateLabel: `${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`,
    readingTime: `${Math.max(1, Math.round(words / 200))} min de lecture`,
    cover: e.cover, coverAlt: e.coverAlt, keyword: e.keyword, tag: e.tag,
    metaTitle: e.title, metaDescription: e.metaDescription, sections: [], bodyHtml: e.bodyHtml, published: e.published,
  };
}

export function JournalManager({ initial }: { initial: Post[] }) {
  const [posts, setPosts] = useState<Post[]>(initial);
  const [ed, setEd] = useState<Editor | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  async function persist(next: Post[]) {
    setSaving(true); setMsg('');
    try {
      const res = await fetch('/api/admin/articles', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(next) });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || 'Erreur');
      setPosts(next); setMsg('Enregistré. Le site se met à jour.'); return true;
    } catch (e) { setMsg(e instanceof Error ? e.message : 'Erreur'); return false; } finally { setSaving(false); }
  }

  async function saveEditor(publish?: boolean) {
    if (!ed) return;
    const e = { ...ed, published: publish ?? ed.published, slug: ed.slug || slugify(ed.title) };
    const post = editorToPost(e);
    const next = e.index === null ? [post, ...posts] : posts.map((p, i) => (i === e.index ? post : p));
    if (await persist(next)) setEd(null);
  }
  async function remove(i: number) {
    if (!confirm('Supprimer cet article ?')) return;
    await persist(posts.filter((_, idx) => idx !== i));
  }

  if (ed) return <ArticleEditor ed={ed} setEd={setEd} onSave={saveEditor} onCancel={() => setEd(null)} saving={saving} msg={msg} />;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Journal</h1>
          <p className="text-neutral-500 text-sm">Rédigez et publiez des articles avec le coach SEO.</p>
        </div>
        <button onClick={() => setEd(emptyEditor())} className="bg-[#52632E] text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-[#3f4d23]">Nouvel article</button>
      </div>
      {msg && <p className="text-sm text-neutral-500 mb-4">{msg}</p>}
      <div className="flex flex-col divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
        {posts.map((p, i) => (
          <div key={p.slug + i} className="flex items-center gap-4 p-4">
            <div className="w-16 h-12 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {p.cover && <img src={p.cover} alt="" className="w-full h-full object-cover" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{p.title || 'Sans titre'}</p>
              <p className="text-xs text-neutral-400 truncate">/{p.slug}</p>
            </div>
            <span className={`text-xs px-2.5 py-1 rounded-full ${p.published !== false ? 'bg-green-100 text-green-700' : 'bg-neutral-100 text-neutral-500'}`}>{p.published !== false ? 'Publié' : 'Brouillon'}</span>
            <button onClick={() => setEd(postToEditor(p, i))} className="text-sm font-medium text-[#52632E] hover:underline">Éditer</button>
            <button onClick={() => remove(i)} className="text-sm text-red-500 hover:text-red-700">Suppr.</button>
          </div>
        ))}
        {posts.length === 0 && <p className="p-6 text-sm text-neutral-400">Aucun article pour l&apos;instant.</p>}
      </div>
    </div>
  );
}

function ArticleEditor({ ed, setEd, onSave, onCancel, saving, msg }: {
  ed: Editor; setEd: (e: Editor) => void; onSave: (publish?: boolean) => void; onCancel: () => void; saving: boolean; msg: string;
}) {
  const draft = useMemo(() => editorToDraft(ed), [ed]);
  const { score, checks } = useMemo(() => scoreArticle(draft), [draft]);
  const set = (patch: Partial<Editor>) => setEd({ ...ed, ...patch });
  const ring = score >= 80 ? '#16a34a' : score >= 50 ? '#d97706' : '#dc2626';

  return (
    <div className="pb-24">
      <button onClick={onCancel} className="text-sm text-neutral-500 hover:text-neutral-900 mb-5">← Tous les articles</button>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-2xl border border-neutral-200 p-5 flex flex-col gap-4">
            <Field label="Titre de l'article">
              <input value={ed.title} onChange={(e) => set({ title: e.target.value, slug: ed.index === null && (ed.slug === '' || ed.slug === slugify(ed.title)) ? slugify(e.target.value) : ed.slug })} className="inp" placeholder="Titre accrocheur avec le mot-clé" />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Mot-clé principal"><input value={ed.keyword} onChange={(e) => set({ keyword: e.target.value })} className="inp" placeholder="ferme piscine rabat" /></Field>
              <Field label="Tag"><input value={ed.tag} onChange={(e) => set({ tag: e.target.value })} className="inp" /></Field>
            </div>
            <Field label="Slug (URL)"><input value={ed.slug} onChange={(e) => set({ slug: slugify(e.target.value) })} className="inp font-mono text-xs" /></Field>
            <Field label="Résumé (extrait)"><textarea value={ed.excerpt} onChange={(e) => set({ excerpt: e.target.value })} rows={2} className="inp" /></Field>
            <Field label={`Meta description (${ed.metaDescription.length}/160)`}><textarea value={ed.metaDescription} onChange={(e) => set({ metaDescription: e.target.value })} rows={2} className="inp" /></Field>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm font-medium mb-3">Image de couverture (16:9)</p>
            <div className="max-w-md">
              <ImagePicker value={ed.cover} aspect={16 / 9} label={ed.coverAlt} onChange={(url) => set({ cover: url, coverAlt: ed.coverAlt || ed.title })} />
              <input value={ed.coverAlt} onChange={(e) => set({ coverAlt: e.target.value })} placeholder="Texte alternatif de la couverture" className="inp mt-2 text-xs" />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Contenu</p>
            <RichEditor value={ed.bodyHtml} onChange={(html) => set({ bodyHtml: html })} />
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 bg-white rounded-2xl border border-neutral-200 p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-full flex items-center justify-center font-semibold text-lg shrink-0" style={{ color: ring, boxShadow: `inset 0 0 0 3px ${ring}` }}>{score}</div>
            <div><p className="font-semibold text-sm">Coach SEO</p><p className="text-xs text-neutral-400">Score en direct</p></div>
          </div>
          <ul className="flex flex-col gap-2.5 max-h-[60vh] overflow-auto pr-1">
            {checks.map((c) => (
              <li key={c.id} className="flex items-start gap-2.5">
                <span className={`mt-1 w-2 h-2 rounded-full shrink-0 ${c.ok ? 'bg-green-500' : 'bg-neutral-300'}`} />
                <div><p className={`text-sm leading-tight ${c.ok ? 'text-neutral-800' : 'text-neutral-500'}`}>{c.label}</p><p className="text-xs text-neutral-400">{c.detail}</p></div>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-neutral-200 z-40">
        <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between gap-4">
          <span className="text-sm text-neutral-500 truncate">{msg || (ed.published ? 'Publié' : 'Brouillon')}</span>
          <div className="flex gap-2">
            <button onClick={() => onSave(false)} disabled={saving} className="px-4 py-2.5 rounded-lg text-sm font-medium text-neutral-600 hover:bg-neutral-100 disabled:opacity-50">Enregistrer le brouillon</button>
            <button onClick={() => onSave(true)} disabled={saving || !ed.title} className="bg-[#52632E] text-white rounded-lg px-5 py-2.5 text-sm font-medium hover:bg-[#3f4d23] disabled:opacity-50">{saving ? 'Publication…' : 'Publier'}</button>
          </div>
        </div>
      </div>

      <style>{`.inp{width:100%;border:1px solid #e5e5e5;border-radius:8px;padding:8px 12px;font-size:14px;outline:none}.inp:focus{box-shadow:0 0 0 2px rgba(82,99,46,.3)}`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="block text-xs font-medium text-neutral-500 mb-1.5">{label}</span>{children}</label>;
}
