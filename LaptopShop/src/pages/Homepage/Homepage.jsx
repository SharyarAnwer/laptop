import React from "react";

import HomepageBanner from "../../components/HomepageComponents/HomepageBanner/HomepageBanner";

import NewProducts from "../../components/HomepageComponents/NewProducts/NewProducts";

import Zip from "../../components/HomepageComponents/ZipAdvertisement/Zip";

import CustomBuild from "../../components/HomepageComponents/Custom Builds/CustomBuild";

import MSILaptop from "../../components/HomepageComponents/MSI Laptops/MSILaptop";

import Desktops from "../../components/HomepageComponents/Desktops/Desktops";

import GamingMonitors from "../../components/HomepageComponents/Gaming Monitors/GamingMonitors";

import Brands from "../../components/HomepageComponents/Brands/Brands";

import Reviews from "../../components/HomepageComponents/Reviews/Reviews";

import Contact from "../../components/HomepageComponents/Contact Section/Contact";

import Footer from "../../components/Footer/Footer";

export default function Homepage() {
  
  return (
    <div>
      
      <HomepageBanner />

      <NewProducts />

      <Zip />

      <CustomBuild />

      <MSILaptop/>

      <Desktops/>

      <GamingMonitors/>

      <Brands/>

      <Reviews/>

      <Contact/>

      <Footer/>
      
    </div>
  );
}
