import React from 'react'
import daadaa from '../img/skills_photo.jpg'
import {BsGithub,BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs"
function Skills() {
  return (
    <div className='pt-[5rem] flex flex-col items-center space-y-8'>
      <div className="text-center">
        <h1 className='font-bold text-[#082032] text-5xl'>Skills</h1>
      </div>
      {/* img */}
      <div className="">
        <img src={daadaa} alt="dada" className='rounded-full 
        w-[18rem] h-[18rem] border border-[#D48472] border-4' />
      </div>
      <div className=" text-[#1C4B82] flex items-center justify-center text-3xl pb-4 space-x-9 mt-9">
            {/* <FiInstagram /> */}
            <BsInstagram className='hover:text-[#D48472]' />
            <BsLinkedin className='hover:text-[#D48472]' />
            <BsGithub className='hover:text-[#D48472]' />
            <BsTwitter className='hover:text-[#D48472]'/>
   </div>
   <div className="px-4  text-left sm:text-center">
    <p>I have learned a lot of skills as a graphic designer and then as a frontend developer
       and I am always learning something new to add a new skill to the list</p>
   </div>
   {/* skills languages */}
   <div className="">
    
   </div>
    </div>
  
  )
}

export default Skills 