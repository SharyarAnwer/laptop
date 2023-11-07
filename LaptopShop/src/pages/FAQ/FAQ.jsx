import React from "react";
import Breadcrumb from "../../components/FAQ/Breadcrumbs";
import SectionOne from "../../components/FAQ/SectionOne";
import Contact from "../../components/HomepageComponents/Contact Section/Contact";
import Footer from "../../components/Footer/Footer";

export default function FAQ() {
  return (
    <div className="px-4">
      <Breadcrumb />

      <h1 className="text-xl font-semibold mt-2 mb-2">
        Techs Terms & Conditions
      </h1>

      <h5 className="text-lg font-semibold">
        GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES
      </h5>

      <SectionOne />

      <div className="bg-[#F5F7FF] py-4" >
        <Contact />
      </div>

      <Footer/>
    </div>
  );
}
