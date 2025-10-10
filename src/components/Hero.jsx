import React from 'react'
import click from '../assets/click.svg'
import Buy from '../assets/Buy.svg'

const Hero = () => {
  return (
    <div className="p-8 px-32 pt-16 grid  grid-cols-2 bg-yellow-500">
      <div>
        <div>
          <button className="bg-[#032703] text-white text-md px-4 py-2 rounded-full flex items-center gap-2">
            <img className='w-[20px] h-[20px]' src={click} alt="" />
            <p className='text-[#FFFFFF] text-[14px]'>No LLC Required, No Credit Check.</p>
          </button>
        </div>
        <div className='mt-6 flex flex-col max-w-[460px]'>
          <h1 className='text-[38px] font-bold text-white leading-tight'>
            Welcome to<span className='text-[#FE0002]'> PMIK804</span>
          </h1>
          <p className='text-[16px] mt-4 text-[#E4E4E7]'>PMIK804 is a meme-based decentralized cryptocurrency built on the Binance Smart Chain (BEP-20). It represents a symbol of support for Pakistan’s former Prime Minister, Imran Khan, and is powered by a community that stands for justice, freedom, and transparency.</p>
          <div className='mt-6 flex gap-4'>
            <button className='bg-[#FE0002] text-white text-14 font-bold px-4 py-2 rounded-full'>Buy PMIK804</button>
                      </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='pl-[100px]'>
          <img className='' src={Buy} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero