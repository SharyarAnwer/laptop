import React, { useState } from "react";

import BreadCrumbs from "../../components/Products-Page-Components/Breadcrumbs/BreadCrumbs";

import ProductSection from "../../components/Products-Page-Components/Products/Products";

import Featured from "../../components/Products-Page-Components/FeaturedProduct/Featured";

import Contact from "../../components/HomepageComponents/Contact Section/Contact";

import Footer from "../../components/Footer/Footer";

import Filter from "../../components/Products-Page-Components/Filter/Filter";

import TabletBanner from "../../components/Products-Page-Components/Tablet-Banner/TabletBanner";

export default function Products() {

  const [showFilter , setShowFilter] = useState(true)

  const handleFilter = () => {

    setShowFilter(!showFilter)

  }
  return (
    <div>

      <TabletBanner/>

      <BreadCrumbs />

      <ProductSection handleFilter = {handleFilter} />

      <Featured />

      <div className="bg-[#F5F7FF] -mb-4 py-2">
        <Contact />
      </div>

      <Footer />

      {/* This filter should be hidden on medium devices. For medium devices and above a filter is placed in the Products component */}
      <div className="md:hidden">  
        <Filter handleFilter = {handleFilter} showFilter={showFilter} />
      </div>
    </div>
  );
}
