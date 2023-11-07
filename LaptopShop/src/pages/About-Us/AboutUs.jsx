import React from "react";
import Breadcrumbs from "../../components/About-Us/Breadcrumbs/Breadcrumb";

import SectionOne from "../../components/About-Us/Section-one/SectionOne";
import SectionTwo from "../../components/About-Us/Section-Two/SectionTwo";
import Section from "../../components/About-Us/Section/Section";

// Assets for section one
import box from "./section-two-assets/box.svg";
import sectionOneMobile from "./section-one-assets/picture-one-mobile.svg";
import sectionOneTablet from "./section-one-assets/picture-one-tablet.svg";
import sectionOneDesktop from "./section-one-assets/picture-one-desktop.svg";
// Assets for section one

// Assets for section two
import sectionTwoMobile from "./section-two-assets/picture-mobile.svg";
import sectionTwoTablet from "./section-two-assets/picture-tablet.svg";
import sectionTwoDesktop from "./section-two-assets/picture-desktop.svg";
// Assets for section two

// Assets for section three
import safe from "./section-three-assets/Safe.svg";
import cpuMobile from "./section-three-assets/CPU.svg";
import cpuTablet from "./section-three-assets/CPU-Tablet.svg";
import cpuDesktop from "./section-three-assets/CPU-Desktop.svg";
// Assets for section three

// Assets for section four
import star from "./section-four-assets/Star.svg";
import sectionFourMobile from "./section-four-assets/section-four-mobile.svg";
import sectionFourTablet from "./section-four-assets/section-four-tablet.svg";
import sectionFourDesktop from "./section-four-assets/section-four-desktop.svg";
// Assets for section four

// Assets for section five
import truck from "./section-five-assets/truck.svg";
import sectionFiveMobile from "./section-five-assets/section-five-mobile.svg";
import sectionFiveTablet from "./section-five-assets/section-five-tablet.svg";
import sectionFiveDesktop from "./section-five-assets/section-five-desktop.svg";
// Assets for section five

import Review from "../../components/HomepageComponents/Reviews/Reviews";

import Contact from "../../components/HomepageComponents/Contact Section/Contact";

import Footer from "../../components/Footer/Footer"
export default function AboutUs() {
  return (
    <>
      <Breadcrumbs />

      <SectionOne />

      {/* Section Two */}
      <Section
        icon={box}
        background="white"
        text="black"
        mobile={sectionTwoMobile}
        tablet={sectionTwoTablet}
        desktop={sectionTwoDesktop}
        heading="shop.com"
        textOne=" Shop is a proudly Australian owned, Melbourne based supplier of I.T.
        goods and services, operating since 1991. Our client base encompasses
        individuals, small business, corporate and government organisations.
        We provide complete business IT solutions, centred on high quality
        hardware and exceptional customer service."
      />
      {/* Section Two */}

      {/* Section Three */}
      <Section
        icon={safe}
        background="black"
        text="white"
        mobile={cpuMobile}
        tablet={cpuTablet}
        desktop={cpuDesktop}
        heading="You're In Safe Hands"
        textOne="Experience a 40% boost in computing from last generation. MSI Desktop
          equips the 10th Gen. Intel® Core™ i7 processor with the upmost
          computing power to bring you an unparalleled gaming experience."
        textTwo="*Performance compared to i7-9700. Specs varies by model."
      />
      {/* Section Three */}

      {/* Section Four */}
      <Section
        icon={star}
        background="white"
        text="black"
        mobile={sectionFourMobile}
        tablet={sectionFourTablet}
        desktop={sectionFourDesktop}
        heading="The Highest Quality of Products In AU"
        textOne="We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals."
      />
      {/* Section Four */}

      {/* Section Five */}
      <Section
        icon={truck}
        background="black"
        text="white"
        mobile={sectionFiveMobile}
        tablet={sectionFiveTablet}
        desktop={sectionFiveDesktop}
        heading="Delivery to All Regions"
        textOne="We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be."
      />
      {/* Section Five */}

      <div className="my-4">
        <Review />
      </div>

      <div className="bg-[#F5F7FF] py-4">
        <Contact />
      </div>

      <Footer/>
    </>
  );
}
