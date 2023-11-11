import React from "react";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import PayPal from "./Paypal.svg";

import SelectorButtons from "../About-Details-Specs/SelectorButton/SelectorButtons";

export default function Pricing(prop) {

  console.log("Price" , prop.product)

  return (
    <div className="flex flex-col gap-2 px-4 my-2 md:mb-0 shadow-lg pb-5 relative z-20 bg-white">
      <div className="flex items-center justify-between gap-2">

        <div className="hidden md:block" >
          <SelectorButtons handleTranslation={prop.handleTranslation} />
        </div>

        <div className="flex rounded-sm">
          <div className="w-12 aspect-square bg-[#F5F7FF] flex items-center justify-center rounded-tl-md rounded-bl-md">
            1
          </div>

          <div className="w-4 pr-1 aspect-square bg-[#F5F7FF] flex flex-col items-center rounded-tr-md rounded-br-md">
            <KeyboardArrowUpIcon sx={{ width: "0.8rem" }} />

            <KeyboardArrowDownIcon sx={{ width: "0.8rem" }} />
          </div>
        </div>

        <button className="w-32 bg-[#0156FF] h-9 rounded-full text-white">
          Add to cart
        </button>

        <button className="bg-[#FFB800] w-32 h-9 rounded-full flex items-center justify-center">
          <img src={PayPal} alt="You can pay via PayPal" />
        </button>
      </div>

      <div className="bg-[#F5F7FF] py-2 flex items-center justify-center">
        <p>
          <span>On sale from </span>
          <span className="font-bold"> Rs {prop.product.Price}</span>
        </p>
      </div>
    </div>
  );
}
