import { useState } from "react";

import DoneIcon from "@mui/icons-material/Done";

export default function OrderSteps() {
  const [stepOne, setStepOne] = useState(false);

  setTimeout(() => {
    setStepOne(true);
  }, 2000);

  return (
    <div className="hidden md:flex items-center mb-16">
      <div
        className={`w-[18.75%] h-0.5 bg-[#CACDD8] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#0156FF] ${
          stepOne ? "after:w-full" : "after:w-0"
        } after:duration-500`}
      ></div>

      <div
        className={`w-[12.5%] aspect-square bg-[#CACDD8] rounded-full flex items-center justify-center relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-full after:rounded-full after:bg-[#0156FF] ${
          stepOne ? "after:w-full" : "after:w-0"
        } after:duration-500 after:delay-500`}
      >
        <div
          className={`w-[85%] aspect-square bg-white rounded-full flex items-center justify-center relative z-20`}
        >
          {stepOne ? (
            <DoneIcon sx={{ fontSize: "25px" }} />
          ) : (
            <h1 className="text-lg font-semibold">1</h1>
          )}
        </div>

        <h6
          className={`absolute top-12 lg:top-16 xl:top-24 xl:text-center text-base font-bold ${
            stepOne ? "text-black" : "text-[#A2A6B0]"
          } `}
        >
          Shipping
        </h6>
      </div>

      <div
        className={`w-[18.75%] h-0.5 bg-[#CACDD8] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#0156FF] ${
          stepOne ? "after:w-full" : "after:w-0"
        } after:duration-500 after:delay-1000`}
      ></div>

      <div className="w-[18.75%] h-0.5 bg-[#CACDD8]"></div>

      <div className="w-[12.5%] aspect-square bg-[#CACDD8] rounded-full flex items-center justify-center relative">
        <div className="w-[85%] aspect-square bg-white rounded-full flex items-center justify-center">
          2
        </div>

        <h6 className="absolute top-12 lg:top-16 xl:top-24 xl:text-center text-base font-bold text-[#A2A6B0]">
          Review & Payments
        </h6>
      </div>

      <div className="w-[18.75%] h-0.5 bg-[#CACDD8]"></div>
    </div>
  );
}
