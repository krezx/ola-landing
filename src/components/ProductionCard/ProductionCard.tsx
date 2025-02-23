"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ProductionCardProps {
  title: string;
  description: string;
  galleryImages: string[];
  date: string;
  location?: string;
  additionalImages?: string[];
}

const ProductionCard = ({ 
  title, 
  description, 
  galleryImages,
  date, 
  location,
  additionalImages = []
}: ProductionCardProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="overflow-hidden shadow-lg">
      <div className="mt-5 w-full">
        <div className="grid auto-rows-fr 
                      grid-cols-[repeat(auto-fill,minmax(100px,1fr))]
                      lg:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]
                      max-w-screen-xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-square cursor-pointer transition-transform hover:scale-105 
                        max-w-[100px] lg:max-w-[150px] w-full mx-auto"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`${title} - Imagen ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[95vw] h-[90vh]">
            <Image
              src={selectedImage}
              alt={title}
              fill
              className="object-contain"
              sizes="95vw"
              priority
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

export default ProductionCard; 