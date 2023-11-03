import React from 'react'

import { Link } from 'react-router-dom'

export default function SubCategoryBanner(prop) {

  return ( 
    
      <div className={`${prop.backgroundImageMobile} bg-no-repeat bg-cover flex items-center justify-center flex-col py-4 gap-2 ${prop.backgroundImageTablet} md:bg-cover md:bg-no-repeat md:relative md:z-20 md:w-20 md:min-w-[15rem] h-full w-full`}>
        <h1 className="text-lg font-bold text-white md:text-center">
          {prop.heading}
        </h1>

        <Link to="/" className="text-white underline text-sm md:text-center">
          See All Products
        </Link>
      </div>
  )
}
