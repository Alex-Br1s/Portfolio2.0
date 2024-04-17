import { SiSvelte } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import Image from "next/image";
import { ibmPlexMono } from "../ui/fonts";

const Projects = () => {
  return (
    
    <section id="work" className="ex:h-screen h-full text-slate-300 flex justify-center items-center flex-col gap-5">
      <h1 className={`${ibmPlexMono.className} text-2xl pb-4`}>Algunos proyectos que desarrolle</h1>
      <div className="flex flex-col lg:flex-row gap-5 ex:w-full w-80 md:w-1/2 lg:min-h-44 p-3 rounded-md hover:bg-slate-800/50 hover:shadow-md border-slate-600 hover:border-t">
        <div className="w-96 h-20">
          <Image
            className="lg:h-full lg:w-full rounded-md"
            width="200"
            height="150"
            src="/learnflow-cards.webp"
            alt="learnflow"
          />
        </div>
        <div>
          <h2 className={`${ibmPlexMono.className} text-lg pb-2`}>Learn flow</h2>
          <p className="text-sm w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            inventore voluptas, enim atque odio incidunt at similique recusandae
            dolor vel eveniet nisi ratione dignissimos nam, sed, officia
            reiciendis lorem20!
          </p>
          <div className="flex my-3 gap-3">
          <SiSvelte />
          <SiTailwindcss />
          <SiTypescript />
          <SiNestjs />
          <SiMongodb />
          </div>
          <p></p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 ex:w-full w-80 md:w-1/2 lg:min-h-44 p-3 rounded-md hover:bg-slate-800/50 hover:shadow-md border-slate-600 hover:border-t">
        <div className="w-96 h-20">
          <Image
            className="lg:h-full lg:w-full rounded-md"
            width="200"
            height="150"
            src="/ecoWise_Darkzz.webp"
            alt="ecoWise"
          />
        </div>
        <div>
          <h2 className={`${ibmPlexMono.className} lg:flex text-lg pb-2`}>ecoWise</h2>
          <p className="text-sm w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            inventore voluptas, enim atque odio incidunt at similique recusandae
            dolor vel eveniet nisi ratione dignissimos nam, sed, officia
            reiciendis lorem20!
          </p>
          <div className="flex my-3 gap-3">
          <SiSvelte />
          <SiTailwindcss />
          <SiTypescript />
          <SiNestjs />
          <SiMongodb />
          </div>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
