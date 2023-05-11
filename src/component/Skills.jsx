import React from 'react'
import daadaa from '../img/skills_photo.jpg'
import {BsGithub,BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs"
function Skills() {
  return (
    <div className="pt-[5rem] max-w-4xl mx-auto  flex flex-col items-center space-y-8">
      <div className="text-center">
        <h1 className="font-bold text-[#082032] text-5xl">Skills</h1>
      </div>
      {/* img */}
      <div className="">
        <img
          src={daadaa}
          alt="dada"
          className="rounded-full w-[18rem] h-[17.6rem] border border-[#DD6B4D] border-4 "
        />
      </div>
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
      <div className="px-4  text-left sm:text-center">
        <p>
          I have learned a lot of skills as a graphic designer and then as a
          frontend developer and I am always learning something new to add a new
          skill to the list
        </p>
      </div>
      {/* skills programming languages */}
      <div className="flex space-x-3 py-8 gap-4  flex-wrap">
        <p className="p-3 p-l-3 bg-[#DD6B4D] rounded-sm">javascript</p>
        <p className="p-3 bg-[#DD6B4D] rounded-sm">react js</p>
        <p className="py-2.5 px-8 bg-[#DD6B4D] rounded-sm">c</p>
        <p className="py-2.5 px-8 bg-[#DD6B4D] rounded-sm">c++</p>
        <p className="py-2.5 px-8 bg-[#DD6B4D] rounded-sm">ui/ux</p>
        <p className="py-2.5 px-8 bg-[#DD6B4D] rounded-sm">python</p>
        <p className="p-3 bg-[#DD6B4D] rounded-sm">c#</p>
        <p className="p-3 bg-[#DD6B4D] rounded-sm">photoshop</p>
        <p className="py-3 px-10 rounded-sm bg-[#DD6B4D]">java</p>
        <p className="py-3 px-10 rounded-sm bg-[#DD6B4D]">php</p>
        <p className="py-3 px-10 rounded-sm bg-[#DD6B4D]">mySql</p>
        <p className="py-3 px-10 rounded-sm bg-[#DD6B4D]">sql</p>
        <p className="py-3 px-10 rounded-sm bg-[#DD6B4D]">vb.net</p>
      </div>
      {/* languages */}

      <div className="">
        <p className='text-center'>
          I also love learning languages so I am always trying to learn a new
          language. I think languages are very intresting as you can learn not
          only the language of a nation but also you get to learn about their
          culture and history
        </p>
        <div className="flex space-x-3 py-8 gap-4  px-4 flex-wrap">
          <p className="py-3 px-10 rounded-sm bg-[#DD6B4D]">Somali</p>
          <p className="py-3 px-10 rounded-sm bg-[#DD6B4D]">English</p>
          <p className="py-3 px-10 rounded-sm bg-[#DD6B4D]">Arabic</p>
        </div>
      </div>
    </div>
  );
}

export default Skills 