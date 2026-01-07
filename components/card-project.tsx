import Button from '@/utils/button'
import ButtonP from '@/utils/buttonPurple'
import React from 'react'
type props ={
  title:string,
  text:string,
  img:string,
  classN:string[],
  statusP:boolean,
  demo:string,
  repo:string
}
const CardProject = ({title,text,img,classN,statusP,demo,repo}:props) => {
  return (
    <div className={`w-80 md:w-100 bg-gray-400/10 rounded-3xl h-full flex flex-col justify-items-start  overflow-hidden ${classN}`}>
        <img src={img} alt={title}/>
        <div className='p-4 space-y-2'>
            <p className=' text-pretty font-bold text-lg text-white'>{title}</p>
            <p className='tracking-tighter text-[14px] leading-snug text-white'>{text}</p>
            <div className='flex gap-2'>
              {
                  classN.map((i,index)=>{
                    return <p key={index} className='pt-0 pb-0 pl-1 pr-1 text-[11px] border-1 text-gray-400 rounded-sm border-purple-600'>{i}</p>
                  })
              }
            </div>
            <div className='flex justify-between self-end '>
                  <div className={statusP? "text-green-600 flex gap-2 items-center":"text-orange-400 flex gap-2 items-center"}>
                      <p className='text-4xl'>•</p>
                      <p className='text-sm'>{statusP ? "Disponible": "En desarrollo"}</p>
                  </div>
                  <div>

                  </div>
                {
                 statusP &&
                  <div className='self-end space-x-2'>
                    <Button bgT={'p'} text='Demo' link={demo}></Button>
                    <ButtonP  text='Repo' link={repo}></ButtonP>
                  </div>
                }
            </div>
        </div>
    </div>
  )
}

export default CardProject
