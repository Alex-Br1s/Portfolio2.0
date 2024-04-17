import React from 'react'
import { ibmPlexMono } from '../ui/fonts'
import Image from 'next/image'
import logo from '../../../public/miLogo.png'
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MenuMobile from './MenuMobile';
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuMobile = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-colorPrincipal bg-opacity-90 backdrop-blur-sm flex items-center px-5 justify-between h-20 fixed w-full  ${isMenuOpen ? 'h-screen overflow-y-hidden' : ''}`}>
      <Link href='/'>
       <Image src='/miLogo.png' alt='logo Alex' width={100} height={70} className='pointer md:ml-12 -ml-4 '/>
      </Link>
      {menuMobile ? (
        <>
          {isMenuOpen && <MenuMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
          <div>
          <button onClick={toggleMenu} className="text-white focus:outline-none z-50 " aria-expanded={isMenuOpen ? "true" : "false"}>
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
            </div>
        </>
      ) : (
        <ul className='flex gap-7 pr-5'>
          <li>
            <Link className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-celestito transition-border duration-300`} href="#about">
              About
            </Link>
          </li>
          <li>
            <Link className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-celestito transition-border duration-300`}href="#experience">
              Experience
            </Link>
          </li>
          <li>
            <Link className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-celestito transition-border duration-300`} href="#work">
              Work
            </Link>
          </li>
          <li>
            <Link className={`${ibmPlexMono.className} text-slate-300 inline relative border-b-2 border-solid border-transparent hover:border-celestito transition-border duration-300`} href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;