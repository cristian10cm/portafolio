import React from 'react'
import '../styles/about.css'
const AboutMe = () => {
  return (
    <section id='about-me' className='min-h-screen bg-gray-800/40 w-full   py-20 flex gap-10 flex-col items-center '>
          <h2 className='text-4xl h2-about-me text-white'>Sobre mí</h2>
            
            <article className='flex md:flex-row flex-col max-w-6xl sobremi justify-baseline gap-15   w-full'>
              <img src="/programador_img.jpg" className='rounded-2xl w-50 md:w-100 self-center' alt="Imagen de programador" />
              <div className='flex flex-col gap-5 text-pretty p-5'>
                <p className='text-purple-600 text-2xl font-semibold'>
                Sebastián Cruz
                </p>
              <p className=' md:text-xl text-white'>
                Soy estudiante de la ingeniería de software enfocado en desarrollo Frontend con experiencia en React y Next.js, actualmente aprendiendo Backend con Node.js, bases de datos y APIs REST para construir aplicaciones completas de extremo a extremo.<br></br>
                Aspiro conseguir empleo en el mundo del Desarrollo Web, adquirir experiencia, nuevos conocimientos y fortalecer mi vida profesional. <br /><br />
                Soy una persona empática y entusiasta, con competencias enfocadas en el trabajo en equipo, comunicación asertiva, resolución de problemas, responsable, proactiva, en constante aprendizaje,  me gusta aprender de los demás y superarme continuamente.
              </p>
              </div>
            </article>
    </section>
  )
}

export default AboutMe
