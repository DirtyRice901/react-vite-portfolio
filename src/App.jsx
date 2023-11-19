import { useState } from 'react'
import SideNav from './components/Sidenav'
import Header from './components/Header'
import Resume from './components/Resume'

function App() {
  return (
    <div>
      <SideNav />
      <Header />
      <Resume />
    </div>
  )
}

export default App
