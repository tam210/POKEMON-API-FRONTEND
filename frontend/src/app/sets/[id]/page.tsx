"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link"; // Importamos Link para la navegación
import { Swiper, SwiperSlide } from "swiper/react"; // Importamos Swiper y SwiperSlide
import "swiper/css"; // Importamos los estilos básicos de Swiper
import "swiper/css/navigation"; // Importamos los estilos para la navegación
import { Navigation } from "swiper/modules"; // Importamos el módulo de navegación correctamente

// Configuramos Swiper para usar Navigation
export default function SetDetail() {
  const { id } = useParams();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // Simulación de datos de cartas (pueden venir de una API)
  const cards = [
    { id: 1, name: "Charizard", image: "/images/charizard.png" },
    { id: 2, name: "Blastoise", image: "/images/blastoise.png" },
    { id: 3, name: "Venusaur", image: "/images/venusaur.png" },
    { id: 4, name: "Pikachu", image: "/images/pikachu.png" },
    { id: 5, name: "Mewtwo", image: "/images/mewtwo.png" },
    // Puedes agregar más cartas si es necesario
  ];

  return (
    <div
      className={`min-h-screen bg-white p-8 transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">Detalle del Set - ID {id}</h1>
      <p className="text-gray-700 mb-6">Explora las cartas de este set.</p>

      {/* Contenedor de Swiper ajustado */}
      <div className="w-full">
        <Swiper
          spaceBetween={20} // Espacio entre las cartas
          slidesPerView={3} // Número de cartas visibles al mismo tiempo
          loop={true} // Hace que el carrusel sea infinito
          pagination={{ clickable: true }} // Permite la paginación
          navigation={true} // Habilita los botones de navegación
          modules={[Navigation]} // Aquí indicamos que estamos usando Navigation
          breakpoints={{
            // Ajuste en diferentes tamaños de pantalla
            640: {
              slidesPerView: 1, // En pantallas pequeñas, solo se muestra una carta
            },
            768: {
              slidesPerView: 2, // En pantallas medianas, se muestran 2 cartas
            },
            1024: {
              slidesPerView: 3, // En pantallas grandes, se muestran 3 cartas
            },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="flex flex-col bg-gray-100 p-4 rounded-md shadow-md">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-48 object-contain"
                />
                <h3 className="text-lg font-bold mt-4">{card.name}</h3>
                {/* Botón para ver la info de la carta */}
                <Link
                  href={`/cards/${card.id}`}
                  className="mt-2 text-sm text-blue-500 hover:text-blue-600"
                >
                  Info de carta
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
