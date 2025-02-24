'use client'

import React from 'react';
import AcademySubHeader from '@/components/SubHeader/AcademySubHeader';
import { EventosCard } from '@/components/EventosCard/EventosCard';

interface Evento {
  id: number;
  titulo: string;
  imagenUrl: string;
  galleryImages?: string[];
}

const eventos: Evento[] = [
  {
    id: 1,
    titulo: "Teletón 2024",
    imagenUrl: "/images/eventos/teleton-2024/main.jpg",
    galleryImages: [
      "/images/eventos/teleton-2024/1.jpg",
      "/images/eventos/teleton-2024/2.jpg",
      "/images/eventos/teleton-2024/3.jpg",
      "/images/eventos/teleton-2024/4.jpg",
    ]
  },
  {
    id: 3,
    titulo: "Teletón 2023",
    imagenUrl: "/images/eventos/teleton-2023/main.jpg",
    galleryImages: [
    ]
  },
  {
    id: 4,
    titulo: "Teletón 2022",
    imagenUrl: "/images/eventos/teleton-2022/main.jpg",
    galleryImages: [
      "/images/eventos/teleton-2022/1.jpg",
    ]
  }
];

export default function ParticipacionesPage() {
  return (
    <main className="min-h-screen bg-black">
      <AcademySubHeader />
      <div className="container mx-auto px-4 py-8 sm:mt-[144px] lg:mt-[200px] mt-[200px]">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12">
          Eventos
        </h1>
        
        <div className="max-w-7xl mx-auto">
          <p className="text-sm sm:text-base lg:text-lg text-center text-gray-300 mb-8 sm:mb-12 lg:mb-16">
            Revisa las participaciones de nuestros alumnos en diferentes eventos.
          </p>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {eventos.map((evento) => (
              <div key={evento.id}>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6">
                  {evento.titulo}
                </h2>
                <EventosCard evento={evento} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}