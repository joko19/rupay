import Image from "next/image";
import React from "react";

export function Ceo() {
  return (
    <section className="flex flex-col gap-2 mx-auto items-center mt-12 bg-[#fbf8fd] pb-12 border-t border-b px-12">
      <Image
        src="/assets/images/ceo.svg"
        width={200}
        height={200}
        alt="ceo"
        className="sm:h-[113px] h-[97px]"
      />
      <h2 className="font-semibold text-center">Vico D.F</h2>
      <h1 className="text-center text-[#757780] text-lg uppercase">CEO</h1>
      <p className="font-semibold text-center mt-4">
        &ldquo; We take pride in offering the best service available to elevate
        your business to new heights.&#8221;
      </p>
    </section>
  );
}
