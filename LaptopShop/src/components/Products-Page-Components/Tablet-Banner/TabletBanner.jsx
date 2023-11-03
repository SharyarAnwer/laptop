import React from 'react'

import Banner from "./Banner.svg"

import DesktopBanner from "./DesktopBanner.svg"

export default function TabletBanner() {
  return (
    <div className='bg-tablet-banner lg:bg-desktop-banner-products-page lg:bg-cover w-full bg-auto bg-no-repeat'>

      <picture className='hidden md:block md:invisible' >
        {/* Specify the different image sources */}
        <source srcSet={DesktopBanner} media="(min-width: 1024px)" />
        <source srcSet={Banner} media="(min-width: 768px)" />
        <source srcSet={Banner} />

        {/* The default <img> element is displayed if no source matches */}
        <img className='hidden md:block md:invisible'   src={Banner} alt="Logo of the company" />
      </picture>

    </div>
  )
}
