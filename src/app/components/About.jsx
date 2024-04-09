'use client'
import React from 'react'
import { ibmPlexMono } from '../ui/fonts'
import Image from 'next/image'
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const isSmallScreenTwo = useMediaQuery({ maxWidth: 900 });

  return (
    <section
      id="about"
      className={`md:h-screen flex h-full ${
        isSmallScreen ? "" : "ml-16"
      } justify-evenly md:flex md:flex-row items-center ${
        isSmallScreenTwo ? "flex-col" : ""
      }`}
    >
      <div className={`${isSmallScreen ? "mx-4 my-4" : ""} w-full md:w-1/2`}>
        <h1 className={`${ibmPlexMono.className} text-4xl text-celestito`}>
          About me
        </h1>
        <br />
        <p className="text-base text-slate-400 w-full md:w-4/6/5">
          Hola mi nombre es Alexander y disfruto desarrollar soluciones, Empecé
          mi trayectoria como programador a hace dos años, cuando pensando en
          qué estudiar, me adentré en este maravilloso mundo. Luego, me inscribí
          en un Bootcamp, el cual me proporcionó todas las herramientas
          necesarias para convertirme en un desarrollador web.
        </p>
        <p className="text-base text-slate-400 w-full md:w-4/6/5">
          A dia de hoy trabajo en una startUp desarrollando las necesidades de
          los clientes, gracias a ello pude adquirir experiencia laboral y
          aprender nuevas tecnologias
        </p>
        <p className={`${ibmPlexMono.className} text-base text-celestito`}>
          Algunas tecnologias que usé ultimamente
        </p>
        <br />
        <div className='flex flex-wrap gap-2'>
          <p className={`${ibmPlexMono.className} text-base text-celestito`}><span className='text-verdecito'>▹</span>React</p>
          <p className={`${ibmPlexMono.className} text-base text-celestito`}><span className='text-verdecito'>▹</span>Next</p>
          <p className={`${ibmPlexMono.className} text-base text-celestito`}><span className='text-verdecito'>▹</span>Tailwind</p>
          <p className={`${ibmPlexMono.className} text-base text-celestito`}><span className='text-verdecito'>▹</span>Svelte</p>
          <p className={`${ibmPlexMono.className} text-base text-celestito`}><span className='text-verdecito'>▹</span>Typescript</p>
        </div>
      </div>
      <div className="border h-60 md:h-64 border-gray-300 rounded-md p-3 hover:border-celestito hover:p-5 hover:border-2 hover:h-h-image transition-all duration-300">
        <Image
          className="rounded-md h-full w-full"
          src="/FotoDePerfilPeque.jpg"
          alt="soy Yo"
          width={200}
          height={170}
        />
      </div>
    </section>
  );
};

export default About;
