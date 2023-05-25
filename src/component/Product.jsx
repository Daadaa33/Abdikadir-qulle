import React from 'react'

const Product = ({ image, title, price }) => {
  return (
      <div className="flex justify-center items-center flex-">
        <div className="flex flex-wrap justify-center items-center p-5">
          <div className="flex justify-center    items-center shadow-2xl rounded-lg h-96 w-80  flex-col space-y-3 cursor-pointer hover:drop-shadow-xl  duration-500 transition">
            <img src={image} alt="products" className="h-60 w-52" />
            <div className="flex flex-col justify-center items-center p-2 space-y-6 flex-wrap">
              <h1 className="text-gray-400">{title}</h1>
              <p>${price}</p>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Product