import React from "react";

import productPictureMobile from "./ProductPictureMobile.svg";
import productPictureTablet from "./ProductPictureTablet.svg";
import productPictureDesktop from "./ProductPictureDesktop.svg";

import ZipLogo from "./ZipLogo.svg";
import ZipLogoTablet from "./ZipLogoTablet.svg";
import ZipLogoDesktop from "./ZipLogoDesktop.svg";

import ZipLine from "./ZipLine.svg";

import Heart from "./Heart.svg";
import Message from "./Message.svg";
import Analysis from "./Analytics.svg";

export default function About() {
  return (
    <div className="px-4 relative">
      <div className=" flex items-center justify-center">
        <picture>
          {/* Specify the different image sources */}
          <source srcSet={productPictureDesktop} media="(min-width: 1024px)" />
          <source srcSet={productPictureTablet} media="(min-width: 768px)" />
          <source srcSet={productPictureMobile} />

          {/* The default <img> element is displayed if no source matches */}
          <img
            src={productPictureDesktop}
            alt="Picture of the selected product"
          />
        </picture>
      </div>

      <div className="flex items-center justify-center gap-2 ">
        <picture>
          {/* Specify the different image sources */}
          <source srcSet={ZipLogoDesktop} media="(min-width: 1024px)" />
          <source srcSet={ZipLogoTablet} media="(min-width: 768px)" />
          <source srcSet={ZipLogo} />

          {/* The default <img> element is displayed if no source matches */}
          <img src={ZipLogoDesktop} alt="Logo of ZIP" />
        </picture>

        <img src={ZipLine} alt="Zip Line" />

        <p className="text-xs">
          <span>
            own it now, up to 6 months <br /> interest free{" "}
          </span>
          <span className="underline">learn more</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 max-w-fit absolute top-4">
        <img src={Heart} alt="Like this product" className="w-8" />

        <img src={Message} alt="Message about this product" className="w-8" />

        <img src={Analysis} alt="Analytics about this product" className="w-8" />
      </div>
    </div>
  );
}
