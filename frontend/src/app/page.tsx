import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-red-600 text-white py-4 px-8 shadow-md flex justify-between items-center z-50">
        <h1 className="text-lg font-semibold">Mundo Pokémon</h1>
        <div className="space-x-6">
          <Link href="/sets" className="hover:text-gray-300 transition">
            Sets
          </Link>
          <Link href="/cards" className="hover:text-gray-300 transition">
            Cartas
          </Link>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="mt-20 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl font-bold mb-6">¡Bienvenido a Mundo Pokémon!</h1>

        {/* Imagen destacada */}
        <div className="mb-6">
          <Image src="/hello_pokemon.png" alt="Pokemon" width={200} height={300} />
        </div>

        {/* Texto introductorio */}
        <p className="text-lg text-gray-700 max-w-lg mb-6">
          Explora tus sets de cartas Pokémon, descubre tus favoritos y completa tu colección.
        </p>

        {/* Botones de navegación */}
        <div className="flex gap-4">
          <Link
            href="/sets"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md text-lg transition"
          >
            Ver Sets
          </Link>
          <Link
            href="/cards"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md text-lg transition"
          >
            Ver Cartas
          </Link>
        </div>
      </div>
    </div>
  );
}
