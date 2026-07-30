"use client"
import AboutMe from "@/components/about-me";
import Bar from "@/components/bar";
import Footer from "@/components/footer";
import Formacion from "@/components/formacion";
import Inicio from "@/components/inicio";
import LanguageButton from "@/components/LanguajeBotton";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
export default function Home() {
  return (
    <div className=" w-full   bg-gray-950 font-sans ">
      <Bar></Bar>
      
      <main className="flex  flex-col items-center justify-between  h-full w-full  ">
        
        <Inicio></Inicio>
        <AboutMe></AboutMe>
        <LanguageButton></LanguageButton>
        <Skills/>
        <Formacion></Formacion>
        <Projects></Projects>
        <Footer></Footer>
      </main>
    </div>
  );
}
