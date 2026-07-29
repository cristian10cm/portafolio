import React from 'react'

const Button = ({bgT,text,link}:{bgT:'p' | 'b',text:string,link?:string}) => {
  const fontColor = bgT === 'p' ? "purple-600" : "" 
  const border = bgT === 'p'? "outline-purple-600 outline-1" : '';
  const fondo = bgT === 'b'? "purple-600" : '';
  const hoverBg = bgT === 'b'? "purple-800 " : 'gray-800/40 hover:text-purple-800 hover:outline-purple-800';
  return (
    <button   className={`bg-${fondo} hover:bg-${hoverBg}   ${border} text-black font-medium text-${fontColor} pt-2 pb-2 pl-4 pr-4 rounded-2xl  cursor-pointer`} > 
        <a  target="_blank" href={link}>{text}</a>
    </button>
  )
}

export default Button
