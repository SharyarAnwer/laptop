import React, { useState } from "react";

import productPicture from "./product-picture.svg";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CancelIcon from "@mui/icons-material/Cancel";

import CreateIcon from "@mui/icons-material/Create";

export default function OrderSummary() {
  const [counter, setCounter] = useState(1);

  return (
    <div className="px-4 flex flex-col items-center">
      <div className="flex flex-col gap-3 my-4 ">
        <div className="flex items-start gap-4">
          <img src={productPicture} />

          <p className="text-xs">
            MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
            1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
          </p>
        </div>

        <div className="flex gap-2 justify-between border-b-2 pb-5">
          <div>
            <h1 className="font-semibold">Price</h1>
            <h6 className="font-bold">$4,349.00</h6>
          </div>

          <div>
            <h1 className="font-semibold">Qty</h1>

            <div className="w-12 aspect-square bg-[#F5F7FF] flex rounded-md mt-1">
              <h6 className="w-3/4 h-full flex items-center justify-center font-bold">
                {counter}
              </h6>

              <button className="w-1/4 flex flex-col justify-center items-center">
                <button
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  <ExpandLessIcon sx={{ fontSize: "12px" }} />
                </button>

                <button
                  onClick={() => {
                    setCounter(counter - 1);
                  }}
                >
                  <ExpandMoreIcon sx={{ fontSize: "12px" }} />
                </button>
              </button>
            </div>
          </div>

          <div>
            <h6 className="font-semibold">Sub total</h6>

            <h4 className="font-bold">$13,047.00</h4>
          </div>

          <div className="flex flex-col gap-2">
            <CancelIcon sx={{ color: "#A1A1A1" }} />

            <CreateIcon sx={{ color: "#A1A1A1" }} />
          </div>
        </div>
      </div>

      <button className="bg-[#000000] text-white px-4 py-2 rounded-full font-semibold">
        Update Shopping Cart
      </button>
    </div>
  );
}
