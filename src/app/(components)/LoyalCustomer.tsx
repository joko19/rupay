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
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 3,
  },
};

export function LoyalCustomer() {
  return (
    <section className="mx-auto py-12 sm:bg-[#fbf8fd] ">
      <h1 className="text-center text-[#757780] text-lg uppercase mb-8">
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
          <div key={item} className="px-4">
            <Image
              src={`/assets/images/loyal-customer/${item}`}
              width={600}
              height={600}
              alt="brand"
              className="mx-12"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
