// /components/CardImage.tsx
"use client"; // Marcamos este archivo como componente del lado del cliente

import Image from 'next/image';

export default function CardImage({ src, alt }: { src: string, alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={600}
      className="object-contain rounded-md border border-gray-300 shadow-md"
    />
  );
}
