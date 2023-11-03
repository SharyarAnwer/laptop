import React from "react";

import contactOne from "./ContactOne.svg";
import contactTwo from "./ContactTwo.svg";
import contactThree from "./ContactThree.svg";

export default function Contact() {
  return (
    <div className="px-4 flex flex-col md:flex-row md:justify-center gap-3 my-4">
      <div className="flex flex-col items-center justify-center gap-2 ">
        <img className="" src={contactOne} alt="Logo of contact three" />

        <p className="text-sm font-bold">Product Support</p>

        <p className="text-center text-xs leading-4">
          Up to 3 years on-site warranty available for your peace of mind.
        </p>
      </div>

      <div className=" flex flex-col items-center justify-center gap-2">
        <img className="" src={contactTwo} alt="Logo of contact two" />

        <p className="text-sm font-bold">Personal Account</p>

        <p className="text-center text-xs leading-4">
          With big discounts, free delivery and a dedicated support specialist.
        </p>
      </div>

      <div className=" flex flex-col items-center justify-center gap-2">
        <img className="" src={contactThree} alt="Logo of contact three" />

        <p className="text-sm font-bold">Amazing Savings</p>

        <p className="text-center text-xs leading-4">
          Up to 70% off new Products, you can be sure of the best price.
        </p>
      </div>
    </div>
  );
}
