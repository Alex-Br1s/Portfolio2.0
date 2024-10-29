import { SiSvelte } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSequelize } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import Image from "next/image";
import { ibmPlexMono } from "../ui/fonts";
import { useMediaQuery } from "react-responsive";
import { FaGithub, FaLink } from "react-icons/fa6";

const Projects = () => {
  const screenMobile = useMediaQuery({ maxWidth: 550 });

  return (
    <section
      id="work"
      className="lg:h-screen h-full text-slate-300 flex justify-center items-center flex-col"
    >
      <h1 className={`${ibmPlexMono.className} text-2xl pb-4`}>
        Proyectos
      </h1>

      <div className="grid gap-3 md:grid-cols-2 sm:grid-cols-1 w-full lg:pl-10 md:pl-10">
        <div
          className={`flex flex-col lg:flex-row gap-2 w-full min-h-36 p-2 rounded-md hover:bg-slate-800/50 hover:shadow-md border-slate-600 hover:border-t ${
            screenMobile ? "bg-slate-800/50 shadow-md border-slate-600 border-t p-3" : ""
          }`}
        >
          <div className="w-48 h-28 md:pt-2 pt-0">
            <Image
              className="h-full rounded-md"
              width="200"
              height="150"
              src="/home-prestamista.webp"
              alt="Prestamista project"
            />
          </div>
          <div className="w-full lg:w-2/3">
            <h2 className={`${ibmPlexMono.className} text-lg pb-1 sm:pt-2 lg:pt-0`}>
              Prestamista
            </h2>
            <p className="text-sm w-full">
              Desarrollé una aplicación web para un
              cliente, dedicada a la gestión de préstamos financieros.
            </p>
            <div className="flex my-2 gap-3 text-xl">
              <SiSvelte className="text-orange-700" />
              <SiTailwindcss className="text-teal-500"/>
              <SiExpress className="text-gray-500"/>
              <SiSequelize className="text-blue-500" />
              <BiLogoPostgresql className="text-sky-500"/>
            </div>
            <div className="flex gap-2">
              <a 
              href="https://github.com/Alex-Br1s/Prestamista-frontend"
              target="_blank"
              className={`hover:border-t border-b border-slate-400 hover:rounded-md hover:border-slate-400 transition-all duration-700 shadow-2xl ease py-1 px-4 ${screenMobile ? "border-t rounded-md" : ""}`}>{<FaGithub className="text-xl" />}</a>
              <a
              href="https://prestamistav1.vercel.app/" 
              target="_blank"
              className={`hover:border-t border-b border-slate-400 hover:rounded-md hover:border-slate-400 transition-all duration-700 shadow-2xl ease py-1 px-4 ${screenMobile ? "border-t rounded-md" : ""}`}>{<FaLink className="text-xl"/>}</a>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col lg:flex-row gap-2 w-full min-h-36 p-2 rounded-md hover:bg-slate-800/50 hover:shadow-md border-slate-600 hover:border-t ${
            screenMobile ? "bg-slate-800/50 shadow-md border-slate-600 border-t p-3" : ""
          }`}
        >
          <div className="w-48 h-28 md:pt-2 pt-0">
            <Image
              className="h-full rounded-md"
              width="200"
              height="150"
              src="/tierList.jpg"
              alt="TierList project"
            />
          </div>
          <div className="w-full lg:w-2/3">
            <h2 className={`${ibmPlexMono.className} text-lg pb-1 sm:pt-2 lg:pt-0`}>
              Tier list
            </h2>
            <p className="text-sm w-full">
              Proyecto hecho con HTML, CSS y JavaScript con funcionalidad de drag and drop.
            </p>
            <div className="flex my-2 gap-3 text-xl">
              <FaHtml5 className="text-orange-500"/>
              <FaCss3Alt className="text-blue-500" />
              <IoLogoJavascript className="text-yellow-400" />
            </div>
            <div className="flex gap-2">
              <a 
              href="https://github.com/Alex-Br1s/TierList"
              target="_blank"
              className={`hover:border-t border-b border-slate-400 hover:rounded-md hover:border-slate-400 transition-all duration-700 shadow-2xl ease py-1 px-4 ${screenMobile ? "border-t rounded-md" : ""}`}>{<FaGithub className="text-xl" />}</a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
