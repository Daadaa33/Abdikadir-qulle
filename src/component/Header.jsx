import React, { useEffect, useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {BsMoonFill, BsSun} from "react-icons/bs"
import {MdClose} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Header() {
  const initialPayment = {
    about: false,
    project: false,
    skill: false,
    linka: false,
  };
  const [data, setData] = useState(false);
  //
  const [updated, setUpdated] = useState(false);

  useEffect(() => {}, [updated]);

  const [age, setAge] = useState(false);

  //
  return (
    <div className="fixed z-50 w-full">
      <div
        className={` flex px-4 justify-between items-center w-[100%] h-[5rem]
     bg-[#1C4B82]`}
      >
        {/* navbar */}
        <div className="w-full">
          <Navbar />
        </div>
        {/* mobile */}
        <div className="md:hidden hover:cursor-pointer text-white flex items-center  justify-center gap-6  text-bold">
          {age ? (
            <BsMoonFill
              onClick={() => setAge(!age)}
              className=" hover:rotate-180 duration-700 cursor-pointer w-5 h-5 "
            />
          ) : (
            <BsSun
              onClick={() => setAge(!age)}
              className=" hover:rotate-180 duration-700 cursor-pointer w-6 h-6"
            />
          )}

          {data ? (
            <MdClose onClick={() => setData(!data)} className=" w-9 h-9" />
          ) : (
            <AiOutlineMenu
              onClick={() => setData(!data)}
              className=" w-7 h-7"
            />
          )}
          <div
            className={` absolute flex flex-col ${
              data ? "flex" : "hidden"
            } md:hidden
          top-23 right-0 space-y-10 bg-[#6484A8]/90   backdrop-blur-sm w-full  text-[#E9ECF1] text-center pt-2 text-lg  h-[17rem] rounded-b-[3rem] top-[5rem]`}
          >
            <Link to="/About Me" onClick={() => setData(!data)}>
              About Me
            </Link>
            <Link to="/Projects" onClick={() => setData(!data)}>
              Projects
            </Link>
            <Link to="/Skills" onClick={() => setData(!data)}>
              Skills
            </Link>
            <Link to="/Links" onClick={() => setData(!data)}>
              Links
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header