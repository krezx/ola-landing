"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '../Modal/Modal';

interface CourseCardProps {
  title: string;
  description: string;
  age?: string;
  imageUrl: string;
  galleryImages?: string[];
  videoUrl?: string;
}

const CourseCard = ({ 
  title, 
  description, 
  age,
  imageUrl,
  galleryImages = [],
  videoUrl
}: CourseCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(imageUrl);
  const [showLargeImage, setShowLargeImage] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  
  useEffect(() => {
    // Verificar si este curso debe abrirse automáticamente
    const selectedCourse = localStorage.getItem('selectedCourse');
    if (selectedCourse && selectedCourse.toLowerCase() === title.toLowerCase()) {
      setIsModalOpen(true);
      localStorage.removeItem('selectedCourse');
    }
  }, [title]);

  // Combinamos la imagen principal con las imágenes de la galería
  const allImages = [imageUrl, ...galleryImages];

  return (
    <>
      <div 
        className="bg-zinc-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
          <p className="text-gray-300 text-sm">
            {age && (
              <span className="text-cyan-400 font-medium">
                Edad: {age}
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Modal del curso */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setShowLargeImage(false);
          setShowVideo(true);
        }}
        title={title}
      >
        <div className="space-y-6">
          {/* Contenedor de Video/Imagen principal */}
          <div className="relative h-[400px] w-full">
            {videoUrl && showVideo ? (
              <div className="relative h-full w-full flex items-center justify-center bg-black">
                <video
                  src={videoUrl}
                  className="max-h-full max-w-full h-auto w-auto"
                  autoPlay
                  controls
                  muted={false}
                  playsInline
                />
              </div>
            ) : (
              <div 
                className="relative h-full w-full cursor-pointer"
                onClick={() => setShowLargeImage(true)}
              >
                <Image
                  src={selectedImage}
                  alt={title}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                  <span className="text-white bg-black/50 px-4 py-2 rounded-lg">
                    Click para ampliar
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Miniaturas de la galería y control de video */}
          <div className="flex gap-4 overflow-x-auto pb-2 justify-center">
            {videoUrl && (
              <div 
                onClick={() => setShowVideo(true)}
                className={`relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer 
                  ${showVideo ? 'ring-2 ring-cyan-400' : 'opacity-70 hover:opacity-100'}`}
              >
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653Z" />
                  </svg>
                </div>
              </div>
            )}
            {allImages.map((img, index) => (
              <div 
                key={index}
                onClick={() => {
                  setSelectedImage(img);
                  setShowVideo(false);
                }}
                className={`relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer 
                  ${selectedImage === img && !showVideo ? 'ring-2 ring-cyan-400' : 'opacity-70 hover:opacity-100'}`}
              >
                <Image
                  src={img}
                  alt={`${title} - imagen ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Descripción */}
          <div className="space-y-4">
            <p className="text-gray-300 text-lg">{description}</p>
            
            {/* Nota sobre horarios */}
            <div className="bg-zinc-800/50 p-4 rounded-lg mt-6">
              <p className="text-cyan-400 font-semibold mb-2">¿Te interesa este curso?</p>
              <p className="text-gray-300">Consulta los horarios disponibles en nuestra sección de horarios</p>
              <Link 
                href="/academia/horarios" 
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-2 mt-2"
              >
                Ver horarios
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal de imagen grande */}
      <Modal
        isOpen={showLargeImage}
        onClose={() => setShowLargeImage(false)}
        title=""
      >
        <div className="relative h-[80vh] w-full">
          <Image
            src={selectedImage}
            alt={title}
            fill
            className="object-contain"
          />
          <button
            onClick={() => setShowLargeImage(false)}
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </Modal>
    </>
  );
};

export default CourseCard; 