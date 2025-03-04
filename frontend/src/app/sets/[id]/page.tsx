"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link"; // Importamos Link para la navegación
import { Swiper, SwiperSlide } from "swiper/react"; // Importamos Swiper y SwiperSlide
import "swiper/css"; // Importamos los estilos básicos de Swiper
import "swiper/css/navigation"; // Importamos los estilos para la navegación
import { Navigation } from "swiper/modules"; // Importamos el módulo de navegación correctamente
import Image from 'next/image';
import { Card } from "@/types";

// Función para obtener las sets desde el backend (API)
const fetchCardsBySetId = async (setId: string): Promise<Card[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${apiUrl}/api/sets/${setId}/cards`);
    if (!response.ok) {
      throw new Error("Error al obtener las cartas");
    }
    const data = await response.json();
    
    return data.cards.map((card: any) => ({
      id: card.id,
      name: card.name,
      image: card.image.url ? card.image.url : { url: "/images/default.png" }, // Si no existe la imagen, asignamos un objeto con una URL predeterminada
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default function SetDetail() {
  const { id } = useParams(); // Obtenemos el 'id' del set desde la URL
  const [cards, setCards] = useState<Card[]>([]); // Estado para las cartas
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (!id || Array.isArray(id)) return; // Asegurarnos de que 'id' no es un arreglo

    const loadCards = async () => {
      try {
        const data = await fetchCardsBySetId(id); // Obtener datos asíncronos
        setCards(data); // Actualizar el estado con los datos obtenidos
      } catch (error) {
        console.error("Error al cargar las cartas", error);
      }
    };

    loadCards();

    // Control de fade-in (transición de opacidad)
    const timeout = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(timeout); // Limpiar el tiempo de espera cuando el componente se desmonta
  }, [id]); // Dependemos de 'id' para volver a cargar los datos si cambia

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
          {cards.length === 0 ? (
            <div className="text-center">Cargando cartas...</div>
          ) : (
            cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="flex flex-col bg-gray-100 p-4 rounded-md shadow-md">
                  {card.image ? (
                    <Image
                      src={card.image} // Ahora accedemos correctamente a 'image.url'
                      alt={card.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-contain"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-300 flex justify-center items-center">Sin imagen</div> // Si no hay imagen
                  )}
                  <h3 className="text-lg font-bold mt-4">{card.name}</h3>
                  <Link
                    href={`/cards/${card.id}`}
                    className="mt-2 text-sm text-blue-500 hover:text-blue-600"
                  >
                    Info de carta
                  </Link>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
}
export const dynamic = 'force-dynamic';