"use client";

import Image from 'next/image';

interface ProductionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  location?: string;
}

const ProductionCard = ({ title, description, imageUrl, date, location }: ProductionCardProps) => {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
  );
};

export default ProductionCard; 