import React from "react";

import Brand1 from "./Brand1.svg";

import Brand2 from "./Brand2.svg";

import Brand3 from "./Brand3.svg";

import Brand4 from "./Brand4.svg";

import Brand5 from "./Brand5.svg";

import Brand6 from "./Brand6.svg";

export default function Brands() {
  return (
    <div>
      <div className="bg-[#F5F7FF] mt-4 py-4 flex flex-col gap-3 justify-center items-center">
        <h1 className="text-base font-bold ">Brands</h1>

        <button className="w-48 h-9 rounded-full border-2 border-[#A2A6B0] cursor-pointer text-[#A2A6B0] font-semibold">
          All Brands
        </button>
      </div>

      <div className="">
        <div className="flex">
          <img src={Brand1} className="flex-1 border-2 p-2" />

          <img src={Brand2} className="flex-1 border-r-2 border-t-2 border-b-2 p-2" />
        </div>

        <div className="flex">
          <img src={Brand3} className="flex-1 border-l-2 border-r-2 border-b-2 p-2" />

          <img src={Brand4} className="flex-1 border-r-2 border-b-2 p-2" />
        </div>

        <div className="flex" >
          <img src={Brand5} className="flex-1 border-l-2 border-r-2 border-b-2 p-2" />

          <img src={Brand6} className="flex-1 border-r-2 border-b-2 p-2" />
        </div>
      </div>
    </div>
  );
}
