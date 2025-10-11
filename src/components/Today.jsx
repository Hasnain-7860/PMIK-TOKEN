import React from 'react'
import Wallet from '../../Wallet'
import Design from '../assets/Design.svg'

const Today = () => {
  return (
    <div className='px-4 py-40 md:px-16 lg:px-12 '>
    <div className='relative bg-[#032703] px-10 py-12  gap-7  flex-row items-center text-center lg:flex lg:justify-between lg:items-center lg:text-left rounded-lg'>
        <div className='absolute top-[1px] left-0 w-full lg:w-[546.746px] lg:-top-[0px] h-[440px] z-0 pointer-events-none'>
            <img src={Design} alt="Design" className='w-[200px] h-[200px] object-contain' />
        </div>
        <div>
        <h1 className='text-[30px]'>Start your financial journey with <span className='text-[#FE0002]'>PMIK804 today!</span></h1>
        <p className='text-[16px] font-lexend text-[#B3B3B3]'>Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit.</p>
        </div>
        <div className='pt-6 lg:pt-0'>
            <Wallet />
        </div>
    </div>
    </div>
  )
}

export default Today