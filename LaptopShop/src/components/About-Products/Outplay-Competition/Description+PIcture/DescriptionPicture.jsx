import React from 'react'

import CoreMobile from "../core-i7-mobile.svg";

import CoreTablet from "../core-i7-tablet.svg";

import CoreDesktop from "../core-i7-desktop.svg";

export default function DescriptionPicture() {
  return (
    <div className="bg-gradient-to-b from-white to-black md:flex md:flex-row-reverse lg:px-8 lg:from-black lg:bg-black">
        <picture className="w-full h-auto -translate-y-[25%] -z-20 md:translate-y-0 md:z-0 ">
          {/* Specify the different image sources */}
          <source srcSet={CoreDesktop} media="(min-width: 1024px)" />
          <source srcSet={CoreTablet} media="(min-width: 768px)" />
          <source srcSet={CoreMobile} />

          {/* The default <img> element is displayed if no source matches */}
          <img
            className="w-full h-auto -translate-y-[25%] md:translate-y-0 "
            src={CoreDesktop}
            alt="Logo of the company"
          />
        </picture>

        <div className="-mt-[25%] px-4 py-4 lg:pb-0 bg-black text-white md:mt-0 md:flex md:flex-col md:justify-center md:max-w-[50%]">
          <h1 className=" text-3xl lg:text-5xl font-medium">
            Outplay the Competittion
          </h1>

          <p className="text-sm lg:text-lg my-4 lg:mb-0">
            Experience a 40% boost in computing from last generation. MSI
            Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
            upmost computing power to bring you an unparalleled gaming
            experience.
          </p>
        </div>
      </div>
  )
}
