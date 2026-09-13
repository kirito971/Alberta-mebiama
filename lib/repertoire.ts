export type Demo = {
  id: string;
  number: string;
  title: string;
  category: string;
  tag: "Jeunesse" | "Animation" | "Publicité" | "Institutionnel";
  description: string;
  image: string;
  imageAlt: string;
  audio: string;
  featured: boolean;
};

export const demos: Demo[] = [
  {
    id: "garcon",
    number: "01",
    title: "Le garçon curieux",
    category: "Doublage, en français — un enfant de 12 ans",
    tag: "Jeunesse",
    description:
      "Un enfant vif et un peu espiègle. Registre naturel, sans forcer le timbre.",
    image: "/images/repertoire/01-garcon.png",
    imageAlt: "Illustration d'un jeune garçon aventurier, personnage du Garçon curieux",
    audio: "/audio/01-garcon.m4a",
    featured: true,
  },
  {
    id: "fillette",
    number: "02",
    title: "La fillette espiègle",
    category: "Doublage — voix de fillette de 5 ans, expression française",
    tag: "Jeunesse",
    description:
      "Une voix espiègle et pétillante, mignonne et douce dans le timbre. Registre naturel, sans forcer le ton.",
    image: "/images/repertoire/02-fillette.png",
    imageAlt: "Illustration d'une petite fille, personnage de La fillette espiègle",
    audio: "/audio/02-fillette.m4a",
    featured: false,
  },
  {
    id: "foret",
    number: "03",
    title: "La voix de la forêt",
    category: "Animation — une narratrice, trois personnages",
    tag: "Animation",
    description:
      "Une narratrice qui prête sa voix à trois personnages différents dans la même scène, pensé pour l'animation jeunesse.",
    image: "/images/repertoire/03-foret.png",
    imageAlt: "Illustration d'une fée, d'un panda et d'un jeune aventurier, personnages de La voix de la forêt",
    audio: "/audio/03-foret.m4a",
    featured: true,
  },
  {
    id: "automobile",
    number: "04",
    title: "Sur la route",
    category: "Publicité automobile",
    tag: "Publicité",
    description: "Énergie et conviction, pensées pour convaincre à l'oral.",
    image: "/images/repertoire/04-automobile.png",
    imageAlt: "Illustration liée à la publicité automobile Sur la route",
    audio: "/audio/04-automobile.m4a",
    featured: true,
  },
  {
    id: "aeroport",
    number: "05",
    title: "Embarquement immédiat",
    category: "Annonce institutionnelle — aéroport international",
    tag: "Institutionnel",
    description: "Clarté et autorité posée, sans froideur.",
    image: "/images/repertoire/05-aeroport.png",
    imageAlt: "Illustration d'une hôtesse d'aéroport, personnage de Embarquement immédiat",
    audio: "/audio/05-aeroport.m4a",
    featured: false,
  },
  {
    id: "grandmeres",
    number: "06",
    title: "La voix des grands-mères", // PLACEHOLDER — titre proposé, à valider
    category: "Doublage — voix de grand-mère, ton chaleureux et malicieux",
    tag: "Animation",
    description:
      "Une grand-mère attachante, un brin espiègle, qui aime raconter ses histoires avec tendresse.", // PLACEHOLDER — à valider
    image: "/images/repertoire/07-grandmeres.png",
    imageAlt: "Illustration d'une grand-mère souriante, personnage de La voix des grands-mères",
    audio: "/audio/07-grandmeres.m4a",
    featured: false,
  },
  {
    id: "antenne",
    number: "07",
    title: "Soirée Aventure",
    category: "Habillage antenne — émission thématique",
    tag: "Publicité",
    description:
      "Un ton dynamique et engageant, pensé pour capter l'attention entre deux programmes.", // PLACEHOLDER — à valider
    image: "/images/repertoire/08-antenne.png",
    imageAlt: "Illustration d'une présentatrice avec un micro, personnage de Soirée Aventure",
    audio: "/audio/08-antenne.m4a",
    featured: false,
  },
  {
    id: "livre-audio",
    number: "08",
    title: "Il était une fois", // PLACEHOLDER — titre proposé, à valider
    category: "Livre audio — narration pour enfants",
    tag: "Jeunesse",
    description:
      "Une narration douce et enveloppante, pensée pour accompagner les tout-petits jusqu'au sommeil.", // PLACEHOLDER — à valider
    image: "/images/repertoire/09-livre-audio.png",
    imageAlt: "Illustration d'une jeune femme assise lisant un livre, personnage de Il était une fois",
    audio: "/audio/09-livre-audio.m4a",
    featured: false,
  },
];

export const featuredDemos = demos.filter((d) => d.featured);

// --- Placeholder content, clearly flagged for Alberta to confirm/replace ---
// See PLACEHOLDERS.md for the full list of invented figures and text.

export const heroStats = [
  { value: "5 ans", label: "d'expérience" }, // réel — confirmé par Alberta
  { value: "7-10", label: "univers vocaux" }, // réel — confirmé par Alberta
];

export const trustStats = [
  { value: "2", label: "langues (FR/EN)" }, // réel
  { value: "5 ans", label: "d'expérience" }, // réel — confirmé par Alberta
];

export const skillTicker = [
  "Doublage",
  "Voix off",
  "Animation",
  "Publicité",
  "Institutionnel",
  "Jeunesse",
  "Français",
  "Anglais",
];

export const universes = [
  {
    id: "jeunesse",
    title: "Doublage jeunesse",
    description: "Voix d'enfants, personnages animés, registre naturel et vif.",
    image: "/images/universes/jeunesse.png",
    imageAlt: "Illustration d'un jeune garçon aventurier",
    tag: "Jeunesse" as const,
    highlighted: false,
    fade: "bottom" as const,
  },
  {
    id: "animation",
    title: "Animation",
    description: "Narration et personnages multiples au sein d'une même scène.",
    image: "/images/universes/animation.png",
    imageAlt: "Illustration d'une fée, d'un panda et d'un jeune aventurier",
    tag: "Animation" as const,
    highlighted: true,
    fade: "top" as const,
  },
  {
    id: "pub-institutionnel",
    title: "Publicité & institutionnel",
    description: "Conviction à l'oral pour la publicité, clarté posée pour l'institutionnel.",
    image: "/images/universes/pub-institutionnel.png",
    imageAlt: "Illustration liée à la publicité automobile",
    tag: "Publicité" as const,
    highlighted: false,
    fade: "bottom" as const,
  },
];

export const skillsDetail = [
  {
    title: "Séries et dessins animés",
    text: "Enfants, ados, adultes, personnages secondaires ou principaux.",
  },
  {
    title: "Films et longs-métrages d'animation",
    text: "Héros, méchants, figurants, voix de groupe.",
  },
  {
    title: "Publicités et spots",
    text: "Radio, TV, web, réseaux sociaux (spots courts, accroches, slogans).",
  },
  {
    title: "Documentaires et vidéos éducatives",
    text: "Narration, voix off explicative, contenus culturels ou scientifiques.",
  },
  {
    title: "Voix d'animaux et de créatures",
    text: "Animation, pub, jeux, contenus jeunesse.",
  },
  {
    title: "Accents et variantes linguistiques",
    text: "Accents africains et internationaux pour personnages, pubs, documentaires, contenus corporate, etc.",
  },
];

export const trustBenefits = [
  {
    title: "Un casting simplifié",
    text: "Une seule voix pour plusieurs personnages et besoins dans le même projet.",
  },
  {
    title: "Une grande polyvalence",
    text: "Différentes tranches d'âge, intentions (sérieux, dynamique, humoristique, etc.) et accents.",
  },
  {
    title: "Une approche pro",
    text: "Habitude des contraintes du doublage, écoute des directions artistiques, prises et ajustements rapides.",
  },
  {
    title: "Des livrables prêts à l'emploi",
    text: "Enregistrement en studio pro, fichiers propres (WAV/MP3) directement utilisables en post-prod.",
  },
];

// PLACEHOLDER — témoignage entièrement fictif, à remplacer par un vrai avis client.
export const testimonial = {
  quote:
    "Alberta a immédiatement compris le ton qu'on cherchait pour notre personnage — espiègle sans être criard. Un vrai gain de temps en direction artistique.",
  name: "Léa Fontaine",
  role: "Réalisatrice, Studio Kalima Animation",
  rating: 5,
};


export const heroLines = [
  "Une voix, c'est une empreinte.",
  "Une voix, c'est un souffle.",
  "Une voix, c'est un visage qu'on prête.",
  "Une voix, c'est un personnage qu'on habite, le temps d'une scène.",
  "Une voix, c'est une promesse tenue jusqu'au bout de la phrase.",
  "Une voix, c'est ce qu'on retient, longtemps après l'image.",
];

export const contact = {
  email: "mebiamaalberta@gmail.com",
  whatsappDisplay: "+212 723-192689",
  whatsappHref: "https://wa.me/212723192689",
  location: "Maroc",
};
