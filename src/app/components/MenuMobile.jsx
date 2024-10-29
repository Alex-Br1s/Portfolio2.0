import { useEffect } from 'react';
import { ibmPlexMono } from '../ui/fonts';
import Link from 'next/link';

const MenuMobile = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Agrega overflow-hidden al body cuando el menú está abierto
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    // Limpieza al desmontar
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  return (
    isMenuOpen && (
      <div className="absolute top-0 left-0 w-full h-full flex overflow-hidden justify-center items-center bg-colorPrincipal z-50">
        <ul className="flex flex-col justify-center gap-7 pr-5 text-center overflow-hidden z-50">
          {['Sobre mí', 'Experiencia', 'Trabajos', 'Contacto'].map((text) => (
            <li key={text}>
              <Link
                onClick={handleMenuClose}
                className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-violet-500 transition-border duration-300`}
                href={`#${text.toLowerCase()}`}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default MenuMobile;

