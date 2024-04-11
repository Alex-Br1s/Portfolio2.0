import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link"

const NavbarVertical = () => {
  return (
    <div className="flex md:h-screen flex-col justify-center">
      <div className="mx-auto md:flex md:items-center md:mt-10 mb-5">
        <ul className='flex md:flex-col flex-row gap-7 items-center'>
          
          <li>
            <Link target="_blank" href="mailto:alexbris21@gmail.com" >
              <BiLogoGmail className="cursor-pointer text-slate-400 text-2xl hover:text-verdecito hover:text-3xl transition-all duration-300" />
            </Link>
          </li>

          <li>
            <Link target="_blank" href='https://www.instagram.com/alexx.developer/'>
              <FaInstagram className="cursor-pointer text-slate-400 text-2xl hover:text-verdecito hover:text-3xl transition-all duration-300"/>
            </Link>
          </li>

          <li>
            <Link target="_blank" href='https://www.linkedin.com/in/alexander-emanuel-bris-313655266/'>
              <FiLinkedin className="cursor-pointer text-slate-400 text-2xl hover:text-verdecito hover:text-3xl transition-all duration-300" />
            </Link>
          </li>

          <li>
            <Link target="_blank" href='https://github.com/Alex-Br1s'>
              <LuGithub className="cursor-pointer text-slate-400 text-2xl hover:text-verdecito hover:text-3xl transition-all duration-300"/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarVertical;
