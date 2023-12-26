import Link from "next/link";
import { Footer, Header, JoinUs } from "../(components)";
import Image from "next/image";

const WORKS_DATA = [
  {
    title: "3",
    description: "Nations",
    color: "#0146B1",
  },
  {
    title: ">4",
    description: "Daily Language",
    color: "#FE9F0F",
  },
  {
    title: "74%",
    description: "Age < 30 yoe",
    color: "#0146B1",
  },
  {
    title: "78%",
    description: "Indonesia",
    color: "#FE9F0F",
  },
  {
    title: "69%",
    description: "Engineer",
    color: "#0146B1",
  },
  {
    title: "3%",
    description: "Freshgraduates",
    color: "#FE9F0F",
  },
];

const EMPLOYEE_DATA = [
  {
    photo: "vico.svg",
    name: "Vico Delta F.",
    role: "Director",
    twitter: "",
    facebook: "",
    instagram: "",
  },
  {
    photo: "oel.svg",
    name: "Mbak Oel",
    role: "Food Department",
    twitter: "",
    facebook: "",
    instagram: "",
  },
  {
    photo: "joko.svg",
    name: "Mbah Djoko",
    role: "Cafe n Chill",
    twitter: "",
    facebook: "",
    instagram: "",
  },
  {
    photo: "kaafi.svg",
    name: "Kaafi",
    role: "Lead Backend",
    twitter: "",
    facebook: "",
    instagram: "",
  },
  {
    photo: "toimul.svg",
    name: "Toimul",
    role: "Lead Frontend",
    twitter: "",
    facebook: "",
    instagram: "",
  },
];

export default function About() {
  return (
    <>
      <Header />

      <div className="w-full sm:pt-10 pt-20 px-12">
        <h1 className="text-center text-[#757780] text-lg uppercase">
          RUPAY PAYMENT GATEWAY
        </h1>
        <h2 className="text-black sm:text-6xl text-3xl text-center mt-4 font-semibold">
          Our
          <span className="text-[#0146B1]"> Mission </span>is to <br /> Make
          Payments
          <span className="text-[#FE9F0F]"> Easy</span> 💯
          <br />
        </h2>
        <p className="text-center mt-4 max-w-3xl mx-auto">
          Rupay, a revolutionary payment company at the forefront of
          cutting-edge technology and unparalleled customer service. With a
          visionary team of experts, Rupay has swiftly risen to become the
          preferred choice for consumers and businesses alike.
        </p>
      </div>
      <section>
        <h2 className="text-black sm:text-6xl text-3xl text-center mt-4 font-semibold">
          Works. Together with. Diversities🤙
        </h2>
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-12 gap-4 sm:p-12 p-4">
          {WORKS_DATA.map((item) => (
            <div
              key={item.title}
              className="flex flex-col sm:p-8 p-4 rounded-xl shadow-lg border "
            >
              <h1
                className={`font-bold sm:text-6xl text-3xl text-[${item.color}]`}
              >
                {item.title}{" "}
              </h1>
              <p className="text-[#757780] sm:mt-4 sm:text-3xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-12 gap-4 sm:p-12 p-4">
        {EMPLOYEE_DATA.map((item) => (
          <div key={item.name} className="flex flex-col items-center gap-2">
            <Image
              src={`/assets/images/employee/${item.photo}`}
              width={46}
              height={46}
              alt="icons"
              className="w-full"
            />
            <div className="-mt-16 text-center">
              <div>{item.name}</div>
              <p className="text-[#757780]"> {item.role}</p>
              <div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <JoinUs />
      <Footer />
    </>
  );
}
