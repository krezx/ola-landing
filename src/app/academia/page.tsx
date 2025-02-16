import SubHeader from '@/components/SubHeader/AcademySubHeader';
import CourseCard from '@/components/CourseCard/CourseCard';
import Schedule from '@/components/Schedule/Schedule';

const courses = [
  {
    title: "Danza espectáculo",
    description: "Aprende las técnicas y coreografías más impactantes para el escenario.",
    imageUrl: "/images/courses/danza-espectaculo.jpg"
  },
  {
    title: "Moderno / Contemporáneo",
    description: "Explora la libertad de movimiento y la expresión corporal contemporánea.",
    imageUrl: "/images/courses/contemporaneo.jpg"
  },
  {
    title: "Street",
    description: "Domina los movimientos urbanos y las últimas tendencias del street dance.",
    imageUrl: "/images/courses/street.jpg"
  },
  {
    title: "Street (Reggaeton)",
    description: "Aprende las mejores coreografías y movimientos del reggaeton.",
    imageUrl: "/images/courses/reggaeton.jpg"
  },
  {
    title: "Jazz Dance",
    description: "Combina técnica, ritmo y expresión en este estilo clásico moderno.",
    imageUrl: "/images/courses/jazz.jpg"
  },
  {
    title: "Sexy Style Heels",
    description: "Desarrolla confianza y estilo bailando con tacones.",
    imageUrl: "/images/courses/heels.jpg"
  },
  {
    title: "Girly",
    description: "Estilo femenino que combina diversos géneros de baile.",
    imageUrl: "/images/courses/girly.jpg"
  },
  {
    title: "Ballroom",
    description: "Aprende los bailes de salón más populares y elegantes.",
    imageUrl: "/images/courses/ballroom.jpg"
  },
  {
    title: "Iniciación a la danza",
    description: "Curso perfecto para comenzar en el mundo de la danza.",
    imageUrl: "/images/courses/iniciacion.jpg"
  },
  {
    title: "TikTok Dance",
    description: "Aprende las coreografías más virales de las redes sociales.",
    imageUrl: "/images/courses/tiktok.jpg"
  },
  {
    title: "Dance Kids",
    description: "Clases especialmente diseñadas para los más pequeños.",
    imageUrl: "/images/courses/kids.jpg"
  },
  {
    title: "Chair Dance",
    description: "Coreografías innovadoras utilizando la silla como elemento.",
    imageUrl: "/images/courses/chair.jpg"
  },
  {
    title: "Broadway Show",
    description: "Aprende el estilo de los musicales de Broadway.",
    imageUrl: "/images/courses/broadway.jpg"
  },
  {
    title: "Ballet",
    description: "Técnica clásica fundamental para cualquier bailarín.",
    imageUrl: "/images/courses/ballet.jpg"
  },
  {
    title: "Full Dance",
    description: "Programa completo que combina diferentes estilos de baile.",
    imageUrl: "/images/courses/full-dance.jpg"
  },
  {
    title: "Lyrical",
    description: "Fusión de ballet y jazz con énfasis en la expresión emocional.",
    imageUrl: "/images/courses/lyrical.jpg"
  }
];

export default function AcademiaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SubHeader />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 