import React from 'react'

const Card4 = ({img , title , desc , dev}) => {
  return (
        <div
          style={{
            backgroundImage:`url(${img})`,
            backgroundPosition:'center',
            backgroundSize:'cover' ,
            backgroundRepeat:'no-repeat'
          }}
          className='-z-20 aspect-[3/4] relative bg-gray-200/50 rounded-xl flex flex-col items-start gap-y-4 text-white px-4 py-6'
        >
          {/* <div className='-z-10 absolute top-0 left-0 w-full h-full bg-black/15'></div>
          <div className='font-bold text-2xl'>{title}</div>
          <div className='center gap-x-2 font-bold text-xl'>
            <span className="material-symbols-outlined">location_on</span>
            <div className=''>{dev}</div>
          </div>
          <div className='text-lg'>{desc}</div> */}
        </div>
  )
}

export default Card4