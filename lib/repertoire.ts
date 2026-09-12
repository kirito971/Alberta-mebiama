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
    category: "Doublage — voix de fillette de 12 ans, expression française",
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
    id: "radio",
    number: "05",
    title: "À l'antenne",
    category: "Publicité radio — Radio Internationale",
    tag: "Publicité",
    description: "Un ton qui capte l'attention en quelques secondes.",
    image: "/images/repertoire/05-radio.png",
    imageAlt: "Illustration d'une présentatrice radio, personnage de À l'antenne",
    audio: "/audio/05-radio.m4a",
    featured: false,
  },
  {
    id: "aeroport",
    number: "06",
    title: "Embarquement immédiat",
    category: "Annonce institutionnelle — aéroport international",
    tag: "Institutionnel",
    description: "Clarté et autorité posée, sans froideur.",
    image: "/images/repertoire/06-aeroport.png",
    imageAlt: "Illustration d'une hôtesse d'aéroport, personnage de Embarquement immédiat",
    audio: "/audio/06-aeroport.m4a",
    featured: false,
  },
];

export const featuredDemos = demos.filter((d) => d.featured);

// --- Placeholder content, clearly flagged for Alberta to confirm/replace ---
// See PLACEHOLDERS.md for the full list of invented figures and text.

export const heroStats = [
  { value: "8 ans", label: "d'expérience" }, // PLACEHOLDER — à remplacer par le vrai chiffre
  { value: `${demos.length}`, label: "univers vocaux" }, // réel — nombre de démos au répertoire
];

export const trustStats = [
  { value: "2", label: "langues (FR/EN)" }, // réel
  { value: "8 ans", label: "d'expérience" }, // PLACEHOLDER — même chiffre que le hero, à confirmer
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
  instagramHandle: "@alberta_mebiama",
  instagramHref: "https://www.instagram.com/alberta_mebiama/",
  location: "Maroc",
};
