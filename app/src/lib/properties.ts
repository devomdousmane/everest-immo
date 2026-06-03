export type Property = {
  id: string;
  slug: string;
  type: "Appartement" | "Duplex" | "Villa" | "Penthouse";
  status: "Vente" | "Location";
  title: string;
  location: string;
  price: number;
  area: number;
  rooms: number;
  bedrooms: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  featured: boolean;
};

// Chemin de base vers les images dans public/
const BASE = "/everst-immo";

// Encode un nom de fichier contenant des espaces/parenthèses pour l'URL
function img(folder: string, file: string): string {
  return `${BASE}/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
}

export const properties: Property[] = [
  {
    id: "1",
    slug: "appartement-av-bourguiba-f4",
    type: "Appartement",
    status: "Vente",
    title: "Appartement F4 — Avenue Bourguiba",
    location: "Avenue Bourguiba, Dakar",
    price: 85000000,
    area: 120,
    rooms: 4,
    bedrooms: 3,
    image: img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-26.jpg"),
    images: [
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-26.jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-26 (1).jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-27.jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-27 (1).jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-27 (2).jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-27 (3).jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-27 (4).jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-28.jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-28 (1).jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-28 (2).jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-29.jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-29 (1).jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-29 (2).jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-30.jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-30 (1).jpg"),
      img("Appartement Av bourguiba F4", "PHOTO-2026-05-16-18-38-31.jpg"),
    ],
    description: "Bel appartement F4 idéalement situé sur l'Avenue Bourguiba, l'une des artères les plus prisées de Dakar. Lumineux et spacieux, il offre un cadre de vie moderne avec de belles prestations. Parfait pour une résidence principale ou un investissement locatif.",
    features: ["Lumineux", "Vue dégagée", "Quartier prisé", "Sécurisé", "Avenue Bourguiba", "F4 spacieux"],
    featured: true,
  },
  {
    id: "2",
    slug: "appartement-f3-corniche-waterfront",
    type: "Appartement",
    status: "Vente",
    title: "Appartement F3 — Corniche Ouest Waterfront",
    location: "Corniche Ouest, Dakar",
    price: 120000000,
    area: 90,
    rooms: 3,
    bedrooms: 2,
    image: img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-40.jpg"),
    images: [
      img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-40.jpg"),
      img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-40 (1).jpg"),
      img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-41.jpg"),
      img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-41 (1).jpg"),
      img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-41 (2).jpg"),
      img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-41 (3).jpg"),
      img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-42.jpg"),
      img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-42 (1).jpg"),
      img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-42 (2).jpg"),
      img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-42 (3).jpg"),
      img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-42 (4).jpg"),
      img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-42 (5).jpg"),
    ],
    description: "Exceptionnel appartement F3 en bord de mer sur la Corniche Ouest. Vue imprenable sur l'Atlantique, finitions haut de gamme et résidence sécurisée. Un bien rare dans l'un des emplacements les plus convoités de Dakar.",
    features: ["Vue mer", "Corniche Ouest", "Résidence sécurisée", "Finitions premium", "Waterfront", "Lumineux"],
    featured: true,
  },
  {
    id: "3",
    slug: "appartement-f4-sotrac",
    type: "Appartement",
    status: "Vente",
    title: "Appartement F4 — Sotrac Mermoz",
    location: "Sotrac Mermoz, Dakar",
    price: 65000000,
    area: 110,
    rooms: 4,
    bedrooms: 3,
    image: img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-10.jpg"),
    images: [
      img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-10.jpg"),
      img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-10 (1).jpg"),
      img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-10 (2).jpg"),
      img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-11.jpg"),
      img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-11 (1).jpg"),
      img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-11 (2).jpg"),
      img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-11 (3).jpg"),
      img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-11 (4).jpg"),
      img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-11 (5).jpg"),
      img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-12.jpg"),
      img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-12 (1).jpg"),
      img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-12 (2).jpg"),
      img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-12 (3).jpg"),
      img("Appartement F4 sotrac", "PHOTO-2026-05-16-19-51-12 (4).jpg"),
    ],
    description: "Grand appartement F4 dans le quartier résidentiel de Sotrac Mermoz. Environnement calme et verdoyant, proche de toutes les commodités. Idéal pour une famille, avec de beaux volumes et une bonne exposition.",
    features: ["Quartier résidentiel", "Calme", "Proche commodités", "Grands volumes", "Sotrac Mermoz", "Parking"],
    featured: true,
  },
  {
    id: "4",
    slug: "appartement-fann-mermoz-f3",
    type: "Appartement",
    status: "Vente",
    title: "Appartement F3 — Fann Mermoz",
    location: "Fann Mermoz, Dakar",
    price: 55000000,
    area: 80,
    rooms: 3,
    bedrooms: 2,
    image: img("Appartement Fann mermoz F3", "PHOTO-2026-05-16-18-52-13.jpg"),
    images: [
      img("Appartement Fann mermoz F3", "PHOTO-2026-05-16-18-52-13.jpg"),
      img("Appartement Fann mermoz F3", "PHOTO-2026-05-16-18-52-13 (1).jpg"),
      img("Appartement Fann mermoz F3", "PHOTO-2026-05-16-18-52-13 (2).jpg"),
      img("Appartement Fann mermoz F3", "PHOTO-2026-05-16-18-52-14.jpg"),
      img("Appartement Fann mermoz F3", "PHOTO-2026-05-16-18-52-14 (1).jpg"),
      img("Appartement Fann mermoz F3", "PHOTO-2026-05-16-18-52-14 (2).jpg"),
      img("Appartement Fann mermoz F3", "PHOTO-2026-05-16-18-52-14 (3).jpg"),
    ],
    description: "Charmant appartement F3 dans le quartier prisé de Fann Mermoz. Bien entretenu, lumineux et situé dans un secteur calme et sécurisé. Une belle opportunité dans l'un des quartiers les plus recherchés de Dakar.",
    features: ["Fann Mermoz", "Quartier prisé", "Lumineux", "Sécurisé", "Calme", "Bien entretenu"],
    featured: false,
  },
  {
    id: "5",
    slug: "appartement-gilbraltar-f4",
    type: "Appartement",
    status: "Vente",
    title: "Appartement F4 — Gibraltar",
    location: "Gibraltar, Dakar",
    price: 75000000,
    area: 115,
    rooms: 4,
    bedrooms: 3,
    image: img("Appartement Gilbraltar F4", "PHOTO-2026-05-16-18-43-58.jpg"),
    images: [
      img("Appartement Gilbraltar F4", "PHOTO-2026-05-16-18-43-58.jpg"),
      img("Appartement Gilbraltar F4", "PHOTO-2026-05-16-18-43-59.jpg"),
      img("Appartement Gilbraltar F4", "PHOTO-2026-05-16-18-44-00.jpg"),
      img("Appartement Gilbraltar F4", "PHOTO-2026-05-16-18-44-00 (1).jpg"),
      img("Appartement Gilbraltar F4", "PHOTO-2026-05-16-18-44-00 (2).jpg"),
      img("Appartement Gilbraltar F4", "PHOTO-2026-05-16-18-44-00 (3).jpg"),
      img("Appartement Gilbraltar F4", "PHOTO-2026-05-16-18-44-00 (4).jpg"),
      img("Appartement Gilbraltar F4", "PHOTO-2026-05-16-18-44-00 (5).jpg"),
      img("Appartement Gilbraltar F4", "PHOTO-2026-05-16-18-44-01.jpg"),
      img("Appartement Gilbraltar F4", "PHOTO-2026-05-16-18-44-01 (1).jpg"),
    ],
    description: "Bel appartement F4 dans le secteur de Gibraltar, quartier résidentiel bien desservi. Spacieux et fonctionnel, avec de belles prestations intérieures et une exposition favorable. À saisir.",
    features: ["Quartier Gibraltar", "Spacieux", "Exposition favorable", "Résidentiel", "Bien desservi", "F4 fonctionnel"],
    featured: false,
  },
  {
    id: "6",
    slug: "appartement-rp-virage-f4",
    type: "Appartement",
    status: "Vente",
    title: "Appartement F4 — RP Virage",
    location: "RP Virage, Dakar",
    price: 70000000,
    area: 105,
    rooms: 4,
    bedrooms: 3,
    image: img("Appartement Rp virage F4", "PHOTO-2026-05-16-18-48-49.jpg"),
    images: [
      img("Appartement Rp virage F4", "PHOTO-2026-05-16-18-48-49.jpg"),
      img("Appartement Rp virage F4", "PHOTO-2026-05-16-18-48-49 (1).jpg"),
      img("Appartement Rp virage F4", "PHOTO-2026-05-16-18-48-50.jpg"),
      img("Appartement Rp virage F4", "PHOTO-2026-05-16-18-48-50 (1).jpg"),
      img("Appartement Rp virage F4", "PHOTO-2026-05-16-18-48-50 (2).jpg"),
      img("Appartement Rp virage F4", "PHOTO-2026-05-16-18-48-50 (3).jpg"),
      img("Appartement Rp virage F4", "PHOTO-2026-05-16-18-48-50 (4).jpg"),
      img("Appartement Rp virage F4", "PHOTO-2026-05-16-18-48-51.jpg"),
      img("Appartement Rp virage F4", "PHOTO-2026-05-16-18-48-51 (1).jpg"),
      img("Appartement Rp virage F4", "PHOTO-2026-05-16-18-48-51 (2).jpg"),
    ],
    description: "Appartement F4 au RP Virage, secteur dynamique et bien connecté de Dakar. Intérieur soigné, bonne luminosité et environnement agréable. Une adresse idéale pour une famille ou un investisseur.",
    features: ["RP Virage", "Bien connecté", "Lumineux", "Intérieur soigné", "Agréable", "Investissement rentable"],
    featured: false,
  },
  {
    id: "7",
    slug: "duplex-waterfront",
    type: "Duplex",
    status: "Vente",
    title: "Duplex d'exception — Waterfront",
    location: "Corniche Ouest, Dakar",
    price: 250000000,
    area: 200,
    rooms: 5,
    bedrooms: 4,
    // Pas de photo JPG disponible — on utilise la première image du Corniche F3 comme placeholder
    image: img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-40.jpg"),
    images: [
      img("Appartement F3 Corniche Ouest waterfront", "PHOTO-2026-05-16-19-09-40.jpg"),
    ],
    description: "Exceptionnel duplex waterfront sur la Corniche Ouest de Dakar. Deux niveaux de prestations d'exception face à l'Atlantique. Un bien unique alliant espace, luxe et vue mer imprenable. Sur demande uniquement.",
    features: ["Vue mer panoramique", "Duplex sur 2 niveaux", "Corniche Ouest", "Prestations d'exception", "Rooftop privé", "Sur demande"],
    featured: true,
  },
];

export function formatPrice(price: number, status: "Vente" | "Location") {
  if (status === "Location") {
    return `${price.toLocaleString("fr-FR")} F CFA/mois`;
  }
  return `${price.toLocaleString("fr-FR")} F CFA`;
}
