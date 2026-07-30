"use client"
import React from "react";
import CardProject from "./card-project";
import { useLanguage } from "./LanguageProvider";
import { projectsTrad } from "@/utils/projects";
const Projects = () => {
  const { language } = useLanguage();
  const t  = projectsTrad[language] ;
  return (
    <section
      id="Projects"
      className="min-h-screen w-full py-20 flex flex-col gap-10 justify-center items-center "
    >
      <h2 className="text-4xl text-white">{language == "es" ? "Proyectos":"Projects"}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 max-w-7xl m-auto ">
        {(t).map((i, index) => (
          <CardProject data={i.data} key={index}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;
