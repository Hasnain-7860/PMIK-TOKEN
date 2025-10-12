import React from 'react'
import data from '../assets/data.svg'

const Coin = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full' id='About'>
        <div className='text-center py-10 '>
            <h1 className='text-white text-center font-lexend text-[38px] font-medium leading-[57px]'>Coin <span className='text-[#FE0002]'>Tokenomics</span></h1>
        </div>
        <div className='w-full p-4 shadow-lg rounded-lg flex items-center justify-center'>
            <img className='lg:h-auto h-[40%] w-[40%]'  src={data} alt="Coin Tokenomics" />
        </div>
    </div>
  )
}

export default Coin