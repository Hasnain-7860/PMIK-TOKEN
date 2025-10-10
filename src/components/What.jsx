import React from 'react'
import map from '../assets/map.svg'

const What = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-8 md:px-7 lg:px-0 bg-[#001000] py-10  px-4'>
        <div className='w-full lg:w-1/2'>
        <img className='w-full h-auto object-cover rounded-xl shadow-md' src={map} alt="" />
        </div>

    </div>
  )
}

export default What