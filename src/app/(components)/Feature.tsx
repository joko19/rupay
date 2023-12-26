import Image from "next/image";
import React from "react";

const DATA = [
  {
    title: "Single Integration",
    description: "Single API to connect to multiple Payment Channel",
    icon: "connector.svg",
  },
  {
    title: "Payment Link",
    description: "Enable merchant create and send single or bulk invoice",
    icon: "link.svg",
  },
  {
    title: "Custom Payment",
    description: "Self custom payment page for service integration",
    icon: "sound.svg",
  },
  {
    title: "Payment Card",
    description: "Help you to manage card transaction easier",
    icon: "card.svg",
  },
  {
    title: "Single Integration",
    description: "Single API to connect to multiple Payment Channel",
    icon: "connector.svg",
  },
  {
    title: "Payment Link",
    description: "Enable merchant create and send single or bulk invoice",
    icon: "link.svg",
  },
  {
    title: "Custom Payment",
    description: "Self custom payment page for service integration",
    icon: "sound.svg",
  },
  {
    title: "Payment Card",
    description: "Help you to manage card transaction easier",
    icon: "card.svg",
  },
];

export function Feature() {
  return (
    <section className="mx-auto sm:px-0 sm:py-16 p-12 sm:bg-[#fbf8fd] bg-white">
      <div className="sm:px-12">
        <h2 className="text-black sm:text-6xl text-4xl text-center mt-4 sm-only:font-semibold mb-8">
          From
          <span className="text-[#0146B1]"> Zero </span> to
          <span className="text-[#FE9F0F]"> Hero </span> <br />
          Uniquely
          <span className="text-[#725572]">Payment Gateway🔥</span>
        </h2>
        <center className="max-w-7xl mx-auto">
          RuPay is a payment gateway that helps businesses make payments simple,
          secure and easy for customers. We process millions of transactions
          monthly, helping businesses grow by providing a suite of world-class
          APIs.
        </center>
      </div>

      <div className="flex overflow-x-scroll pb-12 mt-8 mx-auto justify-center custom-scroll">
        {DATA.map((item) => (
          <div key={item.title} className="!w-[576px] mx-2 ">
            <div className="w-full h-full flex flex-col justify-between gap-4 bg-white border rounded-3xl p-8 shadow-xl">
              <div>
                <h2 className="font-bold sm:text-3xl text-xl">{item.title}</h2>
                <p className="text-[#757780] mt-2">{item.description}</p>
              </div>
              <Image
                src={`/assets/icons/${item.icon}`}
                width={86}
                height={86}
                alt="icons"
                className="sm:w-[66px] sm:h-[66px] w-[48px] h-[48px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
