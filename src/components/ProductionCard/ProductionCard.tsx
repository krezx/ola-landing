"use client";

import { useState } from 'react';
import Image from 'next/image';
import Modal from '../Modal/Modal';

interface ProductionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  location?: string;
  additionalImages?: string[];
  fullDescription?: string;
  participants?: string[];
  highlights?: string[];
}

const ProductionCard = ({ 
  title, 
  description, 
  imageUrl, 
  date, 
  location,
  additionalImages = [],
  fullDescription,
  participants = [],
  highlights = []
}: ProductionCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>{date}</span>
            {location && <span>{location}</span>}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
      >
        <div className="space-y-6">
          <div className="relative h-[400px] w-full">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {additionalImages && additionalImages.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mt-4">
              {additionalImages.map((img, index) => (
                <div key={index} className="relative h-32">
                  <Image
                    src={img}
                    alt={`${title} - imagen ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="space-y-4">
            {fullDescription && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Sobre la producción</h3>
                <p className="text-gray-300">{fullDescription}</p>
              </div>
            )}

            <div className="flex justify-between text-gray-400">
              <span>{date}</span>
              {location && <span>{location}</span>}
            </div>

            {participants.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Participantes</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {participants.map((participant, index) => (
                    <li key={index}>{participant}</li>
                  ))}
                </ul>
              </div>
            )}

            {highlights.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Momentos destacados</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductionCard; 