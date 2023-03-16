import React, { useEffect, useState } from 'react'

function Projects(prop) {
  const [data, setData] = useState(false)
  useEffect (() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setData(json))
  }, [2000])
  return (
    <div className='bg-white ' >
        {/*  */}
     <div className="flex justify-between items-center bg-gray-300 p-3">
       <h1 className=''>18 products</h1>
      
      <div className="">
        <select className='px-8 py-2 rounded-lg'> 
          <option>Releeven</option>
          <option>Name (A-z)</option>
        </select>
      </div>
     </div>
     {/* products */}
      <div className='flex justify-center items-center flex-wrap'>
       {/* {data?.map((item,index)=> (
          <div className="flex flex-wrap justify-center items-center p-5">
            
             <div className="flex justify-center    items-center shadow-2xl rounded-lg h-96 w-80  flex-col space-y-3 cursor-pointer hover:drop-shadow-2xl duration-500 transition">
            <img src={item.image} alt="quule" className='h-60 w-52'/>
            <div className="flex flex-col justify-center items-center p-2 space-y-6 flex-wrap">
              <h1 className='text-gray-400'>{item.title}</h1>
              <p>${item.price}</p>
            </div>
          </div>
          </div>
         
        ))} */}
      </div>
    
    </div>
  )
}

export default Projects