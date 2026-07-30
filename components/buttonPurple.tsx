import React from 'react'

const ButtonP = ({text,link}:{text:string,link?:string}) => {

  return (
    <button   className={`bg-purple-600 hover:bg-purple-800   
      font-medium text-black pt-2 pb-2 pl-4 pr-4 rounded-2xl  cursor-pointer`} > 
        
        <a  target="_blank" href={link}>{text}</a>
    </button>
  )
}

export default ButtonP
