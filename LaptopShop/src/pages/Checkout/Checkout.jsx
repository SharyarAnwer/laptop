import React from "react";
import Breadcrumb from "../../components/Checkout/Breadcrumbs/Breadcrumbs";
import CheckoutForm from "../../components/Checkout/Checkout-Form/CheckoutForm";
import OrderSummary from "../../components/Checkout/Order-summary/OrderSummary";
import Contact from "../../components/HomepageComponents/Contact Section/Contact";
import Footer from "../../components/Footer/Footer";

export default function Checkout() {
  return (
    <div>
      <Breadcrumb />

      <div className="md:flex" >
        <CheckoutForm />

        <OrderSummary />
      </div>

      <div className="bg-[#F5F9FF] py-4">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
