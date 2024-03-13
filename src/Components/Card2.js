import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Card2 = ({title , path}) => {
  return (
    <Link to={path} className='bg-mainWhite rounded-lg border-gray-300 border-[1px] shadow-sm shadow-mainShadow'>
        <div className='py-6 px-6 text-center capitalize font-bold text-lg sm:text-2xl hover:text-mainBlue'>{title}</div>
    </Link>
  )
}

export default Card2