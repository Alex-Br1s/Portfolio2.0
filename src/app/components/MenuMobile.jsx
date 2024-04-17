import { ibmPlexMono } from '../ui/fonts';
import Link from 'next/link'

// Componente de menú móvil
const MenuMobile = ({isMenuOpen, setIsMenuOpen}) => {

  const handleMenuClose = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
      <div className="absolute top-0 left-0 w-full h-full flex overflow-hidden  justify-center items-center bg-colorPrincipal z-50">
        <ul className="flex flex-col justify-center gap-7 pr-5 text-center">
          <li>
            <Link onClick={handleMenuClose} className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-violet-500 transition-border duration-300`} href="#about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-violet-500 transition-border duration-300`} href="#experience">
              Experience
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-violet-500 transition-border duration-300`} href="#work">
              Work
            </Link>
          </li>
          <li>
            <Link onClick={handleMenuClose} className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-violet-500 transition-border duration-300`} href="#contact">
              Contact
            </Link>
          </li>
         
        </ul>
      </div>
    );
  };
  

export default MenuMobile