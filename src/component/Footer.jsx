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
            {/* link of social media */}
            <div className="text-[#FFFFFB]  flex items-center justify-center  space-x-9 mt-9">
                          <a href="https://www.instagram.com/daadaa_33/" target={'_blank'}>{ <BsInstagram className='hover:text-cyan-600'/>}</a>
            <a href="https://twitter.com/Daadaa_33" target={'_blank'}>{ <BsTwitter className='hover:text-cyan-600'/>}</a>
            <a href="https://www.linkedin.com/in/abdikadir-qulle-5853bb255/" target={'_blank'}>{  <BsLinkedin className='hover:text-cyan-600' />}</a>
            <a href="https://github.com/Daadaa33" target={'_blank'}>{  <BsGithub className='hover:text-cyan-600' />}</a>
            </div>
            
         
        </div>
    </div>
  )
}

export default Footer