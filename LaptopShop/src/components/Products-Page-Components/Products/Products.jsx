import React from "react";

import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";

import ProductCard from "./ProductCard";

import Filter from "../Filter/Filter";

// These brands are different from the brands displayed on homepage. So a new component was made.
import Brands from "../Brands/Brands";

//This arraw icon is being used on top of filters. It will only be displayed on desktop devices
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

//This button shows which filter has been selected.
import SelectedFilterButton from "../Selected-Filter-Button/SelectedFilterButton";

// This is simply a button to change products view from grid to list or vice versa
import ListGridToggle from "../List-Grid-Toggle-Button/ListGridToggle";

export default function Products(prop) {

  return (
    <div className="px-4">

      <h1 className="text-lg font-semibold">MSI PS SERIES (20)</h1>

      <div className="flex gap-4">

        {/* This is the filter that appears on the left hand side. THIS FILTER IS ONLY FOR TABLET AND ABOVE. It will be hidden on mobiles */}
        <div className="my-2 hidden md:flex md:flex-col">

          <div className="h-10 w-full bg-white items-center justify-center hidden lg:flex" >
            <ArrowBackIosIcon fontSize="14px" />
            <span className="text-sm" >Back</span>
          </div>

          <Filter/>

          <Brands/>

          {/* This div shows compare product section. This section will be visible only on tablets and above */}
          <div className="bg-[#F5F7FF] mt-4 flex flex-col items-center justify-center p-4" >

            <h1 className="text-base font-semibold text-center" >Compare Products</h1>

            <p className="text-sm text-center">You have no items to compare</p>

          </div>
          {/* The above div shows compare product section. This section will be visible only on tablets and above */}

          {/* This div shows wishlist section. This section will be visible only on tablets and above */}
          <div className="bg-[#F5F7FF] mt-4 flex flex-col items-center justify-center p-4" >

            <h1 className="text-base font-semibold text-center" >My Wishlist</h1>

            <p className="text-sm text-center">You have no items in your wish list.</p>

          </div>
          {/* The above div shows wishlist section. This section will be visible only on tablets and above */}
          
        </div>

        <div>
          {/* This div holds the filter & sort by position buttons */}
          <div className="flex flex-col md:flex-row-reverse md:items-center flex-wrap justify-between gap-2 my-2">
            <div className="flex gap-2 items-center justify-between">
              <button
                className="border-2 flex-1 text-sm h-10 font-semibold md:hidden"
                onClick={prop.handleFilter}
              >
                Filter
              </button>

              <button className="flex flex-1 items-center justify-evenly border-2 h-10 md:px-4">
                <p className="text-sm ">
                  <span className="text-[#A2A6B0] font-semibold">
                    Sort By:
                  </span>
                  <span className="font-semibold">Position</span>
                </p>

                <KeyboardArrowDownTwoToneIcon sx={{ fontSize: "14px" }} />
              </button>

              {/* This is the toggle button to change the view from grid to list or vice versa */}
              <div className="hidden md:block">
               <ListGridToggle/>
              </div>
              {/* This is the toggle button to change the view from grid to list or vice versa */}
            </div>

            {/* This is the track of products which are currently showing */}
            <p className="text-[#A2A6B0]">Items 1 - 35 of 61</p>
          </div>

          <SelectedFilterButton/>

          <ProductCard />
        </div>
      </div>
    </div>
  );
}
