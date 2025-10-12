import React from 'react'
import Logo from '../assets/logo.svg'
import message from '../assets/message.svg'
import call from '../assets/call.svg'
import location from '../assets/location.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkdin.svg'

const Footer = () => {
  return (
    <div >
        <div className='relative bg-[#032703] px-10 py-12  gap-7  flex-col items-center text-center lg:flex lg:justify-between lg:items-center lg:text-left rounded-lg'>

            <div className="flex flex-col items-center text-center gap-14">
        <img className='w-[150px] h-[40px]' src={Logo} alt="Logo" />
        <div className='grid grid-cols-2 gap-10 sm:grid-cols-4'>
          <a
            href="#"
            className={`text-[16px] font-Lexend`}>Home</a>
          <a
            href="#Token"
            className={`text-[16px] font-Lexend`}>Careers</a>
          <a
            href="#About"
            className={`text-[16px] font-Lexend`}>About</a>
          <a
            href="#Roadmap"
            className={`text-[16px] font-Lexend`}>Security</a>
            </div>
        
        </div>
          <div className='border-t border-b  flex-col border-[#262626] my-4 py-10 w-full flex items-center justify-center gap-4 lg:flex-row'>
            <div className='flex items-center text-center gap-1'>
              <a href="mailto:hello@skillbirdge.com" className='flex items-center text-center gap-1'>
                <img src={message} alt="Message Icon" />
                <p className='text-[16px] font-Lexend'>hello@skillbirdge.com</p>
              </a>
            </div>
            <div className='flex items-center text-center gap-1'>
              <a href="tel:+9191813232309" className='flex items-center text-center gap-1'>
              <img src={call} alt="Call Icon" />
            <p className='text-[16px] font-Lexend'>+91 91813 23 2309</p></a>
            </div>
            <div className='flex items-center text-center gap-1'>
              <a href="https://www.google.com/maps/place/Somewhere+in+the+World" target='_blank' className='flex items-center text-center gap-1'>
                <img src={location} alt="Location Icon" />
                <p className='text-[16px] font-Lexend'>Somewhere in the World</p>
              </a>
            </div>
          </div>
          <div className='w-full bg-[#001000] flex flex-col md:flex-row items-center justify-between px-6 sm:h-[68px] rounded-[34px]  py-[14px] sm:py-0 sm:rounded-[100px] border border-[#262626] gap-6 text-white text-sm '>
          <div className="flex space-x-3">
  <div>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <img className='w-[44px] h-[44px]' src={facebook} alt="Facebook" />
    </a>
  </div>
  <div>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <img className='w-[44px] h-[44px]' src={twitter} alt="Twitter" />
    </a>
  </div>
  <div>
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
      <img className='w-[44px] h-[44px]' src={linkedin} alt="LinkedIn" />
    </a>
  </div>
</div>
<div className='flex justify-center items-center text-center'>
  <p className='text-[14px] font-Lexend text-[#B3B3B3]'>
    © 2023 SkillBridge. All rights reserved.
  </p>
</div>
<div className='flex flex-col sm:flex-row items-center sm gap-2 sm:gap-3'>

  <p className='text-[#B3B3B3] font-lexend text-sm font-light leading-[150%] '>Privacy Policy</p>
  <span className='hidden sm:block w-[1px] h-4 bg-[#B3B3B3]'></span>
  <p className='text-[#B3B3B3] font-lexend text-sm font-light leading-[150%] '> Terms of Service</p>
</div>
          </div>

       
        </div>
    </div>
  )
}

export default Footer
           