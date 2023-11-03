import React from 'react'

import pictureMobile from "./picture-mobile.svg"
import pictureTablet from "./picture-tablet.svg"
import pictureDesktop from "./picture-desktop.svg"

export default function SectionTwo() {

  return (
    <div>
      
      <picture className="w-full h-auto">
        {/* Specify the different image sources */}
        <source srcSet={pictureMobile} media="(min-width: 1024px)" />
        <source srcSet={pictureTablet} media="(min-width: 768px)" />
        <source srcSet={pictureDesktop} />

        {/* The default <img> element is displayed if no source matches */}
        <img className="w-full h-auto"  src={pictureDesktop} alt="Keyboard" />
      </picture>

    </div>
  )
}
