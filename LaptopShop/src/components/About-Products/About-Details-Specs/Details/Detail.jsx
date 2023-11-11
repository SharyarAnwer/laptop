import React from "react";

import Pricing from "../../Pricing-Bar/Pricing";

export default function Detail(prop) {
  return (
    <div className="px-4 min-w-full">
      <h1 className="text-2xl font-medium">{prop.product.Name}</h1>

      <p className="text-xs text-[#0156FF] my-3">
        Be the first to review this product
      </p>

      <ul className="text-base">
        <li>• Intel Core i7-10700F</li>

        <li>• Intel H410</li>

        <li>• WHITE</li>

        <li>• NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6</li>

        <li>• SO-DIMM 16GB (16GB x 1) DDR4 2666MHz</li>

        <li>• 2 total slots (64GB Max)</li>

        <li>• 512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM</li>

        <li>• Fan Cooler</li>
      </ul>

    </div>
  );
}
