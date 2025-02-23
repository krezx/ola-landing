import React, { useState } from 'react';
import Image from 'next/image';

interface GalaProps {
  gala: {
    titulo: string;
    imagenUrl: string;
    galleryImages?: string[];
  };
}

export const GalaCard: React.FC<GalaProps> = ({ gala }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="shadow-lg overflow-hidden">
      <div 
        className="relative h-64 w-full cursor-pointer"
        onClick={() => setSelectedImage(gala.imagenUrl)}
      >
        <Image
          src={gala.imagenUrl}
          alt={gala.titulo}
          fill
          className="object-cover hover:scale-105 transition-transform"
        />
      </div>
      
      {gala.galleryImages && gala.galleryImages.length > 0 && (
        <div className="p-6 w-full flex items-center justify-center">
          <div className="w-full max-w-4xl grid auto-rows-auto gap-2 justify-items-center" 
               style={{ 
                 gridTemplateColumns: 'repeat(auto-fill, minmax(128px, 1fr))'
               }}>
            {gala.galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative h-32 w-32 cursor-pointer transition-transform hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${gala.titulo} - Imagen ${index + 1}`}
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
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative h-[90vh] w-[90vw]">
            <Image
              src={selectedImage}
              alt="Imagen en pantalla completa"
              fill
              className="object-contain"
            />
            <a 
              href={selectedImage}
              download
              className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100 transition-colors z-10"
              onClick={(e) => e.stopPropagation()}
            >
              Descargar
            </a>
          </div>
        </div>
      )}
    </div>
  );
}; 