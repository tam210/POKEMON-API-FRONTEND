"use client";
import { Set } from "@/types";
import Link from "next/link";
import { useState } from "react";
import CardImage from "./CardImage";

export default function SetList({ sets }: { sets: Set[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sets.map((set) => (
        <div
          key={set.id}
          className="relative card-container p-4 bg-white shadow-md rounded-lg animate__animated animate__fadeIn"
        >
          {/* Imagen Principal del Set */}
          <CardImage
            src={set.logo_url}
            alt={set.name}
            width={200}
            height={200}
          />

          {/* Imagen Symbol en la esquina superior derecha */}
          {set.symbol_url && (
            <img
              src={set.symbol_url}
              alt={`${set.name} symbol`}
              className="absolute top-2 right-2 w-10 h-10"
            />
          )}

          <h2 className="text-xl font-bold mt-2">{set.name}</h2>
          <p className="text-gray-500">{set.series}</p>

          {/* Botón "Ver info" mejorado */}
          <InfoButton set={set} />

          {/* Botón "Ver cartas" usando Link para la navegación */}
          <Link
            href={`/sets/${set.id}`}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 block text-center"
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

  return (
    <div className="mt-3">
      {/* Botón "Ver info" mejorado */}
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-lg border border-gray-400 hover:bg-gray-300 transition"
      >
        {showInfo ? "Ocultar info" : "Ver info"}
      </button>

      {/* Información que aparece al hacer clic */}
      {showInfo && (
        <div className="mt-2 p-2 bg-gray-100 rounded text-gray-700">
          <p><strong>Serie:</strong> {set.series}</p>
          <p><strong>Total de cartas:</strong> {set.total}</p>
          <p><strong>Fecha de lanzamiento:</strong> {formatDate(set.release_date)}</p>
          </div>
      )}
    </div>
  );
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
