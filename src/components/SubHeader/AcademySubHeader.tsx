"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SubHeader = () => {
  const pathname = usePathname();

  const getLinkClassName = (path: string) => {
    const baseClasses = "transition-colors";
    return pathname === path
      ? "text-white border-b-2 border-white pb-1"
      : "text-gray-300 hover:text-white";
  };

  return (
    <div className="w-full bg-zinc-900/80 backdrop-blur-sm fixed top-[144px] z-40">
      <nav className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap gap-4 md:gap-8 h-auto min-h-[48px] items-center justify-center md:justify-start py-2">
          <li>
            <Link 
              href="/academia"
              className={getLinkClassName('/academia')}
            >
              Cursos
            </Link>
          </li>
          <li>
            <Link 
              href="/academia/horarios"
              className={getLinkClassName('/academia/horarios')}
            >
              Horarios
            </Link>
          </li>
          <li>
            <Link
              href='/academia/profesores'
              className={getLinkClassName('/academia/profesores')} 
            >
              Profesores
            </Link>
          </li>
          <li>
            <Link
              href="/academia/gala-ola"
              className={getLinkClassName('/academia/gala-ola')}
            >
              Gala Olá
            </Link>
          </li>
          <li>
            <Link
              href="/academia/participaciones"
              className={getLinkClassName('/academia/participaciones')}
            >
              Participaciones
            </Link>
          </li>
          <li>
            <Link 
              href="/academia/contacto"
              className={getLinkClassName('/academia/contacto')}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SubHeader; 