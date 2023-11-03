import React from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

export default function DropDownMenu() {

  return (

    <div className="">

      <div className="flex flex-row gap-4 px-8 py-3">
        <AccessTimeIcon />

        <div>
          <p className="text-xs font-bold">We are open:</p>

          <p className="text-sm">
            <span className="text-[#A2A6B0] font-semibold">Mon-Thu: </span>
            <span className="font-bold">9:00 AM - 5:30 PM</span>
          </p>

          <p className="text-sm">
            <span className="text-[#A2A6B0] font-semibold">Fr: </span>
            <span className="font-bold">9:00 AM - 6:00 PM</span>
          </p>

          <p className="text-sm">
            <span className="text-[#A2A6B0] font-semibold">Sat: </span>
            <span className="font-bold">11:00 AM - 5:00 PM</span>
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-4 items-center border-t-2 px-8 py-3">
        <FmdGoodOutlinedIcon />

        <p className="text-sm">
          Address: 1234 Street Adress, City Address, 1234
        </p>
      </div>

      <div className="flex flex-col border-t-2 px-8 py-3">
        <p className="text-sm font-medium">
          <span>Phones: </span>
          <a className="text-[#0156FF]" href="tel:123-456-789">(00) 1234 5678</a>
        </p>

        <p className="text-sm font-medium">
          <span>E-mail: </span>
          <span className="text-[#0156FF]" href="mailto:someone@example.com">shop@email.com</span>
        </p>
      </div>
    </div>
  );
}
