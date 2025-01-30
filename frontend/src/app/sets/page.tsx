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

// Función para obtener los sets desde el backend (API)
async function fetchSets(): Promise<Set[]> {
  const res = await fetch("http://localhost:3001/api/sets"); // Cambia esta URL si es necesario
  if (!res.ok) {
    throw new Error("Error al obtener los sets");
  }
  const sets = await res.json();
  console.log(sets);
  return sets; // Devuelve la respuesta en formato JSON
}

// Este es un componente asincrónico para obtener los datos y renderizar la página
export default async function SetsPage() {
  let sets: Set[] = [];
  try {
    sets = await fetchSets(); // Obtener los datos de la API
  } catch (error) {
    console.error("Error al cargar los sets", error);
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Sets de Cartas Pokémon</h1>
      <SetList sets={sets} /> {/* Mostrar los sets */}
    </div>
  );
}
