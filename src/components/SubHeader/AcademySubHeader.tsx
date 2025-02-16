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
    <div className="w-full bg-zinc-900/80 backdrop-blur-sm mt-[144px]">
      <nav className="max-w-7xl mx-auto px-4">
        <ul className="flex space-x-8 h-12 items-center">
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
              href="/academia/gala-ola"
              className={getLinkClassName('/academia/gala-ola')}
            >
              Gala Olá
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