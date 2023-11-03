import React from "react";

import Pricing from "../../Pricing-Bar/Pricing";

export default function Spec() {
  return (
    <div className="px-4 min-w-full">

      <h1 className="text-2xl font-medium">MSI MPG Trident 3</h1>

      <p className="text-xs text-[#0156FF] my-3">
        Be the first to review this product
      </p>
      
      <div className="w-56">

        <p className="flex p-2">
          <li className="w-3/4 list-none">CPU</li>
          <li className="w-1/4 list-none">N/A</li>
        </p>

        <p className="flex p-2 bg-[#F5F7FF]">
          <li className="w-3/4 list-none">Featured</li>
          <li className="w-1/4 list-none">N/A</li>
        </p>

        <p className="flex p-2">
          <li className="w-3/4 list-none">I/O Ports</li>
          <li className="w-1/4 list-none">N/A</li>
        </p>

      </div>

    </div>
  );
}
