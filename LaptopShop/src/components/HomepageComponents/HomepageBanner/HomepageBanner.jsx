import React from "react";

import BannerMobile from "./BannerMobile.svg"
import BannerTablet from "./BannerTablet.svg"
import BannerLaptop from "./BannerLaptop.svg"

export default function HomepageBanner() {
  return (
    <div className="px-4 py-4">

      <picture className="w-full h-auto">
        {/* Specify the different image sources */}
        <source srcSet={BannerLaptop} media="(min-width: 1024px)" />
        <source srcSet={BannerTablet} media="(min-width: 768px)" />
        <source srcSet={BannerMobile} />

        {/* The default <img> element is displayed if no source matches */}
        <img className="w-full h-auto"  src={BannerLaptop} alt="Logo of the company" />
      </picture>
    </div>
  );
}
