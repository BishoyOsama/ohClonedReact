import React from 'react'
import { placesWorked } from '../constants'
import { workedWith } from '../constants'
import { Link } from 'react-router-dom'
import { Fade } from '../configuration'

const Profile = () => {
    Fade()

  return (
    <main className='w-full mt-10 lg:mt-52 fade-up'>
        <div className='w-full flex flex-col items-center my-44 lg:my-56'>
            <h1 className='font-inter font-semibold text-[36px] xl:text-[72px]'>Hey 👋🏼 I'm Oli </h1>
        </div>

        <div className='mx-auto w-[100%] lg:mt-64'>

            <div className='grid grid-cols-1 lg:grid-cols-2 w-full xl:gap-x-10'>
                <div className='w-[320px] h-[300px] md:w-[95%] lg:w-[480px] lg:h-[420px] xl:w-[650px] xl:h-[550px] relative block mx-auto xl:mx-0'>
                    <img className='absolute w-full h-full object-cover rounded-xl' src="https://framerusercontent.com/images/wJINOk3BFAbQRx6ZySXfbltPxU.jpg?scale-down-to=512" alt="" />
                </div>
                <div className='w-[480px] h-[420px] xl:w-[650px] xl:h-[550px] relative fade-profile-text hidden lg:block mx-auto xl:mx-0'>
                    <img className='absolute w-full h-full object-cover rounded-xl' src="https://framerusercontent.com/images/O3Foxt0XkzTsjGc74Ap0Hrxtz4c.jpg?scale-down-to=512" alt="" />
                </div>
            </div>
        </div>

        <div className='mt-24 flex flex-col text-center items-center gap-y-4 fade-up'>
            <p className='text-black text-[14px] font-inter  bg-liteGray p-2 rounded-full'>About</p>
            <p className='text-[24px] lg:text-[38px] w-11/12 lg:max-w-[800px]  font-inter font-semibold fade-profile-text'>
                A freelance designer based in the UK. 
                I combine my experience in product and brand to solve problems, 
                tell stories, and create compelling experiences.
            </p>
        </div>
        
        <section className='w-full flex flex-col items-center mt-52 gap-y-24'>
            <div className='text-center flex flex-col items-center gap-y-5 font-inter fade-up'>
                <p className='bg-liteGray w-max rounded-full py-2 px-3 text-[14px]'>Experience</p>
                <h2 className='text-[30px] lg:text-[38px] font-semibold fade-profile-text'>Where I've worked</h2>
            </div>
            <div className='w-full grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-4 gap-y-10 fade-up'>
                {placesWorked.map(place => (
                    <div className='w-full text-center flex flex-col flex-1 gap-y-3 font-inter' key={place.id}>
                        <p className='text-navGray text-[14px]'>{place.duration}</p>
                        <h2 className='font-semibold text-[18px] lg:text-[22px]'>{place.place}</h2>
                        <p className='text-navGray text-[14px]'>{place.occupation}</p>
                        <p className='bg-liteGray w-max self-center p-2 rounded-full text-[14px] text-black'>{place.position}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className='w-full mt-52 flex flex-col items-center gap-y-20'>
            <div className='text-center flex flex-col items-center gap-y-5 font-inter fade-up'>
                <p className='bg-liteGray w-max rounded-full py-2 px-3 text-[14px]'>Clients</p>
                <h2 className='lg:text-[38px] text-[30px] font-semibold fade-profile-text'>Who I've worked with</h2>
            </div>

            <div className='w-full grid lg:grid-cols-4 lg:grid-rows-3 grid-cols-2 gap-12 gap-y-20 fade-up'>
                {workedWith.map((work, index)=> (
                    <div className='md:w-3/5 lg:w-4/5 xl:w-3/5 w-full bg-white mx-auto' key={work.id}>
                        <img className={`w-full ${index === workedWith.length - 2? "mix-blend-normal" : "mix-blend-difference"}`} src={work.company} alt="brand" />
                    </div>
                ))}
            </div>
        </section>

        <div className='w-full my-32 lg:my-52 flex flex-col items-center fade-up'>
            <p className='font-inter text-black text-center lg:text-[38px] text-[30px] font-semibold xl:max-w-[30%] md:w-2/5 w-10/12'>
            Let's work together. <Link href='#' className='text-navGray hover:text-opacity-50 fade-up-delay'>Get in touch.</Link>
            </p>
        </div>

    </main>
  )
}

export default Profile