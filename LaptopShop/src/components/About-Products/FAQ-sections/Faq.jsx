import React from "react";

import backgroundMobile from "./FAQ-mobile.svg";
import backgroundTablet from "./FAQ-tablet.svg";
import backgroundDesktop from "./FAQ-desktop.svg";

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Faq() {
  return (
    <div className="bg-faq-background-mobile md:bg-faq-background-tablet bg-cover md:bg-contain md:bg-no-repeat md:bg-right lg:bg-center md:bg-[#fffdff] relative pt-8">
      <picture className="invisible ">
        {/* Specify the different image sources */}
        <source srcSet={backgroundDesktop} media="(min-width: 1024px)" />
        <source srcSet={backgroundTablet} media="(min-width: 768px)" />
        <source srcSet={backgroundMobile} />

        {/* The default <img> element is displayed if no source matches */}
        <img
          className=""
          src={backgroundDesktop}
          alt="Background image of FAQ section"
        />
      </picture>

      <div className="absolute top-0 w-full h-full flex flex-col justify-center lg:items-center pl-10  gap-2 pt-16 px-4 lg:-translate-x-[22.5%]">

        <div className="border-2 flex justify-between px-3 py-2 rounded-md bg-white w-64 md:w-72">
          <h5>Product Support</h5>

          <ArrowRightAltIcon sx={{color: "#0156FF"}}/>
        </div>

        <div className="border-2 flex justify-between px-3 py-2 rounded-md bg-white w-64 md:w-72">
          <h5>FAQ</h5>

          <ArrowRightAltIcon sx={{color: "#0156FF"}}/>
        </div>

        <div className="border-2 flex justify-between px-3 py-2 rounded-md bg-white w-64 md:w-72">
          <h5>Our Buyer Guide</h5>

          <ArrowRightAltIcon sx={{color: "#0156FF"}}/>
        </div>

      </div>
    </div>
  );
}
