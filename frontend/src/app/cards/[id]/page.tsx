// /app/cards/[id]/page.tsx
import CardImage from "../../components/CardImage"; // Asegúrate de importar el nuevo componente

// Realiza la solicitud fetch a la API para obtener los detalles de la carta
async function getCardDetails(id: string) {
  try { 
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/cards/${id}`);
    
    // Verificamos si la respuesta es exitosa (status 200)
    if (!res.ok) {
      throw new Error('Failed to fetch card details');
    }

    const card = await res.json(); // Intentamos convertir la respuesta a JSON
    return card;
  } catch (error) {
    console.error('Error fetching card details:', error);
    return null;
  }
}

// Componente Server-side para obtener la carta
export default async function CardDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  // Llamada asíncrona para obtener los detalles de la carta
  const card = await getCardDetails(id);

  // Si no se pudo obtener la carta, mostramos un mensaje de error
  if (!card) {
    return <div className="p-6 text-center">Error al cargar los detalles de la carta</div>;
  }

  // Renderizamos la vista de los detalles de la carta
  return (
    <div className="p-6 flex justify-center animate__animated animate__fadeIn bg-gray-50">
      <div className="flex flex-wrap w-full max-w-4xl gap-6 bg-white p-6 rounded-lg shadow-lg">
        {/* Imagen de la carta a la izquierda */}
        <div className="w-full sm:w-1/3 flex justify-center items-center">
          {/* Pasamos las dimensiones de la imagen */}
          <CardImage 
            src={card.image || "/placeholder.png"} 
            alt={card.name} 
            width={500} 
            height={700} 
          />
        </div>

        {/* Información de la carta a la derecha */}
        <div className="w-full sm:w-2/3 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl text-yellow-600 font-bold mb-4 text-center sm:text-left">{card.name}</h1>
          <div className="mb-2">
            <p className="text-gray-600 text-lg font-semibold">Supertipo:</p>
            <p className="text-gray-800 text-lg">{card.supertype}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-600 text-lg font-semibold">Raridad:</p>
            <p className="text-gray-800 text-lg">{card.rarity}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-600 text-lg font-semibold">Número:</p>
            <p className="text-gray-800 text-lg">{card.number}</p>
          </div>
          <div className="mb-6">
            <p className="text-gray-600 text-lg font-semibold">Tipo:</p>
            <p className="text-gray-800 text-lg">{card.types}</p>
          </div>

          {/* Información de los mercados */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center sm:text-left">Mercados Disponibles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {card.markets.map((market: any) => (
                <div key={market.marketId} className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
                  <a 
                    href={market.marketUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    {market.marketName}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const dynamic = 'force-dynamic';