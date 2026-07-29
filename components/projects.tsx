import React from "react";
import CardProject from "./card-project";
import { projects } from "@/utils/projects";
const Projects = () => {
  return (
    <section
      id="Projects"
      className="min-h-screen w-full py-20 flex flex-col gap-10 justify-center items-center "
    >
      <h2 className="text-4xl text-white">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-7xl m-auto ">
        {projects.map((i, index) => (
          <CardProject data={i} key={index}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;
