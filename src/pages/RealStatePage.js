import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import Card3 from '../Components/Card3'
import { useLocation, useParams } from 'react-router-dom'
import { Locations } from '../config'

const RealStatePage = () => {
  const location = useLocation();

  const [data , setData]= useState([])

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paramValue = searchParams.get('location');
    setData(Locations.find(e => e.uri == paramValue).items);
  }, [location.search]);

  return (
    <div className='contain'>
      
      <div className='center py-10 flex-wrap gap-4'>
        {
          data.map((e , index) => (
            <Card3 key={index} img={e.icon}/>
          ))
        }
      </div>

      <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6 py-10'>
      
      {
        data.map((e , index) => (

          <Card key={index} {...e}/>
        ))
      }

    </div>
    </div>
  )
}

export default RealStatePage