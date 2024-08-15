import { SiSvelte } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSequelize } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import Image from "next/image";
import { ibmPlexMono } from "../ui/fonts";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
  const screenMobile = useMediaQuery({ maxWidth: 550 });

  return (
    <section
      id="work"
      className="lg:h-screen h-full text-slate-300 flex justify-center items-center flex-col gap-5"
    >
      <h1 className={`${ibmPlexMono.className} text-2xl pb-4`}>
        Algunos proyectos que desarrolle
      </h1>
      <div
        className={`flex flex-col lg:flex-row gap-5 ex:w-full w-80 md:w-1/2 min-h-auto p-3 rounded-md hover:bg-slate-800/50 hover:shadow-md border-slate-600 hover:border-t ${
          screenMobile
            ? "bg-slate-800/50 shadow-md border-slate-600 border-t"
            : ""
        }`}
      >
        <div className="w-48 h-20">
          <Image
            className="lg:h-28 h-24 lg:w-44 rounded-md"
            width="200"
            height="150"
            src="/home-prestamista.webp"
            alt="example 1"
          />
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className={`${ibmPlexMono.className} text-lg pb-1`}>
            Prestamista
          </h2>
          <p className="text-sm w-full">
            Desarrollé el frontend completo de una aplicación web para un
            cliente, dedicada a la gestión de préstamos financieros. Permitiendo
            al administrador agregar clientes con información personal, detalles
            de contacto y datos financieros relevantes.
          </p>
          <div className="flex my-2 gap-3">
            <SiSvelte />
            <SiTailwindcss />
            <SiExpress />
            <SiSequelize />
            <BiLogoPostgresql />
          </div>
          <p></p>
        </div>
      </div>

      <div
        className={`flex flex-col lg:flex-row gap-5 ex:w-full w-80 md:w-1/2 min-h-auto p-3 rounded-md hover:bg-slate-800/50 hover:shadow-md border-slate-600 hover:border-t 
          ${screenMobile
            ? "bg-slate-800/50 shadow-md border-slate-600 border-t"
            : ""
          }`}>
        <div className="w-48 h-20">
          <Image
            className="lg:h-28 h-24 lg:w-44 rounded-md"
            width="200"
            height="150"
            src="/ecoWise_Darkzz.webp"
            alt="ecoWise"
          />
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className={`${ibmPlexMono.className} lg:flex text-lg pb-1`}>
            ecoWise
          </h2>
          <p className="text-sm w-full">
          Como parte de un bootcamp, colaboré en un proyecto grupal para desarrollar un ecommerce de productos sustentables y ecológicos. Implementé funcionalidades como login, búsquedas, filtros, paginación, reseñas, pasarela de pago y un panel de administrador.
          </p>
          <div className="flex my-2 gap-3">
            <FaReact />
            <SiTailwindcss />
            <SiExpress />
            <SiSequelize />
            <BiLogoPostgresql />
          </div>
          <p></p>
        </div>
      </div>
      
      <div
        className={`flex flex-col lg:flex-row  gap-5 ex:w-full w-80 md:w-1/2 min-h-48 p-3 rounded-md hover:bg-slate-800/50 hover:shadow-md border-slate-600 hover:border-t ${
          screenMobile
            ? "bg-slate-800/50 shadow-md border-slate-600 border-t"
            : ""
        }`}>
        <div className="w-48 h-20">
          <Image
            className="lg:h-28 h-24 lg:w-44 rounded-md"
            width="200"
            height="150"
            src="/tierList.jpg"
            alt="ecoWise"
          />
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className={`${ibmPlexMono.className} lg:flex text-lg pb-1`}>
            Tier list
          </h2>
          <p className="text-sm w-full">
          Tierlist un proyecto hecho con html, css y javascript en el cual implemente drag and drop.
          </p>
          <div className="flex my-2 gap-3">
            <FaHtml5 />
            <FaCss3Alt />
            <IoLogoJavascript />
          </div>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
