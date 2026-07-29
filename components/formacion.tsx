import React from 'react'
import CardCourses from './card-courses'
import { courses } from '@/utils/courses'
const Formacion = () => {
  return (
    <section id='study' className='min-h-screen py-20 bg-gray-800/40  w-full flex-col gap-10 flex items-center justify-center '>
            <h2 className='text-4xl text-white'>Formación</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>
                {
                    courses.map((i,index)=>(
                            <CardCourses year={i.year} text = {i.text} img={i.img} key={index}/>
                    ))
                }    
            </div>
    </section>
  )
}

export default Formacion
