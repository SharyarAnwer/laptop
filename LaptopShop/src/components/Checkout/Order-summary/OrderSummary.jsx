import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import ProductDetails from "./Product-details/ProductDetails";
import OrderSteps from "../Order-Steps/OrderSteps";

export default function OrderSummary() {
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  return (
    <div className="px-4 py-4 mt-4 md:w-1/2">

      <OrderSteps/>
      
      <div className="bg-[#F5F9FF] p-4">
        <h1 className="text-lg font-semibold pb-2 border-b-2">Order Summary</h1>

        <div className="flex justify-between mt-2">
          <p>
            <span className="text-[#0156FF]">1&nbsp;</span>
            <span>items in cart</span>
          </p>

          {showOrderSummary ? (
            <div
              onClick={() => {
                setShowOrderSummary(!showOrderSummary);
              }}
            >
              <KeyboardArrowUp />
            </div>
          ) : (
            <div
              onClick={() => {
                setShowOrderSummary(!showOrderSummary);
              }}
            >
              <KeyboardArrowDownIcon />
            </div>
          )}
        </div>

        <ProductDetails
          showOrderSummary={showOrderSummary}
          setShowOrderSummary={setShowOrderSummary}
          title="MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER"
          quantity={4}
          price={3799}
        />
      </div>
    </div>
  );
}
