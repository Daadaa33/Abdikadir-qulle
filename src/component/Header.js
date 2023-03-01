import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import {BsMoonFill} from "react-icons/bs"
function Header() {
  return (
    <div className=' flex px-5 justify-between items-center w-[100%] h-[5rem] bg-[#1C4B82]'>
        <div className='text-white'>
            <h1 className='text-2xl font-bold'>Daadir Quule</h1>
        </div>
        {/* mobile */}
        <div className='text-white bg-slate-500 flex items-center gap-2 h- p-6 '>
        <BsMoonFill className=' '/>
        <AiOutlineMenu className='h-7' />
        </div>
       
    </div>
  )
}

export default Header