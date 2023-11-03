import React from "react";

import BrandPicture from "./BrandPicture";

import brandOneMobile from "./brand-one-mobile.svg";
import brandOneTablet from "./brand-one-tablet.svg";
import brandOneDesktop from "./brand-one-desktop.svg";

import brandTwoMobile from "./brand-two-mobile.svg";
import brandTwoTablet from "./brand-two-tablet.svg";
import brandTwoDesktop from "./brand-two-desktop.svg";

import brandThreeMobile from "./brand-three-mobile.svg";
import brandThreeTablet from "./brand-three-tablet.svg";
import brandThreeDesktop from "./brand-three-desktop.svg";

import brandFourMobile from "./brand-four-mobile.svg";
import brandFourTablet from "./brand-four-tablet.svg";
import brandFourDesktop from "./brand-four-desktop.svg";

import brandFiveMobile from "./brand-five-mobile.svg";
import brandFiveTablet from "./brand-five-tablet.svg";
import brandFiveDesktop from "./brand-five-desktop.svg";

import brandSixMobile from "./brand-six-mobile.svg";
import brandSixTablet from "./brand-six-tablet.svg";
import brandSixDesktop from "./brand-six-desktop.svg";

export default function Brands() {
  return (
    <div className="flex gap-4 items-center justify-center flex-wrap px-4 my-4">
      <BrandPicture
        mobile={brandOneMobile}
        tablet={brandOneTablet}
        desktop={brandOneDesktop}
      />

      <BrandPicture
        mobile={brandTwoMobile}
        tablet={brandTwoTablet}
        desktop={brandTwoDesktop}
      />

      <BrandPicture
        mobile={brandThreeMobile}
        tablet={brandThreeTablet}
        desktop={brandThreeDesktop}
      />

      <BrandPicture
        mobile={brandFourMobile}
        tablet={brandFourTablet}
        desktop={brandFourDesktop}
      />

      <BrandPicture
        mobile={brandFiveMobile}
        tablet={brandFiveTablet}
        desktop={brandFiveDesktop}
      />

      <BrandPicture
        mobile={brandSixMobile}
        tablet={brandSixTablet}
        desktop={brandSixDesktop}
      />
    </div>
  );
}
