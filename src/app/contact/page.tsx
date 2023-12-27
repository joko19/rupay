import Link from "next/link";
import { Footer, Header } from "../(components)";
import { MdEmail } from "react-icons/md";
import { FaArrowRight, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="flex sm:flex-row flex-col gap-12 p-12 sm:pt-10 pt-8">
        <div className="w-full">
          <h2 className="text-black sm:text-5xl text-3xl mt-4 font-serif">
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
              className="flex gap-4 items-center"
              target="_blank"
            >
              <MdEmail className="text-[#725572] sm:text-4xl text-2xl" />{" "}
              <div>
                {" "}
                cs@
                <span className="text-[#0146B1]">ru</span>
                <span className="text-[#FE9F0F]">pay</span>.com
              </div>
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
        </div>

        <div className="w-full">
          <div>
            <iframe
              title="address"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24102698393!2d106.74694495186634!3d-6.229740081354195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1703700013678!5m2!1sen!2sid"
              width="100%"
              height="200"
              loading="lazy"
              className="rounded-xl"
            ></iframe>
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

        {/* version 1 */}
        {/* <div className="w-1/4 sm:flex flex-col gap-6 hidden">
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
        </div> */}
      </div>
      <Footer />
    </>
  );
}
