import Button from "@/components/button";
import ButtonP from "@/utils/buttonPurple";
import React from "react";
const Inicio = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex md:flex-row items-center justify-center gap-10 md:justify-evenly w-full flex-col-reverse "
    >
      <article className="flex flex-col gap-3">
        <p className="text-purple-600 font-medium ">Hola mundo! soy</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-white">
          Sebastián Cruz
        </h1>
        <p className="text-white">Bienvenido a mi sitio web personal.</p>
        <h1 className="typewriter">Estudiante Ing de Software</h1>

        <div className="flex flex-col md:flex-row gap-3">
          <Button text="Descargar CV" bgT={"p"} />
          <ButtonP text="Contacto" link="mailto:cm2005cristian@gmail.com" />
          <Button text="Linkedin " bgT={"p"} link="https://www.linkedin.com/in/cristhian-cruz-790a87276/"/>
        </div>
      </article>
      <div
        className={`h-50 w-50 md:h-72 md:w-72 border-2  foto-perfil  border-none relative rounded-full overflow-hidden z-20`}
      >
        <img
          src="/foto.png"
          alt="Foto de Sebastián Cruz"
          className="z-10 drop-shadow-2xl/30 drop-shadow-white "
        />
        <div
          className={`circle-profile-1 bg-purple-900 w-25 h-25 md:w-50 md:h-50`}
        ></div>
        <div
          className={`circle-profile-2 bg-purple-900 w-30 h-30 md:w-70 md:h-70`}
        ></div>
      </div>
    </section>
  );
};

export default Inicio;
