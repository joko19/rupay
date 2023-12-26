import Image from "next/image";
import React from "react";

const DATA = [
  {
    id: 1,
    icon: "like.svg",
    description: "Local payments, Cards and Wire Transfers",
  },
  {
    id: 2,
    icon: "setting.svg",
    description: "Easy API integration as well as instant payment links",
  },
  {
    id: 3,
    icon: "hand.svg",
    description: "Best FX rates and low pricing with no setup or hidden fees",
  },
  {
    id: 4,
    icon: "check.svg",
    description: "Global network covering 173+ countries with a single account",
  },
];

export function WhySection() {
  return (
    <section className="max-w-7xl mx-auto mt-12 px-12 sm:bg-[#FEFBFF] bg-shite">
      <h1 className="text-center text-[#757780] text-lg uppercase">
        Why Rupay so Famous
      </h1>
      <h2 className="text-black sm:text-6xl text-4xl text-center mt-4">
        <span className="text-[#0146B1]">Ru</span>
        <span className="text-[#FE9F0F]">Pay</span> Makes all Payment{" "}
        <span className="text-[#FE9F0F]">Easier</span>
      </h2>
      <p className="text-center mt-4">
        Let us help with your payment needs, so you can focus on growing your
        business
      </p>
      <div className="grid sm:grid-cols-2 gap-6 grid-cols-1 mt-12">
        {DATA.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col gap-4 border rounded-2xl p-4 sm:bg-white bg-[#FEFBFF] sm:text-2xl text-lg font-medium"
          >
            <Image
              key={item.id}
              src={`/assets/icons/${item.icon}`}
              width={86}
              height={86}
              alt="icons"
              className="sm:w-[86px] sm:h-[86px] w-[48px] h-[48px]"
            />
            {item.description}
          </div>
        ))}
      </div>
    </section>
  );
}
