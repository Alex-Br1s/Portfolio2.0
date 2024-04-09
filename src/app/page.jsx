'use client'
import { useMediaQuery } from "react-responsive";
import About from "./components/About";
import Alex from "./components/Alex";
import Experience from './components/Experience'

export default function Home() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <main>    
        <Alex />
        <hr />
        <About />
        <hr />
        <Experience />
    </main>
  );
}
