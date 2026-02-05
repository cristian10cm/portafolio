import React from 'react'
import CardSkill from './CardSkill'
import { cardSkills } from '@/utils/card-skills'
const Skills = () => {
  return (
    <section id='skills' className='min-h-fit    py-20 gap-10 w-full flex items-center flex-col '>
        <h2 className='text-4xl skills-h2 text-white'>Habilidades</h2>
        <div className='max-w-4xl skills grid grid-cols-2 md:grid-cols-7 gap-5'>
            {
                cardSkills.map((i,index)=>(
                    <CardSkill 
                        img={i.img}
                        text={i.text}
                        key={index}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default Skills
