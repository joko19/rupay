"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const PaymentMethods = () => (
  <div className="flex flex-col items-center justify-center bg-[#fbf8fd] sm:w-[581px] w-[271px] sm:h-[400px] h-[213px] sm:rounded-[120px] rounded-[56px] p-8 border-[#eceaee] mx-4 shadow-xl sm:text-base text-[10px] border">
    🌟<h1 className="font-bold sm:text-3xl">Payment Methods</h1>
    <p className="text-[#757780]">Local & International</p>
    <div className="flex flex-wrap sm:gap-4 gap-2 mx-auto items-center justify-center sm:mt-8 mt-4 sm:px-8">
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded-lg px-2 py-1">
        Virtual Account⭐
      </div>
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded-lg px-2 py-1">
        Debit Cards💳
      </div>
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded-lg px-2 py-1">
        QR Codes📲
      </div>
      {/* <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded px-2 py-1 sm:flex hidden">
        Retail Outlets🏬
      </div>
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded px-2 py-1 sm:flex hidden">
        e-Wallets💰
      </div>
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded px-2 py-1 sm:flex hidden">
        Paylater🧾
      </div>
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded px-2 py-1 sm:flex hidden">
        Credit Cards💳
      </div>
      <div className="bg-[#EFEDF1] border-[#E1E2EC] rounded px-2 py-1 sm:flex hidden">
        Direct Debit📇
      </div> */}
    </div>
    <p className="text-[#757780] sm:mt-8 mt-4">With 4 upcoming methods...</p>
  </div>
);

const DailyCheckouts = () => (
  <div className="flex flex-col justify-between bg-[#fbf8fd] max-w-[400px] rounded-[120px] pl-8 pb-8 pt-8 border-[#eceaee] mx-4 shadow-lg">
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
  <div className="flex flex-col items-center justify-between bg-[#fbf8fd] sm:w-[398px] w-[156px] sm:h-[346px] h-[148px] sm:rounded-[120px] rounded-[56px]  sm:px-8 sm:pt-8 px-4 pt-3 border-[#eceaee] mx-4 shadow-xl border">
    <h1 className="font-bold sm:text-[25px] text-[10px] text-center">
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
  <div className="flex flex-col items-center sm:justify-around gap-2 bg-[#fbf8fd] sm:w-[398px] w-[156px] sm:h-[346px] h-[148px] sm:rounded-[120px] rounded-[56px]  sm:px-8 sm:py-8 px-4 pt-3 border-[#eceaee] mx-4 shadow-xl border">
     <h1 className="font-bold sm:text-[25px] text-[10px] text-center">24/7 Live Support💯</h1>
    <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-end">
        <p className="text-right bg-[#E1E2EC] sm:w-36 rounded sm:px-4 px-2 sm:py-2 py-1 sm:text-xs text-[6px]">
          Hi, need some help about the API
        </p>
      </div>
      <div className="flex justify-start">
        <p className="text-left bg-[#0146B1] w-48 rounded sm:px-4 px-2 sm:py-2 py-1 text-white sm:text-xs text-[6px]">
          Hi, Zelda here. I am ready to guide you. Which API?
        </p>
      </div>
      <div className="flex justify-end">
        <p className="flex items-center  gap-2 text-right bg-[#E1E2EC] w-fit sm:text-xs text-[6px] rounded sm:px-4 px-2 sm:py-2 py-1 text-[#757780]">
          Type something to ask to RuPay Team{" "}
          <IoIosSend className="text-[#0146B1]" />
        </p>
      </div>
    </div>
  </div>
);

export function Hero() {
  return (
    <section className="sm:bg-[#fbf8fd]">
      <div className="flex w-full sm:bg-[#fbf8fd] bg-white">
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
          <h2 className="text-black sm:text-6xl text-3xl text-center mt-4 font-serif">
            <span className="text-[#0146B1]">Connect</span>. Payment.
            <span className="text-[#FE9F0F]"> Scale Up🚀</span>
          </h2>
          <p className="text-center mt-4 max-w-4xl mx-auto">
            With a easy integration, we help your business to accept and send
            payments easily with RuPay Platform. Accept credit and debit cards,
            e-wallets, bank transfers, and many more payment methods.
          </p>
          <div className="flex w-full justify-center mt-4">
            <button className="w-44 flex justify-center gap-6 items-center bg-[#0146B1] text-white py-4 rounded-full mx-auto mt-4">
              Get Started <FaArrowRight />
            </button>
          </div>
        </div>
        <Image
          src="/assets/ornament/hero-right.svg"
          width={500}
          height={500}
          alt="rupay"
          className="w-[180px]"
        />
      </div>
      {/* desktop */}
      <div className="sm:flex hidden justify-around sm:-mt-20 pb-24 sm:bg-[#fbf8fd]">
        <RealtimeDashboard />
        <PaymentMethods />
        <LiveSupport />
      </div>
      <div className="sm:hidden flex flex-wrap gap-2 justify-center mt-4 pb-24">
        <RealtimeDashboard />
        <LiveSupport />
        <PaymentMethods />
      </div>
    </section>
  );
}
