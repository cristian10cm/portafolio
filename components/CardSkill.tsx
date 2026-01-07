import React from 'react'
type props = {
    img:string,
    text:string
}
const CardSkill = ({img,text}:props) => {
  return (
    <div className='rounded-2xl p-4 gap-5 bg-gray-900/50 flex flex-col items-center justify-between hover:outline-1 hover:outline-purple-600/40 '>
      
      <img src={img} alt={text} className='w-27 rounded-md' />
      <p className='text-white'>{text}</p>
    </div>
  )
}

export default CardSkill
