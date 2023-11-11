import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import FourCategoriesCard from "../FourCategoriesCard/FourCategoriescard";

export default function CustomBuild() {
  
  const [products, setProducts] = useState([]);

  //This useEffect will fetch products and then they will be sent as a prop to Categories Card
  useEffect(() => {

    const fetchProduct = async () => {

      try {

        //Axios requests can continue to run in the background even after the component unmounts.
        const controller = new AbortController();

        const response = await axios.post(
          "http://localhost:5000/products/get-product",
          {
            Category: "Custom Build",
            signal: controller.signal,
          }
        );

        setProducts(response.data.response);
        
        //This is a clean up function. After the data has been received, tell the server to stop processing the request.
        return () => {
          controller.abort();
        };

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProduct();
    
  }, []);

  return (
    <div className="px-4 mt-4 flex flex-col md:flex-row md:gap-6 overflow-x-hidden ">
      <div className="bg-custom-build-pc flex items-center justify-center flex-col py-4 gap-2 md:bg-custom-build-pc-tablet md:bg-cover md:bg-no-repeat md: relative md:z-20 md:w-20 md:min-w-[15rem]">
        <h1 className="text-lg font-bold text-white md:text-center">
          Custom Builds
        </h1>

        <Link to="/products" state = {{category : "Custom Build"}} className="text-white underline text-sm md:text-center">
          See All Products
        </Link>
      </div>

      <FourCategoriesCard products={products} />
    </div>
  );
}
