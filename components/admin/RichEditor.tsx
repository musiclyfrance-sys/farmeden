'use client';

import { useCallback, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';

/* Image redimensionnable : largeur + coins arrondis persistés en HTML */
const SizableImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: '100%',
        renderHTML: (attrs) => ({ style: `width:${attrs.width}` }),
        parseHTML: (el) => el.style.width || '100%',
      },
      rounded: {
        default: true,
        renderHTML: (attrs) => (attrs.rounded ? { class: 'rounded-xl' } : {}),
        parseHTML: (el) => el.classList.contains('rounded-xl'),
      },
    };
  },
});

const COLORS = ['#231C14', '#52632E', '#A84A26', '#8B6B3D', '#D4B78A', '#000000', '#dc2626', '#2563eb', '#16a34a', '#9333ea', '#6b7280'];

async function compressUpload(file: File): Promise<string> {
  const dataUrl: string = await new Promise((res) => { const r = new FileReader(); r.onload = () => res(r.result as string); r.readAsDataURL(file); });
  const img = await new Promise<HTMLImageElement>((res, rej) => { const i = new window.Image(); i.onload = () => res(i); i.onerror = rej; i.src = dataUrl; });
  const max = 1600;
  const scale = Math.min(1, max / Math.max(img.width, img.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(img.width * scale); canvas.height = Math.round(img.height * scale);
  canvas.getContext('2d')!.drawImage(img, 0, 0, canvas.width, canvas.height);
  const blob: Blob = await new Promise((res) => canvas.toBlob((b) => res(b!), 'image/jpeg', 0.82));
  const fd = new FormData(); fd.append('file', blob, 'image.jpg');
  const r = await fetch('/api/admin/upload', { method: 'POST', body: fd });
  const j = await r.json();
  if (!r.ok) throw new Error(j.error || 'Upload échoué');
  return j.url;
}

function Btn({ active, onClick, title, children }: { active?: boolean; onClick: () => void; title: string; children: React.ReactNode }) {
  return (
    <button type="button" title={title} onMouseDown={(e) => e.preventDefault()} onClick={onClick}
      className={`min-w-8 h-8 px-2 rounded-md text-sm font-medium flex items-center justify-center transition-colors ${active ? 'bg-[#52632E] text-white' : 'text-neutral-600 hover:bg-neutral-200'}`}>
      {children}
    </button>
  );
}
function Sep() { return <span className="w-px h-5 bg-neutral-300 mx-1" />; }

export function RichEditor({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Underline,
      TextStyle,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({ openOnClick: false, autolink: true, HTMLAttributes: { rel: 'noopener', class: 'text-[#52632E] underline' } }),
      SizableImage.configure({ HTMLAttributes: { class: 'rounded-xl' } }),
    ],
    content: value || '<p></p>',
    editorProps: { attributes: { class: 'prose-admin focus:outline-none min-h-[320px] px-4 py-3' } },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });

  const addLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('URL du lien', prev || 'https://');
    if (url === null) return;
    if (url === '') { editor.chain().focus().extendMarkRange('link').unsetLink().run(); return; }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  const onPickImage = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]; e.target.value = '';
    if (!f || !editor) return;
    try { const url = await compressUpload(f); editor.chain().focus().setImage({ src: url } as { src: string }).run(); }
    catch (err) { alert(err instanceof Error ? err.message : 'Erreur'); }
  }, [editor]);

  if (!editor) return <div className="border border-neutral-200 rounded-xl h-80 animate-pulse bg-neutral-50" />;

  const imgActive = editor.isActive('image');
  const setImgWidth = (w: string) => editor.chain().focus().updateAttributes('image', { width: w }).run();
  const curColor = (editor.getAttributes('textStyle').color as string) || '';

  return (
    <div className="border border-neutral-200 rounded-xl bg-white flex flex-col">
      {/* Barre d'outils */}
      <div className="flex flex-wrap items-center gap-0.5 p-2 border-b border-neutral-200 bg-neutral-50 rounded-t-xl">
        <Btn title="Gras" active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}><b>B</b></Btn>
        <Btn title="Italique" active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></Btn>
        <Btn title="Souligné" active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()}><u>U</u></Btn>
        <Btn title="Barré" active={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()}><s>S</s></Btn>
        <Sep />
        <Btn title="Titre H2" active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</Btn>
        <Btn title="Titre H3" active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</Btn>
        <Sep />
        <Btn title="Liste à puces" active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()}>•</Btn>
        <Btn title="Liste numérotée" active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()}>1.</Btn>
        <Btn title="Citation" active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()}>&ldquo;</Btn>
        <Sep />
        <Btn title="Aligner à gauche" active={editor.isActive({ textAlign: 'left' })} onClick={() => editor.chain().focus().setTextAlign('left').run()}>↤</Btn>
        <Btn title="Centrer" active={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()}>↔</Btn>
        <Sep />
        <Btn title="Lien" active={editor.isActive('link')} onClick={addLink}>🔗</Btn>
        <Btn title="Image" onClick={() => fileRef.current?.click()}>🖼</Btn>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onPickImage} />
        <Sep />
        {/* Couleurs */}
        <div className="flex items-center gap-1">
          {COLORS.map((c) => (
            <button key={c} type="button" title={`Couleur ${c}`} onMouseDown={(e) => e.preventDefault()} onClick={() => editor.chain().focus().setColor(c).run()}
              className={`w-5 h-5 rounded-full border ${curColor.toLowerCase() === c.toLowerCase() ? 'ring-2 ring-offset-1 ring-[#52632E]' : 'border-neutral-300'}`} style={{ background: c }} />
          ))}
          <button type="button" title="Couleur par défaut" onMouseDown={(e) => e.preventDefault()} onClick={() => editor.chain().focus().unsetColor().run()} className="text-xs text-neutral-500 px-1.5 h-6 rounded hover:bg-neutral-200">A̶</button>
        </div>
      </div>

      {/* Outils image (quand une image est sélectionnée) */}
      {imgActive && (
        <div className="flex flex-wrap items-center gap-2 px-3 py-2 bg-[#EBF0E2] border-b border-[#52632E]/15 text-sm">
          <span className="text-[#52632E] font-medium">Image :</span>
          <span className="text-neutral-500">Taille</span>
          {[['25%', 'S'], ['40%', 'M'], ['66%', 'L'], ['100%', 'Pleine']].map(([w, label]) => (
            <button key={w} type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => setImgWidth(w)} className="px-2.5 h-7 rounded-md bg-white border border-neutral-200 hover:border-[#52632E] text-neutral-700">{label}</button>
          ))}
          <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => editor.chain().focus().updateAttributes('image', { rounded: !editor.getAttributes('image').rounded }).run()} className="px-2.5 h-7 rounded-md bg-white border border-neutral-200 hover:border-[#52632E] text-neutral-700">Coins arrondis</button>
          <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => editor.chain().focus().deleteSelection().run()} className="px-2.5 h-7 rounded-md text-red-600 hover:bg-red-50 ml-auto">Supprimer</button>
        </div>
      )}

      <div className="max-h-[58vh] overflow-y-auto rounded-b-xl">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
