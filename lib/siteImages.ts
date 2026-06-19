/* Registre de toutes les images modifiables du site (hors page Photos).
   Chaque "slot" a un identifiant, un défaut et un ratio de recadrage. */
import { EXPERIENCES } from '@/lib/content';

export interface ImageSlot {
  id: string;
  group: string;
  label: string;
  defaultSrc: string;
  defaultAlt: string;
  aspect: number; // largeur / hauteur (pour le recadrage)
}

export type SiteImageOverrides = Record<string, { src: string; alt: string }>;

/* Galerie de la page La Ferme (par défaut) */
export const LAFERME_GALLERY_DEFAULT = [
  { src: '/images/farm/facade.jpg', alt: 'Façade et entrée principale de la villa' },
  { src: '/images/farm/piscine.jpg', alt: 'Piscine privée entourée de palmiers' },
  { src: '/images/farm/terrasse-repas.jpg', alt: 'Terrasse de repas couverte' },
  { src: '/images/farm/salon.jpg', alt: 'Salon principal sous une arche en pierre' },
  { src: '/images/farm/daybed.jpg', alt: 'Lit gazebo dans le jardin' },
  { src: '/images/farm/jardin-tropical.jpg', alt: 'Allée dallée dans le jardin tropical' },
];

export const SITE_IMAGE_SLOTS: ImageSlot[] = [
  { id: 'home.hero', group: 'Accueil', label: 'Hero — photo principale', defaultSrc: '/images/farm/piscine.jpg', defaultAlt: 'Piscine privée de Farm Eden entourée de verdure', aspect: 3 / 4 },
  { id: 'home.hero-accent', group: 'Accueil', label: 'Hero — petite photo', defaultSrc: '/images/farm/daybed.jpg', defaultAlt: 'Lit gazebo dans le jardin de Farm Eden', aspect: 2 / 3 },

  { id: 'laferme.intro', group: 'La Ferme', label: 'Photo d\'introduction', defaultSrc: '/images/farm/facade.jpg', defaultAlt: 'Façade et entrée principale de la villa Farm Eden', aspect: 4 / 5 },
  ...LAFERME_GALLERY_DEFAULT.map((g, i) => ({
    id: `laferme.gallery.${i}`, group: 'La Ferme', label: `Galerie ${i + 1}`, defaultSrc: g.src, defaultAlt: g.alt, aspect: 4 / 3,
  })),

  ...EXPERIENCES.flatMap((e) => [
    { id: `exp.${e.slug}.card`, group: `Expérience · ${e.title}`, label: 'Vignette (carte)', defaultSrc: e.cardImage, defaultAlt: e.title, aspect: 16 / 10 },
    { id: `exp.${e.slug}.hero`, group: `Expérience · ${e.title}`, label: 'Photo du hero', defaultSrc: e.heroImage, defaultAlt: e.title, aspect: 4 / 5 },
    ...e.gallery.map((src, i) => ({
      id: `exp.${e.slug}.gallery.${i}`, group: `Expérience · ${e.title}`, label: `Galerie ${i + 1}`, defaultSrc: src, defaultAlt: `${e.title}, photo ${i + 1}`, aspect: 2 / 3,
    })),
  ]),
];

export const SLOT_BY_ID: Record<string, ImageSlot> = Object.fromEntries(SITE_IMAGE_SLOTS.map((s) => [s.id, s]));

/** Groupes ordonnés pour l'admin */
export function slotGroups(): { group: string; slots: ImageSlot[] }[] {
  const out: { group: string; slots: ImageSlot[] }[] = [];
  for (const slot of SITE_IMAGE_SLOTS) {
    let g = out.find((x) => x.group === slot.group);
    if (!g) { g = { group: slot.group, slots: [] }; out.push(g); }
    g.slots.push(slot);
  }
  return out;
}

/** Résout un slot : override si présent, sinon défaut. */
export function resolveImg(id: string, ov: SiteImageOverrides): { src: string; alt: string } {
  const s = SLOT_BY_ID[id];
  const o = ov[id];
  return { src: o?.src || s?.defaultSrc || '', alt: o?.alt || s?.defaultAlt || '' };
}
