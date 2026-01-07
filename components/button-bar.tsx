import React from 'react'
import { fontColor } from '@/utils/font-color'

interface Props {
  link: string
  text: string
  active: boolean
}

const ButtonBar = ({ link, text, active }: Props) => {
  return (
    <button
      className={`
        font-semibold text-xs p-2 h-fit cursor-pointer transition-all duration-300
        ${active
          ? "text-purple-600 border-b-2 border-purple-600"
          : "text-white hover:text-purple-600 hover:border-b-2 border-transparent"}
      `}
    >
      <a href={link}>{text}</a>
    </button>
  )
}

export default ButtonBar
