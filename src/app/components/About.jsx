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
        Hola, soy Alexander, un desarrollador web que le encanta programar. Comencé mi carrera hace dos años, cuando descubrí mi interés por la programación. Me gradué de un Bootcamp que me proporcionó las habilidades necesarias para convertirme en un desarrollador web.
        trabaje en una startup donde desarrolle soluciones personalizadas para los clientes. Esta experiencia me ha permitido adquirir nuevas habilidades en tecnologías y una valiosa experiencia laboral.
        </p>
        <p className={`${ibmPlexMono.className} text-base text-celestito pt-2`}>
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
