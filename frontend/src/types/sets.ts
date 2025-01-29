// Interfaz para la imagen de la carta
export interface Image {
  id: number;
  card_id: number;
  url: string;
  type: string;
}

// Interfaz para la carta
export interface Card {
  id: number;
  name: string;
  supertype: string;
  subtypes: string[];
  types: string[];
  set_id: number;
  number: string;
  rarity: string;
  images: Image[];  // Un array de imágenes relacionadas con la carta
}

// Interfaz para el set de cartas
export interface Set {
  id: number;
  name: string;
  series: string;
  printed_total: number;
  total: number;
  ptcgo_code: string;
  release_date: string;
  updated_at: string;
  symbol_url: string;
  logo_url: string;
  cards: number[];  // Un set tiene un array de cartas
}

// Interfaz para el mercado de una carta
export interface Market {
  id: number;
  card_id: number;
  url: string;
  updatedAt: string;
  market: string;
}
