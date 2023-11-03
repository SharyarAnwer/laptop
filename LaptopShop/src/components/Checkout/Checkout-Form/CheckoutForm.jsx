import React, { useState } from "react";

import Dropdown from "../Dropdown/Dropdown";

export default function CheckoutForm() {
  const [formDetails, setFormDetails] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    streetAddress: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
    standardRate: false,
    pickupFromStore: false,
  });

  const handleChange = (e) => {

    if (e.target.name == "standardRate") {
      setFormDetails({
        ...formDetails,
        pickupFromStore: false,
        [e.target.name]: true,
      });
    } else if (e.target.name == "pickupFromStore") {
      
      setFormDetails({
        ...formDetails,
        standardRate: false,
        [e.target.name]: true,
      });
    } else {
      setFormDetails({
        ...formDetails,
        [e.target.name]: e.target.value,
      });
    }

  };

  return (
    <div className="md:w-1/2">
      <div className="px-4 mt-4">
        <div className="flex flex-col gap-3 border-b-2">
          <h1 className="text-black text-2xl font-bold">Checkout</h1>

          <button className="border-2 border-[#0156FF] text-[#0156FF] w-48 h-10 rounded-full">
            Sign In
          </button>

          <h5 className="text-base font-semibold mb-4">Shipping Address</h5>
        </div>
      </div>

      <div className="px-4 mt-4">
        <div className="border-b-2">
          <label>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-black font-bold">
              Email Address
            </span>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
            />
          </label>

          <p className="text-sm text-[#666666] my-3">
            You can create an account after checkout.
          </p>
        </div>
      </div>

      <div className="px-4 mt-4">
        {/* This is the checkout form */}
        <div className="border-b-2">
          <label>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-black font-bold">
              First Name
            </span>
            <input
              type="text"
              name="firstName"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
            />
          </label>

          <label>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-black font-bold mt-4">
              Last Name
            </span>
            <input
              type="text"
              name="lastName"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
            />
          </label>

          <label>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-black font-bold mt-4">
              Company
            </span>
            <input
              type="text"
              name="company"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
            />
          </label>

          <label>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-black font-bold mt-4">
              Street Address
            </span>
            <input
              type="text"
              name="streetAddress"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
            />
          </label>

          <label>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-black font-bold mt-4">
              State/Province
            </span>
            <input
              type="text"
              name="state"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
            />
          </label>

          <label>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-black font-bold mt-4">
              Zip/Postal Code
            </span>
            <input
              type="text"
              name="zipCode"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
            />
          </label>

          <label>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-black font-bold mt-4">
              Country
            </span>
            <Dropdown setCountry = {setFormDetails} form = {formDetails}/>
          </label>

          <label>
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm text-black font-bold mt-4">
              Phone Number
            </span>
            <input
              type="text"
              name="phoneNumber"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 mb-5"
              onChange={handleChange}
            />
          </label>
        </div>
        {/* This is the checkout form */}
      </div>

      <div className="px-4 mt-4">
        <div>
          <p className="text-sm md:text-base font-bold">Standard Rate</p>

          <div className="mt-4 flex justify-between">
            <div className="flex items-start gap-2">
              <input
                type="radio"
                onChange={handleChange}
                name="standardRate"
                checked={formDetails.standardRate}
              />
              <p className="text-sm md:text-base -mt-1 w-52 md:w-60">
                Price may vary depending on the item/destination. Shop Staff
                will contact you.
              </p>
            </div>

            <h3 className="font-bold">$21.00</h3>
          </div>
        </div>

        <div>
          <p className="text-sm md:text-base font-bold mt-4">Pickup from store</p>

          <div className="mt-4 flex justify-between">
            <div className="flex items-start gap-2">
              <input
                type="radio"
                onChange={handleChange}
                name="pickupFromStore"
                checked={formDetails.pickupFromStore}
              />
              <p className="text-sm md:text-base -mt-1 w-52 md:w-60">
                1234 Street Adress, City Address, 1234 $0.00
              </p>
            </div>

            <h3 className="font-bold">$0.00</h3>
          </div>
        </div>

        <button className="w-48 h-8 md:h-12 md:text-lg rounded-full text-white mt-4 bg-[#0156FF]" >Next</button>
      </div>
    </div>
  );
}
