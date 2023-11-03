import React from "react";

import CancelIcon from "@mui/icons-material/Cancel";

import { red } from "@mui/material/colors";

export default function SelectedFilterButton() {
  return (
    <div className="lg:flex gap-2 hidden">
      <button className="border-2 w-56 h-12 flex flex-row items-center justify-center gap-2">
        <span className="font-medium">CUSTOM PCS</span>

        <span>(24)</span>

        <CancelIcon sx={{ color: red[500] }} />
      </button>

      <button className="w-40 h-12 flex items-center justify-center border-2">
        Clear All
      </button>
    </div>
  );
}
