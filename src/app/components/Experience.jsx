import { ibmPlexMono } from "../ui/fonts"

const Experience = () => {
  return (
    <section id='experience' className="flex justify-center flex-col m-auto md:w-2/3 w-full h-screen">
        <div className="text-slate-400">
        <h1 className={`${ibmPlexMono.className} text-4xl text-celestito my-5`}>Donde trabaje</h1>
            <h2 className={`${ibmPlexMono.className} text-slate-300 text-2xl`}>Frontend Dev <span className={`${ibmPlexMono.className} text-celestito text-2xl`}>Vopper</span></h2>
            <p className={`${ibmPlexMono.className} text-xs my-3`}>Ene 2024 - Mar 2024</p>
            <p className="my-3 text-base"><span className="text-verdecito">▹</span> Presenté proyectos completos a clientes de manera autónoma, comunicando eficazmente el progreso y los detalles técnicos del desarrollo para asegurar la satisfacción del cliente y la aprobación del proyecto.</p>
            <p className="my-3 text-base"><span className="text-verdecito">▹</span> Desarrollé y diseñé el frontend completo de aplicaciones utilizando tecnologías como Svelte, TailwindCSS y Typescript, asegurando una experiencia de usuario atractiva y funcional.</p>
            <p className="my-3 text-base"><span className="text-verdecito">▹</span>Coordiné con otros miembros del equipo para garantizar la entrega a tiempo de los proyectos y mantener una comunicación clara con los clientes durante el ciclo de vida del desarrollo.</p>
            <p className="my-3 text-base"><span className="text-verdecito">▹</span>Trabaje en colaboración con el equipo backend para integrar la lógica de negocio y garantizar una experiencia de usuario adecuada.</p>
        </div>
    </section>
  )
}

export default Experience
