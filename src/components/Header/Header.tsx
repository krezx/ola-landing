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
    <header className="fixed w-full top-0 z-50 bg-black backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-4">
          {/* Logo */}
          <div className="relative z-50">
            <Link href="/" className="mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Logo Olá"
                width={300}
                height={100}
                className="h-[60px] w-[225px] sm:h-[80px] sm:w-[300px]"
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </div>

          {/* Navegación principal */}
          <nav className="flex space-x-12 mt-4">
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
        </div>
      </div>
    </header>
  );
};

export default Header; 