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
          <a href="https://www.instagram.com/daadaa_33/" target={'_blank'}>{ <BsInstagram className='hover:text-[#D48472]'/>}</a>
            <a href="https://twitter.com/Daadaa_33" target={'_blank'}>{ <BsTwitter className='hover:text-[#D48472]'/>}</a>
          
            <a href="https://www.linkedin.com/in/abdikadir-qulle-5853bb255/" target={'_blank'}>{  <BsLinkedin className='hover:text-[#D48472]' />}</a>
            <a href="https://github.com/Daadaa33" target={'_blank'}>{  <BsGithub className='hover:text-[#D48472]' />}</a> 
   </div>
      </div>
      <div className="flex flex-col pb-[5rem] text-[#FFFFFC] gap-4 text-center">
        <a href="#" className='bg-[#DD6B4D] hover:bg-[#1F71CF] p-5'>Nuphy Halo65 Keyboard (10% off)</a>
        <a href="#" className='bg-[#1C4B82] p-5 hover:bg-[#1F71CF]'>Cololight light strip</a>
        <a href="#" className='bg-[#1C4B82] p-5 hover:bg-[#1F71CF]'>Poly Voyager 8200 UC Headsets</a>
        <a href="#" className='bg-[#1C4B82] p-5 hover:bg-[#1F71CF]'>MacBook Pro 14" M1 pro</a>
        <a href="#" className='bg-[#1C4B82] p-5 hover:bg-[#1F71CF]'>Moniter</a>
        <a href="#" className='bg-[#1C4B82] p-5 hover:bg-[#1F71CF]'>Desk</a>
        <a href="#" className='bg-[#1C4B82] p-5 hover:bg-[#1F71CF]'>Desk mat</a>
        <a href="#" className='bg-[#1C4B82] p-5 hover:bg-[#1F71CF]'>Writ rest</a>
        <a href="#" className='bg-[#1C4B82] p-5 hover:bg-[#1F71CF]'>Mouse</a>
        <a href="#" className='bg-[#1C4B82] p-5 hover:bg-[#1F71CF]'>hard disk</a>
        <a href="#" className='bg-[#1C4B82] p-5 hover:bg-[#1F71CF]'>Microphone</a>
      </div>
    </div>
  )
}

export default Links