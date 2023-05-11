import React, { useState } from 'react'
import dada from '../img/znd.jpg'
import {BsGithub,BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs"

function About() {
  
  return (
    <div
      className={`h-[50rem] mx-w-4xl mx-auto h-full pb-4 max-w-4xl mx-auto  flex flex-col space-y-5 items-center pt-[4rem]`}
    >
      <div className="text-center text-5xl text-[#082032] font-bold">
        <h1>Welcome!</h1>
      </div>
      {/* profile */}
      <div className="pt-4">
        <img
          src={dada}
          alt="daadaa"
          className="rounded-full w-[18rem] h-[18rem] border border-[#DD6B4D] border-4 "
        />
      </div>
      {/* icons */}
      <div className="">
        {/* link of social media */}
        <div className=" text-[#1C4B82] flex items-center justify-center text-3xl pb-4 space-x-9 mt-9">
          <a href="https://www.instagram.com/daadaa_33/" target={"_blank"}>
            {<BsInstagram className="hover:text-[#D48472]" />}
          </a>
          <a href="https://twitter.com/Daadaa_33" target={"_blank"}>
            {<BsTwitter className="hover:text-[#D48472]" />}
          </a>
          <a
            href="https://www.linkedin.com/in/abdikadir-qulle-5853bb255/"
            target={"_blank"}
          >
            {<BsLinkedin className="hover:text-[#D48472]" />}
          </a>
          <a href="https://github.com/Daadaa33" target={"_blank"}>
            {<BsGithub className="hover:text-[#D48472]" />}
          </a>
        </div>
      </div>

      {/* abouut */}
      <div className="sm:max-w-lg  w-auto sm:text-center max-w-sm md:max-w-2xl lg:max-w-none space-y-4 text-left md:text-center px-4">
        <div className="">
          <h1 className="text-center ">
            I am a frontend developer, software engineering student and content
            creator from somalia based in somalia, kismayo.
          </h1>
        </div>
        <div className=" ">
          <h1 className='text-center'>
            In 2020 I was a graphic designer and I wanted to learn a new skill
            so I decided to learn web development. I wasn't able to be
            consistent until 2022, that's when I started with my bachelors
            degree in software engineering.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About