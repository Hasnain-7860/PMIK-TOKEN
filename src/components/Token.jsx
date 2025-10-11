import React from 'react'
import Icon1 from '../assets/Icon1.svg'
import Icon2 from '../assets/Icon2.svg'
import Icon3 from '../assets/Icon3.svg'
const features = [
  {
    title: 'Blockchain',
    text: 'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.',
    icon: <img src={Icon1} alt="Blockchain" />,
  },
  {
    title: 'Total Supply',
    text: 'Build your savings with our competitive interest rates and flexible savings account options. Whether you’re saving for a specific goal or want to grow your wealth over time, we have the right account for you.',
    icon: <img src={Icon2} alt="Total Supply" />,
  },
  {
    title: 'Meme Utility',
    text: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.',
    icon: <img src={Icon3} alt="Meme Utility" />,
  },
  {
    title: 'Referral System',
    text: 'Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.',
    icon: <img src={Icon1} alt="Referral System" />,
  },
  {
    title: 'Decentralized Donations',
    text: 'Build your savings with our competitive interest rates and flexible savings account options. Whether you’re saving for a specific goal or want to grow your wealth over time, we have the right account for you.',
    icon: <img src={Icon2} alt="Decentralized Donations" />,
  },
  {
    title: 'Anti-Whale Mechanism',
    text: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.',
    icon: <img src={Icon3} alt="Anti-Whale Mechanism" />,
  },
];


const Token = () => {
  return (
    <div> 
        <div className='text-center py-10'>
            <h1 className='text-[38px] font-semibold'>Token <span className='text-[#FE0002]'>Features</span></h1>
        </div>
       <div className=" px-4 md:px-16 py-16">  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
        {features.map((item, index) => (
          <div
            key={index}
            className=" border-white/10 p-1 text-center min-h-[300px] flex flex-col items-center justify-start lg:border-l lg:border-b"
          >
            <div className="mb-6">
              <div className="flex items-start gap-2.5 rounded-full  p-1.5">
                {item.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-4 font-lexend ">{item.title}</h3>
            <p className="text-[#B3B3B3] text-center font-lexend text-[16px] font-light px-10 leading-[26px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>

    </div>
   )
}
 
export default Token