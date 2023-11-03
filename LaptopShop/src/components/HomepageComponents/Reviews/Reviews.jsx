import React, { useState } from "react";

export default function Reviews() {

  //This will hold all the reviews of the users
  const [reviews, setReviews] = useState([
    {
      paragraph:
        "My first order arrived today in perfect condition. From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch. Such great service. I look forward to shopping on your site in the future and would highly recommend it.",
      person: "Tama Brown",
    },
    {
      paragraph:
        "My first order arrived today in perfect condition. From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch. Such great service. I look forward to shopping on your site in the future and would highly recommend it.",
      person: "Tama Red",
    },
    {
      paragraph:
        "My first order arrived today in perfect condition. From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch. Such great service. I look forward to shopping on your site in the future and would highly recommend it.",
      person: "Tama Purple",
    },
  ]);

  //This will control the translation of each review
  const [translation, setTranslation] = useState(0);

  const [activeButton, setActiveButton] = useState(() => {
    const activeArrayButton = Array(5).fill(false);
    activeArrayButton[0] = true;
    return activeArrayButton;
  });

  //   This function handles which review to show
  const handleButtonClick = (index) => {
    const updatedArray = { ...activeButton };

    updatedArray[index] = true;

    for (const key in updatedArray) {
      if (key != index) {
        updatedArray[key] = false;
      }
    }

    setTranslation(index * -100)
    setActiveButton(updatedArray);

    console.log(activeButton);
  };

  return (
    <div className="mx-4 bg-[#F5F9FF] py-4 px-4 flex flex-col gap-3">
      <div className="flex flex-row justify-between items-start gap-2">
        <div className="text-7xl -mt-5 tracking-tight">``</div>

        <div className="text-base flex overflow-x-hidden ">
          {reviews.map((element , index) => (
            <div className="min-w-full duration-500" style={{transform: `translateX(${translation}%)`}} >
              <p>
                {reviews[index].paragraph}
              </p>

              <p className="text-end text-xs">- {reviews[index].person}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="flex justify-between">
        <button className="border-2 border-[#0156FF] text-[#0156FF] font-semibold px-6 py-1 rounded-3xl">
          Leave Us A Review
        </button>

        <div className="flex flex-row gap-2 items-center">
          {reviews.map((element, index) => (
              <div
                key={index}
                className={`w-2 max-h-2 rounded-full aspect-square ${
                  activeButton[index] ? "bg-[#0156FF]" : " bg-[#CACDD8]"
                } `}
                onClick={() => {
                  handleButtonClick(index);
                }}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
}
