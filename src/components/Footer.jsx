import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from "lottie-react"
import circle from '../assets/circle.json'


const Footer = () => {
    let copyRight = String.fromCodePoint(0x000A9)
  return (
    <footer className='w-full flex flex-col md:flex-row md:justify-between items-center mb-7 md:px-5 xl:px-0'>
        <div className='flex flex-col lg:flex-row items-center lg:gap-x-2 gap-y-2 mb-2 lg:mb-0'>
            <Lottie  animationData={circle} loop className='w-10'/> 
            <p className='font-inter text-[12px]'>{copyRight} Oli Harris 2023</p>
        </div>

        <div>
            <ul className='flex gap-x-3 font-inter text-[14px] lg:text-[12px] text-black'>
                <li className='hover:text-navGray'>
                    <Link to={''}>Twitter</Link>
                </li>
                <li className='hover:text-navGray'>
                    <Link to={''}>Linkedin</Link>
                </li>
                <li className='hover:text-navGray'>
                    <Link to={''}>Mail</Link>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer