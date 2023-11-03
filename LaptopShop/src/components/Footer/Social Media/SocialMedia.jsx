import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";

import InstagramIcon from "@mui/icons-material/Instagram";

import PayPal from "./paypal.svg";

import Visa from "./visa.svg";

import Maestro from "./maestro.svg";

import American from "./american-express.svg";

import Discover from "./discover.svg";

export default function SocialMedia() {
  return (
    <div className="my-3 flex flex-col flex-wrap">
      <div className="flex items-center justify-between mb-4 lg:mb-0">
        <div className="flex gap-0.5">
          <FacebookIcon sx={{ color: "#A2A6B0" }} />
          <InstagramIcon sx={{ color: "#A2A6B0" }} />
        </div>

        {/* This section will display the payment options */}
        <div className="hidden md:flex gap-2 items-center justify-center mt-4 lg:mt-0">
          <img src={PayPal} alt="You can pay via PayPal" />

          <img src={Visa} alt="You can pay via Visa" />

          <img src={Maestro} alt="You can pay via Maestro" />

          <img src={Discover} alt="You can pay via Discover" />

          <img src={American} alt="You can pay via American Express" />
        </div>

        <span className="text-[#A2A6B0]">Copyright © 2020 Shop Ptv. Ltd.</span>
      </div>

      {/* This section will display the payment options */}
      <div className="flex gap-2 items-center justify-center mt-4 lg:mt-0 md:hidden">
        <img src={PayPal} alt="You can pay via PayPal" />

        <img src={Visa} alt="You can pay via Visa" />

        <img src={Maestro} alt="You can pay via Maestro" />

        <img src={Discover} alt="You can pay via Discover" />

        <img src={American} alt="You can pay via American Express" />
      </div>
    </div>
  );
}
