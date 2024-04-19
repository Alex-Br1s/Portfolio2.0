'use client'
import { ibmPlexMono } from "../ui/fonts";
import { useMediaQuery } from "react-responsive";

const Alex = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const screenMobile = useMediaQuery({ maxWidth: 550 });

  return (
    <main className={`md:h-screen h-screen flex flex-col justify-center ${isSmallScreen ? '' : 'ml-16'}`}>
      <div>
        <p className={`${ibmPlexMono.className} text-celestito text-xl`}>Hi, my name is</p>
        <h1 className="font-semibold text-slate-300" style={{ fontSize: isSmallScreen ? '11vw' : '6vw' }}>Alexander Bris.</h1>
        <h2 className="font-semibold text-slate-400" style={{ fontSize: isSmallScreen ? '11vw' : '6vw' }}>Full-Stack Developer.</h2>
        <p className="text-slate-400 md:w-1/2 w-full">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
      </div>
      <div className="mt-10">  
        <a className={`${ibmPlexMono.className} py-2 px-5 text-xl rounded-md hover:border-slate-600 hover:border-t hover:shadow-md hover:bg-slate-800/50 text-celestito ${screenMobile ? 'bg-slate-800/50 border-slate-600 border-t shadow-md' : ''}`} href="https://drive.google.com/file/d/1JVFBJKeY4IRv1ywlvYT9LxXg90uzxXu8/view?usp=sharing" target='_blank'>
          Resume
        </a>
      </div>
    </main>
  );
}

export default Alex;
