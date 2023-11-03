import React from "react";

import AccountDashboard from "../../components/User-Accounts/Account-Dashboard/AccountDashboard";
import AccountInformatio from "../../components/User-Accounts/Account-Information/AccountInformatio";
import CompareProducts from "../../components/User-Accounts/Compare-Products/CompareProducts";
import Contact from "../../components/HomepageComponents/Contact Section/Contact";
import Footer from "../../components/Footer/Footer";

export default function UserAccount() {

  return (
    <>
      <AccountDashboard />

      <AccountInformatio/>

      <CompareProducts/>

      <div className="bg-[#F5F7FF] py-4">
        <Contact/>
      </div>

      <Footer/>
    </>

  );
}
