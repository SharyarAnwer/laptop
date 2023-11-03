import React from 'react'

import SubCategoryBanner from "../Sub Category Banner/SubCategoryBanner";

import FourCategoriesCard from "../FourCategoriesCard/FourCategoriescard";

export default function GamingMonitors() {
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
            backgroundImageMobile="bg-gaming-monitors-mobile"
            backgroundImageTablet="md:bg-gaming-monitors-tablet"
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

        <FourCategoriesCard />
      </div>
    </>
  )
}
