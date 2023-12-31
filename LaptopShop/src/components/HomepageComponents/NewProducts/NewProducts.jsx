import React from "react";

import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

export default function NewProducts() {

  return (

    <div className="px-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-lg">New Products</h1>

        <Link to="/products" state = {{category : "New Products"}} className="text-xs text-[#0156FF] underline">
          See All New Products
        </Link>
      </div>

      <ProductCard />
    </div>

  );
}
