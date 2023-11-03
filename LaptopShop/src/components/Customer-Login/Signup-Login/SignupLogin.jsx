import React from "react";

import Login from "./Login/Login";

import Contact from "../../HomepageComponents/Contact Section/Contact";

import Footer from "../../Footer/Footer";

export default function SignupLogin() {
  return (
    <div className="px-4">

      <div className="flex flex-col md:flex-row md:gap-4">
        <Login />

        <div className="bg-[#F5F7FF] py-6 px-6 md:h-fit md:w-1/2 mt-4">
          <h1 className="text-lg font-semibold mb-2">New Customer?</h1>

          <p className="text-sm mb-6">Creating an account has many benefits:</p>

          <li className="text-sm">Check out faster</li>
          <li className="text-sm">Keep more than one address</li>
          <li className="text-sm">Track orders and more</li>

          <div className="mt-6">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#0156FF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create an account
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F7FF] py-6 mt-8 md:mt-4">  
        <Contact />
      </div>

      <Footer/>
      
    </div>
  );
}
