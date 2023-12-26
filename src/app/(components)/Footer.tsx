import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosSend } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const PRODUCT = [
  "Online Payment",
  "Checkout",
  "Integration",
  "Automatic Money transfer",
  "Payout Links",
];

const HELP_CENTER = [
  "Customer Service",
  "API Docs",
  "Contact Us",
  "Developer Center",
];

const COMPANY = [
  "About us",
  "Our Partners",
  "Banks Partner",
  "Career",
  "Events",
];

export function Footer() {
  return (
    <footer className="sm:bg-[#fbf8fd] bg-white">
      <section className="flex sm:flex-row flex-col gap-4 sm:justify-between border-b pb-4 p-12">
        <div className="sm:w-2/5 w-full sm:items-start items-center pb-4 flex flex-col ">
          <Image
            src="/assets/icons/rupay.svg"
            width={500}
            height={500}
            alt="rupay"
            className="w-[180px]"
          />
          <h2 className="text-black sm:text-4xl text-2xl sm-only:text-center mt-4 sm-only:font-bold">
            <span className="text-[#0146B1]">Make </span>
            all payment
            <span className="text-[#FE9F0F]"> easier </span>
          </h2>
          <p className="mt-4">Get latest information and tips from RuPay</p>
          <div className="flex  bg-[#F2F0F4] rounded-full p-2 border mt-4">
            <input
              type="text"
              placeholder="Your email..."
              className="bg-[#F2F0F4] px-4 focus:outline-none"
            />
            <div className="flex items-center bg-[#e1e2ec] rounded-full p-2">
              Subscribe{"   "} <IoIosSend className="text-[#0146B1]" />
            </div>
          </div>
        </div>

        <div className="sm:w-3/5 grid sm:grid-cols-3 grid-cols-2 justify-around gap-12 mt-12">
          <div>
            <h3 className="font-bold mb-2">Product</h3>
            <div className="flex flex-col">
              {PRODUCT.map((item) => (
                <Link
                  key={item}
                  href={`${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[#757780]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">Help Center</h3>
            <div className="flex flex-col">
              {HELP_CENTER.map((item) => (
                <Link
                  key={item}
                  href={`${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[#757780]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <div className="flex flex-col">
              {COMPANY.map((item) => (
                <Link
                  key={item}
                  href={`${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[#757780]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 px-12">
        <div className="flex justify-between">
          <div className="flex sm:gap-6 gap-2">
            <MdEmail className="text-[#725572] sm:text-4xl text-2xl" />
            <FaWhatsapp className="text-[#725572] sm:text-4xl text-2xl" />
            <FaFacebookSquare className="text-[#725572] sm:text-4xl text-2xl" />
          </div>
          <p className="text-[#757780] text-right">
            © 2023 RuPay (PT Rumah Payment). All rights reserved
          </p>
        </div>
        <h1 className="font-bold mb-4 sm:text-left text-center mt-8">
          ⛔️⛔️ Waspadalah terhadap Upaya Penipuan ⛔️⛔️{" "}
        </h1>
        <p className="sm:text-left text-center">
          RuPay is not a peer to peer lending company and does not have a
          personal loan product. If you find a fraudulent attempt in the name of
          RuPay, immediately inform <b>help@rupay.com</b> or via live chat.
        </p>
      </section>
      <div className="flex flex-row-reverse ">
        <Image
          src="/assets/icons/footer2.svg"
          width={500}
          height={500}
          alt="footer"
        />
      </div>
    </footer>
  );
}
