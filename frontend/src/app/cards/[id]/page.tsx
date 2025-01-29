// /app/cards/[id]/page.tsx
import Image from 'next/image';

// Simulamos la obtención de los detalles de la carta por ID
async function getCardDetails(id: string) {
  // Aquí deberías realizar una consulta a una API o base de datos para obtener los datos reales
  return {
    id,
    name: "Charizard",
    supertype: "Pokémon",
    rarity: "Rare Holo",
    number: "4/102",
    images: [{ url: "https://images.pokemontcg.io/sv4pt5/53.png" }],
  };
}

// Componente Server-side para obtener la carta
export default async function CardDetailPage({ params }: { params: { id: string } }) {
  // Obtén el ID desde los parámetros
  const { id } = params; // Remove the `await` here
  console.log(id);

  // Llamada asíncrona para obtener los detalles de la carta
  const card = await getCardDetails(id);

  // Renderizamos la vista de los detalles de la carta
  return (
    <div className="p-6 flex justify-center animate__animated animate__fadeIn">
      <div className="flex w-full max-w-4xl gap-6">
        {/* Imagen de la carta a la izquierda */}
        <div className="w-1/3 flex justify-center">
          <Image
            src={card.images[0]?.url || "/placeholder.png"}
            alt={card.name}
            className="h-96 object-contain rounded-md"
          />
        </div>

        {/* Información de la carta a la derecha */}
        <div className="w-2/3 flex flex-col justify-center">
          <h1 className="text-4xl text-yellow-600 font-bold mb-4">{card.name}</h1>
          <p className="text-gray-600 text-lg mt-2">Supertipo: {card.supertype}</p>
          <p className="text-gray-600 text-lg mt-1">Raridad: {card.rarity}</p>
          <p className="text-gray-600 text-lg mt-1">Número: {card.number}</p>
        </div>
      </div>
    </div>
  );
}