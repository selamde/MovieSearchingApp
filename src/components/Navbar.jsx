import React, { useEffect, useState } from 'react'
import { RiMovie2Line } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";
import { NavbarMenu } from '../Links/links';
import { IoMenu } from "react-icons/io5";
import Responsive from './Responsive';
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [open, setOpen] = useState(false);




  return (
    <>
    <nav className=' '>
        <div className=' fixed z-[9999] container flex justify-between item-center py-8 text-white'>
            {/* logo */}
            <div className='flex text-2xl uppercase items-center text-center font-bold lg:text-5xl '>                <p>M</p>
                <RiMovie2Line />
                <p>vie</p>

                <BiCameraMovie className='-rotate-45' />
                
            </div>
            {/* pages */}
            <div className='hidden md:block'>
               <ul className='flex itesm-center gap-6 font-bold'>
                {
                    NavbarMenu.map((links)=>{
                        return(
                            <li key={links.id}>
                                <a href={links.link}>{links.title}</a>
                            </li>
                        )
                    })
                }
               </ul>
            </div>
            <div className='md:hidden' onClick={()=>{
                setOpen(!open);
            }}>
                {
                    open? <IoMdClose className='text-4xl '/> : <IoMenu className='text-4xl' />
                }
            
            </div>

        </div>
    </nav>
    <Responsive open={open} />
    </>
  )
}

export default Navbar