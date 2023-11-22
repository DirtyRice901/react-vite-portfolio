import { useState } from 'react'
import SideNav from './components/Sidenav'
import Header from './components/Header'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    
    <div className='bg-blue-200/80'>
      <SideNav />
      <Header />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
