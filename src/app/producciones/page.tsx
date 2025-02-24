import ProductionCard from '@/components/ProductionCard/ProductionCard';
import ProductionsSubHeader from '@/components/SubHeader/ProductionsSubHeader';

// Estos son datos de ejemplo. Deberías reemplazarlos con tus producciones reales
const SAMPLE_PRODUCTIONS = [
  {
    title: "Show Artístico",
    description: "Show artístico para Ovalle Casino Resort.",
    galleryImages: [
      "/images/productions/casino-ovalle/main.jpg",
      "/images/productions/casino-ovalle/1.jpg",
      "/images/productions/casino-ovalle/2.jpg",
      "/images/productions/casino-ovalle/3.jpg",
      "/images/productions/casino-ovalle/4.jpg",
      "/images/productions/casino-ovalle/5.jpg",
    ],
    date: "???",
    location: "Ovalle Casino Resort"
  },
  {
    title: "Campaña publicitaria",
    description: "Campaña publicitaria para inmobiliaria PY.",
    galleryImages: [
      "/images/productions/py/1.jpg",
      "/images/productions/py/2.jpg",
      "/images/productions/py/3.jpg",
      "/images/productions/py/4.jpg",
      "/images/productions/py/5.jpg",
    ],
    date: "Verano 2025",
    location: "Avenida del Mar, La Serena"
  },
  {
    title: "Show Artístico",
    description: "Show artístico navideño para la Municipalidad de La Serena.",
    galleryImages: [
      "/images/productions/navidad-municipalidad/main.jpg",
      "/images/productions/navidad-municipalidad/1.jpg",
      "/images/productions/navidad-municipalidad/2.jpg",
      "/images/productions/navidad-municipalidad/3.jpg",
      "/images/productions/navidad-municipalidad/4.jpg",
    ],
    date: "Diciembre 2023",
    location: "Municipalidad de La Serena"
  }
];

export default function ProduccionesPage() {
  return (
    <main>
      <ProductionsSubHeader />
      <div className="max-w-7xl mx-auto px-4 py-12 mt-[150px]">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Nuestras Producciones</h1>
        <p className="text-gray-300 mb-12 max-w-3xl text-center mx-auto">
          Descubre las producciones que hemos realizado, desde espectáculos de danza 
          hasta eventos culturales que han dejado huella en nuestra comunidad.
        </p>
        
        <div className="space-y-16">
          {SAMPLE_PRODUCTIONS.map((production, index) => (
            <div key={index}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6">
                {production.title}
              </h2>
              <p className="text-gray-300 mb-4">{production.description}</p>
              <ProductionCard
                title={production.title}
                description={production.description}
                date={production.date}
                location={production.location}
                galleryImages={production.galleryImages}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 