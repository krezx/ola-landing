import React from 'react';
import Image from 'next/image';

interface GalaProps {
  gala: {
    titulo: string;
    fecha: string;
    descripcion: string;
    imagenUrl: string;
  };
}

export const GalaCard: React.FC<GalaProps> = ({ gala }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64 w-full">
        <Image
          src={gala.imagenUrl}
          alt={gala.titulo}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{gala.titulo}</h2>
        <p className="text-gray-600 mb-2">{gala.fecha}</p>
        <p className="text-gray-700">{gala.descripcion}</p>
      </div>
    </div>
  );
}; 