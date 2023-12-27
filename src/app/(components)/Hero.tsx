"use client";
import Image from "next/image";
import React from "react";
import { IoIosSend } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 576 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
  },
};

const PaymentMethods = () => (
  <div className="flex flex-col items-center justify-center bg-[#fbf8fd] max-w-[400px] rounded-[120px] p-8 border-[#eceaee] mx-auto">
    🌟<h1 className="font-bold text-3xl">Payment Methods</h1>
    <div className="flex flex-wrap gap-2 mx-auto items-center justify-center mt-4">
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded px-2 py-1">
        Virtual Account⭐
      </div>
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded px-2 py-1">
        Debit Cards💳
      </div>
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded px-2 py-1">
        Retail Outlets🏬
      </div>
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded px-2 py-1 sm:flex hidden">
        e-Wallets💰
      </div>
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded px-2 py-1 sm:flex hidden">
        Paylater🧾
      </div>
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded px-2 py-1 sm:flex hidden">
        QR Codes📲
      </div>
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded px-2 py-1 sm:flex hidden">
        Credit Cards💳
      </div>
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded px-2 py-1 sm:flex hidden">
        Direct Debit📇
      </div>
    </div>
    <p className="text-[#757780] mt-4">Local & International</p>
  </div>
);

const DailyCheckouts = () => (
  <div className="flex flex-col justify-between bg-[#fbf8fd] max-w-[400px] rounded-[120px] pl-8 pb-8 pt-8 border-[#eceaee] mx-auto">
    <div className="flex gap-2 items-center px-4 pt-8">
      <p className="bg-[#E1E2EC] p-2 rounded-full">Daily Checkouts</p>
      <p className="text-[#FE9F0F]">+23%</p>
    </div>
    <h1 className="font-bold sm:text-5xl text-2xl px-4 py-4">Rp10.42M</h1>
    <p className="px-4 text-[#725572]">Pending</p>
    <p className="px-4 text-[#757780]">Rp.2.130.230</p>
    <Image
      src="/assets/icons/daily-checkout.svg"
      width={500}
      height={500}
      alt="rupay"
      className="w-full"
    />
  </div>
);

const RealtimeDashboard = () => (
  <div className="flex flex-col items-center justify-between bg-[#fbf8fd] max-w-[400px] rounded-[120px] px-8 pt-8 border-[#eceaee] mx-auto">
    <h1 className="font-bold text-3xl text-center">
      Realtime Dashboard Monitoring
    </h1>
    <Image
      src="/assets/icons/realtime-dashboard.svg"
      width={500}
      height={500}
      alt="rupay"
      className="w-full"
    />
  </div>
);

const LiveSupport = () => (
  <div className="flex flex-col items-center justify-between gap-4 bg-[#fbf8fd] max-w-[400px] rounded-[120px] p-12 border-[#eceaee] mx-auto">
    <h1 className="font-bold text-3xl text-center">24/7 Live Support💯</h1>
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-end">
        <p className="text-right bg-[#E1E2EC] w-36 rounded px-4 py-2 text-xs">
          Hi, need some help about the API
        </p>
      </div>
      <div className="flex justify-start">
        <p className="text-left bg-[#0146B1] w-48 rounded px-4 py-2 text-white text-xs">
          Hi, Zelda here. I am ready to guide you. Which API?
        </p>
      </div>
      <div className="flex justify-end">
        <p className="flex items-center  gap-2 text-right bg-[#E1E2EC] w-fit text-xs rounded px-4 py-2 text-[#757780]">
          Type something to ask to RuPay Team{" "}
          <IoIosSend className="text-[#0146B1]" />
        </p>
      </div>
    </div>
  </div>
);

export function Hero() {
  return (
    <section>
      <div className="flex w-full bg-white">
        <Image
          src="/assets/ornament/hero-left.svg"
          width={500}
          height={500}
          alt="rupay"
          className="w-[180px]"
        />
        <div className="w-full sm:pt-40 pt-20">
          <h1 className="text-center text-[#757780] text-lg uppercase">
            YOUR PARTNER TO SCALE UP
          </h1>
          <h2 className="text-black sm:text-6xl text-3xl text-center mt-4 font-semibold">
            <span className="text-[#0146B1]">Connect</span>. Payment.
            <span className="text-[#FE9F0F]"> Scale Up🚀</span>
          </h2>
          <p className="text-center mt-4 max-w-4xl mx-auto">
            With a easy integration, we help your business to accept and send
            payments easily with RuPay Platform. Accept credit and debit cards,
            e-wallets, bank transfers, and many more payment methods.
          </p>
        </div>
        <Image
          src="/assets/ornament/hero-right.svg"
          width={500}
          height={500}
          alt="rupay"
          className="w-[180px]"
        />
      </div>
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
        className="2xl:-mt-96 sm:-mt-56 -mt-60"
      >
        <PaymentMethods />
        <DailyCheckouts />
        <RealtimeDashboard />
        <LiveSupport />
      </Carousel>
    </section>
  );
}
