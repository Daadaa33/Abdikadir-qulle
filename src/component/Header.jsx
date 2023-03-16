import React, { useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {BsMoonFill, BsSun} from "react-icons/bs"
import {MdClose} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Header() {
  
  const [data, setData] = useState(false)
  const [age, setAge] = useState(false)

  // 
   return (
    <div className={`flex px-5 justify-between items-center w-[100%] h-[5rem]
     bg-[#1C4B82]`}>
     
        <div className='text-white'>
          <Link to ='/About Me'  className='text-2xl font-bold'>Abdikadir qulle</Link>
        </div>
        {/* navbar */}
        
        <Navbar />
        {/* mobile */}
        <div className='md:hidden hover:cursor-pointer text-white flex items-center  justify-center gap-6 p-6 text-bold'>

         {
          age ? (
            <BsMoonFill onClick={ () => setAge (!age) } className= ' hover:rotate-180 duration-700 cursor-pointer w-5 h-5 ' />
          ): (
            <BsSun  onClick={ () => setAge (!age) } className=' hover:rotate-180 duration-700 cursor-pointer w-6 h-6'/>

          )
         }

          {
            data ? (
                        <MdClose onClick={ () => setData (!data) } className=' w-9 h-9'/>

            ) : (    
                        <AiOutlineMenu onClick={ () => setData (!data) } className=' w-7 h-7' />

            )
          }
        <div className={` absolute flex flex-col ${data ? "flex" : "hidden"} md:hidden
         top-23 right-0 space-y-10 bg-[#6484A8]  w-full  text-[#E9ECF1] text-center pt-2 text-lg font-medium h-[17rem] rounded-b-[3rem] top-[5rem]`}>
            <Link to="/About Me">About Me</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Skills">Skills</Link>
            <Link  to="/Links">Links</Link>
         </div>
        </div>
      
    </div>
  )
}

export default Header