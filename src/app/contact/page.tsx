import Link from "next/link";
import { Footer, Header } from "../(components)";
import { MdEmail } from "react-icons/md";
import { FaArrowRight, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="flex p-12 sm:pt-10 pt-8">
        <div className="sm:w-3/4 w-full">
          <h2 className="text-black sm:text-5xl text-3xl mt-4 font-semibold">
            Love to hear from you, Capt!
            <br />
            <span className="text-[#0146B1] underline"> Get in </span>
            <span className="text-[#FE9F0F] underline">touch</span>👋
          </h2>
          <p className=" mt-4 max-w-3xl">
            Stay connected with us. We are here to help your{" "}
            <span className="text-[#FE9F0F]"> business </span> growth.
            We&rsquo;d love to{" "}
            <span className="text-[#0146B1]"> connect with you.</span> <br />
            <br /> We&rsquo;ll get back in{" "}
            <span className="text-[#FE9F0F]"> 24h.</span>
          </p>

          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-2 sm:mt-12 mt-6 w-fit">
            <Link
              href="mailto:cs@rupay.com"
              className="flex items-center"
              target="_blank"
            >
              <MdEmail className="text-[#725572] sm:text-4xl text-2xl" /> cs@
              <span className="text-[#0146B1]">ru</span>
              <span className="text-[#FE9F0F]">pay</span>.com
            </Link>
            <Link
              href="https://wa.me/6281992230213"
              className="flex gap-4 items-center"
              target="_blank"
            >
              <FaWhatsapp className="text-[#725572] sm:text-4xl text-2xl" />{" "}
              +6281 992 230 213
            </Link>
            <Link
              href="https://www.facebook.com"
              className="flex gap-4 items-center"
              target="_blank"
            >
              <FaFacebookSquare className="text-[#725572] sm:text-4xl text-2xl" />{" "}
              RuPay Payment Gateway
            </Link>
          </div>
          <h3 className="font-bold mt-8">
            <span className="text-[#0146B1]">Ru</span>
            <span className="text-[#FE9F0F]">Pay</span> Headquarter
          </h3>
          <p className="mt-3">
            Duta Mas Fatmawati Blok D2 No. 11 <br />
            Cipete Utara, Kebayoran Baru <br />
            Kota Adm. Jakarta Selatan DKI Jakarta
          </p>

          <div className="flex w-fit items-center bg-[#e1e2ec] rounded-full px-2 py-1 mt-2">
            Get directions <IoIosSend className="text-[#0146B1]" />
          </div>
        </div>

        <div className="w-1/4 sm:flex flex-col gap-6 hidden">
          <div className="bg-[#f2f0f4] rounded-full px-6 py-2 border flex flex-col border-[#d4d3dc]">
            <span className="text-[#93949c]">Full Name</span>
            <input
              type="text"
              className="bg-[#f2f0f4] focus:outline-none text-[#1c1c20]"
              placeholder="Enter your name"
            />
          </div>
          <div className="bg-[#f2f0f4] rounded-full px-6 py-2 border flex flex-col border-[#d4d3dc]">
            <span className="text-[#93949c]">Email</span>
            <input
              type="text"
              className="bg-[#f2f0f4] focus:outline-none text-[#1c1c20]"
              placeholder="Enter your email"
            />
          </div>
          <div className="bg-[#f2f0f4] rounded-[47px] px-6 py-2 border flex items-center gap-1 border-[#d4d3dc]">
            <span className="text-[#93949c]">Topic:</span>

            <select className="mt-1 block bg-[#f2f0f4] w-full border-0 rounded-md focus:outline-none">
              <option value="demo-rupay">Demo Rupay</option>
            </select>
          </div>
          <div className="bg-[#f2f0f4] rounded-[47px] px-6 py-2 border flex flex-col border-[#d4d3dc]">
            <span className="text-[#93949c]">Message</span>
            <textarea
              rows={3}
              className="bg-[#f2f0f4] focus:outline-none text-[#1c1c20]"
              placeholder="Write Message"
              style={{ resize: "none" }}
            />
          </div>

          <button className="w-full flex justify-center gap-6 items-center bg-[#0146B1] text-white py-4 rounded-full">
            Send message <FaArrowRight />
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
