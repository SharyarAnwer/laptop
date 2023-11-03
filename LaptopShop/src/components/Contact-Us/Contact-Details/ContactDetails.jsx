import React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import AccessTimeIcon from '@mui/icons-material/AccessTime';

import EmailIcon from '@mui/icons-material/Email';

export default function ContactDetails() {
  return (
    <div className="bg-[#F5F7FF] mx-4 py-6 mb-4 flex flex-col gap-4 md:w-1/2 md:h-fit">
      <div className="flex gap-2 px-6">
        <LocationOnIcon />

        <div>
          <h6 className="text-base font-bold">Address:</h6>
          <p>1234 Street Adress, City Address, 1234</p>
        </div>
      </div>

      <div className="flex gap-2 px-6">
        <LocalPhoneIcon />

        <div>
          <h6 className="text-base font-bold">Phone:</h6>
          <p>(00)1234 5678</p>
        </div>
      </div>

      <div className="flex gap-2 px-6">
        <AccessTimeIcon />

        <div>
          <h6 className="text-base font-bold">We are open:</h6>
          <p>Monday - Thursday: 9:00 AM - 5:30 PM</p>
          <p>Friday 9:00 AM - 6:00 PM</p>

          <p>Saturday: 11:00 AM - 5:00 PM</p>
        </div>
      </div>

      <div className="flex gap-2 px-6">
        <EmailIcon />

        <div>
          <h6 className="text-base font-bold">E-mail:</h6>
          <p>shop@email.com</p>
        </div>
      </div>

    </div>
  );
}
