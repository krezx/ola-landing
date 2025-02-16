"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const getLinkClassName = (path: string) => {
    const baseClasses = "transition-colors text-lg";
    return pathname.startsWith(path)
      ? `${baseClasses} text-white font-semibold`
      : `${baseClasses} text-gray-300 hover:text-white`;
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-4">
          {/* Logo */}
          <Link href="/" className="mb-4">
            {/* Aquí debes reemplazar '/logo.png' con la ruta real de tu logo */}
            <div className="w-40 h-20 bg-white/10 flex items-center justify-center text-white">
              {/* Este div es temporal, reemplázalo con tu Image cuando tengas el logo */}
              Logo Olá
            </div>
          </Link>

          {/* Navegación principal */}
          <nav className="hidden md:flex space-x-12">
            <Link 
              href="/academia" 
              className={getLinkClassName('/academia')}
            >
              Academia Olá
            </Link>
            <Link 
              href="/producciones" 
              className={getLinkClassName('/producciones')}
            >
              Olá Producciones
            </Link>
          </nav>

          {/* Botón de menú móvil */}
          <button className="md:hidden absolute right-4 top-4 text-white">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 