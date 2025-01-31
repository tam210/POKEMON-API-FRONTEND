
"use client"
// src/components/CardImage.tsx
import { useState } from "react";
import Image from "next/image";

interface CardImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function CardImage({ src, alt, width, height }: CardImageProps) {
  const [loading, setLoading] = useState(true); // Estado para controlar la carga de la imagen

  const handleImageLoad = () => {
    setLoading(false); // Cambia el estado cuando la imagen se carga
  };

  return (
    <div className="relative">
      {/* Spinner de carga mientras la imagen se carga */}
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50">
          <div className="animate__animated animate__fadeIn animate__slow">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Imagen con transición de opacidad */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-contain w-full h-full ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={handleImageLoad}
      />
    </div>
  );
}
