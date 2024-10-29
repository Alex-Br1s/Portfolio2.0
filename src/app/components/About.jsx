'use client'
import React from 'react'
import { ibmPlexMono } from '../ui/fonts'
import Image from 'next/image'
import { useMediaQuery } from "react-responsive";

const About = () => {
  return (
    <section
      id="about"
      className="md:h-screen flex h-full justify-evenly items-center flex-col md:flex-row"
    >
      <div className="mx-4 my-4 w-full md:w-1/2">
        <h1 className={`${ibmPlexMono.className} text-4xl text-celestito`}>
          Sobre mí
        </h1>
        <br />
        <p className="text-base text-slate-400 w-full md:w-6/6">
          Hola, soy Alexander, un desarrollador web que le encanta programar. Comencé mi carrera hace dos años, cuando descubrí mi interés por la programación. Me gradué de un Bootcamp que me proporcionó las habilidades necesarias para convertirme en un desarrollador web.
          Trabajé en una startup donde desarrollé soluciones personalizadas para los clientes. Esta experiencia me ha permitido adquirir nuevas habilidades en tecnologías y una valiosa experiencia laboral.
        </p>
        <p className="text-base text-celestito pt-2">
          Algunas tecnologías que usé últimamente
        </p>
        <br />
        <div className='flex flex-wrap gap-2'>
          <p className="text-base text-celestito"><span className='text-verdecito'>▹</span>React</p>
          <p className="text-base text-celestito"><span className='text-verdecito'>▹</span>Tailwind</p>
          <p className="text-base text-celestito"><span className='text-verdecito'>▹</span>Express</p>
          <p className="text-base text-celestito"><span className='text-verdecito'>▹</span>Typescript</p>
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
