'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import('react-slick'), {
  ssr: false
});

interface Teacher {
  id: number;
  name: string;
  image: string;
  description: string;
  courses: string[];
}

interface TeacherCarouselProps {
  teachers: Teacher[];
}

export default function TeacherCarousel({ teachers }: TeacherCarouselProps) {
  const router = useRouter();

  const handleCourseClick = (course: string) => {
    // Guardamos el curso seleccionado en localStorage para abrirlo después
    localStorage.setItem('selectedCourse', course);
    router.push('/academia');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0px',
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="slick-track-fix">
        <Slider {...settings}>
          {teachers.map((teacher) => (
            <div key={teacher.id} className="h-full">
              <div className="mx-1 h-full">
                <div className="bg-zinc-900/50 rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 w-[300px] mx-auto h-full flex flex-col">
                  <h3 className="text-xl font-semibold p-4 text-white text-center">{teacher.name}</h3>
                  <div className="relative w-[300px] h-[300px]">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-start">
                    <div>
                      <p className="text-gray-300 mb-4 text-sm text-center">{teacher.description}</p>
                      <div className="text-center">
                        <h4 className="font-semibold mb-3 text-[#2FECFF]">Cursos:</h4>
                        <div className="flex flex-col items-center space-y-2">
                          {teacher.courses.map((course, index) => (
                            course && (
                              <button 
                                key={index}
                                onClick={() => handleCourseClick(course)}
                                className="text-gray-300 text-sm hover:text-[#2FECFF] transition-colors cursor-pointer"
                              >
                                {course}
                              </button>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
