import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {BsMoonFill, BsSun} from "react-icons/bs"
import Header from './Header'

function Navbar() {
  const [age, setAge] = useState(false)
  
  const initialPayment = {
    about : false,
    project : false,
    skill : false,
    linka : false
  }
 
 const [zaad,setZaad] = useState(initialPayment)
 const [updated, setUpdated] = useState(false)

 useEffect (() => {}, [updated])
  
  return (
    <div className='flex items-center justify-between '>
       <div className='text-white'>
          <Link to ='/About Me'  className={`text-2xl font-bold`}
          onClick={()=> setZaad({...initialPayment, about : true})}
          >Abdikadir qulle</Link>
        </div>
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
         <div className={` hidden md:flex space-x-5 hover:cusor-pointer text-[#fff] font-medium `}>
             
             <Link to="/About Me" onClick={()=> setZaad({...initialPayment, about : true})}
             className={` ${zaad.about && 'text-red-400'}`}
             >About Me</Link>
            <Link to="/Projects" onClick={()=> setZaad({...initialPayment, project : true})}
            className={` ${zaad.project && 'text-red-400'}`}>Projects</Link>
            <Link to="/Skills" onClick={()=> setZaad({...initialPayment, skill : true})}
            className={` ${zaad.skill && 'text-red-400'}`}>Skills</Link>
            <Link  to="/Links" onClick={()=> setZaad({...initialPayment, linka : true})}
            className={` ${zaad.linka && 'text-red-400'}`}>Links</Link>
         </div>
           
    </div>
  )
}

export default Navbar