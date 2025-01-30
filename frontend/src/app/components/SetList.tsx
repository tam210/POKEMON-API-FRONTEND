// src/app/components/SetList.tsx
"use client";
import { Set } from "@/types";
import Link from "next/link";
import { useState } from "react";

// Client Component that receives data as props
export default function SetList({ sets }: { sets: Set[] }) {
  console.log(sets);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sets.map((set) => (
        <div
          key={set.id}
          className="card-container p-4 bg-white shadow-md rounded-lg animate__animated animate__fadeIn"
        >
          <h2 className="text-xl font-bold">{set.name}</h2>
          <p className="text-gray-500">{set.series}</p>

          {/* Botón "Ver info" para mostrar información del set */}
          <InfoButton set={set} />

          {/* Botón "Ver cartas" usando Link para la navegación */}
          <Link
            href={`/sets/${set.id}`}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Ver cartas
          </Link>
        </div>
      ))}
    </div>
  );
}

function InfoButton({ set }: { set: Set }) {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="relative mt-2">
      {/* Botón "Ver info" en la esquina */}
      <button
        onClick={toggleInfo}
        className="absolute top-0 right-0 text-sm text-gray-600 hover:text-gray-800"
      >
        &gt; Info
      </button>

      {/* Información del set que aparece cuando se hace clic */}
      {showInfo && (
        <div className="mt-4 text-gray-600">
          <p><strong>Serie:</strong> {set.series}</p>
          <p><strong>Total de cartas:</strong> {set.total}</p>
          <p><strong>Fecha de lanzamiento:</strong> {set.release_date}</p>
        </div>
      )}
    </div>
  );
}
