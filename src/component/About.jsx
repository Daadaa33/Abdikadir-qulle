import React, { useState } from 'react'
import dada from '../img/znd.jpg'
import {BsGithub,BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs"

function About() {
  
  return (
    <div className={`h-[50rem]  flex flex-col space-y-5 items-center pt-[4rem]`} >
     <div className="text-center text-5xl text-[#082032] font-bold">
        <h1>Welcome!</h1>
     </div>
     {/* profile */}
     <div className="pt-4">
      <img src={dada} alt="daadaa" className='rounded-full w-[18rem] h-[18rem] border border-[#DD6B4D] border-4 ' />
     </div>
     {/* icons */}
    <div className="">
    <div className=" text-[#1C4B82] flex items-center justify-center text-3xl pb-4 space-x-9 mt-9">
            {/* <FiInstagram /> */}
            <BsInstagram className='hover:text-[#D48472]' />
            <BsLinkedin className='hover:text-[#D48472]' />
            <BsGithub className='hover:text-[#D48472]' />
            <BsTwitter className='hover:text-[#D48472]'/>
   </div>
   
    </div>

    {/* abouut */}
    <div className="sm:max-w-lg  w-auto sm:text-center max-w-sm md:max-w-2xl lg:max-w-none space-y-4 text-left md:text-center px-4">
    <div className="flex flex-wrap">
      <h1 className=' '>I am a frontend developer, software engineering student and content creator from somalia based in somalia, kismayo.</h1>
    </div>
    <div className=" ">
      <h1>In 2019 I was a graphic designer and I wanted to learn a new skill
         so I decided to learn web development. I wasn't able to be consistent until 2021,
          that's when I
         started with my bachelors degree in software engineering.</h1>
    </div>
    </div>
   </div>
  )
}

export default About