import React from "react";

export default function BrandPicture(prop) {
  return (
    <picture>
      {/* Specify the different image sources */}
      <source srcSet={prop.desktop} media="(min-width: 1024px)" />
      <source srcSet={prop.tablet} media="(min-width: 768px)" />
      <source srcSet={prop.mobile} />

      {/* The default <img> element is displayed if no source matches */}
      <img
        src={prop.desktop}
        alt="Logo of first brand"
      />
    </picture>
  );
}
