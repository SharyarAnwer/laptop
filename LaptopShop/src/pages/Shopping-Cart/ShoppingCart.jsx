import Footer from "../../components/Footer/Footer";

import Contact from "../../components/HomepageComponents/Contact Section/Contact";

import Cart from "../../components/Shopping-Cart/Cart/Cart";

import OrderSummary from "../../components/Shopping-Cart/Order-Summary/OrderSummary";


export default function ShoppingCart() {
  
  return (
    <>

      <Cart />

      <OrderSummary />

      <div className="bg-[#F5F7FF] py-4 mt-6">      
        <Contact/>
      </div>

      <Footer/>

    </>
  );
}
