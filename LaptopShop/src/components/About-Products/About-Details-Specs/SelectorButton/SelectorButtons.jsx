import React, { useState } from "react";

export default function SelectorButtons(prop) {

  return (
    <div className="flex flex-row gap-2 text-xs px-4 my-3 font-semibold">
      <h6
        className="relative text-[#838383] hover:text-black text-sm font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0156FF] after:hover:w-full after:duration-500"
        onClick={() => {
          prop.handleTranslation(0);
        }}
      >
        About Product
      </h6>

      <h6
        className="relative text-[#838383] hover:text-black text-sm font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0156FF] after:hover:w-full after:duration-500"
        onClick={() => {
          prop.handleTranslation(100);
        }}
      >
        Details
      </h6>

      <h6
        className="relative text-[#838383] hover:text-black text-sm font-semibold pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0156FF] after:hover:w-full after:duration-500"
        onClick={() => {
          prop.handleTranslation(200);
        }}
      >
        Specs
      </h6>
    </div>
  );
}
