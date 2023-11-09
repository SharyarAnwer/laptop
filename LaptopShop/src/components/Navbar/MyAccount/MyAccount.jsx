import React from "react";

export default function MyAccount() {
  return (
    <div className="absolute top-10 right-0 z-10 flex flex-col items-end">
      <div className="w-4 aspect-square little-triangle bg-white mr-2.5"></div>
      <div className="w-72 h-40 shadow-xl bg-white flex flex-col justify-center px-4 font-normal ">
        <h5>My Account</h5>
        <h5>My Wishlist (0)</h5>
        <h5>Compare (0)</h5>
        <h5>Create an account</h5>
        <h5>Sign in</h5>
      </div>
    </div>
  );
}
