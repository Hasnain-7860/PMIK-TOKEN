import React from 'react'
import click from '../assets/click.svg'
import Buy from '../assets/Buy.svg'
import token from '../assets/cion2.png'
import line from '../assets/Group 1.svg'

const Hero = () => {
  return (
    <div className="flex flex-col md:px-3.5 lg:py-[20px] lg:pl-[40px] lg:pr-[80px] xl:py-[60px] xl:pl-[80px] xl:pr-[200px] w-full md:flex-row md:items-start justify-between xl:gap-[261px] lg:gap-[200px] overflow-hidden">
      <div className='flex flex-col gap-4 md:items-start items-center justify-center text-center md:text-start p-4  md:gap-[16px]  max-w-[500px] md:px-4 lg:p-0 xl:p-0 2xl:p-0 '>
        <div>
          <button className="bg-[#032703] text-white text-md px-4 py-2 rounded-full flex items-center gap-2">
            <img className='w-[20px] h-[20px]' src={click} alt="" />
            <p className='text-[#FFFFFF] text-[14px]'>No LLC Required, No Credit Check.</p>
          </button>
        </div>
        
          <div className='text-white font-lexend font-medium  text-4xl leading-14'>
            Welcome to<span className='text-[#FE0002]'> PMIK804</span>
          </div>
          <p className='text-[#E4E4E7] font-lexend text-base font-light leading-[150%]'>PMIK804 is a meme-based decentralized cryptocurrency built on the Binance Smart Chain (BEP-20). It represents a symbol of support for Pakistan’s former Prime Minister, Imran Khan, and is powered by a community that stands for justice, freedom, and transparency.</p>
          <div className='mt-6 flex gap-4'>
            <button className='bg-[#FE0002] text-white text-14 font-bold px-4 py-2 rounded-full'>Buy PMIK804</button>
                      </div>
       
      </div>
      <div className='relative p-5 md:p-0 md:min-w-[410px]'>
        <img className='absolute z-10 lg:top-1 w-[237px] h-[237px] left-[-100px] top-[-50px] aspect-square md:hidden lg:block xl:right-[308px] 2xl:right-[310px] xl:block' src={token} style={{ opacity: 1, transform: 'none' }} alt="" />
        <div className='pl-[100px]'>
          <img className='' src={Buy} alt="" />
        </div>
        <img className='absolute z-1 w-[337px] h-[237px] aspect-square right-[-168px] bottom-0 md:hidden xl:bottom-40 xl:left-[310px] 2xl:bottom-40 2xl:left-[300px] lg:block"' src={token} style={{ opacity: 1, transform: 'none' }} alt="" />
      </div>
      <img className='w-full absolute md:hidden right-0 lg:bottom-[-67px] 2xl:right-0 xl:bottom-[-119px] 2xl:bottom-[-20px] hidden lg:block overflow-hidden' src={line} alt="" />
    </div>
  ) 
}

export default Hero