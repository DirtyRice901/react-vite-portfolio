import { useState } from 'react'
import SideNav from './components/Sidenav'
import Header from './components/Header'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div>
      <SideNav />
      <Header />
      <Resume />
      <Portfolio />
    </div>
  )
}

export default App
