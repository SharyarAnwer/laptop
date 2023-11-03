import React, { useEffect, useRef, useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function AccountDashboard() {
  const [openAccountDashboard, setOpenAccountDashboard] = useState(0);

  const accountDashboard = useRef(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(accountDashboard?.current.scrollHeight);

    console.log(height);
  }, []);

  return (
    <div className="px-4 py-4">
      <div className=" bg-[#F5F7FF] pt-4 ">
        <div
          className="flex justify-between items-center border-b-2 px-4 pb-4"
          onClick={() => {
            setOpenAccountDashboard(!openAccountDashboard);
          }}
        >
          <h1 className="text-sm font-semibold">Account Dashboard</h1>

          <KeyboardArrowDownIcon />
        </div>

        <div
          ref={accountDashboard}
          className="h-0 overflow-y-hidden bg-[#F5F7FF] duration-500"
          style={{ height: openAccountDashboard ? `${height}px` : `0px` }}
        >
          <div className="border-b-2 py-3">
            <h6 className="text-sm font-semibold text-[#666666] border-l-2 border-[#F5F7FF] hover:border-[#0156FF] duration-500 px-4">Account Dashboard</h6>

            <h6 className="text-sm font-semibold text-[#666666] border-l-2 border-[#F5F7FF] hover:border-[#0156FF] duration-500 px-4">Account Information</h6>

            <h6 className="text-sm font-semibold text-[#666666] border-l-2 border-[#F5F7FF] hover:border-[#0156FF] duration-500 px-4">Address Book</h6>

            <h6 className="text-sm font-semibold text-[#666666] border-l-2 border-[#F5F7FF] hover:border-[#0156FF] duration-500 px-4">My Orders</h6>
          </div>

          <div className="border-b-2 py-3">
            <h6 className="text-sm font-semibold text-[#666666] border-l-2 border-[#F5F7FF] hover:border-[#0156FF] duration-500 px-4">My Downloadable Products</h6>

            <h6 className="text-sm font-semibold text-[#666666] border-l-2 border-[#F5F7FF] hover:border-[#0156FF] duration-500 px-4">Stored Payment Methods</h6>

            <h6 className="text-sm font-semibold text-[#666666] border-l-2 border-[#F5F7FF] hover:border-[#0156FF] duration-500 px-4">Billing Agrements</h6>

            <h6 className="text-sm font-semibold text-[#666666] border-l-2 border-[#F5F7FF] hover:border-[#0156FF] duration-500 px-4">My Wish List</h6>
          </div>

          <div className="py-3">
            <h6 className="text-sm font-semibold text-[#666666] border-l-2 border-[#F5F7FF] hover:border-[#0156FF] duration-500 px-4">My Product Reviews</h6>

            <h6 className="text-sm font-semibold text-[#666666] border-l-2 border-[#F5F7FF] hover:border-[#0156FF] duration-500 px-4">Newsletter Subscriptions</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
