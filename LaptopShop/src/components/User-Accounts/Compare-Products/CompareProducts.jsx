import React from "react";

export default function CompareProducts() {
  return (
    <div className="px-4 mt-4" >

      <div className="bg-[#F5F7FF] pt-4 pb-6">

        <h1 className="text-lg font-bold text-center mb-4" >Compare Products</h1>

        <p className="text-base text-center" >You have no items to compare.</p>
      </div>

      <div className="bg-[#F5F7FF] pt-4 pb-6 my-4">

        <h1 className="text-lg font-bold text-center mb-4" >My Wish List</h1>

        <p className="text-base text-center" >You have no items in your wish list.</p>
      </div>
    </div>
  );
}
