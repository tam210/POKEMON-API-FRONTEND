// src/pages/home/page.tsx

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-300 to-red-500 p-6">
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        {/* Título */}
        <h1 className="text-6xl font-extrabold mb-4 text-shadow-lg">
          ¡Bienvenido a Mundo Pokémon!
        </h1>
        
        {/* Imagen de fondo */}
        <div className="mb-8">

          <Image src="/hello_pokemon.png" alt="Pokemon" width={200} height={300} />
        </div>

        {/* Texto introductorio */}
        <p className="text-xl mb-8 px-4 md:px-16 font-semibold">
          ¡Explora tus sets de cartas Pokémon, descubre tus favoritos y completa tu colección!
        </p>

        {/* Botones de navegación */}
        <div className="flex gap-4">
          <Link
            href="/sets"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl transition duration-300"
          >
            Ver Sets
          </Link>
          <Link
            href="/cards"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full text-xl transition duration-300"
          >
            Ver cartas
          </Link>
        </div>
      </div>
    </div>
  );
}
