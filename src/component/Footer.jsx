import React from 'react'
// import {FiInstagram} from 'react-icon/fi'
// import {BsGithub} from 'react-icon/bs'
// import {} from 'react-icon/bs'

import {BsGithub,BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs"

function Footer() {
  return (
    <div>
        <div className="bg-[#1C4B82] w-full h-[10rem] ">
            <div className='text-[#FFFFFB] text-center text-[13px] pt-7'>
                <p>2023 © All right Reserved <br />Abdikadir qulle</p>
            </div>
            <div className="text-[#FFFFFB]  flex items-center justify-center  space-x-9 mt-9">
            {/* <FiInstagram /> */}
            <BsInstagram className='hover:text-cyan-600' />
            <BsLinkedin className='hover:text-cyan-600' />
            <BsGithub className='hover:text-cyan-600' />
            <BsTwitter className='hover:text-cyan-600'/>
            </div>
            
         
        </div>
    </div>
  )
}

export default Footer