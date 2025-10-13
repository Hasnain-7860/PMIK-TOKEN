import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import What from './components/What'
import Token from './components/Token'
import Coin from './components/Coin'
import Utility from './components/Utility'
import Roadmap from './components/Roadmap'
import Today from './components/Today'
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './Admin/Dashboard'

const App = () => {
  return (
    <>
    <div className='min-h-screen bg-[#001000] text-white font-Lexend'>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<><Navbar/><Hero/><What/><Token/><Coin/> <Utility/><Roadmap/><Today/><Footer/></>} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes> 
     
      </BrowserRouter>
    </div>
  </>
  )
}

export default App