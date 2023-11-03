import React from "react";

import Accordion from "./Accordion/Accordion";
import SocialMedia from "./Social Media/SocialMedia";

export default function Footer() {
  return (
    <div className="bg-black p-8">
      {/* Signup To Our News Letter Section */}
      <div className="flex flex-row flex-wrap gap-3 items-center justify-between lg:mb-4">
        <div>
          <h1 className="text-white text-lg">Sign Up To Our Newsletter</h1>

          <p className="text-white text-center text-xs">
            Be the first to hear about the latest offers.
          </p>
        </div>

        <form
          action=""
          className="flex flex-wrap items-center justify-between gap-2 w-full md:w-fit "
        >
          <input
            className="border-2 border-white bg-black placeholder-white px-1 py-1 rounded"
            placeholder="Your Email"
          />

          <button className="bg-[#0156FF] text-white px-8 py-2 rounded-3xl text-sm font-semibold">
            Subscribe
          </button>
        </form>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <Accordion
          heading="Information"
          listitems={[
            "About Us",
            "About Zip",
            "Privacy Policy",
            "Search",
            "Terms",
            "Orders and Returns",
            "Contact Us",
            "Advanced Search",
            "Newsletter Subscription",
          ]}
          type="list"
        />

        <Accordion
          heading="PC Parts"
          listitems={[
            "CPUS",
            "Add On Cards",
            "Hard Drives (Internal)",
            "Graphic Cards",
            "Keyboards / Mice",
            "Cases / Power Supplies / Cooling",
            "RAM (Memory)",
            "Software",
            "Speakers / Headsets",
            "Motherboards",
          ]}
          type="list"
        />

        <Accordion
          heading="Desktop PCs"
          listitems={[
            "Custom PCs",
            "Servers",
            "MSI All-In-One PCs",
            "HP/Compaq PCs",
            "ASUS PCs",
            "Tecs PCs",
          ]}
          type="list"
        />

        <Accordion
          heading="Laptops"
          listitems={[
            "Evryday Use Notebooks",
            "MSI Workstation Series",
            "MSI Prestige Series",
            "Tablets and Pads",
            "Netbooks",
            "Infinity Gaming Notebooks",
          ]}
          type="list"
        />

        <Accordion
          heading="Address"
          listitems={[
            "Address: 1234 Street Adress City Address, 1234",
            "Phones: (00) 1234 5678",
            "We are open: Monday-Thursday: 9:00 AM - 5:30 PM",
            "Friday: 9:00 AM - 6:00 PM",
            "Saturday: 11:00 AM - 5:00 PM",
            "E-mail: shop@email.com",
          ]}
          type="list"
        />
      </div>

      <SocialMedia/>
    </div>
  );
}
