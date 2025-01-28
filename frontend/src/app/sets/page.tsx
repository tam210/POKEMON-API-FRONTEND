"use client";

import SetList from "@/app/components/SetList";

// Simulación de datos para sets (puede venir de una API)
async function fetchSets(){
  return [
    {
      id: 1,
      name: "Base Set",
      series: "Base",
      total: 102,
      release_date: "1999-01-09",
      symbol_url: "/images/symbol_base.png",
    },
    {
      id: 2,
      name: "Jungle",
      series: "Base",
      total: 64,
      release_date: "1999-06-16",
      symbol_url: "/images/symbol_jungle.png",
    }
  ];
}

export default async function SetsPage() {

  const sets = await fetchSets();

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Sets de Cartas Pokémon</h1>
      <SetList sets={sets} />
    </div>
  );
}

