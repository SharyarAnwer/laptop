import React from "react";

import ZipMobile from "./ZipMobile.svg";
import ZipTablet from "./Ziptablet.svg";
import ZipLaptop from "./ZipLaptop.svg";
import { Link } from "react-router-dom";

export default function Zip() {
  return (
    <div className="bg-[#F5F9FF] flex flex-col items-center justify-center mx-4 mt-4 py-4 px-2 text-center gap-2 md:flex-row">

      <picture className="md:pr-2 md:border-r-2 border-[#243c5a]">
        {/* Specify the different image sources */}
        <source srcSet={ZipLaptop} media="(min-width: 1024px)" />
        <source srcSet={ZipTablet} media="(min-width: 768px)" />
        <source srcSet={ZipMobile} />

        {/* The default <img> element is displayed if no source matches */}
        <img src={ZipLaptop} alt="Zip Logo" />
      </picture>

      <p className="text-[#272560]" >
        <span>own </span>
        <span>it now, up to 6 months interest free</span>
      </p>

      <Link to="/" className="text-[#272560] underline">
        learn more
      </Link>
    </div>
  );
}
