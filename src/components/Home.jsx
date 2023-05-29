import React from 'react'
import { Link } from 'react-router-dom'
import { Links } from '../constants'
import { Fade } from '../configuration'


const Home = () => {
    
    Fade()

  return (
    <main className='w-full h-auto mt-52 fade-up'>

        <div className='flex flex-col items-center text-center gap-y-7'>
            <h1 className='lg:text-[62px] text-[30px] xl:max-w-[55%] max-w-[850px] font-inter font-semibold'>A brand and product designer working with clients globally</h1>
            <ul className='lg:flex hidden gap-x-1 font-inter text-[12px]'>
                <li className='px-3 py-2'>Expertise</li>
                <li className='bg-liteGray px-3 py-2 rounded-full'>Branding</li>
                <li className='bg-liteGray px-3 py-2 rounded-full'>Product</li>
                <li className='bg-liteGray px-3 py-2 rounded-full'>Design Systems</li>
            </ul>
        </div>

        <div className='mt-24 lg:mt-36 md:w-[95%] w-[90%] mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-6 gap-x-4 lg:gap-y-8 gap-y-10'>
                {Links.map((link, index) => (
                    <div className={`w-full ${link.order}`}>
                        <Link to={link.availability? `/projects/${link.brandId}`: " "} key={link.id} className={`relative overflow-hidden card ${link.availability? "cursor-pointer": "cursor-default"}`}>
                            <div className='card-effect justify-between p-5 z-10 invisible lg:visible'>
                                <p className='text-white font-inter brand'>{link.availability? link.brand : <span>{link.brand} <br/> <span className='text-white capitalize opacity-50'>coming soon</span></span>}</p>
                                <div className={`w-12 h-fit ${link.availability? "bg-white": "bg-black"} rounded-full arrow`}>
                                    {link.availability?
                                     <svg className='scale-75 rotate-90' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.528"></g><g id="SVGRepo_iconCarrier"> <path d="M9.5 9.5L15 15" stroke="#323232" stroke-width="1.9200000000000004" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 14L9 9.32833C9 9.147 9.14703 9 9.32837 9L14 9" stroke="#323232" stroke-width="1.9200000000000004" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                     :
                                     <svg className='scale-[45%]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00015000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V11.1707C18.1652 11.5825 19 12.6938 19 14V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V14C5 12.6938 5.83481 11.5825 7 11.1707V9ZM9 11H15V9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9V11ZM8 13C7.44772 13 7 13.4477 7 14V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V14C17 13.4477 16.5523 13 16 13H8Z" fill="#ffffff"></path> </g></svg>
                                    }
                                </div>
                            </div>
                            <div className='card-effect-sm w-full flex-row justify-end p-5 z-10 lg:invisible visible'>
                                <div className={`w-12 h-fit bg-white rounded-full arrow`}>
                                    {link.availability?
                                      null
                                     :
                                     <svg className='scale-[45%]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00015000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V11.1707C18.1652 11.5825 19 12.6938 19 14V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V14C5 12.6938 5.83481 11.5825 7 11.1707V9ZM9 11H15V9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9V11ZM8 13C7.44772 13 7 13.4477 7 14V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V14C17 13.4477 16.5523 13 16 13H8Z" fill="#000000"></path> </g></svg>
                                    }
                                </div>
                            </div>
                            {index <= 8? 
                            <img src={link.img} className="w-full h-full object-cover rounded-xl"/> : 
                            <video loop autoPlay muted src={link.video} className="w-full h-full object-cover rounded-xl">
                            </video>}
                        </Link>
                        <Link to='' className='lg:hidden block'>
                            <p className='text-black text-[14px] font-inter my-2'>{link.availability? link.brand : <span>{link.brand}  <span className='text-black text-[13px] capitalize opacity-50'>coming soon</span></span>}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

        <div className='w-full my-32 lg:my-52 flex flex-col items-center fade-up'>
            <p className='font-inter text-black text-center lg:text-[38px] text-[28px] font-semibold xl:max-w-[30%] max-w-[300px]'>
            Let's work together. <Link href='#' className='text-navGray hover:text-opacity-50 fade-up-delay'>Get in touch.</Link>
            </p>
        </div>
        
    </main>
  )
}

export default Home