import React , { useState, useEffect } from "react";

import SubCategoryBanner from "../Sub Category Banner/SubCategoryBanner";

import FourCategoriesCard from "../FourCategoriesCard/FourCategoriescard";

import axios from "axios";

export default function Desktops() {

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
            Category: "Desktops",
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
    <>
      <div className="mt-4 hover:cursor-pointer hidden md:flex md:gap-4 px-4">
        <span className="relative text-[#838383] hover:text-black text-sm font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0156FF] after:hover:w-full after:duration-500">
          MSI Infinite Series
        </span>

        <span className="relative text-[#838383] hover:text-black text-sm font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0156FF] after:hover:w-full after:duration-500">
          MMSI Triden
        </span>

        <span className="relative text-[#838383] hover:text-black text-sm font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0156FF] after:hover:w-full after:duration-500">
          MSI GL Series
        </span>

        <span className="relative text-[#838383] hover:text-black text-sm font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0156FF] after:hover:w-full after:duration-500">
          MSI Nightblade
        </span>
      </div>

      <div className="px-4 mt-4 flex flex-col md:flex-row md:gap-6 overflow-x-hidden ">
        <div className="flex flex-col md:flex-col-reverse">
          <SubCategoryBanner
            heading="Desktops"
            category="Desktops"
            backgroundImageMobile="bg-desktop-mobile"
            backgroundImageTablet="md:bg-desktop-tablet"
          />

          <div className="flex justify-between mt-3 md:hidden">
            <span className="relative text-[#838383] hover:text-black text-sm font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0156FF] after:hover:w-full after:duration-500">
              MSI Infinite Series
            </span>

            <span className="relative text-[#838383] hover:text-black text-sm font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0156FF] after:hover:w-full after:duration-500">
              MSI Triden
            </span>

            <span className="relative text-[#838383] hover:text-black text-sm font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0156FF] after:hover:w-full after:duration-500">
              MSI GL Series
            </span>

            <span className="relative text-[#838383] hover:text-black text-sm font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0156FF] after:hover:w-full after:duration-500">
              MSI Nightblade
            </span>
          </div>
        </div>

        <FourCategoriesCard products={products} />
      </div>
    </>
  );
}
