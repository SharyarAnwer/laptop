import React, { useRef, useEffect, useState } from "react";

import Feature from "./Feature.svg";

import FeatureTablet from "./Featured-Tablet.svg";

export default function Featured() {
  const divRef = useRef(null);

  const [showDescription, setShowDescription] = useState(true);

  // Function to calculate and set the height of the div based on the first two p tags
  const setDivHeight = () => {
    console.log(divRef);

    if (divRef.current) {
      const p1 = divRef.current.querySelector(".first-p");
      const p2 = divRef.current.querySelector(".second-p");
      if (p1 && p2) {
        const combinedHeight = p1.clientHeight + p2.clientHeight;

        divRef.current.style.height = showDescription
          ? `${combinedHeight}px`
          : `${divRef.current.scrollHeight}px`;
      }
    }
  };

  // Call the setDivHeight function after the component renders
  useEffect(() => {
    setDivHeight();
  }, [showDescription]);

  return (
    <div className="px-4 mb-4 flex flex-col md:flex-row md:gap-2 items-center justify-center">
      <picture className="md:w-full md:h-auto lg:max-w-[15%] ">
        {/* Specify the different image sources */}
        <source srcSet={FeatureTablet} media="(min-width: 1024px)" />
        <source srcSet={FeatureTablet} media="(min-width: 768px)" />
        <source srcSet={Feature} />

        {/* The default <img> element is displayed if no source matches */}
        <img src={Feature} className="md:w-full md:h-auto" alt="Logo of the company" />
      </picture>

      <div className="flex flex-col items-center">
        <div ref={divRef} className="overflow-y-hidden duration-500">
          <p className="text-xs text-[#8C8C8C] leading-5 my-4 opacity-100 first-p">
            MSI has unveiled the Prestige Series line of business-class and
            gaming notebooks. Tuned for color accuracy, the Prestige Series also
            leverages True Color Technology, which allows users to adjust the
            display profile to best fit their computing needs.
          </p>

          <p className="text-xs text-[#8C8C8C] leading-5 mb-4 second-p">
            <span
              className={`${showDescription ? "opacity-75" : "opacity-100"} `}
            >
              There are six different screen profiles, which are tuned for
              gaming, reducing eye fatigue, sRGB color accuracy, increasing
              clarity for words and lines, reducing harmful blue light, and
              optimizing contrast for watching movies.&nbsp;
            </span>
            <span
              className={`${showDescription ? "opacity-50" : "opacity-100"} `}
            >
              Given the various display profiles and discrete graphics chip, the
              Prestige Series notebooks can be used for various design work as
              well as for office tasks given that the screen can be adjusted for
              better clarity, color accuracy, or for eye strain reduction. Users
              working with video or 3D rendering will appreciate the "movie
              mode" for which contrast is increased.
            </span>
          </p>

          <p
            className={`text-xs text-[#8C8C8C] leading-5 mb-4 ${
              showDescription ? "opacity-25" : "opacity-100"
            } `}
          >
            Home users or students can benefit from the "anti-blue" and the
            "office mode" options, both of which are designed to reduce eye
            strain. This is helpful when working on the computer for extended
            periods of time. Additionally, in their down time, students can also
            use the "gamer mode" to increase the screen brightness.
          </p>
        </div>

        <button
          className="border-2 w-36 border-[#A2A6B0] rounded-full px-10 py-1"
          onClick={() => {
            setShowDescription(!showDescription);
          }}
        >
          More
        </button>
      </div>

    </div>
  );
}
