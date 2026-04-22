/* ────────────────────────────────────────────────────────────
   Farm Eden — Contenu du site
──────────────────────────────────────────────────────────── */

export const SITE = {
  name: 'Farm Eden',
  tagline: 'Un week-end à la ferme dont tout le monde se souvient.',
  phone: '+212 6 00 00 00 00',
  whatsapp: '212600000000',
  email: 'contact@farmeden.ma',
  address: 'Ain Johra, Tifelt — à 45 min de Rabat',
  mapsUrl: 'https://maps.google.com/?q=Ain+Johra+Tifelt+Maroc',
  mapsEmbed: 'https://www.openstreetmap.org/export/embed.html?bbox=-6.45%2C33.82%2C-6.19%2C33.96&layer=mapnik&marker=33.8944%2C-6.3064',
  instagram: '',
  airbnb: 'https://www.airbnb.com/rooms/942068881530640680',
};

/* ─── WhatsApp ───────────────────────────────────────────── */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general:     'Bonjour, je voudrais avoir plus d\'informations sur Farm Eden.',
  reservation: 'Bonjour, je voudrais réserver Farm Eden. Pouvez-vous me donner les disponibilités et le tarif ?',
  seminaire:   'Bonjour, je souhaite organiser un séminaire d\'équipe à Farm Eden. Pouvez-vous me contacter ?',
  evenement:   'Bonjour, je voudrais organiser un événement à Farm Eden. Merci de me contacter.',
  brunch:      'Bonjour, je suis intéressé(e) par le brunch à Farm Eden. Quelles sont les prochaines dates ?',
};

/* ─── Chiffres clés ──────────────────────────────────────── */
export const KEY_FIGURES = [
  { value: '1,5 ha', label: 'de terrain verdoyant' },
  { value: '4',      label: 'chambres & suites' },
  { value: '12',     label: 'personnes max.' },
  { value: '45 min', label: 'de Rabat' },
];

/* ─── Points forts ───────────────────────────────────────── */
export const FEATURES = [
  {
    title: 'Piscine privée',
    description: 'Grande piscine sans vis-à-vis, entourée de verdure. Réservée uniquement à vos invités.',
    icon: 'pool',
  },
  {
    title: 'Villa entière',
    description: 'Vous prenez toute la villa — 4 chambres, 2 salons, cuisine équipée et terrasses.',
    icon: 'villa',
  },
  {
    title: 'Cuisine marocaine',
    description: 'Tagine, couscous, méchoui — préparés sur place par notre équipe, selon vos souhaits.',
    icon: 'cuisine',
  },
  {
    title: 'Activités pour tous',
    description: 'Trampoline, ping-pong, badminton, tir à l\'arc, football — les enfants adorent.',
    icon: 'sport',
  },
  {
    title: 'Animaux de la ferme',
    description: 'Moutons, chèvres, lapins, paons — une vraie ferme pour petits et grands.',
    icon: 'nature',
  },
  {
    title: 'Entièrement privatisé',
    description: 'Aucun autre client pendant votre séjour. La ferme est à vous, et rien qu\'à vous.',
    icon: 'private',
  },
];

/* ─── Expériences ────────────────────────────────────────── */
export const EXPERIENCES = [
  {
    slug: 'sejour-famille',
    title: 'Séjour en famille',
    subtitle: 'La ferme en mode famille',
    description:
      'La piscine privée, les activités et la cuisine marocaine sont là pour que tout le monde soit heureux — petits et grands. Vous prenez la ferme entière, pour le temps qu\'il vous faut.',
    image: '/images/exp-sejour.jpg',
    tag: 'Famille',
    tagColor: 'olive',
    wa: 'reservation',
    ctaLabel: 'Vérifier les disponibilités',
    ctaVariant: 'olive',
  },
  {
    slug: 'sejour-couple',
    title: 'Séjour en amoureux',
    subtitle: 'Un moment rien que pour vous deux',
    description:
      'La ferme entière pour deux. Piscine privée, nuits tranquilles, petit-déjeuner dans le jardin — un séjour loin du bruit, exactement comme vous l\'imaginez.',
    image: '/images/exp-brunch.jpg',
    tag: 'Couple',
    tagColor: 'gold',
    wa: 'reservation',
    ctaLabel: 'Vérifier les disponibilités',
    ctaVariant: 'olive',
  },
  {
    slug: 'sejour-amis',
    title: 'Séjour entre amis',
    subtitle: 'Piscine, barbecue, bonne ambiance',
    description:
      'La piscine à votre disposition, le barbecue, les jeux, la musique — Farm Eden est l\'endroit idéal pour un séjour entre amis. Vous avez la ferme pour vous seuls, pour le temps que vous voulez.',
    image: '/images/exp-anniversaire.jpg',
    tag: 'Amis',
    tagColor: 'olive',
    wa: 'reservation',
    ctaLabel: 'Vérifier les disponibilités',
    ctaVariant: 'olive',
  },
  {
    slug: 'evjf-evg',
    title: 'EVJF & EVG',
    subtitle: 'Fêter la fin du célibat comme il se doit',
    description:
      'Piscine, musique et bonne humeur pour marquer le coup avant le grand jour. La ferme est entièrement à vous — organisez la journée à votre façon.',
    image: '/images/exp-anniversaire.jpg',
    tag: 'Célébration',
    tagColor: 'terra',
    wa: 'evenement',
    ctaLabel: 'Organiser mon EVJF / EVG',
    ctaVariant: 'terra',
  },
  {
    slug: 'seminaire',
    title: 'Séminaire d\'équipe',
    subtitle: 'Réunion & journée de travail',
    description:
      'Un cadre calme et spacieux loin du bureau — idéal pour vos réunions d\'équipe, journées de réflexion ou formations. L\'équipe se concentre, loin des distractions.',
    image: '/images/exp-seminaire.jpg',
    tag: 'Entreprise',
    tagColor: 'brown',
    wa: 'seminaire',
    ctaLabel: 'Demander un devis',
    ctaVariant: 'terra',
  },
  {
    slug: 'anniversaire',
    title: 'Anniversaire & fêtes',
    subtitle: 'Célébration & événement privé',
    description:
      'Anniversaire, fiançailles, réunion de famille — la ferme se privatise pour l\'occasion. Décoration, traiteur, animation sur demande.',
    image: '/images/exp-anniversaire.jpg',
    tag: 'Événement',
    tagColor: 'terra',
    wa: 'evenement',
    ctaLabel: 'Organiser mon événement',
    ctaVariant: 'terra',
  },
  {
    slug: 'mariage',
    title: 'Mariage & fiançailles',
    subtitle: 'Le grand jour dans un cadre unique',
    description:
      'Grand terrain verdoyant, espace extérieur pour des dizaines de personnes, traiteur et décoration sur mesure — parlez-nous de votre projet, on construit ensemble la formule idéale.',
    image: '/images/exp-anniversaire.jpg',
    tag: 'Mariage',
    tagColor: 'gold',
    wa: 'evenement',
    ctaLabel: 'Discuter de mon projet',
    ctaVariant: 'outline',
  },
  {
    slug: 'bien-etre',
    title: 'Retraite bien-être',
    subtitle: 'Déconnexion & ressourcement',
    description:
      'Calme, grand terrain verdoyant et piscine privée — Farm Eden est fait pour une vraie pause. Yoga, méditation ou simplement ne rien faire, loin du bruit et des écrans.',
    image: '/images/exp-sejour.jpg',
    tag: 'Bien-être',
    tagColor: 'olive',
    wa: 'reservation',
    ctaLabel: 'Vérifier les disponibilités',
    ctaVariant: 'olive',
  },
  {
    slug: 'brunch',
    title: 'Brunch en plein air',
    subtitle: 'Un matin à la campagne',
    description:
      'Msemen, miel, jus frais, fruits de saison — un brunch marocain généreux dressé dehors, dans le jardin. Une belle façon de commencer la journée.',
    image: '/images/exp-brunch.jpg',
    tag: 'Gastronomie',
    tagColor: 'gold',
    wa: 'brunch',
    ctaLabel: 'Voir les prochaines dates',
    ctaVariant: 'ghost',
  },
];

/* ─── Témoignages ────────────────────────────────────────── */
export const TESTIMONIALS = [
  {
    text: 'On a passé un week-end magnifique. Les enfants ont adoré la piscine et les animaux. La cuisine préparée sur place était vraiment délicieuse.',
    name: 'Salma R.',
    from: 'Casablanca',
    stars: 5,
  },
  {
    text: 'Parfait pour notre séminaire. Beaucoup d\'espace, cadre agréable, équipe très sympa. On a pu travailler dans de très bonnes conditions.',
    name: 'Karim B.',
    from: 'Rabat',
    stars: 5,
  },
  {
    text: 'La meilleure ferme avec piscine que j\'ai trouvée près de Rabat. Propre, bien entretenu, vraiment privé. On reviendra c\'est sûr.',
    name: 'Nadia M.',
    from: 'Rabat',
    stars: 5,
  },
];

/* ─── FAQ ────────────────────────────────────────────────── */
export const FAQ = [
  {
    q: 'Qu\'est-ce qu\'on loue exactement ?',
    a: 'Vous louez toute la ferme — la villa avec ses 4 chambres, la piscine, le jardin et tous les espaces. Il n\'y a aucun autre client pendant votre séjour.',
  },
  {
    q: 'C\'est loin de Rabat ?',
    a: 'Non, environ 45 minutes. La ferme est à Ain Johra, près de Tifelt, dans la région Rabat-Salé-Kénitra. On vous envoie les coordonnées GPS exactes à la réservation.',
  },
  {
    q: 'Combien de personnes peut-on être ?',
    a: 'Jusqu\'à 12 personnes confortablement, entre les chambres et les espaces supplémentaires.',
  },
  {
    q: 'Est-ce qu\'on peut manger sur place ?',
    a: 'Oui. L\'équipe propose la cuisine marocaine traditionnelle (tagine, couscous, méchoui), le petit-déjeuner, et le service de ménage — en option selon vos besoins.',
  },
  {
    q: 'Comment réserver ?',
    a: 'Tout se fait sur WhatsApp. Envoyez-nous vos dates et votre nombre de personnes — on vous répond rapidement avec les disponibilités et le tarif.',
  },
  {
    q: 'Peut-on organiser un mariage ou une grande fête ?',
    a: 'Oui, la ferme se privatise pour tous les événements. Contactez-nous pour en discuter et on trouve ensemble la formule qui vous convient.',
  },
];

/* ─── Navigation ─────────────────────────────────────────── */
export const NAV_LINKS = [
  { label: 'La Ferme',    href: '/la-ferme' },
  { label: 'Expériences', href: '/experiences' },
  { label: 'Galerie',     href: '/galerie' },
  { label: 'Contact',     href: '/contact' },
];
