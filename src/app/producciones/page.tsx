import ProductionCard from '@/components/ProductionCard/ProductionCard';
import ProductionsSubHeader from '@/components/SubHeader/ProductionsSubHeader';

// Estos son datos de ejemplo. Deberías reemplazarlos con tus producciones reales
const SAMPLE_PRODUCTIONS = [
  {
    title: "Nombre de la Producción 1",
    description: "Una breve descripción de la producción, incluyendo detalles sobre el espectáculo, los artistas involucrados y el impacto que tuvo.",
    imageUrl: "/images/placeholder-production-1.jpg", // Necesitarás agregar estas imágenes
    date: "Diciembre 2023",
    location: "Teatro Principal"
  },
  {
    title: "Nombre de la Producción 2",
    description: "Descripción de otra producción destacada, mencionando los elementos únicos y especiales de este espectáculo.",
    imageUrl: "/images/placeholder-production-2.jpg",
    date: "Octubre 2023",
    location: "Auditorio Municipal"
  },
  // Puedes agregar más producciones aquí
];

export default function ProduccionesPage() {
  return (
    <main>
      <ProductionsSubHeader />
      <div className="max-w-7xl mx-auto px-4 py-12 mt-[200px]">
        <h1 className="text-4xl font-bold text-white mb-8">Nuestras Producciones</h1>
        <p className="text-gray-300 mb-12 max-w-3xl">
          Descubre las producciones que hemos realizado, desde espectáculos de danza 
          hasta eventos culturales que han dejado huella en nuestra comunidad.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_PRODUCTIONS.map((production, index) => (
            <ProductionCard
              key={index}
              title={production.title}
              description={production.description}
              imageUrl={production.imageUrl}
              date={production.date}
              location={production.location}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 