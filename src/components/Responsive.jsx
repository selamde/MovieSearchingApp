import {motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { NavbarMenu } from '../Links/links'

const Responsive = ({open}) => {
  return (
    <AnimatePresence mode='wait'>
       {
  open && (
     <motion.div
     initial={{opacity:0, y:-100}}
     animate={{opacity:1, y:0}}
     exit={{opacity:0, y:0.3}}
     transition={{duration:0.3}}
     className='fixed top-20 left-0 w-full h-[50%] z-50'
     >
    <div className=' bg-linear-to-r from-purple-500 to-white-500 rounded-xl z-50 font-semi-bold rounde m-6 py-10 uppercase'>
         <ul className='text-white flex flex-col items-center justify-center gap-10 font-bold'>
             {
             NavbarMenu.map((links)=>{
                return(
               <li key={links.id} className='text-center h-10 hover:w-full hover:bg-linear-to-r from-purple-500 to-white-500'>
                 <a href={links.link}>{links.title}</a>
                 </li>
                    )
                    })
                                }
        </ul>
    </div>
            

</motion.div>
        )
       }

    </AnimatePresence>
  )
}

export default Responsive