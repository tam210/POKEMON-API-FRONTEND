import CardList from "@/app/components/CardList";

// Simulando la obtención de todas las cartas (deberías hacer una llamada a la API real)
async function fetchAllCards() {
  return [
    { id: 1, name: "Pikachu", supertype: "Pokémon", images: [{ url: "https://images.pokemontcg.io/sv4pt5/52.png	small" }] },
    { id: 2, name: "Charizard", supertype: "Pokémon", images: [{ url: "https://images.pokemontcg.io/sv4pt5/53.png	small" }] },
    { id: 3, name: "Bulbasaur", supertype: "Pokémon", images: [{ url: "https://images.pokemontcg.io/sv4pt5/54.png	small" }] },
  ];
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
