import React from 'react'
import {motion} from 'framer-motion'

const Card3 = ({img}) => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      style={{
        backgroundImage:`url(${img})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover'
      }}
      className='w-20 aspect-square rounded-full shadow-md shadow-mainShadow border-gray-200 border-[1px]'
    ></motion.div>
  )
}

export default Card3