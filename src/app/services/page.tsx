import Link from "next/link";
import { Footer, Header, JoinUs } from "../(components)";
import { SERVICES } from "./dummy";

export default function Services() {
  return (
    <>
      <Header />
      <div className="w-full sm:pt-10 pt-20 px-12 sm:bg-[#fbf8fd]">
        <h1 className="text-center text-[#757780] text-lg uppercase">
          PRODUCT & SERVICES
        </h1>
        <h2 className="text-black sm:text-6xl text-3xl text-center mt-4 font-serif">
          We
          <span className="text-[#0146B1]"> serve</span>. Our
          <span className="text-[#FE9F0F]"> services</span>
          <br /> to your business👋
        </h2>
        <p className="text-center mt-4 max-w-3xl mx-auto">
          With one integration you can get many payment channels. Makes it
          easier for you to expand your market and increase profits.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-12 gap-4 sm:p-12 p-4 mt-8">
        {SERVICES.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between sm:px-8 px-4 sm:pb-8 pb-4 rounded-3xl shadow-xl border "
          >
            <div
              className={`${item.ornament} h-12 w-12 rounded-b-full sm:ml-4 ml-2 mb-4`}
            />
            <h1 className="sm:text-4xl text-2xl font-serif">{item.title} </h1>
            <p className="text-[#757780] sm:mt-8 sm:mb-12 mb-4">
              {item.description}
            </p>
            <Link href="#" className={`text-[${item.color}]`}>
              Learn more
            </Link>
          </div>
        ))}
      </div>
      <div className="sm:h-0 h-32"/>
      <JoinUs />
      <div className="sm:h-0 h-32"/>
      <Footer />
    </>
  );
}
