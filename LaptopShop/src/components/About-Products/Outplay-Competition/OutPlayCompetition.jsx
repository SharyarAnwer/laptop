import React, { useState } from "react";

import CoreMobile from "./core-i7-mobile.svg";

import CoreTablet from "./core-i7-tablet.svg";

import CoreDesktop from "./core-i7-desktop.svg";

import DescriptionPicture from "./Description+PIcture/DescriptionPicture";

export default function OutPlayCompetition() {
  const [translation, setTranslation] = useState(0);

  const [activeButton, setActiveButton] = useState({
    first: true,
    second: false,
    third: false,
  });

  const handleButton = (buttonNumber) => {
    if (buttonNumber == 1) {
      setActiveButton({
        first: true,
        second: false,
        third: false,
      });

      setTranslation(0);
    } else if (buttonNumber == 2) {
      setActiveButton({
        first: false,
        second: true,
        third: false,
      });

      setTranslation(100);
    } else if (buttonNumber == 3) {
      setActiveButton({
        first: false,
        second: false,
        third: true,
      });

      setTranslation(200);
    }
  };

  return (
    <div className="bg-black">
      <div className="flex flex-row overflow-x-hidden">
        <div
          className={`min-w-full duration-500`}
          style={{ transform: `translateX(${-translation}%)` }}
        >
          <DescriptionPicture />
        </div>

        <div
          className={`min-w-full duration-500`}
          style={{ transform: `translateX(${-translation}%)` }}
        >
          <DescriptionPicture />
        </div>

        <div
          className={`min-w-full duration-500`}
          style={{ transform: `translateX(${-translation}%)` }}
        >
          <DescriptionPicture />
        </div>
      </div>

      <div className="px-6 bg-black pb-8 gap-2 hidden lg:flex">
        <div
          className={`w-3 aspect-square ${
            activeButton.first ? "bg-[#0156FF]" : "bg-white"
          } rounded-full cursor-pointer`}
          onClick={() => {
            handleButton(1);
          }}
        ></div>

        <div
          className={`w-3 aspect-square ${
            activeButton.second ? "bg-[#0156FF]" : "bg-white"
          } rounded-full cursor-pointer`}
          onClick={() => {
            handleButton(2);
          }}
        ></div>

        <div
          className={`w-3 aspect-square ${
            activeButton.third ? "bg-[#0156FF]" : "bg-white"
          } rounded-full cursor-pointer`}
          onClick={() => {
            handleButton(3);
          }}
        ></div>
      </div>
    </div>
  );
}
