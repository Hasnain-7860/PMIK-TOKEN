import React from 'react'
import Frame from '../assets/Frame 43.svg'
import { IoIosArrowForward } from "react-icons/io";

const featuresss = [
  {
    title: 'Q2 2025',
    text: 'Token & Smart Contract Deployment',
    textt:'Website & Whitepaper Launch',
    texttt:'Initial Marketing & Awareness Campaign',
    textttt:'Launch of Affiliate Referral Program',
  },
  {
    title: 'Q3 2025',
    text: 'PancakeSwap Listing',
    textt:'CoinMarketCap/CoinGecko Listings',
    texttt:'Expansion of Affiliate System',
    textttt:'Influencer Collaborations',
  },
  {
    title: 'Q3 2025',
    text: 'Donation System Development',
    textt:'NFT Collection (Based on Community Moments)',
    texttt:'Transparent Charity Wallet Setup',
    textttt:'Merch Store Planning',
  },
  {
    title: 'Q1 2026',
    text: 'Launch of Donation Platform',
    textt: 'Expansion to Global Communities',
    texttt:'Governance Feature Testing & Rollout',
    textttt:'Cross-chain Integration Planning',
  }
  
  
];

const Roadmap = () => {
  return (
    <div className='px-4 md:px-16 lg:px-32' id='Roadmap'>
        <div className='text-[38px] font-medium text-center py-20 font-laxend '>
            <h1 >Token <span className='text-[#FE0002]'>Roadmap</span></h1>
        </div>
        <div>
          <img className='w-full mb-6' src={Frame} alt="" />
          <div className='grid grid-cols-4'>
            {featuresss.map((item, index) => (
              <div key={index} className={` mb-8 flex-wrap w-full `} >

                <h3 className="text-[20px] text-[#FE0002] font-semibold mb-0">{item.title}</h3>
                <p className='flex items-center md:text-[10px] lg:text-[14px]'  ><IoIosArrowForward className='text-red-600' /><span className=" text-[#F8FAFC] font-lexend leading-[24px] mb-2">{item.text}</span></p>
                <p className='flex items-center md:text-[10px] lg:text-[14px]'><IoIosArrowForward className='text-red-600' /><span className=" text-[#F8FAFC] font-lexend leading-[24px] mb-2">{item.textt}</span></p>
                <p className='flex items-center md:text-[10px] lg:text-[14px]'><IoIosArrowForward className='text-red-600' /><span className=" text-[#F8FAFC] font-lexend leading-[24px] mb-2">{item.texttt}</span></p>
                <p className='flex items-center md:text-[10px] lg:text-[14px]'><IoIosArrowForward className='text-red-600' /><span className=" text-[#F8FAFC] font-lexend leading-[24px] mb-2">{item.textttt}</span></p>
          </div>
            ))}
        </div>
    </div>
    </div>)
}

export default Roadmap