"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";

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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 2,
  },
};

export function LoyalCustomer() {
  return (
    <section className="mx-auto pt-12 px-12 sm:bg-[#fbf8fd]">
      <h1 className="text-center text-[#757780] text-lg uppercase">
        Rupay Loyal Customer
      </h1>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        // customTransition="all 3"
        transitionDuration={1500}
        removeArrowOnDeviceType={[
          "superLargeDesktop",
          "desktop",
          "tablet",
          "mobile",
        ]}
      >
        {CUSTOMER.map((item) => (
          <Image
            key={item}
            src={`/assets/images/loyal-customer/${item}`}
            width={600}
            height={600}
            alt="brand"
          />
        ))}
      </Carousel>
    </section>
  );
}
