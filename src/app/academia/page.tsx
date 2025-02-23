import SubHeader from '@/components/SubHeader/AcademySubHeader';
import CourseCard from '@/components/CourseCard/CourseCard';

const courses = [
  {
    title: "Danza espectáculo",
    description: "Aprende las técnicas y coreografías más impactantes para el escenario.",
    imageUrl: "/images/courses/danza-espectaculo/main.jpg",
    galleryImages: [
      "/images/courses/danza-espectaculo/gallery-1.jpg",
      "/images/courses/danza-espectaculo/gallery-2.jpg",
      "/images/courses/danza-espectaculo/gallery-3.jpg"
    ]
  },
  {
    title: "Moderno / Contemporáneo",
    description: "Explora la libertad de movimiento y la expresión corporal contemporánea.",
    imageUrl: "/images/courses/contemporaneo/main.jpg",
    galleryImages: [
      "/images/courses/contemporaneo/gallery-1.jpg",
      "/images/courses/contemporaneo/gallery-2.jpg",
      "/images/courses/contemporaneo/gallery-3.jpg"
    ]
  },
  {
    title: "Street",
    description: "Domina los movimientos urbanos y las últimas tendencias del street dance.",
    imageUrl: "/images/courses/street/main.jpg",
    galleryImages: [
      "/images/courses/street/gallery-1.jpg",
      "/images/courses/street/gallery-2.jpg",
      "/images/courses/street/gallery-3.jpg"
    ]
  },
  {
    title: "Jazz Dance",
    description: "Combina técnica, ritmo y expresión en este estilo clásico moderno.",
    imageUrl: "/images/courses/jazz/main.jpg",
    galleryImages: [
      "/images/courses/jazz/gallery-1.jpg",
      "/images/courses/jazz/gallery-2.jpg",
      "/images/courses/jazz/gallery-3.jpg",
      "/images/courses/jazz/gallery-4.jpg"
    ]
  },
  {
    title: "Sexy Style Heels",
    description: "Desarrolla confianza y estilo bailando con tacones.",
    imageUrl: "/images/courses/heels/main.jpg",
    galleryImages: [
      "/images/courses/heels/gallery-1.jpg",
      "/images/courses/heels/gallery-2.jpg",
      "/images/courses/heels/gallery-3.jpg"
    ]
  },
  {
    title: "Girly",
    description: "Estilo femenino que combina diversos géneros de baile.",
    imageUrl: "/images/courses/girly/main.jpg",
    galleryImages: [
      "/images/courses/girly/gallery-1.jpg",
      "/images/courses/girly/gallery-2.jpg",
      "/images/courses/girly/gallery-3.jpg"
    ]
  },
  {
    title: "Ballroom",
    description: "Aprende los bailes de salón más populares y elegantes.",
    imageUrl: "/images/courses/ballroom/main.jpg",
    galleryImages: [
      "/images/courses/ballroom/gallery-1.jpg",
      "/images/courses/ballroom/gallery-2.jpg",
      "/images/courses/ballroom/gallery-3.jpg"
    ]
  },
  {
    title: "Iniciación a la danza",
    description: "Curso perfecto para comenzar en el mundo de la danza.",
    imageUrl: "/images/courses/iniciacion/main.jpg",
    galleryImages: [
      "/images/courses/iniciacion/gallery-2.jpg",
      "/images/courses/iniciacion/gallery-3.jpg"
    ]
  },
  {
    title: "TikTok Dance",
    description: "Aprende las coreografías más virales de las redes sociales.",
    imageUrl: "/images/courses/tiktok/main.jpg",
    galleryImages: [
      "/images/courses/tiktok/gallery-1.jpg",
      "/images/courses/tiktok/gallery-2.jpg",
      "/images/courses/tiktok/gallery-3.jpg"
    ]
  },
  {
    title: "Dance Kids",
    description: "Clases especialmente diseñadas para los más pequeños.",
    imageUrl: "/images/courses/kids/main.jpg",
    galleryImages: [
      "/images/courses/kids/gallery-1.jpg",
      "/images/courses/kids/gallery-2.jpg",
      "/images/courses/kids/gallery-3.jpg",
      "/images/courses/kids/gallery-4.jpg",
      "/images/courses/kids/gallery-5.jpg",
    ]
  },
  {
    title: "Chair Dance",
    description: "Coreografías innovadoras utilizando la silla como elemento.",
    imageUrl: "/images/courses/chair/main.jpg",
    galleryImages: [
      "/images/courses/chair/gallery-1.jpg",
      "/images/courses/chair/gallery-2.jpg",
      "/images/courses/chair/gallery-3.jpg",
      "/images/courses/chair/gallery-4.jpg",
      "/images/courses/chair/gallery-5.jpg",
    ]
  },
  {
    title: "Broadway Show",
    description: "Aprende el estilo de los musicales de Broadway.",
    imageUrl: "/images/courses/broadway/main.jpg",
    galleryImages: [
      "/images/courses/broadway/gallery-1.jpg",
      "/images/courses/broadway/gallery-2.jpg",
      "/images/courses/broadway/gallery-3.jpg"
    ]
  },
  {
    title: "Ballet",
    description: "Técnica clásica fundamental para cualquier bailarín.",
    imageUrl: "/images/courses/ballet/main.jpg",
    galleryImages: [
      "/images/courses/ballet/gallery-1.jpg",
      "/images/courses/ballet/gallery-2.jpg",
      "/images/courses/ballet/gallery-3.jpg"
    ]
  },
  {
    title: "Full Dance",
    description: "Programa completo que combina diferentes estilos de baile.",
    imageUrl: "/images/courses/full-dance/main.jpg",
    galleryImages: [
      "/images/courses/full-dance/gallery-1.jpg",
      "/images/courses/full-dance/gallery-2.jpg",
      "/images/courses/full-dance/gallery-3.jpg"
    ]
  },
  {
    title: "Lyrical",
    description: "Fusión de ballet y jazz con énfasis en la expresión emocional.",
    imageUrl: "/images/courses/lyrical/main.jpg",
    galleryImages: [
      "/images/courses/lyrical/gallery-1.jpg",
      "/images/courses/lyrical/gallery-2.jpg",
      "/images/courses/lyrical/gallery-3.jpg"
    ]
  }
];

export default function AcademiaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SubHeader />
      <div className="max-w-7xl mx-auto px-4 py-8 mt-[200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              galleryImages={course.galleryImages}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 