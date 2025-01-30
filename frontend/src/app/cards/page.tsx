import CardList from "@/app/components/CardList";

// Simulando la obtención de todas las cartas (deberías hacer una llamada a la API real)
async function fetchAllCards() {
  return [
    {
      id: 1,
      name: "Pikachu",
      supertype: "Pokémon",
      subtypes: "Basic",
      types: "Electric",
      set_id: 1,
      number: "1/102",
      rarity: "Common",
    },
    {
      id: 2,
      name: "Charizard",
      supertype: "Pokémon",
      subtypes: "Stage 2",
      types: "Fire",
      set_id: 1,
      number: "4/102",
      rarity: "Rare Holo",
    },
    {
      id: 3,
      name: "Bulbasaur",
      supertype: "Pokémon",
      subtypes: "Basic",
      types: "Grass",
      set_id: 1,
      number: "2/102",
      rarity: "Common",
    },
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
