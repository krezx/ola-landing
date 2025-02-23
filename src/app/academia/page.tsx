import SubHeader from '@/components/SubHeader/AcademySubHeader';
import CourseCard from '@/components/CourseCard/CourseCard';

const courses = [
  {
    title: "Danza espectáculo",
    description: "Curso en el que combinamos secuencias estilizadas que capturan la esencia del pop contemporáneo, a través de la interpretación podrás desarrollar la coordinación y la técnica.",
    age: "6 a 12 años",
    imageUrl: "/images/courses/danza-espectaculo/main.jpg",
    galleryImages: [
      "/images/courses/danza-espectaculo/gallery-1.jpg",
      "/images/courses/danza-espectaculo/gallery-2.jpg",
      "/images/courses/danza-espectaculo/gallery-3.jpg"
    ],
    videoUrl: "/images/courses/danza-espectaculo/video.mp4",
  },
  {
    title: "Moderno / Contemporáneo",
    description: "Explora la libertad de movimiento y la expresión corporal contemporánea.",
    age: "+12 años",
    imageUrl: "/images/courses/contemporaneo/main.jpg",
    galleryImages: [
      "/images/courses/contemporaneo/gallery-1.jpg",
    ]
  },
  {
    title: "Street",
    description: "Sub-estilo del jazz dance donde mezclamos la técnica, estilos y danzas urbanas, poniendo énfasis en los estilos musicales como el reggaeton.",
    age: "+13 años",
    imageUrl: "/images/courses/street/main.jpg",
    galleryImages: [
      "/images/courses/street/gallery-1.jpg",
      "/images/courses/street/gallery-2.jpg",
      "/images/courses/street/gallery-3.jpg"
    ],
    videoUrl: "/images/courses/street/video.mp4",
  },
  {
    title: "Jazz Dance",
    description: "Curso donde se trabaja la técnica, se desarrolla la interpretación y coordinación.",
    age: "Juvenil/Adulto",
    imageUrl: "/images/courses/jazz/main.jpg",
    galleryImages: [
      "/images/courses/jazz/gallery-1.jpg",
      "/images/courses/jazz/gallery-2.jpg",
      "/images/courses/jazz/gallery-3.jpg",
      "/images/courses/jazz/gallery-4.jpg"
    ],
    videoUrl: "/images/courses/jazz/video.mp4",
  },
  {
    title: "Sexy Style Heels",
    description: "Curso enfocado a trabajar la técnica de baile en tacones, en las cuales también se trabaja coreografía, postura, equilibrio, musicalidad y sobre todo la sensualidad.",
    age: "+14 años",
    imageUrl: "/images/courses/heels/main.jpg",
    galleryImages: [
      "/images/courses/heels/gallery-1.jpg",
      "/images/courses/heels/gallery-2.jpg"
    ],
    videoUrl: "/images/courses/heels/video.mp4",
  },
  {
    title: "Girly",
    description: "Curso enfocado a potenciar tu femineidad, actitud e interpretación, a través de distintos ritmos musicales.",
    age: "+14 años",
    imageUrl: "/images/courses/girly/main.jpg",
    galleryImages: [
    ],
    videoUrl: "/images/courses/girly/video.mp4",
  },
  {
    title: "Ballroom",
    description: "Curso técnico/coreográfico donde se exploran ritmos latinos del ballroom, trabajando musicalidad, ritmo y memoria coreográfica.",
    age: "Juvenil/Adulto",
    imageUrl: "/images/courses/ballroom/main.jpg",
    galleryImages: [
      "/images/courses/ballroom/gallery-1.jpg",
      "/images/courses/ballroom/gallery-2.jpg"
    ],
    videoUrl: "/images/courses/ballroom/video.mp4",
  },
  {
    title: "Iniciación a la danza",
    description: "Curso donde se comienza a aprender los pasos básicos del ballet a través de la danza y el juego, desarrollando la coordinación.",
    age: "4 a 6 años",
    imageUrl: "/images/courses/iniciacion/main.jpg",
    galleryImages: [
      "/images/courses/iniciacion/gallery-1.jpg",
      "/images/courses/iniciacion/gallery-2.jpg"
    ],
    videoUrl: [
      {
        url: "/images/courses/iniciacion/video1.mp4",
        teacher: "Valeria Celume",
        schedule: "Sábados"
      },
      {
        url: "/images/courses/iniciacion/video2.mp4",
        teacher: "Belen Esquivel",
        schedule: "Viernes"
      }
    ]
  },
  {
    title: "TikTok Dance",
    description: "Curso donde aprenderás distintos bailes, trabajando el ritmo y la memoria coreográfica. Esta clase finaliza con un registro grabado con toda la actitud y estilo que trae esta nueva moda.",
    age: "+6 años",
    imageUrl: "/images/courses/tiktok/main.jpg",
    galleryImages: [
    ],
    videoUrl: "/images/courses/tiktok/video.mp4",
  },
  {
    title: "Dance Kids",
    description: "Este curso es un espacio de diversión y aprendizaje para los más pequeños donde explorarán este mundo de la danza.",
    age: "6 a 12 años",
    imageUrl: "/images/courses/kids/main.jpg",
    galleryImages: [
      "/images/courses/kids/gallery-1.jpg",
      "/images/courses/kids/gallery-2.jpg",
      "/images/courses/kids/gallery-3.jpg",
      "/images/courses/kids/gallery-4.jpg",
      "/images/courses/kids/gallery-5.jpg"
    ],
    videoUrl: "/images/courses/kids/video.mp4",
  },
  {
    title: "Chair Dance",
    description: "Curso donde se trabaja la sensualidad, autoconfianza y actitud junto a nuestro implemento la silla, donde descubrirás nuevos movimientos y desarrollarás trucos.",
    age: "Juvenil/Adulto",
    imageUrl: "/images/courses/chair/main.jpg",
    galleryImages: [
      "/images/courses/chair/gallery-1.jpg",
      "/images/courses/chair/gallery-2.jpg",
      "/images/courses/chair/gallery-3.jpg",
      "/images/courses/chair/gallery-4.jpg",
      "/images/courses/chair/gallery-5.jpg",
      "/images/courses/chair/gallery-6.jpg",
    ],
    videoUrl: "/images/courses/chair/video.mp4",
  },
  {
    title: "Broadway Show",
    description: "Curso donde se mezclan los estilos como el jazz dance y el burlesque, desarrollando la sensualidad y la actitud.",
    age: "Juvenil/Adulto",
    imageUrl: "/images/courses/broadway/main.jpg",
    galleryImages: [
      "/images/courses/broadway/gallery-1.jpg",
    ],
    videoUrl: "/images/courses/broadway/video.mp4",
  },
  {
    title: "Ballet",
    description: "Técnica clásica fundamental para cualquier bailarín.",
    age: "Alumnos +13 años",
    imageUrl: "/images/courses/ballet/main.jpg",
    galleryImages: [
    ]
  },
  {
    title: "Full Dance",
    description: "Curso enfocado en poder desarrollar la motricidad y coordinación de forma entretenida, además de poder jugar con la creatividad e imaginación.",
    age: "4 a 7 años",
    imageUrl: "/images/courses/full-dance/main.jpg",
    galleryImages: [
      "/images/courses/full-dance/gallery-1.jpg",
    ],
    videoUrl: "/images/courses/full-dance/video.mp4",
  },
  {
    title: "Lyrical",
    description: "Fusión de ballet y jazz con énfasis en la expresión emocional.",
    age: "+12 años",
    imageUrl: "/images/courses/lyrical/main.jpg",
    galleryImages: [
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
              age={course.age}
              imageUrl={course.imageUrl}
              galleryImages={course.galleryImages}
              videoUrl={course.videoUrl}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 