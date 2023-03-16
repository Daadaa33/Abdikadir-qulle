import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {BsMoonFill, BsSun} from "react-icons/bs"
function Navbar() {
  const [age, setAge] = useState(false)
  // const [data, setData] = useState("false")
  return (
    <div className='flex items-center justify-center '>
        <div className={`text-[#FFFFFB] font-bold m-5  hover:rotate-90 duration-700 cursor-pointer hidden md:flex 
        `} >
        {
           age ? (
             <BsMoonFill onClick={ () => setAge (!age) } className='w-6 h-6' />
           ): (
             <BsSun  onClick={ () => setAge (!age) } className='w-6 h-6 hover:rotate-45'/>
 
           )
          }
        </div>
         <div className=' hidden md:flex space-x-5 hover:cusor-pointer text-[#fff] font-medium'>
             
             <Link to="/About Me">About Me</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Skills">Skills</Link>
            <Link  to="/Links">Links</Link>
         </div>
           
    </div>
  )
}

export default Navbar