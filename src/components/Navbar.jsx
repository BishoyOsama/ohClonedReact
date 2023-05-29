import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const location = useLocation();
    const {pathname} = location 
    const locationName = pathname.split("/");
    const page = locationName[1]

    /* for changing the page title */
    React.useEffect(() => {
        if(page === ""){
            document.title = "OH.Studio"
        }else{
            document.title = page
        }
    }, [locationName])
  return (
    <>
        <nav className={`flex justify-center text-[12px] px-1 py-1 rounded-full fixed top-10 glass z-50 ${pathname.includes("/projects/")? "hidden" : "flex"}`}>
            <ul className='flex list-none gap-3 font-inter  font-semibold'>
                <li className={`py-3 px-7 rounded-full cursor-pointer ${locationName[1] === ""? "active": ""}`}>
                    <NavLink exact="true" to='/'>
                        Home
                    </NavLink>
                </li>
                <li className={`py-3 px-6 rounded-full cursor-pointer ${locationName[1] === "profile"? "active": ""}`}>
                    <NavLink exact="true" to='/profile'>
                        Profile
                    </NavLink>
                </li>
                <li className={`py-3 px-6 rounded-full cursor-pointer ${locationName[1] === "contact"? "active": ""}`}>
                    <NavLink exact="true" to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>

        <nav className={`fixed ${pathname.includes("/projects/")? "block" : "hidden"}`}>
            <div className='w-[99.1vw] h-[120px] flex justify-center items-center projectNav'>
                <div className='w-fit bg-liteGray group hover:bg-black rounded-full px-4 py-2 cursor-pointer'>
                    <NavLink exact="true" to='/'>
                        <FontAwesomeIcon icon={faXmark} className='group-hover:text-white' />
                    </NavLink>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar