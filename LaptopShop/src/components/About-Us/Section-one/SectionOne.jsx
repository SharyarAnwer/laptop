import React from 'react'

import PictureOne from "./picture-one-mobile.svg"
import PictureOneTablet from "./picture-one-tablet.svg"
import PictureOneDesktop from "./picture-one-desktop.svg"

export default function SectionOne() {

  return (
    <div>

      <h1 className='text-lg font-bold mb-4 px-4 ' >About Us</h1>

      <picture className="w-full h-auto">
        {/* Specify the different image sources */}
        <source srcSet={PictureOneDesktop} media="(min-width: 1024px)" />
        <source srcSet={PictureOneTablet} media="(min-width: 768px)" />
        <source srcSet={PictureOne} />

        {/* The default <img> element is displayed if no source matches */}
        <img className="w-full h-auto"  src={PictureOneDesktop} alt="Inside the company" />
      </picture>

      <div className='px-4 py-4 bg-black'>

        <h1 className='text-white text-3xl font-semibold' >A Family That Keeps On Growing</h1>

        <p className='text-white text-sm mt-4'>We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.</p>

        <p className='text-white text-sm'>Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.</p>

      </div>
      
    </div>
  )
}
