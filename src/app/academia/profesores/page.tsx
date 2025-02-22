import SubHeader from '@/components/SubHeader/AcademySubHeader';
import TeacherCarousel from '@/components/TeacherCarousel/TeacherCarousel';

// Datos de ejemplo - puedes moverlos a un archivo separado
const teachers = [
  {
    id: 1,
    name: "Andrea Barahona",
    image: "/images/teachers/andrea.jpg",
    description: "Insertar descripción",
    courses: ["Dance Kids", "Ballroom", "Jazz Dance"]
  },
  {
    id: 2,
    name: "Antonella Alvarez",
    image: "/images/teachers/antonella.jpg",
    description: "Insertar descripción",
    courses: ["Street", "Chair Dance", "TikTok Dance"]
  },
  {
    id: 3,
    name: "Francisca Cerda",
    image: "/images/teachers/francisca.jpg",
    description: "Insertar descripción",
    courses: ["Ballroom", "", ""]
  },
  {
    id: 4,
    name: "Belen Esquivel",
    image: "/images/teachers/belen.jpg",
    description: "Insertar descripción",
    courses: ["Insertar cursos"]
  },
  {
    id: 5,
    name: "Valeria Celume",
    image: "/images/teachers/valeria.jpg",
    description: "Insertar descripción",
    courses: ["Full Dance"]
  }
];

export default function ProfesoresPage() {
  return (
    <main className="min-h-screen">
      <SubHeader />
      <div className="container mx-auto px-4  mt-[200px]">
        <div className="text-center">
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
            Conoce a nuestro excepcional equipo de profesores, apasionados por la danza 
            y comprometidos con tu desarrollo artístico. Cada uno de ellos aporta su experiencia 
            única para ayudarte a alcanzar tu máximo potencial.
          </p>
          <TeacherCarousel teachers={teachers} />
          <p className="text-[#2FECFF] text-lg mt-4 font-semibold">
            ¡Únete a nuestras clases y descubre tu pasión por la danza!
          </p>
        </div>
        
      </div>
    </main>
  );
}