'use client'
import About from "./components/About";
import Alex from "./components/Alex";
import Experience from './components/Experience'
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>    
      <Alex />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
