// src/app/layout.tsx
import './globals.css';

import Navbar from './components/Navbar';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokémon explorer!',
  description: 'Explora todos los sets de cartas Pokémon.',
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <head>
        {/* Link a la fuente de Google Fonts: Press Start 2P */}
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
          rel="stylesheet"
        />
        {/* Enlace a animations.css para los efectos de animación */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className="flex flex-col min-h-screen font-[VT323]">
        {/* Navbar como componente separado */}
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-grow container mx-auto py-6">{children}</main>
        
        
      </body>
    </html>
  );
}
