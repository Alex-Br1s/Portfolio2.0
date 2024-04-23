import { SiSvelte } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSequelize } from "react-icons/si";
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
        className={`flex flex-col lg:flex-row gap-5 ex:w-full w-80 md:w-1/2 lg:min-h-44 p-3 rounded-md hover:bg-slate-800/50 hover:shadow-md border-slate-600 hover:border-t ${
          screenMobile
            ? "bg-slate-800/50 shadow-md border-slate-600 border-t"
            : ""
        }`}
      >
        <div className="w-full h-20">
          <Image
            className="lg:h-full lg:w-full rounded-md"
            width="200"
            height="120"
            src="/home-prestamista.webp"
            alt="example 1"
          />
        </div>
        <div>
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
            <SiTypescript />
            <SiNodedotjs />
            <SiExpress />
            <SiMongodb />
          </div>
          <p></p>
        </div>
      </div>

      <div
        className={`flex flex-col lg:flex-row gap-5 ex:w-full w-80 md:w-1/2 lg:min-h-44 p-3 rounded-md hover:bg-slate-800/50 hover:shadow-md border-slate-600 hover:border-t ${
          screenMobile
            ? "bg-slate-800/50 shadow-md border-slate-600 border-t"
            : ""
        }`}
      >
        <div className="w-full h-20">
          <Image
            className="lg:h-full lg:w-full rounded-md"
            width="200"
            height="150"
            src="/learnflow-cards.webp"
            alt="ecoWise"
          />
        </div>
        <div>
          <h2 className={`${ibmPlexMono.className} lg:flex text-lg pb-1`}>
            Learnflow
          </h2>
          <p className="text-sm w-full">
          Trabajé en los inicio de una aplicación web con inteligencia artificial que permite a los usuarios aprender de manera dinámica y divertida. Me enfoqué principalmente en el frontend, capturando datos del backend y renderizando en la interfaz de usuario.
          
          </p>
          <div className="flex my-2 gap-3">
            <SiSvelte />
            <SiTailwindcss />
            <SiTypescript />
            <SiNestjs />
            <SiMongodb />
          </div>
          <p></p>
        </div>
      </div>

      <div
        className={`flex flex-col lg:flex-row gap-5 ex:w-full w-80 md:w-1/2 lg:min-h-44 p-3 rounded-md hover:bg-slate-800/50 hover:shadow-md border-slate-600 hover:border-t ${
          screenMobile
            ? "bg-slate-800/50 shadow-md border-slate-600 border-t"
            : ""
        }`}
      >
        <div className="w-full h-20">
          <Image
            className="lg:h-full lg:w-full rounded-md"
            width="200"
            height="150"
            src="/ecoWise_Darkzz.webp"
            alt="ecoWise"
          />
        </div>
        <div>
          <h2 className={`${ibmPlexMono.className} lg:flex text-lg pb-1`}>
            ecoWise
          </h2>
          <p className="text-sm w-full">
          Como parte de un bootcamp, colaboré en un proyecto grupal para desarrollar una web de productos sustentables y ecológicos. Implementé funcionalidades como login, búsquedas, filtros, paginación, reseñas, pasarela de pago y un panel de administrador.
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
    </section>
  );
};

export default Projects;
