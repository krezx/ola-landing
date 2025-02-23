"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ProductionsSubHeader = () => {
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
        <ul className="flex space-x-8 h-12 items-center">
          <li>
            <Link 
              href="/producciones"
              className={getLinkClassName('/producciones')}
            >
              Producciones
            </Link>
          </li>
          <li>
            <Link 
              href="/producciones/staff"
              className={getLinkClassName('/producciones/staff')}
            >
              Staff
            </Link>
          </li>
          <li>
            <Link 
              href="/producciones/contacto"
              className={getLinkClassName('/producciones/contacto')}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductionsSubHeader; 