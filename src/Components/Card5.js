import React from 'react'

const Card5 = ({video}) => {
  return (
        <div className='aspect-[3/4] relative bg-gray-200/50 rounded-xl overflow-hidden flex flex-col items-start gap-y-4 text-white'>
            <video src={video} className='absolute top-0 left-0 w-full' autoPlay muted />
        </div>
  )
}

export default Card5