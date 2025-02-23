'use client'

import React from 'react';
import AcademySubHeader from '@/components/SubHeader/AcademySubHeader';
import { ParticipacionCard } from '@/components/ParticipacionCard/ParticipacionCard';

interface Participacion {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  imagenUrl: string;
  galleryImages?: string[];
}

const participaciones: Participacion[] = [
  {
    id: 1,
    titulo: "Teletón 2024",
    descripcion: "Inserte descripción...",
    fecha: "?????",
    imagenUrl: "/images/participaciones/teleton-2024/main.jpg",
    galleryImages: [
      "/images/participaciones/teleton-2024/1.jpg",
      "/images/participaciones/teleton-2024/2.jpg",
      "/images/participaciones/teleton-2024/3.jpg",
      "/images/participaciones/teleton-2024/4.jpg",
    ]
  },
  {
    id: 2,
    titulo: "Navidad municipalidad",
    descripcion: "Inserte descripción...",
    fecha: "??? 2023",
    imagenUrl: "/images/participaciones/navidad-municipalidad/main.jpg",
    galleryImages: [
      "/images/participaciones/navidad-municipalidad/1.jpg",
      "/images/participaciones/navidad-municipalidad/2.jpg",
      "/images/participaciones/navidad-municipalidad/3.jpg",
      "/images/participaciones/navidad-municipalidad/4.jpg",
    ]
  },
  {
    id: 3,
    titulo: "Teletón 2023",
    descripcion: "Inserte descripción...",
    fecha: "??? 2023",
    imagenUrl: "/images/participaciones/teleton-2023/main.jpg",
    galleryImages: [
    ]
  }
];

export default function ParticipacionesPage() {
  return (
    <main className="min-h-screen bg-black">
      <AcademySubHeader />
      <div className="container mx-auto px-4 py-8 sm:mt-[144px] lg:mt-[200px] mt-[200px]">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12">
          Participaciones
        </h1>
        
        <div className="max-w-7xl mx-auto">
          <p className="text-sm sm:text-base lg:text-lg text-center text-gray-300 mb-8 sm:mb-12 lg:mb-16">
            Conoce las participaciones y logros de nuestros alumnos en diferentes eventos y competencias.
          </p>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {participaciones.map((participacion) => (
              <div key={participacion.id}>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6">
                  {participacion.titulo}
                </h2>
                <ParticipacionCard participacion={participacion} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}