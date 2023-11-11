import React, { useState } from "react";
import About from "../../components/About-Products/AboutProduct/About";
import AboutDetailsSpecs from "../../components/About-Products/About-Details-Specs/AboutDetailsSpecs/AboutDetailsSpecs";
import Pricing from "../../components/About-Products/Pricing-Bar/Pricing";
import OutPlayCompetition from "../../components/About-Products/Outplay-Competition/OutPlayCompetition";
import Faq from "../../components/About-Products/FAQ-sections/Faq";
import Features from "../../components/About-Products/Features/Features";
import Contact from "../../components/HomepageComponents/Contact Section/Contact";
import Footer from "../../components/Footer/Footer";

//Product details will be received when the user navigate to the product details page
import { useLocation } from "react-router-dom";

export default function AboutProduct() {
  //This is used to slide About - Details - Specs section back and forth
  //Quite complicated. Will love to know a simpler solution
  const [translation, setTranslation] = useState(0);

  const handleTranslation = (translation) => {
    setTranslation(translation);
  };

  // state holds the details of the product which will be displayed on this page
  const { state } = useLocation()

  return (
    <div>
      <div className="hidden md:block">
        <Pricing handleTranslation={handleTranslation} product={state.product} />
      </div>

      <div className="flex flex-col md:flex-row-reverse md:items-center md:border-t-2 lg:bg-[#F5F7FF] ">

        <div className="md:flex-1 md:max-w-[50%] lg:bg-white">
          <About product={state.product} />
        </div>

        <div className="md:flex-1 md:max-w-[50%] ">
          <AboutDetailsSpecs
            translation={translation}
            handleTranslation={handleTranslation}
            product={state.product}
          />
        </div>

      </div>

      <OutPlayCompetition/>

      <Faq/>
      
      <Features/>

      <Contact/>

      <Footer/>
    </div>
  );
}
