/* Coach SEO : score en direct d'un article (pur, utilisable côté client). */

export interface ArticleDraft {
  title: string;
  slug: string;
  keyword: string;
  excerpt: string;
  metaDescription: string;
  tag: string;
  coverUrl: string;
  coverAlt: string;
  sections: { heading?: string; paragraphs: string[] }[];
}

export interface SeoCheck {
  id: string;
  label: string;
  ok: boolean;
  detail: string;
}

const ACTION_VERBS = [
  'decouvrez', 'apprenez', 'organisez', 'reservez', 'profitez', 'explorez', 'planifiez',
  'trouvez', 'choisissez', 'imaginez', 'offrez', 'vivez', 'preparez', 'composez',
];

function norm(s: string): string {
  return (s || '').toLowerCase()
    .replace(/[àâä]/g, 'a').replace(/[éèêë]/g, 'e')
    .replace(/[îï]/g, 'i').replace(/[ôö]/g, 'o')
    .replace(/[ûüù]/g, 'u').replace(/ç/g, 'c');
}

function bodyText(a: ArticleDraft): string {
  return a.sections.map((s) => `${s.heading ?? ''} ${s.paragraphs.join(' ')}`).join(' ');
}

function wordCount(s: string): number {
  return (s.trim().match(/\S+/g) || []).length;
}

export function scoreArticle(a: ArticleDraft): { score: number; checks: SeoCheck[] } {
  const kw = norm(a.keyword.trim());
  const title = a.title.trim();
  const nTitle = norm(title);
  const body = bodyText(a);
  const nBody = norm(body);
  const words = wordCount(body);
  const headings = a.sections.map((s) => s.heading).filter((h): h is string => Boolean(h && h.trim()));
  const first100 = norm(body.split(/\s+/).slice(0, 100).join(' '));
  const kwCount = kw ? (nBody.match(new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length : 0;
  const meta = a.metaDescription.trim();
  const firstMetaWord = norm(meta.split(/\s+/)[0] || '');

  const c: SeoCheck[] = [
    { id: 'title-len', label: 'Titre complet 50-60 caractères', ok: title.length >= 45 && title.length <= 62, detail: `${title.length} car.` },
    { id: 'kw-def', label: 'Mot-clé principal défini', ok: kw.length >= 2, detail: kw ? 'Défini' : 'À définir' },
    { id: 'kw-title', label: 'Mot-clé dans le titre', ok: !!kw && nTitle.includes(kw), detail: kw && nTitle.includes(kw) ? 'Présent' : 'Absent' },
    { id: 'kw-title-early', label: 'Mot-clé tôt dans le titre', ok: !!kw && nTitle.indexOf(kw) >= 0 && nTitle.indexOf(kw) <= nTitle.length / 2, detail: 'Première moitié' },
    { id: 'kw-meta', label: 'Mot-clé dans la meta description', ok: !!kw && norm(meta).includes(kw), detail: kw && norm(meta).includes(kw) ? 'Présent' : 'Absent' },
    { id: 'kw-100', label: 'Mot-clé dans les 100 premiers mots', ok: !!kw && first100.includes(kw), detail: 'Intro' },
    { id: 'kw-h2', label: 'Mot-clé dans un sous-titre (H2)', ok: !!kw && headings.some((h) => norm(h).includes(kw)), detail: `${headings.length} H2` },
    { id: 'kw-density', label: 'Mot-clé ni absent ni sur-utilisé', ok: kwCount >= 1 && kwCount <= Math.max(3, Math.round(words / 90)), detail: `${kwCount} fois` },
    { id: 'meta-len', label: 'Meta description 150-160 caractères', ok: meta.length >= 140 && meta.length <= 165, detail: `${meta.length} car.` },
    { id: 'meta-verb', label: "Meta commence par un verbe d'action", ok: ACTION_VERBS.includes(firstMetaWord), detail: ACTION_VERBS.includes(firstMetaWord) ? 'Bon' : 'À revoir' },
    { id: 'h2-count', label: 'Au moins 2 sous-titres (H2)', ok: headings.length >= 2, detail: `${headings.length} H2` },
    { id: 'h2-question', label: 'Un sous-titre sous forme de question', ok: headings.some((h) => h.includes('?')), detail: headings.some((h) => h.includes('?')) ? 'Présent' : 'Aucun' },
    { id: 'length', label: 'Longueur suffisante (500+ mots)', ok: words >= 500, detail: `${words} mots` },
    { id: 'short-paras', label: 'Paragraphes courts', ok: a.sections.length > 0 && a.sections.every((s) => s.paragraphs.every((p) => wordCount(p) <= 90)), detail: 'Lisibilité' },
    { id: 'excerpt', label: 'Résumé renseigné', ok: a.excerpt.trim().length >= 60, detail: `${a.excerpt.trim().length} car.` },
    { id: 'cover-alt', label: 'Image de couverture avec alt', ok: !!a.coverUrl && a.coverAlt.trim().length >= 8, detail: a.coverAlt ? 'Alt présent' : 'Alt manquant' },
    { id: 'slug', label: 'Slug court avec mot-clé', ok: a.slug.length > 0 && a.slug.length <= 60 && (!kw || a.slug.split('-').some((p) => kw.includes(p) || p.includes(kw.split(' ')[0]))), detail: a.slug || 'À définir' },
  ];

  const okCount = c.filter((x) => x.ok).length;
  const score = Math.round((okCount / c.length) * 100);
  return { score, checks: c };
}

export function slugify(s: string): string {
  return norm(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
}
