import React from 'react'

const  CardCourses=({img,text,year}:{img:string,text:string,year:string}) => {
  return (
    <div className='p-8 h-full justify-between rounded-2xl w-80 flex items-center gap-5 flex-col '>
       <img src={img} className='w-35 rounded-2xl' alt={text}/>
       <p className='text-pretty text-center font-semibold text-purple-600'>{text}</p> 
       <p className='font-light text-white'>{year}</p>
    </div>
  )
}

export default CardCourses
