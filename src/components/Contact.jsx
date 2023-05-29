import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from '../configuration'

const Contact = () => {
    Fade()
    
  return (
    <div className='w-full h-auto my-auto'>
        <p className='font-inter text-black text-center lg:text-[52px] text-[36px] max-w-[100%] font-semibold fade-up '>
            Let's work together.<br/> <Link href='#' className='text-navGray hover:text-opacity-50 fade-up-delay'>Get in touch.</Link>
        </p>
    </div>
  )
}

export default Contact