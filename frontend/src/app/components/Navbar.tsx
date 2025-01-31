import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-600 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        {/* Logo de Pokémon y el nombre atractivo de la app */}
        <div className="flex items-center space-x-4">
          {/* <img
            src="/pokemon_letters.png" // Cambia esta ruta por la de tu imagen de logo
            alt="Pokémon Logo"
            className="w-15 h-5"
          /> */}
          <h1 className="text-white text-2xl font-bold px-2">   {'>>'} PokeMundo  {'>>'} </h1>
        </div>
        {/* Links de navegación */}
        <div className="space-x-6">
          <Link href='/' className="text-white hover:text-red-300 transition duration-200" >Inicio</Link>
          <Link href="/sets" className="text-white hover:text-red-300 transition duration-200">Sets</Link>
          <Link href="/cards" className="text-white hover:text-red-300 transition duration-200">Cartas</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
