/* ────────────────────────────────────────────────────────────
   Farm Eden, contenu du site
   Règles d'écriture : phrases complètes, aucun tiret cadratin,
   aucune mention de durée (le client choisit librement).
──────────────────────────────────────────────────────────── */

export const SITE = {
  name: 'Farm Eden',
  tagline: 'Un séjour à la ferme dont tout le monde se souvient.',
  whatsapp: '212600000000',
  email: 'contact@farmeden.ma',
  address: 'Ain Johra, Tiflet, à 45 minutes de Rabat',
  addressLine: 'Farm Eden - Ferme Rabat, XJ6V+44H, Tiflet, Maroc',
  city: 'Tiflet',
  region: 'Rabat-Salé-Kénitra',
  mapsUrl: 'https://maps.app.goo.gl/5Kvxt1fck6AN6spAA',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.253749936691!2d-6.362058413740452!3d33.960316853469614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda0cb1accddc6af%3A0x4b011abb72c71ed9!2sFarm%20Eden%20-%20Ferme%20Rabat!5e0!3m2!1sfr!2sfr!4v1781732604260!5m2!1sfr!2sfr',
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
  brunch:      'Bonjour, je suis intéressé(e) par un brunch à Farm Eden. Quelles sont les prochaines dates ?',
  mariage:     'Bonjour, nous aimerions organiser notre mariage à Farm Eden. Pouvez-vous nous contacter ?',
  evjf:        'Bonjour, je voudrais organiser un EVJF ou un EVG à Farm Eden. Pouvez-vous me renseigner ?',
};

/* ─── Chiffres clés ──────────────────────────────────────── */
export const KEY_FIGURES = [
  { value: '1,5 ha', label: 'de terrain verdoyant' },
  { value: '4',      label: 'chambres et suites' },
  { value: '12',     label: 'personnes au calme' },
  { value: '45 min', label: 'de route depuis Rabat' },
];

/* ─── Points forts ───────────────────────────────────────── */
export const FEATURES = [
  {
    title: 'Piscine privée',
    description:
      'Une grande piscine sans vis-à-vis, posée au milieu de la pelouse et des palmiers. Elle est réservée à vos seuls invités.',
    icon: 'pool',
  },
  {
    title: 'La villa entière',
    description:
      'Vous disposez de toute la villa. Quatre chambres, deux salons marocains, une cuisine équipée et de larges terrasses.',
    icon: 'villa',
  },
  {
    title: 'Cuisine marocaine',
    description:
      'Notre équipe prépare le tagine, le couscous et le méchoui sur place. Vous choisissez vos plats à l\'avance.',
    icon: 'cuisine',
  },
  {
    title: 'Activités pour tous',
    description:
      'Trampoline, ping-pong, badminton, tir à l\'arc et football occupent les enfants comme les grands.',
    icon: 'sport',
  },
  {
    title: 'Animaux de la ferme',
    description:
      'Des moutons, des chèvres, des lapins et des paons vivent en liberté. C\'est une vraie ferme, vivante et paisible.',
    icon: 'nature',
  },
  {
    title: 'Entièrement privatisé',
    description:
      'Il n\'y a aucun autre client pendant votre venue. La ferme est à vous, et rien qu\'à vous.',
    icon: 'private',
  },
];

/* ─── Type Expérience ────────────────────────────────────── */
export interface Experience {
  slug: string;
  title: string;
  tag: string;
  subtitle: string;
  /** carte (page liste) */
  cardImage: string;
  cardDescription: string;
  /** landing dédiée */
  heroImage: string;
  heroKicker: string;
  intro: string;
  story: { title: string; body: string }[];
  highlights: { icon: string; title: string; text: string }[];
  gallery: string[];
  /** SEO */
  metaTitle: string;
  metaDescription: string;
  /** CTA */
  cta: { title: string; text: string; label: string };
  wa: keyof typeof WA_MESSAGES;
}

/* ─── Expériences ────────────────────────────────────────── */
export const EXPERIENCES: Experience[] = [
  {
    slug: 'sejour-famille',
    title: 'Séjour en famille',
    tag: 'Famille',
    subtitle: 'La ferme rien que pour les vôtres',
    cardImage: '/images/farm/piscine.jpg',
    cardDescription:
      'La piscine privée, les animaux et la cuisine marocaine réunissent petits et grands au même endroit. Vous réservez la ferme entière et vous l\'occupez à votre rythme.',
    heroImage: '/images/farm/piscine-turquoise.jpg',
    heroKicker: 'En famille',
    intro:
      'Farm Eden est pensée pour que toute la famille respire au même endroit. Les enfants courent sur la pelouse pendant que les parents s\'installent à l\'ombre. Personne n\'a besoin de surveiller l\'heure, car la propriété entière vous appartient le temps de votre venue.',
    story: [
      {
        title: 'Un terrain où les enfants se dépensent',
        body: 'Le jardin de 1,5 hectare laisse les enfants jouer en toute liberté. Ils passent du trampoline au tir à l\'arc, puis filent voir les chèvres et les paons. Vous gardez un œil tranquille depuis la terrasse, sans jamais perdre personne de vue.',
      },
      {
        title: 'La piscine, le cœur des journées',
        body: 'La grande piscine privée reste le point de ralliement de la famille. Les baignades s\'enchaînent sans la foule ni le bruit d\'un lieu public. Les transats et le gazebo offrent un coin d\'ombre pour ceux qui préfèrent lire ou faire la sieste.',
      },
      {
        title: 'Des repas marocains préparés sur place',
        body: 'Notre équipe cuisine le tagine, le couscous et le méchoui selon vos envies. Vous composez les menus à l\'avance et vous passez à table sans rien organiser. Le petit-déjeuner marocain se dresse dehors, face au jardin.',
      },
    ],
    highlights: [
      { icon: 'pool', title: 'Piscine sécurisée et privée', text: 'Aucun autre groupe autour de vous pendant la baignade.' },
      { icon: 'nature', title: 'Animaux en liberté', text: 'Moutons, chèvres, lapins et paons à observer de près.' },
      { icon: 'cuisine', title: 'Cuisine sur mesure', text: 'Des plats marocains préparés selon vos goûts.' },
    ],
    gallery: [
      '/images/farm/piscine.jpg',
      '/images/farm/daybed.jpg',
      '/images/farm/chevre.jpg',
      '/images/farm/jardin-tropical.jpg',
      '/images/farm/terrasse-repas.jpg',
      '/images/farm/chambre-double.jpg',
    ],
    metaTitle: 'Séjour en famille près de Rabat dans une ferme avec piscine privée',
    metaDescription:
      'Réservez Farm Eden pour un séjour en famille à 45 minutes de Rabat. Piscine privée, animaux de la ferme, cuisine marocaine et villa entière privatisée.',
    cta: {
      title: 'Réunissez toute la famille à la ferme',
      text: 'Dites-nous quand vous voulez venir et combien vous serez. Nous vous répondons avec les disponibilités et le tarif.',
      label: 'Vérifier les disponibilités',
    },
    wa: 'reservation',
  },
  {
    slug: 'sejour-couple',
    title: 'Séjour en amoureux',
    tag: 'Couple',
    subtitle: 'Un moment qui n\'appartient qu\'à vous deux',
    cardImage: '/images/farm/daybed.jpg',
    cardDescription:
      'La ferme entière devient votre refuge à deux. Vous profitez de la piscine, du jardin et de la cuisine marocaine, loin du bruit et des regards.',
    heroImage: '/images/farm/daybed.jpg',
    heroKicker: 'En amoureux',
    intro:
      'Certains endroits invitent au calme dès qu\'on y pose ses valises. Farm Eden en fait partie. La villa et son jardin deviennent un cocon où le temps ralentit, où chaque moment se vit sans interruption ni voisinage.',
    story: [
      {
        title: 'Le silence comme premier luxe',
        body: 'La ferme se trouve en pleine campagne, à l\'écart de l\'agitation de la ville. On y entend les oiseaux, le vent dans les palmiers et rien d\'autre. C\'est ce silence qui rend chaque instant plus présent.',
      },
      {
        title: 'Des coins pensés pour deux',
        body: 'Le lit gazebo posé sur la pelouse offre un cadre parfait pour la lecture ou la sieste. La terrasse couverte accueille vos dîners à la tombée du jour. La suite et sa salle de bain en marbre prolongent ce sentiment de confort.',
      },
      {
        title: 'Un petit-déjeuner servi dans le jardin',
        body: 'Le matin, notre équipe dresse un petit-déjeuner marocain généreux face à la verdure. Msemen, miel, jus frais et fruits de saison vous attendent. Vous commencez la journée sans la moindre contrainte.',
      },
    ],
    highlights: [
      { icon: 'private', title: 'Aucune autre présence', text: 'La propriété entière est réservée à vous deux.' },
      { icon: 'pool', title: 'Piscine et jardin privés', text: 'Vous nagez et vous reposez sans personne autour.' },
      { icon: 'cuisine', title: 'Repas servis sur place', text: 'Petit-déjeuner et dîners préparés par notre équipe.' },
    ],
    gallery: [
      '/images/farm/daybed.jpg',
      '/images/farm/terrasse-salon.jpg',
      '/images/farm/sejour.jpg',
      '/images/farm/chambre-master.jpg',
      '/images/farm/sdb-doree.jpg',
      '/images/farm/fleurs-jaunes.jpg',
    ],
    metaTitle: 'Séjour romantique en amoureux dans une ferme privée près de Rabat',
    metaDescription:
      'Offrez-vous un séjour en amoureux à Farm Eden, à 45 minutes de Rabat. Villa privatisée, piscine privée, jardin paisible et cuisine marocaine servie sur place.',
    cta: {
      title: 'Réservez votre parenthèse à deux',
      text: 'Envoyez-nous vos dates et nous préparons tout pour que vous n\'ayez plus qu\'à profiter.',
      label: 'Réserver notre séjour',
    },
    wa: 'reservation',
  },
  {
    slug: 'sejour-amis',
    title: 'Séjour entre amis',
    tag: 'Amis',
    subtitle: 'Piscine, barbecue et bonne ambiance',
    cardImage: '/images/farm/terrasse-piscine.jpg',
    cardDescription:
      'La piscine, le barbecue, les jeux et la musique vous attendent. Vous avez la ferme pour vous seuls et vous organisez la journée comme vous l\'entendez.',
    heroImage: '/images/farm/piscine.jpg',
    heroKicker: 'Entre amis',
    intro:
      'Réunir ses amis dans un lieu vraiment à soi change tout. Farm Eden vous laisse les clés de la propriété entière. Vous installez la musique, vous allumez le barbecue et vous profitez de la piscine sans aucune contrainte.',
    story: [
      {
        title: 'Une piscine pour toute la bande',
        body: 'La grande piscine privée devient le centre de la journée. On y passe des heures, on s\'y retrouve, on en sort pour un barbecue puis on y replonge. Aucun horaire imposé ne vient interrompre le plaisir.',
      },
      {
        title: 'Des espaces pour se retrouver',
        body: 'Les salons marocains et le bar intérieur prolongent la fête une fois le soleil couché. La terrasse couverte accueille les grandes tablées. Chacun trouve son coin, du plus animé au plus tranquille.',
      },
      {
        title: 'Tout est sur place',
        body: 'Notre équipe prépare les repas marocains et s\'occupe de l\'intendance. Vous n\'avez ni courses ni vaisselle à gérer. Il vous reste tout le temps pour profiter de vos amis.',
      },
    ],
    highlights: [
      { icon: 'pool', title: 'Piscine privée', text: 'Réservée à votre groupe du matin au soir.' },
      { icon: 'cuisine', title: 'Barbecue et repas', text: 'Méchoui et grillades préparés par notre équipe.' },
      { icon: 'villa', title: 'Salons et terrasses', text: 'De grands espaces pour se retrouver à toute heure.' },
    ],
    gallery: [
      '/images/farm/piscine.jpg',
      '/images/farm/terrasse-repas.jpg',
      '/images/farm/bar.jpg',
      '/images/farm/terrasse-salon.jpg',
      '/images/farm/salon-slab.jpg',
      '/images/farm/piscine-arbre.jpg',
    ],
    metaTitle: 'Séjour entre amis avec piscine privée près de Rabat',
    metaDescription:
      'Privatisez Farm Eden pour un séjour entre amis à 45 minutes de Rabat. Piscine privée, barbecue, salons marocains et villa entière réservée à votre groupe.',
    cta: {
      title: 'Réunissez vos amis à la ferme',
      text: 'Indiquez-nous vos dates et le nombre de participants. Nous vous confirmons tout rapidement.',
      label: 'Vérifier les disponibilités',
    },
    wa: 'reservation',
  },
  {
    slug: 'evjf-evg',
    title: 'EVJF et EVG',
    tag: 'Célébration',
    subtitle: 'Fêter la fin du célibat comme il se doit',
    cardImage: '/images/farm/piscine-turquoise.jpg',
    cardDescription:
      'Piscine, musique et bonne humeur pour marquer le coup avant le grand jour. La ferme est entièrement à vous et la journée se déroule à votre façon.',
    heroImage: '/images/farm/piscine-turquoise.jpg',
    heroKicker: 'EVJF et EVG',
    intro:
      'Un enterrement de vie de jeune fille ou de jeune garçon mérite un cadre à la hauteur du moment. Farm Eden vous offre un terrain de jeu privé où tout devient possible. Vous décidez du programme, de la décoration et de l\'ambiance.',
    story: [
      {
        title: 'Un lieu privé pour lâcher prise',
        body: 'La propriété entière est réservée à votre groupe. Vous profitez de la piscine, de la musique et des espaces extérieurs sans aucun voisinage. Personne ne vient écourter la fête.',
      },
      {
        title: 'De la place pour tout organiser',
        body: 'Le grand jardin accueille les jeux, les animations et les surprises que vous préparez. Les salons et les terrasses prennent le relais en soirée. Vous adaptez chaque espace à votre programme.',
      },
      {
        title: 'Une équipe qui s\'occupe du reste',
        body: 'Notre équipe gère les repas marocains et l\'intendance pour vous laisser libres. Vous nous parlez de votre projet et nous trouvons ensemble la bonne formule. Vous profitez, nous nous occupons des détails.',
      },
    ],
    highlights: [
      { icon: 'pool', title: 'Piscine et musique', text: 'Un cadre privé pour faire la fête en plein air.' },
      { icon: 'private', title: 'Groupe au complet', text: 'La ferme entière réservée à votre célébration.' },
      { icon: 'cuisine', title: 'Repas et logistique', text: 'Notre équipe gère la cuisine et l\'organisation.' },
    ],
    gallery: [
      '/images/farm/piscine.jpg',
      '/images/farm/terrasse-salon.jpg',
      '/images/farm/daybed.jpg',
      '/images/farm/salon-marocain.jpg',
      '/images/farm/bar.jpg',
      '/images/farm/fleurs-jaunes.jpg',
    ],
    metaTitle: 'EVJF et EVG près de Rabat dans une ferme privée avec piscine',
    metaDescription:
      'Organisez votre EVJF ou votre EVG à Farm Eden, à 45 minutes de Rabat. Piscine privée, grand jardin et villa entièrement privatisée pour votre groupe.',
    cta: {
      title: 'Préparez une fête mémorable',
      text: 'Parlez-nous de votre projet et nous construisons ensemble la journée idéale.',
      label: 'Organiser mon EVJF ou EVG',
    },
    wa: 'evjf',
  },
  {
    slug: 'seminaire',
    title: 'Séminaire d\'équipe',
    tag: 'Entreprise',
    subtitle: 'Une journée de travail loin du bureau',
    cardImage: '/images/farm/sejour-pano.jpg',
    cardDescription:
      'Un cadre calme et spacieux pour vos réunions, vos journées de réflexion et vos formations. L\'équipe se concentre, loin des distractions habituelles.',
    heroImage: '/images/farm/sejour-pano.jpg',
    heroKicker: 'Séminaire',
    intro:
      'Sortir l\'équipe du bureau suffit souvent à débloquer les idées. Farm Eden offre un cadre apaisant à 45 minutes de Rabat, idéal pour réfléchir et avancer ensemble. Les grands espaces intérieurs et le jardin accueillent vos sessions de travail comme vos moments de détente.',
    story: [
      {
        title: 'Des espaces propices à la concentration',
        body: 'Les salons et la grande salle à manger se transforment en salles de réunion lumineuses. La nature autour aide l\'équipe à se concentrer sans les sollicitations du quotidien. Vous travaillez dans le calme, à votre rythme.',
      },
      {
        title: 'Un cadre qui renforce les liens',
        body: 'Les pauses au bord de la piscine et les repas partagés créent des échanges plus naturels. L\'équipe se découvre autrement, loin des couloirs et des écrans. Ces moments informels comptent autant que les sessions de travail.',
      },
      {
        title: 'Une organisation prise en charge',
        body: 'Notre équipe prépare les repas marocains et gère la logistique de la journée. Vous arrivez avec votre programme et nous nous occupons du reste. Vous repartez avec une équipe ressourcée.',
      },
    ],
    highlights: [
      { icon: 'villa', title: 'Espaces modulables', text: 'Salons et salle à manger adaptés au travail en groupe.' },
      { icon: 'pool', title: 'Pauses au grand air', text: 'Jardin et piscine pour souffler entre deux sessions.' },
      { icon: 'cuisine', title: 'Repas inclus', text: 'Déjeuner et pauses préparés sur place.' },
    ],
    gallery: [
      '/images/farm/salle-manger.jpg',
      '/images/farm/sejour-pano.jpg',
      '/images/farm/salon.jpg',
      '/images/farm/terrasse-repas.jpg',
      '/images/farm/salon-slab.jpg',
      '/images/farm/facade.jpg',
    ],
    metaTitle: 'Séminaire d\'entreprise à la campagne près de Rabat',
    metaDescription:
      'Organisez votre séminaire d\'équipe à Farm Eden, à 45 minutes de Rabat. Espaces de travail au calme, jardin, piscine et repas marocains préparés sur place.',
    cta: {
      title: 'Offrez à votre équipe une vraie respiration',
      text: 'Indiquez-nous votre date, votre effectif et vos besoins. Nous vous envoyons un devis adapté.',
      label: 'Demander un devis',
    },
    wa: 'seminaire',
  },
  {
    slug: 'anniversaire',
    title: 'Anniversaire et fêtes',
    tag: 'Événement',
    subtitle: 'Célébrer dans un cadre qui vous ressemble',
    cardImage: '/images/farm/terrasse-repas.jpg',
    cardDescription:
      'Anniversaire, fiançailles ou réunion de famille, la ferme se privatise pour l\'occasion. La décoration, le traiteur et l\'animation s\'organisent selon vos envies.',
    heroImage: '/images/farm/terrasse-repas.jpg',
    heroKicker: 'Fêtes et anniversaires',
    intro:
      'Une belle fête a besoin d\'un lieu qui lui ressemble. Farm Eden met à votre disposition un grand jardin, des terrasses et des salons marocains pour recevoir vos invités. Vous célébrez dans un cadre privé, sans contrainte de voisinage.',
    story: [
      {
        title: 'Un décor naturel pour vos célébrations',
        body: 'Le jardin verdoyant et la piscine créent une toile de fond élégante pour vos photos et vos moments forts. Les terrasses couvertes accueillent le buffet et les tablées. Tout est réuni pour une fête réussie.',
      },
      {
        title: 'Une fête à votre image',
        body: 'Vous choisissez la décoration, le traiteur et l\'animation qui correspondent à l\'occasion. Notre équipe vous accompagne dans l\'organisation. Chaque détail se règle à l\'avance pour que la journée se déroule sans accroc.',
      },
      {
        title: 'De la place pour tous vos invités',
        body: 'Les espaces extérieurs reçoivent confortablement un grand nombre de convives. Les enfants profitent du jardin pendant que les adultes se retrouvent à table. Personne ne se sent à l\'étroit.',
      },
    ],
    highlights: [
      { icon: 'villa', title: 'Grands espaces', text: 'Jardin, terrasses et salons pour recevoir largement.' },
      { icon: 'cuisine', title: 'Traiteur sur mesure', text: 'Cuisine marocaine et formules adaptées à votre fête.' },
      { icon: 'private', title: 'Lieu privatisé', text: 'La ferme entière réservée pour votre événement.' },
    ],
    gallery: [
      '/images/farm/terrasse-repas.jpg',
      '/images/farm/salon-marocain.jpg',
      '/images/farm/piscine.jpg',
      '/images/farm/terrasse-salon.jpg',
      '/images/farm/jardin-tropical.jpg',
      '/images/farm/daybed.jpg',
    ],
    metaTitle: 'Anniversaire et fêtes privées dans une ferme près de Rabat',
    metaDescription:
      'Privatisez Farm Eden pour un anniversaire ou une fête à 45 minutes de Rabat. Grand jardin, terrasses, salons marocains et traiteur sur mesure.',
    cta: {
      title: 'Donnez à votre fête un cadre à la hauteur',
      text: 'Parlez-nous de votre événement et nous trouvons ensemble la formule idéale.',
      label: 'Organiser mon événement',
    },
    wa: 'evenement',
  },
  {
    slug: 'mariage',
    title: 'Mariage et fiançailles',
    tag: 'Mariage',
    subtitle: 'Le grand jour dans un écrin de verdure',
    cardImage: '/images/farm/palmeraie.jpg',
    cardDescription:
      'Un grand terrain verdoyant, des espaces extérieurs pour de nombreux invités, un traiteur et une décoration sur mesure. Parlez-nous de votre projet et nous construisons la formule idéale.',
    heroImage: '/images/farm/palmeraie.jpg',
    heroKicker: 'Mariage',
    intro:
      'Un mariage se grave dans la mémoire de ceux qui le vivent. Farm Eden offre un cadre naturel et intime pour célébrer votre union près de Rabat. La palmeraie, le jardin et la villa composent un décor authentique et chaleureux.',
    story: [
      {
        title: 'Un cadre naturel et photogénique',
        body: 'La palmeraie, les allées fleuries et la piscine forment un décor élégant pour votre cérémonie. La lumière de la campagne sublime vos photos du matin au soir. Chaque recoin de la propriété raconte une atmosphère.',
      },
      {
        title: 'Un espace pensé pour recevoir',
        body: 'Le grand terrain accueille vos invités en nombre, en intérieur comme en extérieur. Les terrasses et les salons offrent un repli confortable selon la météo. Vous recevez sereinement, sans crainte de manquer de place.',
      },
      {
        title: 'Un accompagnement sur mesure',
        body: 'Nous travaillons avec vous le traiteur, la décoration et le déroulé de la journée. Notre équipe veille à chaque détail pour vous laisser pleinement présents. Vous profitez de votre mariage, nous gérons l\'organisation.',
      },
    ],
    highlights: [
      { icon: 'nature', title: 'Décor de campagne', text: 'Palmeraie, jardin et allées fleuries pour vos photos.' },
      { icon: 'villa', title: 'Grande capacité', text: 'Des espaces extérieurs pour de nombreux invités.' },
      { icon: 'cuisine', title: 'Traiteur et décoration', text: 'Une formule construite autour de votre projet.' },
    ],
    gallery: [
      '/images/farm/palmeraie.jpg',
      '/images/farm/facade.jpg',
      '/images/farm/jardin-tropical.jpg',
      '/images/farm/terrasse-repas.jpg',
      '/images/farm/salon.jpg',
      '/images/farm/allee-palmier.jpg',
    ],
    metaTitle: 'Lieu de mariage et de fiançailles près de Rabat',
    metaDescription:
      'Célébrez votre mariage à Farm Eden, à 45 minutes de Rabat. Palmeraie, grand jardin, espaces extérieurs pour vos invités, traiteur et décoration sur mesure.',
    cta: {
      title: 'Imaginons votre mariage ensemble',
      text: 'Présentez-nous votre projet et nous construisons une formule à la mesure de votre journée.',
      label: 'Discuter de mon projet',
    },
    wa: 'mariage',
  },
  {
    slug: 'retraite-bien-etre',
    title: 'Retraite bien-être',
    tag: 'Bien-être',
    subtitle: 'Déconnexion et ressourcement',
    cardImage: '/images/farm/fleurs-jaunes.jpg',
    cardDescription:
      'Le calme, le grand terrain verdoyant et la piscine privée invitent à une vraie pause. Yoga, méditation ou simple repos, loin du bruit et des écrans.',
    heroImage: '/images/farm/palmeraie.jpg',
    heroKicker: 'Bien-être',
    intro:
      'Le corps et l\'esprit réclament parfois un vrai temps d\'arrêt. Farm Eden offre un environnement naturel propice à la déconnexion, à 45 minutes de Rabat. Le silence, la verdure et l\'eau créent les conditions idéales pour se ressourcer.',
    story: [
      {
        title: 'Un environnement qui apaise',
        body: 'Le terrain de 1,5 hectare entoure la villa de pelouse, de fleurs et de palmiers. Loin de la circulation et des notifications, le rythme ralentit naturellement. On respire mieux dès les premières heures.',
      },
      {
        title: 'Des espaces pour la pratique',
        body: 'Le jardin et les terrasses accueillent vos séances de yoga ou de méditation au lever du jour. La piscine prolonge la détente entre deux moments de pratique. Chaque espace invite au calme et à la lenteur.',
      },
      {
        title: 'Une cuisine saine et locale',
        body: 'Notre équipe prépare des repas marocains à base de produits frais et de saison. Vous composez des menus légers et savoureux à l\'avance. L\'alimentation participe pleinement au ressourcement.',
      },
    ],
    highlights: [
      { icon: 'nature', title: 'Pleine nature', text: 'Un grand terrain verdoyant loin du bruit de la ville.' },
      { icon: 'pool', title: 'Piscine et jardin', text: 'Des espaces calmes pour la pratique et le repos.' },
      { icon: 'cuisine', title: 'Cuisine de saison', text: 'Des repas marocains frais composés avec vous.' },
    ],
    gallery: [
      '/images/farm/daybed.jpg',
      '/images/farm/fleurs-jaunes.jpg',
      '/images/farm/palmeraie.jpg',
      '/images/farm/piscine-arbre.jpg',
      '/images/farm/tortue.jpg',
      '/images/farm/sejour.jpg',
    ],
    metaTitle: 'Retraite bien-être et yoga près de Rabat dans une ferme au calme',
    metaDescription:
      'Organisez votre retraite bien-être à Farm Eden, à 45 minutes de Rabat. Cadre naturel au calme, jardin, piscine privée et cuisine de saison pour vous ressourcer.',
    cta: {
      title: 'Accordez-vous une vraie pause',
      text: 'Dites-nous vos dates et le format de votre retraite. Nous préparons un cadre à la hauteur.',
      label: 'Préparer ma retraite',
    },
    wa: 'reservation',
  },
  {
    slug: 'brunch',
    title: 'Brunch en plein air',
    tag: 'Gastronomie',
    subtitle: 'Un matin gourmand à la campagne',
    cardImage: '/images/farm/terrasse-repas.jpg',
    cardDescription:
      'Msemen, miel, jus frais et fruits de saison composent un brunch marocain généreux, dressé dehors face au jardin. Une belle façon de prendre le temps.',
    heroImage: '/images/farm/terrasse-repas.jpg',
    heroKicker: 'Brunch',
    intro:
      'Un brunch à la campagne a une saveur particulière. Farm Eden dresse une table généreuse en plein air, face au jardin et à la piscine. Vous prenez le temps de savourer, dans un cadre paisible à 45 minutes de Rabat.',
    story: [
      {
        title: 'Une table marocaine et généreuse',
        body: 'Le brunch réunit le meilleur de la tradition marocaine du matin. Msemen tièdes, miel, olives, fromages, jus pressés et fruits de saison se succèdent. Tout est préparé sur place par notre équipe.',
      },
      {
        title: 'Un cadre qui invite à rester',
        body: 'La terrasse couverte et le jardin offrent un décor apaisant pour prolonger le repas. Les enfants profitent de la pelouse et des animaux pendant que les adultes discutent. Le temps semble suspendu.',
      },
      {
        title: 'Une formule adaptée à votre groupe',
        body: 'Le brunch convient aussi bien à une réunion de famille qu\'à un moment entre amis. Vous nous indiquez le nombre de convives et vos préférences. Nous composons une table à votre mesure.',
      },
    ],
    highlights: [
      { icon: 'cuisine', title: 'Brunch marocain', text: 'Une table copieuse préparée sur place.' },
      { icon: 'nature', title: 'Décor de jardin', text: 'Un repas servi en plein air face à la verdure.' },
      { icon: 'villa', title: 'Formule sur mesure', text: 'Une table adaptée à la taille de votre groupe.' },
    ],
    gallery: [
      '/images/farm/terrasse-repas.jpg',
      '/images/farm/cuisine.jpg',
      '/images/farm/pechers.jpg',
      '/images/farm/fleurs-jaunes.jpg',
      '/images/farm/bar.jpg',
      '/images/farm/paon-terrasse.jpg',
    ],
    metaTitle: 'Brunch en plein air près de Rabat dans une ferme avec jardin',
    metaDescription:
      'Réservez un brunch marocain en plein air à Farm Eden, à 45 minutes de Rabat. Table généreuse face au jardin et à la piscine, préparée sur place.',
    cta: {
      title: 'Réservez votre brunch à la ferme',
      text: 'Indiquez-nous la date et le nombre de convives. Nous vous proposons les prochaines disponibilités.',
      label: 'Voir les prochaines dates',
    },
    wa: 'brunch',
  },
];

/** Les 3 expériences mises en avant sur l'accueil */
export const FEATURED_EXPERIENCE_SLUGS = ['sejour-famille', 'seminaire', 'anniversaire'];

export function getExperience(slug: string): Experience | undefined {
  return EXPERIENCES.find((e) => e.slug === slug);
}

/* ─── Journal (blog SEO) ─────────────────────────────────── */
export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;       // ISO
  dateLabel: string;  // affichage
  readingTime: string;
  cover: string;
  coverAlt?: string;
  keyword?: string;
  tag: string;
  metaTitle: string;
  metaDescription: string;
  sections: { heading?: string; paragraphs: string[] }[];
  bodyHtml?: string; // contenu riche (éditeur) ; prioritaire sur sections au rendu
  published?: boolean; // undefined = publié
}

export const POSTS: Post[] = [
  {
    slug: 'louer-ferme-piscine-privee-rabat',
    title: 'Louer une ferme avec piscine privée près de Rabat, le guide complet',
    excerpt:
      'Tout ce qu\'il faut savoir avant de privatiser une ferme avec piscine autour de Rabat. Emplacement, capacité, services et bonnes questions à poser.',
    date: '2026-05-12',
    dateLabel: '12 mai 2026',
    readingTime: '6 min de lecture',
    cover: '/images/farm/piscine.jpg',
    tag: 'Guide',
    metaTitle: 'Louer une ferme avec piscine privée près de Rabat',
    metaDescription:
      'Le guide pour louer une ferme avec piscine privée autour de Rabat. Emplacement, capacité, cuisine, services et conseils pour réussir votre séjour.',
    sections: [
      {
        paragraphs: [
          'Louer une ferme avec piscine privée près de Rabat séduit de plus en plus de familles et de groupes d\'amis. La promesse est simple. Vous quittez la ville pour un cadre verdoyant, sans renoncer au confort ni à l\'intimité. Ce guide réunit les points essentiels pour bien choisir votre lieu.',
        ],
      },
      {
        heading: 'Pourquoi choisir une ferme plutôt qu\'un hôtel',
        paragraphs: [
          'Une ferme privatisée vous donne accès à un espace entier, pas seulement à une chambre. Vous profitez du jardin, de la piscine et des salons sans croiser d\'autres clients. Cette intimité change complètement l\'expérience, surtout en famille ou en groupe.',
          'La campagne autour de Tifelt offre aussi un vrai dépaysement. À seulement 45 minutes de Rabat, vous changez d\'air sans passer des heures sur la route. C\'est l\'équilibre idéal entre évasion et accessibilité.',
        ],
      },
      {
        heading: 'Les questions à poser avant de réserver',
        paragraphs: [
          'Vérifiez d\'abord la capacité réelle du lieu et le nombre de chambres. Demandez si la propriété est entièrement privatisée pendant votre venue. Renseignez-vous sur la cuisine proposée et sur les services inclus comme le ménage ou le petit-déjeuner.',
          'À Farm Eden, la villa entière se réserve pour un seul groupe. Quatre chambres accueillent jusqu\'à douze personnes au calme. Notre équipe prépare la cuisine marocaine sur place et gère l\'intendance.',
        ],
      },
      {
        heading: 'Préparer son séjour sereinement',
        paragraphs: [
          'Une fois le lieu choisi, communiquez vos envies à l\'avance. Les menus, les activités et les éventuelles décorations se préparent mieux en amont. Vous arrivez ainsi l\'esprit léger, prêt à profiter.',
          'Pour réserver Farm Eden, un simple message suffit. Indiquez vos dates et votre nombre de personnes, et nous revenons vers vous avec les disponibilités et le tarif.',
        ],
      },
    ],
  },
  {
    slug: 'idees-seminaire-entreprise-campagne-maroc',
    title: 'Cinq idées pour réussir un séminaire d\'entreprise à la campagne au Maroc',
    excerpt:
      'Un séminaire au vert change la dynamique d\'une équipe. Voici cinq idées concrètes pour organiser une journée productive et conviviale près de Rabat.',
    date: '2026-04-23',
    dateLabel: '23 avril 2026',
    readingTime: '5 min de lecture',
    cover: '/images/farm/sejour-pano.jpg',
    tag: 'Entreprise',
    metaTitle: 'Réussir un séminaire d\'entreprise à la campagne au Maroc',
    metaDescription:
      'Cinq idées pour organiser un séminaire d\'entreprise réussi à la campagne près de Rabat. Cadre au calme, ateliers, repas et moments de cohésion.',
    sections: [
      {
        paragraphs: [
          'Organiser un séminaire loin du bureau aide une équipe à prendre du recul. Le cadre naturel favorise la concentration et les échanges sincères. Voici cinq idées pour tirer le meilleur de votre journée à la campagne.',
        ],
      },
      {
        heading: '1. Alterner travail et respiration',
        paragraphs: [
          'Découpez la journée en sessions courtes entrecoupées de pauses au grand air. Une marche dans le jardin ou un café au bord de la piscine relance l\'attention. Le cerveau travaille mieux quand il souffle régulièrement.',
        ],
      },
      {
        heading: '2. Soigner le déjeuner',
        paragraphs: [
          'Un bon repas partagé renforce la cohésion bien plus qu\'une salle de réunion. Optez pour une cuisine locale préparée sur place. À Farm Eden, le déjeuner marocain se savoure en terrasse, face au jardin.',
        ],
      },
      {
        heading: '3. Prévoir un temps informel',
        paragraphs: [
          'Les meilleures conversations naissent souvent en dehors du programme. Laissez un créneau libre autour de la piscine ou dans les salons. Ces moments détendus révèlent une autre facette de l\'équipe.',
        ],
      },
      {
        heading: '4. Choisir un lieu vraiment privatisé',
        paragraphs: [
          'Un espace réservé à votre seule équipe garantit le calme et la confidentialité. Personne ne vient interrompre vos échanges. La propriété entière de Farm Eden se réserve pour un seul groupe.',
        ],
      },
      {
        heading: '5. Rester proche de la ville',
        paragraphs: [
          'Un lieu accessible évite la fatigue du trajet et facilite la logistique. À 45 minutes de Rabat, Farm Eden combine dépaysement et proximité. Vous changez de décor sans perdre une demi-journée sur la route.',
        ],
      },
    ],
  },
  {
    slug: 'que-faire-autour-rabat-nature',
    title: 'Que faire autour de Rabat pour une escapade nature le temps d\'un week-end',
    excerpt:
      'La région de Rabat regorge de coins verts à découvrir. Tour d\'horizon des idées d\'escapade nature, de la campagne de Tifelt aux plaisirs simples du plein air.',
    date: '2026-03-30',
    dateLabel: '30 mars 2026',
    readingTime: '4 min de lecture',
    cover: '/images/farm/palmeraie.jpg',
    tag: 'Découverte',
    metaTitle: 'Que faire autour de Rabat pour une escapade nature',
    metaDescription:
      'Idées d\'escapade nature autour de Rabat. Découvrez la campagne de Tifelt, ses fermes verdoyantes et les plaisirs du plein air à moins d\'une heure de la ville.',
    sections: [
      {
        paragraphs: [
          'Rabat offre bien plus que sa médina et son littoral. Dès qu\'on s\'éloigne un peu, la campagne dévoile des paysages verdoyants et apaisants. Voici quelques idées pour une escapade nature à portée de route.',
        ],
      },
      {
        heading: 'Respirer dans la campagne de Tifelt',
        paragraphs: [
          'La région de Tifelt, à 45 minutes de Rabat, déroule des champs, des palmeraies et des fermes paisibles. C\'est une destination idéale pour échapper à l\'agitation urbaine. On y retrouve le rythme lent de la campagne marocaine.',
        ],
      },
      {
        heading: 'Profiter d\'une ferme privatisée',
        paragraphs: [
          'Privatiser une ferme reste la meilleure façon de savourer cette nature en toute intimité. Vous avez la piscine, le jardin et les animaux pour vous seuls. Farm Eden propose exactement ce cadre, à quelques minutes de Tifelt.',
        ],
      },
      {
        heading: 'Renouer avec les plaisirs simples',
        paragraphs: [
          'Une baignade au soleil, un repas marocain en plein air, une partie de jeux sur la pelouse. Les plaisirs simples prennent une autre dimension loin de la ville. C\'est souvent de ces moments que naissent les meilleurs souvenirs.',
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/* ─── Témoignages ────────────────────────────────────────── */
export const TESTIMONIALS = [
  {
    text: 'Nous avons passé un séjour magnifique. Les enfants ont adoré la piscine et les animaux. La cuisine préparée sur place était vraiment délicieuse.',
    name: 'Salma R.',
    from: 'Casablanca',
    stars: 5,
  },
  {
    text: 'Parfait pour notre séminaire. Beaucoup d\'espace, un cadre agréable et une équipe très sympathique. Nous avons travaillé dans d\'excellentes conditions.',
    name: 'Karim B.',
    from: 'Rabat',
    stars: 5,
  },
  {
    text: 'La meilleure ferme avec piscine que j\'ai trouvée près de Rabat. Propre, bien entretenue et vraiment privée. Nous reviendrons sans hésiter.',
    name: 'Nadia M.',
    from: 'Rabat',
    stars: 5,
  },
];

/* ─── FAQ ────────────────────────────────────────────────── */
export const FAQ = [
  {
    q: 'Qu\'est-ce qu\'on loue exactement ?',
    a: 'Vous louez toute la ferme. La villa et ses quatre chambres, la piscine, le jardin et tous les espaces sont à vous. Il n\'y a aucun autre client pendant votre venue.',
  },
  {
    q: 'C\'est loin de Rabat ?',
    a: 'Non, il faut compter environ 45 minutes de route. La ferme se trouve à Ain Johra, près de Tifelt, dans la région Rabat-Salé-Kénitra. Nous vous envoyons les coordonnées GPS exactes à la réservation.',
  },
  {
    q: 'Combien de personnes peut-on être ?',
    a: 'La ferme accueille confortablement jusqu\'à 12 personnes, entre les chambres et les espaces supplémentaires.',
  },
  {
    q: 'Est-ce qu\'on peut manger sur place ?',
    a: 'Oui. Notre équipe propose la cuisine marocaine traditionnelle comme le tagine, le couscous et le méchoui. Le petit-déjeuner et le service de ménage sont disponibles selon vos besoins.',
  },
  {
    q: 'Comment réserver ?',
    a: 'Tout se fait sur WhatsApp. Envoyez-nous vos dates et votre nombre de personnes, et nous vous répondons rapidement avec les disponibilités et le tarif.',
  },
  {
    q: 'Peut-on organiser un mariage ou une grande fête ?',
    a: 'Oui, la ferme se privatise pour tous les événements. Contactez-nous pour en discuter et nous trouvons ensemble la formule qui vous convient.',
  },
];

/* ─── Galerie (rubriques par défaut, éditables via /admin) ── */
export interface GalleryPhoto { id: string; src: string; alt: string; }
export interface GalleryRubric { id: string; label: string; desc: string; photos: GalleryPhoto[]; }

export const DEFAULT_GALLERY: GalleryRubric[] = [
  {
    id: 'villa',
    label: 'La villa',
    desc: 'Une maison marocaine authentique avec quatre chambres, deux salons, une cuisine équipée et de larges terrasses.',
    photos: [
      { id: 'v1', src: '/images/farm/salon.jpg', alt: 'Salon principal sous une arche en pierre' },
      { id: 'v2', src: '/images/farm/sejour.jpg', alt: 'Séjour avec baie vitrée sur le jardin' },
      { id: 'v3', src: '/images/farm/salon-marocain.jpg', alt: 'Salon marocain ouvert sur la cuisine' },
      { id: 'v4', src: '/images/farm/salle-manger.jpg', alt: 'Salle à manger sous arche en pierre' },
      { id: 'v5', src: '/images/farm/cuisine.jpg', alt: 'Cuisine avec bar en bois rustique' },
      { id: 'v6', src: '/images/farm/couloir.jpg', alt: 'Couloir voûté de la villa' },
      { id: 'v7', src: '/images/farm/chambre-double.jpg', alt: 'Chambre double lumineuse' },
      { id: 'v8', src: '/images/farm/chambre-master.jpg', alt: 'Chambre principale aux tons chauds' },
      { id: 'v9', src: '/images/farm/sdb-doree.jpg', alt: 'Salle de bain en pierre dorée' },
    ],
  },
  {
    id: 'piscine',
    label: 'Piscine et terrasses',
    desc: 'Une grande piscine privée entourée de pelouse et de palmiers, prolongée par des terrasses ombragées.',
    photos: [
      { id: 'p1', src: '/images/farm/piscine.jpg', alt: 'Piscine privée et palmiers' },
      { id: 'p2', src: '/images/farm/piscine-turquoise.jpg', alt: 'Piscine turquoise au milieu des arbres' },
      { id: 'p3', src: '/images/farm/piscine-arbre.jpg', alt: 'Piscine à l\'ombre d\'un arbre' },
      { id: 'p4', src: '/images/farm/terrasse-piscine.jpg', alt: 'Banquette de terrasse face à la piscine' },
      { id: 'p5', src: '/images/farm/terrasse-repas.jpg', alt: 'Terrasse de repas couverte' },
      { id: 'p6', src: '/images/farm/terrasse-salon.jpg', alt: 'Salon de terrasse avec coussins zellige' },
      { id: 'p7', src: '/images/farm/daybed.jpg', alt: 'Lit gazebo posé sur la pelouse' },
      { id: 'p8', src: '/images/farm/facade.jpg', alt: 'Façade et entrée principale de la villa' },
    ],
  },
  {
    id: 'jardin',
    label: 'Jardin et nature',
    desc: 'Un terrain de 1,5 hectare planté de palmiers, d\'arbres fruitiers et de fleurs, avec beaucoup d\'ombre et de calme.',
    photos: [
      { id: 'j1', src: '/images/farm/palmeraie.jpg', alt: 'Palmeraie et prairie sous un ciel bleu' },
      { id: 'j2', src: '/images/farm/jardin-tropical.jpg', alt: 'Allée dallée dans le jardin tropical' },
      { id: 'j3', src: '/images/farm/allee-palmier.jpg', alt: 'Allée bordée de palmiers' },
      { id: 'j4', src: '/images/farm/allee.jpg', alt: 'Allée dallée vers la villa et le bananier' },
      { id: 'j5', src: '/images/farm/fleurs-jaunes.jpg', alt: 'Tapis de fleurs jaunes au printemps' },
      { id: 'j6', src: '/images/farm/pechers.jpg', alt: 'Pêchers en fruits dans le champ fleuri' },
    ],
  },
  {
    id: 'animaux',
    label: 'Les animaux',
    desc: 'Paons, chèvres, lapins et tortues vivent en liberté sur la propriété. Les enfants adorent les observer.',
    photos: [
      { id: 'a1', src: '/images/farm/paon-facade.jpg', alt: 'Paon devant la façade de la villa' },
      { id: 'a2', src: '/images/farm/paon-terrasse.jpg', alt: 'Paon sur la terrasse en bois' },
      { id: 'a3', src: '/images/farm/paon-coqs.jpg', alt: 'Paon et coqs en liberté' },
      { id: 'a4', src: '/images/farm/chevre.jpg', alt: 'Chèvre et chevreau de la ferme' },
      { id: 'a5', src: '/images/farm/tortue.jpg', alt: 'Tortue parmi les fleurs sauvages' },
    ],
  },
];

/* ─── Navigation ─────────────────────────────────────────── */
export const NAV_LINKS = [
  { label: 'La Ferme',    href: '/la-ferme' },
  { label: 'Expériences', href: '/experiences' },
  { label: 'Photos',      href: '/galerie' },
  { label: 'Contact',     href: '/contact' },
];
