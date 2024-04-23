import { BiLogoGmail } from "react-icons/bi";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { ibmPlexMono } from "../ui/fonts";
import Link from "next/link";

const Contact = () => {

  return (
    <section id="contact" className="h-screen flex justify-center items-center flex-col ">
    <div className="w-full md:w-96 h-1/2 gap-10 hover:border-t border-slate-600 hover:shadow-md hover:rounded-md hover:bg-slate-800/50 flex flex-col items-center justify-center">
      <h1 className={`text-4xl text-slate-400 ${ibmPlexMono.className}`}>Contáctame!</h1>
      <div className="flex flex-col">
      <ul>
        <li className={`flex items-center gap-3 text-xl text-slate-500 hover:text-slate-400 transition-all duration-300 ${ibmPlexMono.className}`}><span>{<BiLogoGmail />}</span>
        <Link target="_blank" href='mailto:alexbris21@gmail.com'>alexbris21@gmail.com</Link>
        </li>
        <li className={`flex items-center gap-3 my-2 text-xl text-slate-500 hover:text-slate-400 transition-all duration-300  ${ibmPlexMono.className}`}><span>{<FiLinkedin />}</span> 
        <Link target="_blank" href='https://www.linkedin.com/in/alexander-emanuel-bris-313655266/'>Alexander Bris</Link>
        </li>
        <li className={`flex items-center gap-3 text-xl text-slate-500 hover:text-slate-400 transition-all duration-300  ${ibmPlexMono.className}`}><span>{<FaInstagram />}</span>
        <Link target="_blank" href='https://www.instagram.com/alexx.developer/'>alexx.developer</Link>
        </li>
      </ul>
      </div>
    </div>
    </section>
  );
};

export default Contact;
