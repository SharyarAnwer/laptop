import React from "react";

//This is the pricing tab that automatically updates when you choose product quantity
import Pricing from "../../Pricing-Bar/Pricing";

export default function About(prop) {
  return (
    <div className="px-4 min-w-full">
      
      <h1 className="text-2xl font-medium">{prop.product.Name}</h1>

      <p className="text-xs text-[#0156FF] my-3" >Be the first to review this product</p>

      <p className="text-base mb-2">{prop.product.Description}</p>

      <div className="flex gap-2 mb-2">

        <div className="w-8 aspect-square bg-[#4B4D4F] rounded-full" ></div>

        <div className="w-8 aspect-square bg-[#F2E9DC] rounded-full" ></div>
        
        <div className="w-8 aspect-square bg-[#EAE8EB] rounded-full" ></div>

      </div>

    </div>
  );
}
