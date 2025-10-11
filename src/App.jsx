import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import What from './components/What'
import Token from './components/Token'
import Coin from './components/Coin'
import Utility from './components/Utility'
import Roadmap from './components/Roadmap'
const App = () => {
  return (
    <>
    <div className='min-h-screen bg-[#001000] text-white font-Lexend'>
      <Navbar/> 
      <Hero/>
      <What/>
      <Token/>
      <Coin/>
      <Utility/>
      <Roadmap/>
      </div>
    </>
  )
}

export default App