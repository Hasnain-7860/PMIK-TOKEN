import React from 'react'
import map from '../assets/map.svg'

const What = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center gap-8 md:px-7 lg:px-0 bg-[#001000] py-10  px-4'>
        <div className='w-full lg:w-1/2'>
        <img className='w-full h-auto object-cover rounded-xl shadow-md' src={map} alt="" />
        </div>
        <div>
        <h2 className='text-3xl font-bold mb-4 text-center lg:text-left'>What is PMIK804?</h2>
        <p className='text-[#E4E4E7] font-lexend text-base  text-[18px] font-light leading-[150%] max-w-2xl text-center lg:text-left'>PMIK804 is a meme-based decentralized cryptocurrency built on the Binance Smart Chain (BEP-20). It represents a symbol of support for Pakistan’s former Prime Minister, Imran Khan, and is powered by a community that stands for justice, freedom, and transparency.</p>
        <p className='text-[#E4E4E7] font-lexend text-base text-[18px] font-light leading-[150%] max-w-2xl mt-4 text-center lg:text-left'>This token is not just for fun — it is designed with a real-world purpose. In future phases, it will also be used for charitable donations and community development, making it a meaningful digital asset.</p>
        <div className='mt-6 flex gap-4'>
            <button className='bg-[#FE0002] text-white text-14 font-bold px-4 py-2 rounded-full'>Buy PMIK804</button>
                      </div>
        </div>

    </div>
  )
}

export default What