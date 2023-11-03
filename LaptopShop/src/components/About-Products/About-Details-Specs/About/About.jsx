import React from "react";

//This is the pricing tab that automatically updates when you choose product quantity
import Pricing from "../../Pricing-Bar/Pricing";

export default function About() {
  return (
    <div className="px-4 min-w-full">
      
      <h1 className="text-2xl font-medium">MSI MPG Trident 3</h1>

      <p className="text-xs text-[#0156FF] my-3" >Be the first to review this product</p>

      <p className="text-base mb-2">MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</p>

      <div className="flex gap-2 mb-2">

        <div className="w-8 aspect-square bg-[#4B4D4F] rounded-full" ></div>

        <div className="w-8 aspect-square bg-[#F2E9DC] rounded-full" ></div>
        
        <div className="w-8 aspect-square bg-[#EAE8EB] rounded-full" ></div>

      </div>

    </div>
  );
}
