import React from "react";

import LogoMobile from "./LogoMobile.svg";

import CloseIcon from "@mui/icons-material/Close";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Sidebar() {
    
  return (
    <div className="w-9/12 h-screen bg-white px-3 ">
      <div className="flex flex-row items-center justify-between border-b-2 border-[#CACDD8] py-3">
        <img src={LogoMobile} />

        <CloseIcon />
      </div>

      <nav>
        <ul className="text-sm font-normal py-3 flex flex-col gap-2">
          <li className="flex items-center justify-between">
            Laptops <ChevronRightIcon />{" "}
          </li>

          <li className="flex items-center justify-between">
            Desktop PC <ChevronRightIcon />
          </li>

          <li className="flex items-center justify-between">
            Networking Devices <ChevronRightIcon />{" "}
          </li>

          <li className="flex items-center justify-between">
            Printers & Scanners <ChevronRightIcon />{" "}
          </li>

          <li className="flex items-center justify-between">
            PC Parts <ChevronRightIcon />{" "}
          </li>

          <li className="flex items-center justify-between">
            All Other Products <ChevronRightIcon />{" "}
          </li>

          <li className="flex items-center justify-between">
            Repiars <ChevronRightIcon />{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}
