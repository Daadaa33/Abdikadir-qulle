import React, { useEffect, useState } from "react";
import Product from "./Product";

function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);

  return (
    <div className="pt-4 max-w-7xl mx-auto">
      {/*  */}
      <div className="flex justify-between items-center bg-gray-300 p-3">
        <h1 className="">18 products</h1>

        <div className="">
          <select className="px-8 py-2 rounded-lg">
            <option>Releeven</option>
            <option>Name (A-z)</option>
          </select>
        </div>
      </div>
      {/* products */}
      <div className="flex justify-start items-center flex-wrap">
        {data?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
