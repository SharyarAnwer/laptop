import React, { useState } from "react";

import About from "../About/About";
import Detail from "../Details/Detail";
import Spec from "../Specs/Spec";

//This is the pricing tab that automatically updates when you choose product quantity
import Pricing from "../../Pricing-Bar/Pricing";

//These are the buttons to toggle between about-details-specs of a product
import SelectorButtons from "../SelectorButton/SelectorButtons";

export default function AboutDetailsSpecs(prop) {
  return (
    <div className="md:bg-[#F5F7FF] ">
      <div className="md:hidden">
        <SelectorButtons handleTranslation={prop.handleTranslation} />
      </div>

      <div className="flex md:items-center overflow-x-hidden">
        <div
          className={`min-w-full duration-500`}
          style={{ transform: `translateX(${-prop.translation}%)` }}
        >
          <About />
        </div>

        <div
          className={`min-w-full duration-500`}
          style={{ transform: `translateX(${-prop.translation}%)` }}
        >
          <Detail />
        </div>

        <div
          className={`min-w-full duration-500`}
          style={{ transform: `translateX(${-prop.translation}%)` }}
        >
          <Spec />
        </div>
      </div>

      <div className="px-4 flex items-center justify-between">
        <h6>
          <span className="text-sm font-bold">Have a Question? </span>
          <span className="text-sm text-[#0156FF] underline">Contact Us</span>
        </h6>

        <h6 className="text-sm font-bold">
          SKU D5515AI
        </h6>
      </div>

      <div className="md:hidden">
        <Pricing />
      </div>
    </div>
  );
}
