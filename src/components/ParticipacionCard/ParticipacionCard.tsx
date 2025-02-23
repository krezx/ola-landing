import React, { useState } from 'react';
import Image from 'next/image';

interface ParticipacionProps {
  participacion: {
    titulo: string;
    descripcion: string;
    fecha: string;
    imagenUrl: string;
    galleryImages?: string[];
  };
}

export const ParticipacionCard: React.FC<ParticipacionProps> = ({ participacion }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="overflow-hidden shadow-lg">
      <div 
        className="relative h-48 sm:h-64 md:h-72 lg:h-96 w-full cursor-pointer"
        onClick={() => setSelectedImage(participacion.imagenUrl)}
      >
        <Image
          src={participacion.imagenUrl}
          alt={participacion.titulo}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <p className="text-gray-400 text-sm mb-2">{participacion.fecha}</p>
        <p className="text-gray-300">{participacion.descripcion}</p>
      </div>
      
      {participacion.galleryImages && participacion.galleryImages.length > 0 && (
        <div className="mt-5 w-full">
          <div className="grid auto-rows-fr 
                       grid-cols-[repeat(auto-fill,minmax(100px,1fr))]
                       lg:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]
                       max-w-screen-xl mx-auto gap-2">
            {participacion.galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-square cursor-pointer transition-transform hover:scale-105 
                        max-w-[100px] lg:max-w-[150px] w-full mx-auto"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${participacion.titulo} - Imagen ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl max-h-[90vh] aspect-video">
            <Image
              src={selectedImage}
              alt={participacion.titulo}
              fill
              className="object-contain"
            />
          </div>
          <a 
            href={selectedImage}
            download
            className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-white text-black px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-lg shadow-lg hover:bg-gray-100 transition-colors z-10"
            onClick={(e) => e.stopPropagation()}
          >
            Descargar
          </a>
        </div>
      )}
    </div>
  );
};