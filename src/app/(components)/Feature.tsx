"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 640 },
//     items: 3,
//   },
//   mobile: {
//     breakpoint: { max: 640, min: 0 },
//     items: 2,
//   },
// };

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 20,
  },
};

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
];

export function Feature() {
  // const [scrollPosition, setScrollPosition] = useState<number>(0);
  // const [isDragging, setIsDragging] = useState<boolean>(false);
  // const thumbRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollContainer = document.getElementById(
  //       "scroll-container"
  //     ) as HTMLDivElement;
  //     const maxScrollValue =
  //       scrollContainer.scrollWidth - scrollContainer.clientWidth;
  //     setScrollPosition(scrollContainer.scrollLeft / maxScrollValue);
  //   };

  //   const scrollContainer = document.getElementById(
  //     "scroll-container"
  //   ) as HTMLDivElement;
  //   scrollContainer.addEventListener("scroll", handleScroll);

  //   return () => {
  //     scrollContainer.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleThumbMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
  //   // if () {
  //   setIsDragging(true);

  //   const scrollContainer = document.getElementById(
  //     "scroll-container"
  //   ) as HTMLDivElement;
  //   const maxScrollValue =
  //     scrollContainer.scrollWidth - scrollContainer.clientWidth;
  //   console.log(scrollContainer);
  //   const initialX = event.clientX;
  //   const initialScrollPosition = scrollContainer.scrollLeft;

  //   const handleMouseMove = (event: MouseEvent) => {
  //     console.log("handle move");
  //     console.log(isDragging);
  //     // if (isDragging) {
  //     // console.log("dragging")
  //     const deltaX = event.clientX - initialX;
  //     const newScrollPosition =
  //       initialScrollPosition +
  //       (deltaX / scrollContainer.clientWidth) * maxScrollValue;
  //     scrollContainer.scrollLeft = Math.max(
  //       0,
  //       Math.min(newScrollPosition, maxScrollValue)
  //     );
  //     // }
  //     console.log(deltaX);
  //     console.log(newScrollPosition);
  //   };

  //   const handleMouseUp = () => {
  //     setIsDragging(false);
  //   };

  //   document.addEventListener("mousedown", handleMouseMove);
  //   document.addEventListener("mouseup", handleMouseUp);
  //   // }
  // };

  return (
    <section className="mx-auto sm:px-0 sm:py-16 py-12 sm:bg-[#fbf8fd] bg-white">
      <div className="sm:px-12">
        <h2 className="text-black sm:text-6xl text-3xl text-center mt-4 mb-8 font-serif">
          From
          <span className="text-[#0146B1]"> Zero </span> to
          <span className="text-[#FE9F0F]"> Hero </span> <br />
          Uniquely
          <span className="text-[#725572]"> Payment Gateway🔥</span>
        </h2>
        <center className="max-w-7xl mx-auto">
          RuPay is a payment gateway that helps businesses make payments simple,
          secure and easy for customers. We process millions of transactions
          monthly, helping businesses grow by providing a suite of world-class
          APIs.
        </center>
      </div>

      <div className="custom-scrollbar max-w-7xl">
        <div className="content flex gap-8 pb-12 mt-8 z-auto">
          {DATA.map((item) => (
            <div key={item.title} className="!w-[576px] sm:mx-auto mx-2">
              <div className="sm:w-64 w-44 h-full mx-auto flex flex-col justify-between gap-4 bg-white border rounded-3xl p-8 shadow-xl">
                <div>
                  <h2 className="sm:text-3xl text-xl font-serif">
                    {item.title}
                  </h2>
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
      </div>
    </section>
  );
}
