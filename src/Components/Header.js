import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className='w-full bg-mainWhite shadow-sm shadow-mainShadow py-3 border-b-[1px] border-gray-200'>
        <div className='contain center justify-between'>
            <div>logo</div>
            <div className='center gap-x-4 text-gray-700 font-semibold text-lg'>
                <Link className='hover:text-mainBlue' to={'/'}>Home</Link>
                <Link className='hover:text-mainBlue' to={'/contact'}>contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Header