// /components/carddetailclient.tsx

"use client"; // Marcamos este archivo como componente del lado del cliente

import Image from 'next/image';
import { Card } from "@/types";

export default function CardDetailClient({ card }: { card: Card }) {
  // Si no hay card, mostramos un mensaje de carga
  if (!card) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <div className="p-6 flex justify-center animate__animated animate__fadeIn bg-gray-50">
      <div className="flex flex-wrap w-full max-w-5xl gap-6 bg-white p-6 rounded-lg shadow-lg justify-center">
        {/* Imagen de la carta */}
        <div className="w-full sm:w-1/3 flex justify-center mb-6 sm:mb-0">
          <Image
            src={card.image || "/placeholder.png"}
            alt={card.name}
            width={400}  // Aumentamos el tamaño de la imagen
            height={600} // Aumentamos el tamaño de la imagen
            className="object-contain rounded-md border border-gray-300 shadow-md"
          />
        </div>

        {/* Información de la carta */}
        <div className="w-full sm:w-2/3 flex flex-col justify-center text-center sm:text-left">
          <h1 className="text-4xl text-yellow-600 font-bold mb-4">{card.name}</h1>
          <p className="text-gray-600 text-lg mt-2">Supertipo: <span className="text-gray-800">{card.supertype}</span></p>
          <p className="text-gray-600 text-lg mt-1">Raridad: <span className="text-gray-800">{card.rarity}</span></p>
          <p className="text-gray-600 text-lg mt-1">Número: <span className="text-gray-800">{card.number}</span></p>
        </div>
      </div>

      {/* Información de los mercados */}
      <div className="mt-6 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Mercados Disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
          {card.markets.map((market: any) => (
            <div key={market.marketId} className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md justify-center">
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
  );
}
