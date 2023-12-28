"use client";
import Image from "next/image";
import React from "react";

const CUSTOMER = [
  "image 1.svg",
  "image 2.svg",
  "image 3.svg",
  "image 4.svg",
  "image 5.svg",
  "image 6.svg",
  "image 7.svg",
  "image 8.svg",
];

export function LoyalCustomer() {
  return (
    <section className="max-w-7xl mx-auto pt-12 px-12 sm:bg-[#fbf8fd]" >
      <h1 className="text-center text-[#757780] text-lg uppercase">Rupay Loyal Customer</h1>
      <div className="grid sm:grid-cols-4 gap-4 grid-cols-2" >
        {CUSTOMER.map((item) => (
          <Image
            key={item}
            src={`/assets/images/loyal-customer/${item}`}
            width={600}
            height={600}
            alt="brand"
          />
        ))}
      </div>
    </section>
  );
}
