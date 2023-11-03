import React, { useState, useEffect, useRef } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Accordion(prop) {

  //This section is used to track screen width.
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Add an event listener to update the screen width when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //

  const [openAccordion, setOpenAccordion] = useState(false);

  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    // Calculate the content height when the component mounts
    const contentDiv = document.getElementById("accordion-content");
    if (contentDiv && (screenWidth < 1024)) {
      setContentHeight(contentDiv.scrollHeight);
    }
  }, []);

  return (
    <div className="py-2 border-b-2 border-[#E5ECF1] lg:border-b-0">
      <div className="flex justify-between">
        <span className="text-white lg:mb-4">{prop.heading}</span>

        <div className="lg:hidden">
          <KeyboardArrowDownIcon
            sx={{ color: "#fff" }}
            onClick={() => {
              setOpenAccordion(!openAccordion);
            }}
          />
        </div>
      </div>

      <div
        id="accordion-content"
        className={`overflow-hidden lg:h-fit duration-500 px-2 lg:px-0 text-justify py-0.5`}
        style={{ maxHeight: (openAccordion) ? contentHeight + "px" : ((screenWidth > 1024) ? "" : 0) }}
      >
        {prop.type == "paragraph" ? (
          <p className="text-[#A2A6B0] text-xs leading-5">{prop.paragraph}</p>
        ) : (
          <ul className="text-[#A2A6B0] text-xs flex flex-col gap-1 lg:gap-2">
            {prop.listitems.map((element) => (
              <li>{element}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
