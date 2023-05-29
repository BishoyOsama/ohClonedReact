import React from 'react'
import { useParams } from 'react-router-dom'
import { Links } from '../constants'
import { Link } from 'react-router-dom'
import { Fade } from '../configuration'

const Projects = () => {
    //observer animation
    Fade()

    //url matcher
    const {brandId} = useParams()
    React.useEffect(() => {
        document.title = brandId
    }, [brandId])
    
  return (
    <div className='w-[90%] mx-auto xl:mx-0 xl:w-full mt-[15rem]'>
        {Links.filter(link => link.brandId === brandId)
        .map(link => (
            <div className='flex flex-col items-center gap-5 fade-up'>
                <div className='flex flex-col items-center text-center gap-5 font-inter order-1 mb-[5rem] xl:mb-[15rem]'>
                    <h1 className='font-semibold text-[36px] customLg:text-[48px] xl:text-[72px] w-full xl:w-[85%]'>{link.details.heading}</h1>
                    <p className='bg-liteGray px-3 py-2 rounded-full w-fit text-[14px]'>{link.details.brandName}</p>
                </div>
                <div className='w-full rounded-[12px] flex flex-[0_0_auto] order-2'>
                    {link.brandId !== "ronald-abram"? 
                    <img src={link.src[0]} alt=""  className='object-cover rounded-[12px] w-full h-full projectMainImg'/> :
                    <video src={link.src[0]} className='object-cover rounded-[12px] w-full h-full' muted loop autoPlay></video>
                    }
                </div>

                <div className={`w-full order-3 my-10`}>
                    <ul className={`flex flex-col gap-y-2 customLg:flex-row ${link.brandId === "oh-supply"? "justify-between w-[70%]" : "justify-between"}`}>
                        <li className='flex flex-col gap-1'>
                            <h6 className='capitalize font-inter text-navGray text-[14px]'>client</h6>
                            <p className='text-[14px] text-black'>{link.details.client}</p>
                        </li>
                        <li className={`${link.brandId === "oh-supply"? "hidden" : "block"} flex flex-col gap-1`}>
                            <h6 className='capitalize font-inter text-navGray text-[14px]'>studio</h6>
                            <p className='text-[14px] text-black'>{link.details.studio}</p>
                        </li>
                        <li className='flex flex-col gap-1'>
                            <h6 className='capitalize font-inter text-navGray text-[14px]'>role</h6>
                            <p className='text-[14px] text-black'>{link.details.role}</p>
                        </li>
                        <li className='flex flex-col gap-1'>
                            <h6 className='capitalize font-inter text-navGray text-[14px]'>focus</h6>
                            <p className='text-[14px] text-black'>{link.details.focus}</p>
                        </li>
                    </ul>
                </div>

                <div className={`w-full flex flex-col customLg:flex-row gap-y-5 customLg:gap-x-5 ${link.arrange.order4}`}>
                    <div className='rounded-[12px]'>
                        <img src={link.src[1]} alt="" className={`object-cover rounded-[12px] h-full`}/>
                    </div>
                    <div className={`rounded-[12px]`}>
                       {link.brandId !== "propeller"? 
                        <img src={link.src[2]} alt="" className='object-cover rounded-[12px] h-full'/> :
                        <video src={link.src[2]} className='object-cover rounded-[12px] h-full' autoPlay muted loop></video>
                        }
                    </div>
                    <div className={`rounded-[12px] ${link.brandId === "oh-supply"? "block" : "hidden"}`}>
                        <img src={link.src[3]} alt="" className='object-cover rounded-[12px] h-full'/> 
                    </div>
                </div>

                <div className={`w-full flex flex-col gap-y-2 my-10 ${link.arrange.order5}`}>
                    <h6 className='text-[14px] font-inter text-navGray capitalize'>overview</h6>
                    <p className='text-[14px] font-inter text-black leading-[1.4em] text-left w-full customLg:w-[70%] xl:w-2/5'>{link.details.overView}</p>
                </div>

                <div className={`w-full rounded-[12px] ${link.arrange.order6} ${link.brandId === "oh-supply"? "hidden" : "block"}`}>
                    <img src={link.src[3]} alt=""  className='rounded-[12px] object-cover w-full h-full block projectMainImg'/>
                </div>

                <div className={`w-full flex flex-col xl:flex-row gap-y-5 xl:gap-x-5 ${link.arrange.order7} ${link.brandId === "monokel-eyewear"? "flex-col" : "flex-row"}`}>
                    <div className={`rounded-[12px] w-full  ${link.brandId === "oh-supply" || link.brandId === "monokel-eyewear" ? "w-full" : "xl:w-1/2"}`}>
                        {link.brandId !== "ronald-abram"? 
                        <img src={link.src[4]} alt="" className='object-cover rounded-[12px] h-full'/> :
                        <video src={link.src[4]} className='object- rounded-[12px] h-full' loop muted autoPlay></video>
                        }
                    </div>
                    <div className={`rounded-[12px] w-full xl:w-1/2 ${link.brandId === "oh-supply" || link.brandId === "monokel-eyewear" ? "hidden" : "w-1/2"}`}>
                        {link.brandId !== "propeller"? 
                        <img src={link.src[5]} alt="" className='object-cover rounded-[12px] h-full'/> :
                        <video src={link.src[5]} className='object-cover rounded-[12px] h-full' autoPlay muted loop></video>
                        }
                    </div>
                </div>

                <div className={`w-full rounded-[12px] flex flex-[0_0_auto] ${link.arrange.order8}`}>
                    {link.brandId !== "monokel-eyewear"? 
                    <img src={link.src[6]} alt="" className='object-cover rounded-[12px] w-full h-full block projectMainImg'/>:
                    <img src={link.src[5]} alt="" className='object-cover rounded-[12px] w-full h-full block projectMainImg'/> 
                    }
                </div>

                <div className={`w-full rounded-[12px] flex flex-[0_0_auto] ${link.arrange.order9}`}>
                    {link.brandId !== "monokel-eyewear"? 
                    <img src={link.src[7]} alt="" className='object-cover rounded-[12px] w-full h-full block projectMainImg'/>:
                    <img src={link.src[6]} alt="" className='object-cover rounded-[12px] w-full h-full block projectMainImg'/> 
                    }
                </div>

                <div className={`w-full rounded-[12px] flex flex-[0_0_auto] ${link.arrange.order10}`}>
                    {link.brandId !== "nycb"? 
                    <img src={link.src[8]} alt="" className='object-cover rounded-[12px] w-full h-full block projectMainImg'/> :
                    <video src={link.src[8]} className='object-cover rounded-[12px] w-full h-full' muted loop autoPlay></video>
                    }
                </div>

                <div className={`w-full rounded-[12px] flex flex-[0_0_auto] ${link.arrange.order11} ${link.brandId === "nycb"? "hidden" : "block"}`}>
                    <img src={link.src[9]} alt="" className='object-cover rounded-[12px] w-full h-full block projectMainImg'/>
                </div>

                <div className={`w-full flex flex-col customLg:flex-row gap-y-5 customLg:gap-x-5 ${link.arrange.order12}`}>
                    <div className={`rounded-[12px] w-full xl:w-1/2`}>
                        <img src={link.src[10]} alt="" className='object-cover rounded-[12px] h-full'/>
                    </div>
                    <div className={`rounded-[12px] w-full xl:w-1/2`}>
                        {link.brandId !== "propeller"? 
                        <img src={link.brandId === "nycb"? link.src[9] : link.src[11]} alt="" className='object-cover rounded-[12px] h-full'/> :
                        <video src={link.src[11]} className='object-cover rounded-[12px] h-full' autoPlay muted loop></video>
                        }
                    </div>
                </div>

                <div className={`w-full flex flex-col customLg:flex-row gap-y-5 customLg:gap-x-5 ${link.arrange.order13}`}>
                    <div className={`rounded-[12px] w-full xl:w-1/2 ${link.brandId === "ronald-abram"? "w-1/2" : ""}`}>
                        <img src={link.src[12]} alt="" className='object-cover rounded-[12px] h-full'/>
                    </div>
                    <div className={`rounded-[12px] w-full xl:w-1/2 ${link.brandId === "ronald-abram"? "w-1/2" : ""}`}>
                        <img src={link.src[13]} alt="" className='object-cover rounded-[12px] h-full'/> 
                    </div>
                </div>

            </div>
        ))}

        <div className='w-full my-32 lg:my-52 flex flex-col items-center fade-up'>
            <p className='font-inter text-black text-center lg:text-[38px] text-[28px] font-semibold xl:max-w-[30%] max-w-[300px]'>
            Let's work together. <Link href='#' className='text-navGray hover:text-opacity-50 fade-up-delay'>Get in touch.</Link>
            </p>
        </div>
    </div>
  )
}

export default Projects