import React from 'react';
import styles from './Gallery.module.css';
import Header from '@/components/Header/Header';
import SubHeader from '@/components/SubHeader/ProductionsSubHeader';

const GalleryPage = () => {
  // Este es un array temporal de imágenes de ejemplo
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/placeholder1.jpg',
      alt: 'Descripción imagen 1',
      title: 'Título 1'
    },
    {
      id: 2,
      src: '/images/gallery/placeholder2.jpg',
      alt: 'Descripción imagen 2',
      title: 'Título 2'
    },
    // Puedes agregar más imágenes aquí cuando las tengas
  ];

  return (
    <>
      <Header />
      <SubHeader/>
      <main className="container mx-auto px-4 py-8 mt-[200px]">
        <h1 className="text-4xl font-bold mb-8">Galería de Producciones</h1>
        
        <div className={styles.galleryGrid}>
          {galleryImages.map((image) => (
            <div key={image.id} className={styles.galleryItem}>
              <img
                src={image.src}
                alt={image.alt}
                className={styles.galleryImage}
                loading="lazy"
              />
              <h3 className={styles.imageTitle}>{image.title}</h3>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default GalleryPage; 