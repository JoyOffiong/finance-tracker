import Image from "next/image";
import React from "react";

type Props = {};

export default function Cards({}: Props) {
  const cardDetails = [
    {
      icon: "/Revenue.png",
      link: "/income",
      bgColor: "linear-gradient(180deg, #8CDF39 0%, #2CAC21 100%)",
      item: "",
      text: "income img",
      title: "My Income ",
    },
    {
      icon: "/Revenue.png",
      link: "/expenses",
      bgColor: "#272934",
      item: "",
      text: "expenses img",
      title: "My expenses",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 ">
      {cardDetails.map((card, index) => {
        return (
          <div
            key={index}
            className="flex flex-row items-center  rounded-md shadow-lg p-4 gap-8"
            style={{ background: card.bgColor }}
          >
            <div className="w-[20%]">
              <Image src={card.icon} alt={card.text} width={300} height={300} />
            </div>
            <div className=" mr-[4rem]">
              <p className="text-xl text-white">{card.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
