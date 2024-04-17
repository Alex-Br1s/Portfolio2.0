'use client'
import { useMediaQuery } from "react-responsive";
import About from "./components/About";
import Alex from "./components/Alex";
import Experience from './components/Experience'
import Projects from "./components/Projects";

export default function Home() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <main>    
      <Alex />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
