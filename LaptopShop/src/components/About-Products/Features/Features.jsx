import React from "react";

import Intel from "./Intel.svg";

import RTX from "./RTX.svg";

import Gen3 from "./Gen3.svg";

import DDR from "./DDR3.svg";

export default function Features() {
  return (
    <div className="px-6 py-4 bg-[#242528]">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-4xl text-center font-semibold">
          Features
        </h1>

        <p className="text-white text-sm my-4 text-center leading-6 lg:w-64">
          The MPG series brings out the best in gamers by allowing full
          expression in color with advanced RGB lighting control and
          synchronization.
        </p>
      </div>

      <div className="md:flex md:flex-wrap md:justify-center md:gap-8">
        <div className="flex flex-col items-center justify-center md:justify-start mt-6 md:min-w-[40%] md:max-w-[40%] lg:min-w-[20%] lg:max-w-[20%]">
          {/* The default <img> element is displayed if no source matches */}
          <img className="" src={Intel} alt="Intel Logo" />

          <p className="text-white text-sm my-4 text-center leading-6">
            Intel® Core™ i7 processor with the upmost computing power to bring
            you an unparalleled gaming experience.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center md:justify-start mt-6 md:min-w-[40%] md:max-w-[40%] lg:min-w-[20%] lg:max-w-[20%]">
          {/* The default <img> element is displayed if no source matches */}
          <img className="" src={RTX} alt="RTX Logo" />

          <p className="text-white text-sm my-4 text-center leading-6">
            The new GeForce® RTX SUPER™ Series has more cores and higher clocks
            for superfast performance compared to previous-gen GPUs.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center md:justify-start mt-6 md:min-w-[40%] md:max-w-[40%] lg:min-w-[20%] lg:max-w-[20%]">
          {/* The default <img> element is displayed if no source matches */}
          <img className="" src={Gen3} alt="Gen 3 Logo" />

          <p className="text-white text-sm my-4 text-center leading-6">
            Unleash the full potential with the latest SSD technology, the NVM
            Express. 6 times faster than traditional SATA SSD.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center md:justify-start mt-6 md:min-w-[40%] md:max-w-[40%] lg:min-w-[20%] lg:max-w-[20%]">
          {/* The default <img> element is displayed if no source matches */}
          <img className="" src={DDR} alt="DDR Logo" />

          <p className="text-white text-sm my-4 text-center leading-6">
            Featuring the latest 10th Gen Intel® Core™ processors, memory can
            support up to DDR4 2933MHz to delivers an unprecedented gaming
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}
