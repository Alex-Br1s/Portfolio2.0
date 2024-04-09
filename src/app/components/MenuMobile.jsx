
import { ibmPlexMono } from '../ui/fonts';

// Componente de menú móvil
const MenuMobile = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-full flex overflow-hidden justify-center items-center bg-colorPrincipal z-50">
        <ul className="flex flex-col gap-7 pr-5">
          <li>
            <a className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-violet-500 transition-border duration-300`} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-violet-500 transition-border duration-300`} href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-violet-500 transition-border duration-300`} href="#work">
              Work
            </a>
          </li>
          <li>
            <a className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-violet-500 transition-border duration-300`} href="#contact">
              Contact
            </a>
          </li>
         
        </ul>
      </div>
    );
  };
  

export default MenuMobile