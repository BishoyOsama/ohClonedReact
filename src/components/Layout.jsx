import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='xl:max-w-[1300px] w-full bg-white mx-auto flex flex-col items-center'>
        <div className='w-full flex justify-center'>
            <Navbar />
        </div>
        <div className='w-full h-[100vh] flex flex-col justify-between'>
            <Outlet/>
            <Footer />
        </div>
    </div>
  )
}

export default Layout