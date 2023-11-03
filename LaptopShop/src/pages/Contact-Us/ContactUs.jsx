import React from "react";

import Breadcrumbs from "../../components/Contact-Us/Breadcrumbs/Breadcrumb";
import ContactForm from "../../components/Contact-Us/Contact-Form/ContactForm";
import ContactDetails from "../../components/Contact-Us/Contact-Details/ContactDetails";

import Contact from "../../components/HomepageComponents/Contact Section/Contact";

import Footer from "../../components/Footer/Footer";

export default function ContactUs() {
  return (
    <div>
      <Breadcrumbs />

      <div className="flex flex-col md:flex-row">

        <ContactForm />

        <ContactDetails />

      </div>

      <div className="bg-[#F5F7FF] py-4">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
