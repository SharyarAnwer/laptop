import React from "react";

export default function AccountInformatio() {
  return (
    <div className="px-4">
      <div>
        <h1 className="text-xl font-bold">My Dashboard</h1>

        <p className="text-base text-[#212121] mt-4 font-semibold border-b-2 pb-2">
          Account Information
        </p>
      </div>

      <div className="py-2">
        <h6 className="text-sm font-bold">Contact Information</h6>

        <p className="text-sm">Alex Driver</p>

        <p className="text-sm">ExampeAdress@gmail.com</p>

        <p>
          <span className="text-sm underline text-[#0156FF] mr-4">Edit</span>
          <span className="text-sm underline text-[#0156FF]">
            Change Password
          </span>
        </p>
      </div>

      <div className="py-2 mt-2 border-b-2">
        <h6 className="text-sm font-bold">Newsletters</h6>

        <p className="text-sm">You don't subscribe to our newsletter.</p>

        <p className="text-sm underline text-[#0156FF] mr-4">Edit</p>

        <p>
          <span className="text-sm mr-4">Address Book</span>
          <span className="text-sm underline text-[#0156FF]">
            Manage Address
          </span>
        </p>
      </div>

      <div className="py-2 mt-2">

        <h6 className="text-sm font-bold">Default Billing Address</h6>

        <p className="text-sm my-4">You have not set a default billing address.</p>

        <p className="text-sm underline text-[#0156FF] mr-4">Edit Address</p>

        <h6 className="text-sm font-bold my-3">Default Shipping Address</h6>

        <p className="text-sm underline text-[#0156FF] mr-4">Edit Address</p>

      </div>
    </div>
  );
}
