import React from "react";
import { FaArrowRight } from "react-icons/fa";

export function JoinUs() {
  return (
    <section className="max-w-7xl mx-auto p-12 sm:bg-[#fbf8fd] bg-white">
      <h1 className="text-center text-[#757780] text-lg uppercase">
        Join With Rupay
      </h1>
      <h2 className="text-black sm:text-6xl text-4xl text-center mt-4 sm-only:font-semibold">
        {" "}
        Ready to join with
        <span className="text-[#0146B1]"> Ru</span>
        <span className="text-[#FE9F0F]">Pay </span>
        Platform?
      </h2>
      <div className="flex mt-12 mx-auto justify-center gap-8">
        <button className=" w-44 bg-[#E1E2EC] py-4 rounded-full">
          Contact Us
        </button>
        <button className="w-44 flex justify-center gap-6 items-center bg-[#0146B1] text-white py-4 rounded-full">
          Get Started <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
