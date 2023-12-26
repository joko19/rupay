import React from "react";
import { FaArrowRight } from "react-icons/fa";

export function JoinUs() {
  return (
    <section className="mx-auto sm:p-12 p-4 sm:bg-[#fbf8fd] bg-white">
      <h1 className="text-center text-[#757780] text-lg uppercase">
        Join With Rupay
      </h1>
      <h2 className="text-black sm:text-6xl text-3xl text-center mt-4 sm-only:font-semibold">
        {" "}
        Ready to join with
        <span className="text-[#0146B1]"> Ru</span>
        <span className="text-[#FE9F0F]">Pay </span>
        Platform?
      </h2>
      <div className="flex mt-12 mx-auto justify-center sm:gap-8 gap-4">
        <button className="w-44 bg-[#E1E2EC] py-4 rounded-full">
          Contact Us
        </button>
        <button className="w-44 flex justify-center gap-6 items-center bg-[#0146B1] text-white py-4 rounded-full">
          Get Started <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
