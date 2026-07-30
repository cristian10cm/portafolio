"use client"
import { AboutMetranslations } from "@/utils/about-me";
import { useLanguage } from "./LanguageProvider";

const AboutMe = () => {
  const { language } = useLanguage();
    const t  = AboutMetranslations[language] ;
  return (
    <section
      id="about-me"
      className="min-h-screen bg-gray-800/40 w-full   py-20 flex gap-10 flex-col items-center "
    >
      <h2 className="text-4xl h2-about-me text-white">{t.about.title}</h2>

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
            {t.about.paragraphs}
          </p>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
