// src/app/sets/page.tsx
import SetList from "@/app/components/SetList";

// Definir los tipos de Set
interface Set {
  id: number;
  name: string;
  series: string;
  printed_total: number;
  total: number;
  ptcgo_code: string;
  release_date: string;
  updated_at: string;
  symbol_url: string;
  logo_url: string;
  cards: number[]; // IDs de las cartas
}

// Simulación de datos para sets (puede venir de una API)
async function fetchSets(): Promise<Set[]> {
  return [
    {
      id: 1,
      name: "Base Set",
      series: "Base",
      printed_total: 102,
      total: 102,
      ptcgo_code: "BS1",
      release_date: "1999-01-09",
      updated_at: "2022-11-25", // La última fecha de actualización del set
      symbol_url: "/images/symbol_base.png",
      logo_url: "/images/logo_base.png",
      cards: [1, 2, 3, 4, 5], // IDs de las cartas
    },
    {
      id: 2,
      name: "Jungle",
      series: "Base",
      printed_total: 64,
      total: 64,
      ptcgo_code: "JU1",
      release_date: "1999-06-16",
      updated_at: "2022-11-25", // Fecha de actualización
      symbol_url: "/images/symbol_jungle.png",
      logo_url: "/images/logo_jungle.png",
      cards: [6, 7, 8, 9, 10], // IDs de las cartas
    }
  ];
}

// Este es un componente asincrónico para obtener los datos y renderizar la página
export default async function SetsPage() {
  const sets = await fetchSets(); // Obtener los datos asincrónicamente

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Sets de Cartas Pokémon</h1>
      <SetList sets={sets} />
    </div>
  );
}
