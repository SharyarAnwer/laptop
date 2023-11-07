import React from "react";

import pictureMobile from "./picture-mobile.svg";
import pictureTablet from "./picture-tablet.svg";
import pictureDesktop from "./picture-desktop.svg";

import box from "./box.svg";

export default function SectionTwo() {
  return (
    <div>
      <picture className="w-full h-auto">
        {/* Specify the different image sources */}
        <source srcSet={pictureMobile} media="(min-width: 1024px)" />
        <source srcSet={pictureTablet} media="(min-width: 768px)" />
        <source srcSet={pictureDesktop} />

        {/* The default <img> element is displayed if no source matches */}
        <img className="w-full h-auto" src={pictureDesktop} alt="Keyboard" />
      </picture>

      <div className="px-4">

        <img src={box} className="mb-4" />

        <h1 className="text-3xl font-bold">shop.com</h1>

        <p className="text-base font-normal my-4">
          Shop is a proudly Australian owned, Melbourne based supplier of I.T.
          goods and services, operating since 1991. Our client base encompasses
          individuals, small business, corporate and government organisations.
          We provide complete business IT solutions, centred on high quality
          hardware and exceptional customer service.
        </p>
      </div>

    </div>
  );
}
