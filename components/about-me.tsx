const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="min-h-screen bg-gray-800/40 w-full   py-20 flex gap-10 flex-col items-center "
    >
      <h2 className="text-4xl h2-about-me text-white">Sobre mí</h2>

      <article className="flex md:flex-row flex-col max-w-6xl sobremi justify-baseline gap-15   w-full">
        <img
          src="/programador_img.jpg"
          className="rounded-2xl w-50 md:w-100 self-center"
          alt="Imagen de programador"
        />
        <div className="flex flex-col gap-5 text-pretty p-5">
          <p className="text-purple-600 text-2xl font-semibold">
            Sebastián Cruz
          </p>
          <p className=" md:text-xl text-white">
            Soy estudiante de Ingeniería de Software con experiencia en
            desarrollo Frontend utilizando React y Next.js, creando interfaces
            modernas, creativas y orientadas a la experiencia de usuario. He
            participado en proyectos integrando aplicaciones frontend con APIs
            REST y WebSockets, aplicando arquitecturas limpias y buenas
            prácticas.
            <br></br>
            Cuento con conocimientos en Backend usando Node.js y NestJS,
            desarrollo de APIs RESTful, manejo de ORM Prisma y bases de datos
            PostgreSQL, construyendo aplicaciones completas de extremo a
            extremo.
            <br></br>
            Soy una persona empática, proactiva y responsable, con habilidades
            para el trabajo en equipo, la comunicación asertiva y la resolución
            de problemas, con una mentalidad de aprendizaje constante y mejora
            continua.
          </p>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
