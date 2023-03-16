import React from 'react'
import {BsGithub,BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs"

function Links() {
  return (
    <div className='flex flex-col items-center space-y-4 pt-16 '>
      <div className="">
        <h1 className='font-bold text-[#082032] text-5xl'>Links</h1>
      </div>
      {/* links of social media */}
      <div className="">
      <div className=" text-[#1C4B82] flex items-center justify-center text-3xl pb-4 space-x-9 mt-9">
            {/* <FiInstagram /> */}
            <BsInstagram className='hover:text-[#D48472]' />
            <BsLinkedin className='hover:text-[#D48472]' />
            <BsGithub className='hover:text-[#D48472]' /> 
            <BsTwitter className='hover:text-[#D48472]'/>
   </div>
      </div>
      <div className="flex flex-col text-[#FFFFFC] gap-4 text-center">
        <a href="#" className='bg-[#DD6B4D] hover:bg-[#1F71CF] py-10'>Earthquake Response<br />(Molham Team)</a>
        <a href="#" className='bg-[#DD6B4D] hover:bg-[#1F71CF] p-5'>Support The White Helmets</a>
        <a href="#" className='bg-[#DD6B4D] hover:bg-[#1F71CF] p-5'>Nuphy Halo65 Keyboard (10% off)</a>
        <a href="#" className='bg-[#1C4B82] p-5 hover:bg-[#1F71CF]'>Cololight light strip</a>
      </div>
    </div>
  )
}

export default Links