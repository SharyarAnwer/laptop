import ForgotPassword from "./components/Login-Signup/ForgotPassword/ForgotPassword";

import Navbar from "./components/Navbar/navbar";

import Homepage from "./pages/Homepage/Homepage";

//This wil hold the entire product gallery
import Products from "./pages/All-Products/Products";

//This will open when you choose a particular product. Its details will open up
import AboutProduct from "./pages/About-Product/AboutProduct";

import { Route, Routes } from "react-router-dom";

// REACT REDUX STARTS FROM HERE
import { Provider } from "react-redux";

import Store from "./redux/Store";

import ContactUs from "./pages/Contact-Us/ContactUs";

import CustomerLogin from "./pages/Customer-Login/CustomerLogin";

import ShoppingCart from "./pages/Shopping-Cart/ShoppingCart";

import Checkout from "./pages/Checkout/Checkout";

import UserAccount from "./pages/User-Account/UserAccount";

import AboutUs from "./pages/About-Us/AboutUs";

import FAQ from "./pages/FAQ/FAQ";

function App() {
  return (
    <div>
      <Provider store={Store}>
        
        <Navbar />

        <Routes>

          <Route path="/" element={<Homepage />} />

          <Route
            path="/reset-password/:id/:token"
            element={<ForgotPassword />}
          />

          <Route path="/products" element={<Products />} />

          <Route path="/about-product" element={<AboutProduct />} />

          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/customer-login" element={<CustomerLogin />} />

          <Route path="/shopping-cart" element={<ShoppingCart />} />

          <Route path="/checkout" element={<Checkout/>} />

          <Route path="/user-account" element={<UserAccount/>} />

          <Route path="/about-us" element={<AboutUs/>} />

          <Route path="/faq" element={<FAQ/>} />

        </Routes>
      </Provider>
    </div>
  );
}

export default App;
