import React from "react";

export default function SectionThree(prop) {
  return (
    <div className={`bg-${prop.background} px-4 py-4 flex flex-col md:flex-row items-center justify-center`}>

      <div className="flex justify-center md:min-w-[50%]">
        <picture className="md:max-w-[75%]">
          {/* Specify the different image sources */}
          <source srcSet={prop.desktop} media="(min-width: 1024px)" />
          <source srcSet={prop.tablet} media="(min-width: 768px)" />
          <source srcSet={prop.mobile} />

          {/* The default <img> element is displayed if no source matches */}
          <img src={prop.desktop} alt="Inside the company" className="md:max-w-[75%]" />
        </picture>
      </div>

      <div className="md:min-w-[50%]">
        <div>
          <img src={prop.icon} className="md:w-10 lg:w-12 xl:w-16 md:h-auto" />
        </div>

        <h1 className= {`text-3xl text-${prop.text} my-3 font-semibold xl:text-4xl`} >
          {prop.heading}
        </h1>

        <p className={`text-${prop.text} md:text-base lg:text-lg xl:text-2xl`}>
          {prop.textOne}
        </p>

        <p className={`text-${prop.text} md:text-base lg:text-lg xl:text-2xl`}>
          {prop.textTwo}
        </p>
      </div>
    </div>
  );
}
