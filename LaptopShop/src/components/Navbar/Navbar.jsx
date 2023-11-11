import React, { useEffect, useState } from "react";

import MobileLogo from "./MobileLogo.svg";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import DropDownMenu from "./DropDownMenu/DropDownMenu";

import MenuIcon from "@mui/icons-material/Menu";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Badge from "@mui/material/Badge";

import Avatar from "@mui/material/Avatar";

import Man from "./man.svg";

//
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
//

// These imports are related to the sidebar
import LogoMobile from "./LogoMobile.svg";

import CloseIcon from "@mui/icons-material/Close";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// The above imports are related to the sidebar

//Retrieve from the store how many items have been added to the cart
import { useSelector } from "react-redux";
import MyAccount from "./MyAccount/MyAccount";
//Retrieve from the store how many items have been added to the cart

// Adding links to Navbar using react-router-dom
import { Link } from "react-router-dom";
// Adding links to Navbar using react-router-dom

export default function Navbar() {
  //Retrieve from the store how many items have been added to the cart
  const itemsInCart = useSelector((state) => state.cart.cart.items)

  //This shows if I need to show shop timing or not
  const [showShop, setShowShop] = useState(false);

  const showShopTime = () => {
    setShowShop(!showShop);
  };

  // This will control when to show the sidebar and when to hide it
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // This state will track when to show the text search field on lapto devices
  const [showSearch, setShowSearch] = useState(false);

  // show my account details
  const [showAccount, setShowAccount] = useState(false);

  return (
    <>
      <header>
        {/* This is the first header that shows shop info */}
        <div className="max-w-[100vw] bg-black py-2 flex items-center justify-between px-3 gap-2 z-30 relative">
          <button
            className="border border-slate-400 text-white rounded-2xl text-xs px-4 py-1 flex flex-row items-center justify-center"
            onClick={showShopTime}
          >
            <span>Mon-Thu: </span>
            <span>&nbsp;9:00 AM - 5:30 PM</span>
            {showShop ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </button>

          <div>
            <span className="text-white text-xs">Call Us: </span>
            <a href="tel:123-456-789" className="text-white text-xs">
              (00) 1234 5678
            </a>
          </div>
        </div>

        <div
          className={`${
            showShop ? "translate-y-0" : "-translate-y-full"
          } duration-700 absolute z-20 bg-white`}
        >
          <DropDownMenu />
        </div>

        {/* This is the second header or the navbar */}
        <div className="relative z-10 px-3 bg-[#0156FF] py-3 flex flex-col gap-3 lg:px-9">
          <div className="flex items-center justify-between">
            <div onClick={toggleSidebar} className="lg:hidden">
              <MenuIcon />
            </div>

            <picture>
              {/* Specify the different image sources */}
              <source srcSet={MobileLogo} media="(min-width: 1024px)" />
              <source srcSet={MobileLogo} media="(min-width: 768px)" />
              <source srcSet={MobileLogo} />

              {/* The default <img> element is displayed if no source matches */}
              <img src={MobileLogo} alt="Logo of the company" />
            </picture>

            <nav className="lg:flex gap-2 items-center">
              <ul className="hidden font-semibold text-sm lg:flex gap-3 justify-between xl:gap-5 ">
                <Link
                  to="/products"
                  state={{ category: "MSI-Laptops" }}
                  className="cursor-pointer"
                >
                  Laptops
                </Link>

                <Link
                  to="/products"
                  state={{ category: "Desktops" }}
                  className="cursor-pointer"
                >
                  Desktop PCs
                </Link>

                <Link
                  to="/products"
                  state={{ category: "Custom Build" }}
                  className="cursor-pointer"
                >
                  Custom Builds
                </Link>

                <Link
                  to="/products"
                  state={{ category: "Gaming Monitors" }}
                  className="cursor-pointer"
                >
                  Gaming Monitors
                </Link>

                <Link
                  to="/products"
                  state={{ category: "PC Parts" }}
                  className="cursor-pointer"
                >
                  PC Parts
                </Link>
              </ul>

              <button className="border-2 rounded-3xl px-6 py-1 text-[#0156FF] border-[#0156FF] bg-white md:px-48 lg:px-6 ">
                Our Deals
              </button>
            </nav>

            <div className="flex flex-row items-center gap-4 ">
              <input
                className={`${
                  showSearch ? "w-[50%] px-4 py-6" : "w-0"
                } absolute right-40 z-50 h-10 rounded-3xl transition-width duration-500 flex items-center`}
              />

              <div
                onClick={() => {
                  setShowSearch(!showSearch);
                }}
                className="hidden lg:block"
              >
                {!showSearch ? <SearchIcon /> : <CloseIcon />}
              </div>

              <Link to="/shopping-cart">
                <Badge badgeContent={itemsInCart} color="secondary">
                  <ShoppingCartIcon color="action" />
                </Badge>
              </Link>

              <div className="relative">
                <div
                  onClick={() => {
                    setShowAccount(!showAccount);
                  }}
                >
                  <Avatar alt="Profile picture" src={Man} />
                </div>
                {showAccount && <MyAccount />}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:hidden">
            {/* This text input has been imported from Material UI */}

            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "95vw",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search here"
                inputProps={{ "aria-label": "search products" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>

            {/* The above text input has been imported from Material UI */}
          </div>
        </div>

        {/* This is the sidebar that will pop out from the left side of the screen */}
        <div
          className={`w-9/12 h-screen bg-white px-3 ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          } duration-700 fixed top-0 z-40 `}
        >
          <div className="flex flex-row items-center justify-between border-b-2 border-[#CACDD8] py-3">
            <img src={LogoMobile} />

            <div onClick={toggleSidebar}>
              <CloseIcon />
            </div>
          </div>

          <nav>
            <ul className="text-sm font-normal py-3 flex flex-col gap-2">
              <Link className="flex items-center justify-between cursor-pointer">
                Laptops <ChevronRightIcon />
              </Link>

              <Link className="flex items-center justify-between cursor-pointer">
                Desktop PC <ChevronRightIcon />
              </Link>

              <Link className="flex items-center justify-between cursor-pointer">
                Networking Devices <ChevronRightIcon />
              </Link>

              <Link className="flex items-center justify-between cursor-pointer">
                Printers & Scanners <ChevronRightIcon />
              </Link>

              <Link className="flex items-center justify-between cursor-pointer">
                PC Parts <ChevronRightIcon />
              </Link>

              <Link className="flex items-center justify-between cursor-pointer">
                All Other Products <ChevronRightIcon />
              </Link>

              <Link className="flex items-center justify-between cursor-pointer">
                Repiars <ChevronRightIcon />
              </Link>
            </ul>
          </nav>

          <button className="border-[3px] px-10 py-1 border-[#0156FF] rounded-3xl text-[#0156FF] ">
            Our Deals
          </button>
        </div>
        {/* The above code is for the sidebar that will pop out from the left side of the screen */}
      </header>
    </>
  );
}
