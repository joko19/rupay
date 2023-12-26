import Image from "next/image";
import React from "react";

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
        <div className="w-full sm:pt-40 pt-20" >
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
    </section>
  );
}
