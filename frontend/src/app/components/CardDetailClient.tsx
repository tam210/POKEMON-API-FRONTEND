// /components/carddetailclient.tsx

"use client"; // Marcamos este archivo como componente del lado del cliente

import Image from 'next/image';

type Card = {
  id: string;
  name: string;
  supertype: string;
  rarity: string;
  number: string;
  images: { url: string }[];
};

export default function CardDetailClient({ card }: { card: Card }) {
  // Si no hay card, mostramos un mensaje de carga
  if (!card) {
    return <div>Loading...</div>;
  }

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
