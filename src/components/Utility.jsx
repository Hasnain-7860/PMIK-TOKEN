import React from 'react'
const featuress = [
  {
    title: 'Political Support',
    text: 'Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.',
    
  },
  {
    title: 'Mobile Banking App',
    text: 'Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.',
  },
  {
    title: 'Secure Transactions',
    text: 'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.',
  },
   {
    title: 'Secure Transactions',
    text: 'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.',
  },
   {
    title: 'Secure Transactions',
    text: 'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.',
  },
   {
    title: 'Secure Transactions',
    text: 'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.',
  },
  
];

const Utility = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
        <div className='text-center pt-24 '>
            <h1 className='text-white text-center font-lexend text-[38px] font-medium leading-[57px]'>Token <span className='text-[#FE0002]'>Utility</span></h1>
        </div>
        <div className='lg:px-20  ' >
            <div className='grid grid-cols-1 md:grid-cols-2  p-8 min-h-[300px] gap-8 '>
                {featuress.map((item, index) => (
                    <div key={index} className=" gap-10 py-12 px-12 rounded-lg bg-[#021B02]  p-6 shadow-lg border border-[#262626] transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                        <h3 className="text-[18px] font-semibold mb-2">{item.title}</h3>
                        <p className="text-[16px] text-[#B3B3B3] font-lexend leading-[24px]">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Utility