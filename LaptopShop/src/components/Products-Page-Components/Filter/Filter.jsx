import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Filter(prop) {
  const [dropdowns, setDropDowns] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });

  const scrollHeightFirst =
    document.getElementById("first-dropdown")?.scrollHeight;

  const scrollHeightSecond =
    document.getElementById("second-dropdown")?.scrollHeight;

  const scrollHeightThird =
    document.getElementById("third-dropdown")?.scrollHeight;

  const scrollHeightFourth =
    document.getElementById("fourth-dropdown")?.scrollHeight;

  const scrollHeightFifth =
    document.getElementById("fifth-dropdown")?.scrollHeight;

  return (
    <div
      className={`px-4 fixed md:static top-0 bg-white md:bg-[#F5F7FF] md:pb-2 z-50 w-full duration-500 ${
        prop.showFilter ? "" : "-translate-y-full md:translate-y-0"
      }`}
    >
      <div className="flex py-4 justify-between md:justify-center border-b-2 md:border-b-0">
        <h1 className="text-lg font-semibold">
          <span>Filter</span>
          <span className="md:hidden">By</span>
        </h1>

        <div className="md:hidden">
          <CloseIcon onClick={prop.handleFilter} className="md:hidden" />
        </div>
      </div>

      <div className="md:flex justify-center hidden">  
        <button className="w-48 py-1.5 rounded-full border-2 border-gray-400 text-gray-400">Clear filter</button>
      </div>

      <ul className="mt-4">
        {/* This is the first drop down and its content */}
        <li className="flex justify-between mt-4 mb-2">
          <span className="font-medium">Category</span>

          <KeyboardArrowDownIcon
            onClick={() => {
              setDropDowns((prevDropdowns) => ({
                ...prevDropdowns,
                first: !prevDropdowns.first,
              }))
            }}
          />
        </li>

        <div
          id="first-dropdown"
          className={`pr-1.5 duration-500 overflow-y-hidden`}
          style={{
            maxHeight: ` ${dropdowns.first ? scrollHeightFirst + "px" : "0"} `,
          }}
        >
          <li className="flex justify-between my-2 text-sm">
            <span>CUSTOM PCS</span>
            <span>15</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>MSI ALL-IN-ONE PCS</span>
            <span>45</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>HP/COMPAQ PCS</span>
            <span>1</span>
          </li>
        </div>
        {/* Till this point is the first drop down and its content */}

        {/* This is the second dropdpwn and its content */}
        <li className="flex justify-between mb-2">
          <span className="font-medium">Price</span>

          <KeyboardArrowDownIcon
            onClick={() => {
              setDropDowns((prevDropdowns) => ({
                ...prevDropdowns,
                second: !prevDropdowns.second,
              }))
            }}
          />
        </li>

        <div
          id="second-dropdown"
          className={`pr-1.5 duration-500 overflow-y-hidden`}
          style={{
            maxHeight: ` ${
              dropdowns.second ? scrollHeightSecond + "px" : "0"
            } `,
          }}
        >
          <li className="flex justify-between my-2 text-sm">
            <span>$0.00 - $1,000.00</span>
            <span>19</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>$1,000.00 - $2,000.00</span>
            <span>21</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>$2,000.00 - $3,000.00</span>
            <span>9</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>$3,000.00 - $4,000.00</span>
            <span>6</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>$4,000.00 - $5,000.00</span>
            <span>3</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>$5,000.00 - $6,000.00</span>
            <span>1</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>$6,000.00 - $7,000.00</span>
            <span>1</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>$7,000.00 And Above</span>
            <span>1</span>
          </li>
        </div>
        {/* Till this point is the second dropdown and its content */}

        {/* This is the third dropdpwn and its content */}
        <li className="flex justify-between mb-2">
          <span className="font-medium">Color</span>

          <KeyboardArrowDownIcon
            onClick={() => {
              setDropDowns((prevDropdowns) => ({
                ...prevDropdowns,
                third: !prevDropdowns.third,
              }))
            }}
          />
        </li>

        <div
          id="third-dropdown"
          className={`pr-1.5 duration-500 overflow-y-hidden`}
          style={{
            maxHeight: ` ${dropdowns.third ? scrollHeightThird + "px" : "0"} `,
          }}
        >
          <div className="flex gap-1 ">
            <div className="w-6 aspect-square bg-black rounded-full "></div>

            <div className="w-6 aspect-square bg-[#DB0000] rounded-full "></div>
          </div>
        </div>
        {/* Till this point is the third dropdown and its content */}

        {/* This is the fourth dropdpwn and its content */}
        <li className="flex justify-between mb-2">
          <span className="font-medium">Filter Name</span>

          <KeyboardArrowDownIcon
            onClick={() => {
              setDropDowns((prevDropdowns) => ({
                ...prevDropdowns,
                fourth: !prevDropdowns.fourth,
              }))
            }}
          />
        </li>

        <div
          id="fourth-dropdown"
          className={`pr-1.5 duration-500 overflow-y-hidden`}
          style={{
            maxHeight: ` ${
              dropdowns.fourth ? scrollHeightFourth + "px" : "0"
            } `,
          }}
        >
          <p>No filters in this category</p>
        </div>
        {/* Till this point is the fourth dropdown and its content */}

        {/* This is the fifth dropdpwn and its content */}
        <li className="flex justify-between mb-2 md:hidden">
          <span className="font-medium">Brands</span>

          <KeyboardArrowDownIcon
            onClick={() => {
              setDropDowns((prevDropdowns) => ({
                ...prevDropdowns,
                fifth: !prevDropdowns.fifth,
              }));
            }}
          />
        </li>

        <div
          id="fifth-dropdown"
          className={`pr-1.5 duration-500 overflow-y-hidden md:hidden`}
          style={{
            maxHeight: ` ${dropdowns.fifth ? scrollHeightFifth + "px" : "0"} `,
          }}
        >
          <li className="flex justify-between my-2 text-sm">
            <span>ADATA</span>
            <span>19</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>HP</span>
            <span>21</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>TP-Link</span>
            <span>9</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>ASUS</span>
            <span>6</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>Toshiba</span>
            <span>3</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>CANON</span>
            <span>1</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>LG</span>
            <span>1</span>
          </li>

          <li className="flex justify-between my-2 text-sm">
            <span>MSI</span>
            <span>1</span>
          </li>
        </div>
        {/* Till this point is the fifth dropdown and its content */}
      </ul>

      <div className="flex items-center justify-center my-4 ">
        <button className="bg-[#0156FF] text-white rounded-full w-48 py-2 font-semibold">
          Apply Filters (2)
        </button>
      </div>
    </div>
  );
}
