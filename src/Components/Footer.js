import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Locations } from '../config'

const Footer = () => {

  return (
    <div className='border-t-[2px] border-gray-300 pt-10 pb-4 mt-12 bg-mainWhite' >
        <div className='contain'>
            <div className='flex justify-between items-start gap-4 flex-wrap'>
                <div className='flex flex-col gap-y-3'>
                    <Link className='font-bold text-lg text-gray-700 hover:text-mainBlue' to={'/'}>Home</Link>
                    <Link className='font-bold text-lg text-gray-700 hover:text-mainBlue' to={'/contact'}>Contact Us</Link>
                </div>
                <div className='flex flex-col gap-y-3'>
                    {
                        Locations.map((e , index) => (
                            <Link key={index} className='font-bold text-lg text-gray-700 hover:text-mainBlue capitalize' to={`/realstate?location=${e.uri}`}>{e.title}</Link>
                        ))
                    }
                </div>
            </div>
        </div>

        <div className='bg-gray-300 h-[1px] w-full my-4'></div>


        <div className='contain text-gray-500  text-center'>All rights reserved</div>
    </div>
  )
}

export default Footer