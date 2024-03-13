import React from 'react'
import HomeBanner from '../Components/HomeBanner'
import Card2 from '../Components/Card2'
import { Locations } from '../config'

const HomePage = () => {

  return (
    <div className='contain'>
      <HomeBanner/>

      <div className='border-t-[1px] border-gray-300 grid lg:grid-cols-3 sm:grid-cols-2 gap-6 py-10'>
        {
          Locations.map((e , index) => (
            <Card2 key={index} path={`/realstate?location=${e.uri}`} title={e.title}/>
          ))
        }
      </div>

    </div>
  )
}

export default HomePage