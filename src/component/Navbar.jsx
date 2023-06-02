import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {BsMoonFill, BsSun} from "react-icons/bs"

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
    <div className='flex items-center justify-between  w-full '>
       <div className='text-white'>
          <Link to ='/'  className={`text-2xl pr-4 font-[600]`}
          onClick={()=> setZaad({...initialPayment, about : true})}
          >Abdikadir qulle</Link>
          
         
        </div>
      
         <div className={` hidden md:flex space-x-5 hover:cusor-pointer text-[#fff]  `}>
             {
           age ? (
             <BsMoonFill onClick={ () => setAge (!age) } className='w-6 h-6 text-[#FFFFFB] hover:rotate-90 duration-700 cursor-pointer' />
           ): (
             <BsSun  onClick={ () => setAge (!age) } className='w-6 h-6 text-[#FFFFFB] hover:rotate-90 duration-700 cursor-pointer'/>
 
           )
          }
             <Link to="/" onClick={()=> setZaad({...initialPayment, about : true})}
             className={` ${zaad.about && 'font-bold'}`}
             >About Me</Link>
            <Link to="/Projects" onClick={()=> setZaad({...initialPayment, project : true})}
            className={` ${zaad.project && 'font-bold'}`}>Projects</Link>
            <Link to="/Skills" onClick={()=> setZaad({...initialPayment, skill : true})}
            className={` ${zaad.skill && 'font-bold'}`}>Skills</Link>
            <Link  to="/Links" onClick={()=> setZaad({...initialPayment, linka : true})}
            className={` ${zaad.linka && 'font-bold'}`}>Links</Link>
         </div>
           
    </div>
  )
}

export default Navbar