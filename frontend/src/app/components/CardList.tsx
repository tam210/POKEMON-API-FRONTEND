// src/app/components/CardList.tsx
"use client";
import Link from "next/link";

export default function CardList({ cards }: { cards: any[] }) {
  return (
    <div className="flex flex-wrap gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-64 bg-gray-100 p-4 rounded-md shadow-md animate__animated animate__fadeIn"
        >
          <img
            src={card.images[0]?.url || "/placeholder.png"}
            alt={card.name}
            className="w-full h-48 object-contain mb-4"
          />
          <h3 className="text-xl font-bold">{card.name}</h3>
          <p className="text-gray-600">{card.supertype}</p>

          {/* Botón de "Ver info de carta" */}
          <Link
            href={`/cards/${card.id}`}
            className="mt-4 inline-block text-sm text-blue-500 hover:underline"
          >
            Ver info de carta
          </Link>
        </div>
      ))}
    </div>
  );
}
