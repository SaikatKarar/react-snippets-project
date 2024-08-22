import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './component/Header'

function App() {
  return (
    <div>
      <div className="fixed top-0 w-full z-50 bg-white inline-block">
        <Header />
      </div>
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App