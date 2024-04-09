import { ibmPlexMono } from "../ui/fonts"

const Experience = () => {
  return (
    <section id='experience' className="flex justify-center flex-col m-auto md:w-2/3 w-full h-screen">
        <div className="text-slate-400">
        <h1 className={`${ibmPlexMono.className} text-4xl text-celestito my-5`}>Donde trabaje</h1>
            <h2 className={`${ibmPlexMono.className} text-slate-300 text-2xl`}>Frontend Dev <span className={`${ibmPlexMono.className} text-celestito text-2xl`}>Vopper</span></h2>
            <p className={`${ibmPlexMono.className} text-xs my-3`}>Ene 2024 - Present</p>
            <p className="my-3 text-base"><span className="text-verdecito">▹</span> Crear componentes reutilizables para garantizar la eficiencia y consistencia del código.</p>
            <p className="my-3 text-base"><span className="text-verdecito">▹</span> Diseñar la arquitectura de la aplicación para asegurar su escalabilidad y mantenibilidad a largo plazo.</p>
            <p className="my-3 text-base"><span className="text-verdecito">▹</span> Gestionar el flujo de datos entre los diferentes componentes para garantizar una experiencia fluida.</p>
            <p className="my-3 text-base"><span className="text-verdecito">▹</span> Trabajar en colaboración con el equipo backend para integrar la lógica de negocio y garantizar una experiencia de usuario adecuada.</p>
        </div>
    </section>
  )
}

export default Experience
