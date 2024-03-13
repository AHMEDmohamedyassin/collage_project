import React, { useEffect, useState } from 'react'
import { Locations } from '../config';
import {motion , AnimatePresence}from 'framer-motion'

const HomeBanner = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCount(prevCount => prevCount >= Locations.length - 1 ? 0 : prevCount + 1);
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <motion.div className='center my-10'>

        {
          Locations.map((e , index) => (
            <>
              {
                count===index ? (
                  <motion.div 
                    initial={{scaleX:0.9}}
                    animate={{scaleX:1}}
                    transition={{delay:0.1 , type:"spring"}}
                    style={{
                      display: count === index ? 'block' : 'none' ,
                      backgroundImage:`url("${e.bannar}")`,
                      backgroundPosition:'center',
                      backgroundRepeat:'no-repeat',
                      backgroundSize:'cover',
                    }} 
                    className='-z-20 relative w-full aspect-video rounded-lg shadow-mainShadow  shadow-xl border-gray-300 border-[1px] '
                  >
                    <div className='absolute top-0 left-0 w-full h-full -z-10 bg-black/20'></div>
                    <div className='absolute top-0 left-0 w-full h-full center'>
                      <div className='text-white font-bold text-6xl capitalize' style={{letterSpacing:4}}>{e.title}</div>
                    </div>
                  </motion.div>
                ) : null              
              }
            </>
          ))
        }

    </motion.div>
  )
}

export default HomeBanner