'use client'
import React, { useState } from 'react'
import { links } from '@/utils/button-bar'
import ButtonBar from './button-bar'
import { useActiveSection } from '@/utils/activeBar'

const Bar = () => {
  const activeSection = useActiveSection()
  const [useBoton,setBoton] = useState<boolean>(false)
  return (
    <nav className="w-full  fixed z-50 backdrop-blur-md ">
      <div className='flex items-center justify-between w-full p-2'>
        <img src="/logo.png" className="w-[150px]" alt="Logo Sebastián Cruz" />

      <div className="hidden gap-2 md:flex">
        {links.map((p, index) => {
          const sectionId = p.link.replace("#", "")
          const isActive = activeSection === sectionId

          return (
            <ButtonBar
              key={index}
              text={p.text}
              link={p.link}
              active={isActive}
            />
          )
        })}
      </div>
      <button className='block md:hidden text-white text-4xl mr-4'onClick={()=>setBoton(!useBoton)}>
        {
          !useBoton ?
          <span>☰</span>
          :
          <span>✕</span>
        
        }
      </button>
      </div>
      {
        useBoton &&
        <div className='bg-gray-800/50 w-full  md:hidden p-2'>
          {links.map((p, index) => {
          const sectionId = p.link.replace("#", "")
          const isActive = activeSection === sectionId

          return (
            <ButtonBar
              key={index}
              text={p.text}
              link={p.link}
              active={isActive}
            />
          )
        })}
      </div>}
    </nav>
  )
}

export default Bar
