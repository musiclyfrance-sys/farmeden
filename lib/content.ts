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
    "slug": "louer-ferme-piscine-privee-rabat",
    "title": "Ferme avec piscine privée près de Rabat : le guide",
    "excerpt": "Envie de nature, de calme et de baignade entre proches ? Voici comment louer une ferme avec piscine privée tout près de Rabat, sereinement.",
    "date": "2026-05-12",
    "dateLabel": "12 mai 2026",
    "readingTime": "4 min de lecture",
    "cover": "/images/farm/piscine.jpg",
    "coverAlt": "Ferme avec piscine privée et jardin verdoyant près de Rabat",
    "keyword": "ferme avec piscine privée",
    "tag": "Guide",
    "metaTitle": "Ferme avec piscine privée près de Rabat : le guide",
    "metaDescription": "Découvrez comment louer une ferme avec piscine privée près de Rabat : ce que vous réservez, les questions à poser et nos conseils pour préparer votre venue.",
    "sections": [],
    "bodyHtml": "<p>Quitter l'agitation de la ville pour retrouver le chant des oiseaux, l'odeur de la terre humide et le reflet du ciel dans l'eau : c'est exactement ce que promet une <strong>ferme avec piscine privée</strong> près de Rabat. Imaginez un lieu rien que pour vous et vos proches, où les enfants courent pieds nus dans l'herbe pendant que les grands savourent un thé à l'ombre. À Ain Johra, dans la commune de Tiflet, à 45 minutes de Rabat, ce rêve devient une adresse bien réelle.</p>\n\n<h2>Pourquoi choisir une ferme avec piscine privée près de Rabat ?</h2>\n<p>Un hôtel, aussi confortable soit-il, reste un espace partagé. Les couloirs, la piscine, le petit-déjeuner : tout se vit au milieu d'inconnus. Une <strong>ferme avec piscine privée</strong> renverse complètement cette logique. Ici, vous êtes chez vous. Le jardin, le bassin, la cuisine et les chambres sont privatisés pour votre groupe uniquement.</p>\n<p>Cette intimité change tout. Vous fixez vos propres rythmes, vous laissez les enfants se baigner sans surveiller le regard des autres, vous organisez un déjeuner familial sans contrainte d'horaire. La nature fait le reste : un jardin de 1,5 hectare, des animaux en liberté et un grand ciel dégagé loin de la pollution urbaine. C'est le luxe simple d'un lieu authentique, à deux pas de la capitale.</p>\n\n<h2>Ce que vous louez exactement</h2>\n<p>Quand vous réservez une ferme de ce type, vous ne louez pas une simple chambre. Vous privatisez un véritable domaine. Chez Farm Eden, la <strong>villa entière</strong> est à vous, avec un accueil pensé pour les familles comme pour les groupes d'amis. Voici ce que comprend le séjour :</p>\n<ul>\n<li><strong>La villa privatisée</strong> dans son intégralité, capable d'accueillir jusqu'à 12 personnes en toute tranquillité.</li>\n<li><strong>La piscine privée</strong>, réservée à votre groupe, parfaite pour les baignades en famille ou les après-midis paresseux.</li>\n<li><strong>Une cuisine marocaine</strong> généreuse et faite maison, qui met à l'honneur les saveurs du terroir.</li>\n<li><strong>Un jardin de 1,5 hectare</strong>, avec des espaces à l'ombre, des coins pour jouer et des animaux qui vivent en liberté.</li>\n<li><strong>Le calme absolu</strong> de la campagne d'Ain Johra, sans vis-à-vis ni voisinage bruyant.</li>\n</ul>\n<p>Pour découvrir en détail le domaine, les espaces de vie et l'esprit du lieu, prenez le temps de <a href=\"/la-ferme\">parcourir la présentation complète de notre ferme</a>. Vous y verrez à quoi ressemble vraiment l'expérience avant même d'arriver.</p>\n\n<h2>Les bonnes questions à poser avant de réserver</h2>\n<p>Louer un lieu privé mérite quelques vérifications simples. Avant de confirmer, posez les questions qui comptent vraiment pour vous et votre groupe :</p>\n<ul>\n<li><strong>La privatisation est-elle totale ?</strong> Assurez-vous que la piscine et le jardin sont exclusivement réservés à votre groupe, sans partage.</li>\n<li><strong>Combien de personnes le lieu accueille-t-il ?</strong> Vérifiez la capacité maximale pour que chacun soit installé confortablement.</li>\n<li><strong>Les repas sont-ils inclus ou préparés sur place ?</strong> La cuisine maison fait souvent toute la différence d'un séjour réussi.</li>\n<li><strong>Le cadre est-il adapté aux enfants ?</strong> Les espaces ombragés, les animaux et la sécurité autour du bassin sont des points clés.</li>\n<li><strong>Comment se déroule la réservation ?</strong> Chez Farm Eden, tout se fait simplement par WhatsApp, avec un contact humain et réactif.</li>\n</ul>\n\n<h2>Comment préparer sa venue dans une ferme avec piscine privée</h2>\n<p>Une fois la réservation confirmée, quelques préparatifs rendent l'arrivée encore plus douce. Pensez à prévoir maillots de bain, serviettes et crème solaire pour profiter pleinement de la piscine. Un chapeau et des chaussures confortables vous accompagneront dans les allées du jardin.</p>\n<p>Anticipez aussi le trajet : depuis Rabat, la route vers Ain Johra est directe et agréable, et l'arrivée à la campagne se savoure dès les derniers kilomètres. Si vous voyagez avec des enfants, prévoyez de quoi les occuper en extérieur, même si la <strong>ferme avec piscine privée</strong> leur offrira déjà mille découvertes entre les animaux en liberté et les grands espaces verts.</p>\n<p>Enfin, échangez en amont sur vos envies de repas. La cuisine marocaine maison peut s'adapter à vos goûts et au nombre de convives. Plus vous partagez vos attentes tôt, plus le séjour sera taillé sur mesure pour votre groupe.</p>\n\n<h2>Un cadre pensé pour les vrais moments ensemble</h2>\n<p>Au fond, ce que l'on vient chercher dans une <strong>ferme avec piscine privée</strong>, c'est du temps de qualité. Du temps pour rire autour d'une table, pour plonger dans l'eau fraîche, pour regarder les enfants jouer et pour respirer un air pur. À Ain Johra, tout est réuni pour cela, dans un écrin de verdure protégé, à quelques minutes seulement de Rabat. Il ne vous reste plus qu'à choisir vos dates et à écrire un message pour réserver votre escapade.</p>",
    "published": true
  },
  {
    "slug": "idees-seminaire-entreprise-campagne-maroc",
    "title": "Séminaire d'entreprise à la campagne près de Rabat",
    "excerpt": "Des idées concrètes pour réussir un séminaire d'entreprise à la campagne près de Rabat, entre travail au calme, repas soignés et lieu privatisé.",
    "date": "2026-04-23",
    "dateLabel": "23 avril 2026",
    "readingTime": "3 min de lecture",
    "cover": "/images/farm/sejour-pano.jpg",
    "coverAlt": "Ferme avec piscine et jardin accueillant un séminaire d'entreprise à la campagne près de Rabat",
    "keyword": "séminaire d'entreprise",
    "tag": "Entreprise",
    "metaTitle": "Séminaire d'entreprise à la campagne près de Rabat",
    "metaDescription": "Organisez un séminaire d'entreprise à la campagne près de Rabat : nos idées pour alterner travail et respiration, soigner les repas et choisir un lieu privatisé.",
    "sections": [],
    "bodyHtml": "<p>Réunir une équipe loin du bureau change tout. Un <strong>séminaire d'entreprise</strong> à la campagne offre cette respiration rare où les idées circulent autrement, où les conversations se prolongent et où chacun retrouve l'envie de construire ensemble. À Farm Eden, ferme avec piscine privée nichée à Ain Johra, dans la commune de Tiflet, vous profitez d'un cadre apaisant à seulement 45 minutes de Rabat. Voici nos idées pour transformer ce moment en véritable réussite collective.</p>\n\n<h2>Pourquoi organiser un séminaire d'entreprise à la campagne ?</h2>\n<p>Le bureau impose ses automatismes : les notifications, les couloirs, les réunions qui s'enchaînent. À la campagne, le rythme ralentit et l'attention revient. Le silence des champs, le jardin de 1,5 hectare et les animaux en liberté créent une atmosphère propice à la réflexion comme à la complicité. Loin de l'agitation urbaine, les équipes se parlent vraiment, prennent du recul et reviennent avec des décisions plus mûres. Choisir la nature, c'est offrir un terrain neutre où chacun se livre plus volontiers.</p>\n\n<h2>Alterner temps de travail et moments de respiration</h2>\n<p>Un programme dense épuise plus qu'il ne mobilise. La clé d'un <strong>séminaire d'entreprise</strong> efficace tient dans l'équilibre. Séquencez les ateliers de travail avec de vraies pauses, dans le jardin ou au bord de la piscine. Une marche entre deux sessions, un café partagé sous les arbres, une baignade en fin de programme : ces respirations relancent l'énergie et la créativité.</p>\n<ul>\n<li><strong>Sessions de travail</strong> au calme, dans des espaces lumineux et privatisés.</li>\n<li><strong>Pauses au grand air</strong> pour reposer l'esprit et libérer la parole.</li>\n<li><strong>Activités douces</strong> autour de la piscine et dans le jardin pour souder l'équipe.</li>\n</ul>\n\n<h2>Soigner les repas, un levier sous-estimé</h2>\n<p>On néglige souvent ce point, à tort. Autour d'une table généreuse, les barrières tombent et les liens se renforcent. La cuisine marocaine de Farm Eden, préparée avec des produits frais, transforme chaque repas en moment de partage. Un tajine fumant, des saveurs authentiques et une table dressée dans le jardin valent tous les exercices de cohésion. Vos collaborateurs s'en souviendront longtemps, et c'est précisément l'effet recherché.</p>\n\n<h2>Prévoir des temps informels pour souder l'équipe</h2>\n<p>Les meilleures conversations naissent rarement en réunion. Elles surgissent autour d'un feu le soir, lors d'une partie improvisée ou pendant une promenade entre les oliviers. Laissez de l'espace dans le programme pour ces instants non planifiés. C'est là que se créent la confiance et les complicités qui dureront bien après le retour au travail. Un cadre privatisé rend ces moments naturels et spontanés.</p>\n\n<h2>Choisir un lieu vraiment privatisé et proche de la ville</h2>\n<p>Pour qu'une équipe se sente libre, elle a besoin d'être chez elle. Farm Eden se privatise entièrement, villa comprise, pour accueillir jusqu'à 12 personnes. Pas de voisins, pas de regards extérieurs : seulement votre groupe, le jardin et la piscine. Cette intimité libère la parole et renforce le sentiment d'appartenance. Pour découvrir comment nous accompagnons votre projet, explorez notre <a href=\"/experiences/seminaire\">offre dédiée aux séminaires en pleine nature</a>.</p>\n<p>La proximité avec Rabat est un atout décisif. À 45 minutes de la ville, le trajet reste court et l'organisation simple. Vos équipes arrivent reposées, sans logistique pesante, et basculent immédiatement dans l'ambiance du lieu. Vous gagnez ce dépaysement précieux tout en restant accessible pour ceux qui viennent de la capitale.</p>\n\n<h2>Composer un séminaire à votre image</h2>\n<p>Chaque entreprise a sa culture, ses objectifs et son rythme. Un bon programme respecte cette singularité. Définissez en amont vos priorités : renforcer la cohésion, lancer une nouvelle stratégie, célébrer une réussite. Adaptez ensuite les ateliers, les repas et les temps libres en conséquence. À Farm Eden, le cadre se prête à toutes les ambitions, du travail concentré à la fête conviviale au bord de l'eau.</p>\n<p>Un <strong>séminaire d'entreprise</strong> réussi laisse une empreinte durable : des décisions claires, des liens renforcés et le souvenir partagé d'un moment hors du commun. La campagne près de Rabat offre ce mélange rare d'efficacité et de douceur de vivre. Pour imaginer ensemble votre prochain rendez-vous d'équipe, contactez-nous simplement par <strong>WhatsApp</strong>, et composons un programme à votre mesure.</p>",
    "published": true
  },
  {
    "slug": "que-faire-autour-rabat-nature",
    "title": "Que faire autour de Rabat : notre escapade nature",
    "excerpt": "Envie de vert et de calme près de la capitale ? Voici nos idées d'escapade nature pour respirer, ralentir et renouer avec les plaisirs simples à la campagne.",
    "date": "2026-03-30",
    "dateLabel": "30 mars 2026",
    "readingTime": "4 min de lecture",
    "cover": "/images/farm/palmeraie.jpg",
    "coverAlt": "Jardin verdoyant et piscine d'une ferme à la campagne, idée de que faire autour de Rabat dans la nature",
    "keyword": "que faire autour de Rabat",
    "tag": "Découverte",
    "metaTitle": "Que faire autour de Rabat : notre escapade nature",
    "metaDescription": "Découvrez que faire autour de Rabat pour une escapade nature : campagne de Tiflet, ferme privatisée avec piscine, calme et plaisirs simples loin de la ville.",
    "sections": [],
    "bodyHtml": "<p>Vous cherchez à savoir <strong>que faire autour de Rabat</strong> quand l'envie de verdure et de silence se fait sentir ? La capitale a beaucoup de charme, mais il vient un moment où l'on rêve d'horizons plus doux, de matins lents et d'un ciel sans béton. La bonne nouvelle, c'est que la vraie campagne marocaine commence à quelques kilomètres de la ville, du côté de Tiflet. Ici, on troque le bruit contre le chant des oiseaux et l'agitation contre la lenteur retrouvée.</p>\n\n<h2>Cap sur la campagne de Tiflet pour respirer</h2>\n<p>À <strong>45 minutes de Rabat</strong>, la région d'Ain Johra déroule ses champs, ses oliviers et ses collines paisibles. C'est une campagne authentique, encore préservée, où la lumière du soir donne aux paysages des teintes dorées. On y vient pour ralentir, pour marcher dans la nature, pour écouter le vent dans les arbres et pour réapprendre à ne rien faire. Loin des circuits touristiques saturés, cette campagne offre exactement ce que l'on recherche : de l'espace, du vert et du calme.</p>\n<p>Sur place, les plaisirs sont simples et vrais. Vous pouvez vous promener entre les arbres fruitiers, observer les animaux qui vivent en liberté, ou simplement vous installer à l'ombre avec un thé à la menthe. La campagne de Tiflet est une invitation à la déconnexion, celle que beaucoup de citadins cherchent sans toujours savoir où la trouver.</p>\n\n<h2>Privatiser une ferme : l'idée d'escapade nature par excellence</h2>\n<p>Parmi toutes les options, privatiser une ferme reste la plus belle façon de vivre la campagne pleinement. À Farm Eden, vous réservez la <strong>villa entière</strong>, rien que pour vous et vos proches. Pas de voisins, pas de regards, juste votre tribu et un cadre qui vous appartient le temps de votre séjour. C'est l'endroit idéal pour se retrouver en famille ou entre amis, avec la liberté de vivre à votre rythme.</p>\n<p>Découvrez <a href=\"/la-ferme\">notre ferme avec piscine privée à Ain Johra</a>, pensée pour accueillir jusqu'à 12 personnes dans une atmosphère chaleureuse. Le décor mêle l'authenticité de la campagne au confort d'une maison soignée. Voici ce qui rend l'expérience unique :</p>\n<ul>\n<li><strong>Une piscine privée</strong> où plonger en toute intimité, sans partager le bassin avec personne.</li>\n<li><strong>Un jardin de 1,5 hectare</strong>, vaste terrain de jeu pour les enfants et havre de paix pour les adultes.</li>\n<li><strong>Des animaux en liberté</strong> qui ravissent petits et grands et reconnectent à la vie simple.</li>\n<li><strong>Une cuisine marocaine généreuse</strong>, préparée avec des produits frais et des saveurs du terroir.</li>\n</ul>\n<p>Privatiser un lieu, c'est s'offrir le luxe de la tranquillité. On se lève quand on veut, on déjeune dehors, on laisse les enfants courir librement et on savoure chaque instant sans contrainte.</p>\n\n<h2>Alors, que faire autour de Rabat pour se ressourcer ?</h2>\n<p>Se ressourcer ne demande pas grand-chose, seulement un cadre apaisant et la volonté de ralentir. À la campagne, les gestes simples reprennent toute leur valeur. Voici quelques idées pour renouer avec l'essentiel :</p>\n<ul>\n<li>Prendre un <strong>petit-déjeuner au grand air</strong>, face au jardin, avec du pain maison et du miel local.</li>\n<li>Nager dans la piscine privée puis s'allonger au soleil, sans aucune montre à surveiller.</li>\n<li>Partager un repas marocain convivial autour d'une grande table, à l'ombre des arbres.</li>\n<li>Observer les étoiles le soir, loin de la pollution lumineuse de la ville.</li>\n<li>Marcher dans la nature environnante et redécouvrir le plaisir du silence.</li>\n</ul>\n<p>Ce sont ces petits bonheurs qui font la différence. La nature offre un vrai repos, celui qui détend le corps et apaise l'esprit. La réponse à cette question tient souvent dans la simplicité d'une journée à la ferme.</p>\n\n<h2>Comment organiser votre escapade nature</h2>\n<p>Tout est pensé pour que votre venue soit fluide et sereine. Vous choisissez votre période librement, vous arrivez les bras chargés d'envies et vous repartez ressourcés. La <strong>réservation se fait par WhatsApp</strong>, simplement, avec un échange direct et chaleureux pour préparer votre séjour selon vos souhaits.</p>\n<p>Que vous veniez en famille, entre amis ou pour célébrer une occasion spéciale, la campagne de Tiflet et Farm Eden vous accueillent dans un esprit de partage et de douceur de vivre. Alors, la prochaine fois que vous penserez à <strong>que faire autour de Rabat</strong>, imaginez le vert, le calme et les plaisirs simples qui vous attendent à quelques minutes de la capitale.</p>",
    "published": true
  }
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
