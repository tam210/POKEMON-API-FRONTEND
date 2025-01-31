import CardList from "@/app/components/CardList";
import { Card } from "@/types";

// Obtención de todas las cartas (deberías hacer una llamada a la API real)
async function fetchAllCards() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/api/cards`); // Cambia esta URL si es necesario
  const data = await response.json();
  
  return data.map((card: Card) => ({
    id: card.id,
    name: card.name,
    supertype: card.supertype,
    types: card.types,
    number: card.number,
    rarity: card.rarity,
    image: card.image,  
  }));
}

export default async function CardsPage() {
  const cards = await fetchAllCards();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Todas las Cartas</h1>
      <CardList cards={cards} />
    </div>
  );
}

export const dynamic = 'force-dynamic';