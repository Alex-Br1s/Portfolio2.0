import React from 'react'
import { ibmPlexMono } from '../ui/fonts'
import Image from 'next/image'
import logo from '../../../public/miLogo.png'
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuMobile from './MenuMobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuMobile = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-colorPrincipal flex items-center px-5 justify-between h-20 relative ${isMenuOpen ? 'h-screen overflow-y-hidden' : ''}`}>
      <Image src={logo} alt='logo Alex' width={100} height={70}/>
      {menuMobile ? (
        <>
          {isMenuOpen && <MenuMobile />}
          <button onClick={toggleMenu} className="text-white focus:outline-none z-50 ">
            <div className={`h-[3px] w-7 bg-black dark:bg-white rounded-full mb-1.5 transform transition-transform duration-500 
              ${isMenuOpen ? 'rotate-45 translate-y-[.58rem] translate-x-[.5rem]' : ''}`
            }></div>
            <div className={`h-[3px] w-7 bg-black dark:bg-white rounded-full mb-1.5 transform transition-transform duration-500 
              ${isMenuOpen ? 'opacity-0' : ''}`
            }></div>
            <div className={`h-[3px] w-7 bg-black dark:bg-white rounded-full transform transition-transform duration-500 
              ${isMenuOpen ? '-rotate-45 -translate-y-[.55rem] translate-x-[.5rem]' : ''}`
            }></div>
          </button>
        </>
      ) : (
        <ul className='flex gap-7 pr-5'>
          <li>
            <a className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-celestito transition-border duration-300`} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-celestito transition-border duration-300`}href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-celestito transition-border duration-300`} href="#work">
              Work
            </a>
          </li>
          <li>
            <a className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-celestito transition-border duration-300`} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;