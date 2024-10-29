'use client'
import { ibmPlexMono } from "../ui/fonts";
import { useMediaQuery } from "react-responsive";

const Alex = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const screenMobile = useMediaQuery({ maxWidth: 550 });

  return (
    <main className={`md:h-screen h-screen flex flex-col justify-center ${isSmallScreen ? '' : 'ml-16'}`}>
      <div>
        <p className={`${ibmPlexMono.className} text-celestito text-xl`}>Hola, mi nombre es</p>
        <h1 className="font-semibold text-slate-300" style={{ fontSize: isSmallScreen ? '11vw' : '6vw' }}>Alexander Bris.</h1>
        <h2 className="font-semibold text-slate-400" style={{ fontSize: isSmallScreen ? '11vw' : '6vw' }}>Full-Stack Developer.</h2>
        <p className="text-slate-400 md:w-2/3 w-full">Soy un desarrollador fullstack con experiencia en la creación de aplicaciones web. Me especializo en integrar tecnologías frontend y backend para ofrecer soluciones óptimas. Actualmente, continúo perfeccionando mis habilidades a través de proyectos que combinan funcionalidad y rendimiento.</p>
      </div>
      <div className="mt-10">                                                                                                                                                                                                                                                               
        <a className={`${ibmPlexMono.className} py-2 px-5 text-xl rounded-md hover:border-slate-600 hover:border-t hover:shadow-md hover:bg-slate-800/50 text-celestito ${screenMobile ? 'bg-slate-800/50 border-slate-600 border-t shadow-md' : ''}`} href="https://docs.google.com/document/d/14YUKKWVIciWXivBCYQf0kzaBMmfUdG28/view?usp=sharing" target='_blank'>
          Resume
        </a>
      </div>
    </main>
  );
}

export default Alex;
