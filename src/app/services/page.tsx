import Link from "next/link";
import { Footer, Header, JoinUs } from "../(components)";

const DATA = [
  {
    title: "Online Payments",
    description: "Enable your online payments for your growing business",
    color: "#0146B1",
  },
  {
    title: "Virtual Checkouts",
    description: "Using RuPay UI Payment to checkout all stuff",
    color: "#0146B1",
  },
  {
    title: "Automated Payouts",
    description: "Send money using RuPay API",
    color: "#FE9F0F",
  },
  {
    title: "On-demand Payouts",
    description: "Send money using a simple spreadsheet file",
    color: "#FE9F0F",
  },
  {
    title: "Payout Links",
    description: "Send money without collectiing account details",
    color: "#FE9F0F",
  },
  {
    title: "Platform Payments",
    description: "Use RuPay Platform as your default Infrastructure",
    color: "#725572",
  },
  {
    title: "RuPay Mobile App",
    description: "Manage all payments on your hands",
    color: "#757780",
  },
  {
    title: "Remittance",
    description: "Collect and send payouts across country",
    color: "#757780",
  },
];

export default function Services() {
  return (
    <>
      <Header />

      <div className="w-full sm:pt-10 pt-20 px-12">
        <h1 className="text-center text-[#757780] text-lg uppercase">
          PRODUCT & SERVICES
        </h1>
        <h2 className="text-black sm:text-6xl text-3xl text-center mt-4 font-semibold">
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

      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-12 gap-4 sm:p-12 p-4">
        {DATA.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between sm:px-8 px-4 sm:pb-8 pb-4 rounded-3xl shadow-xl border "
          >
            <div
              className={`bg-[${item.color}] h-12 w-12 rounded-b-full sm:ml-4 ml-2 mb-4`}
            />
            <h1 className="font-bold text-2xl">{item.title} </h1>
            <p className="text-[#757780] sm:mt-8 sm:mb-12 mb-4">
              {item.description}
            </p>
            <Link href="#" className={`text-[${item.color}]`}>
              Learn more
            </Link>
          </div>
        ))}
      </div>
      <JoinUs />
      <Footer />
    </>
  );
}