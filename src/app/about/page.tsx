"use client";
import Link from "next/link";
import { Footer, Header } from "../(components)";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import { EMPLOYEE_DATA, WORKS_DATA } from "./dummy";
import YouTubePlayer from "./YoutubePlayer";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 4,
  },
};

export default function About() {
  return (
    <>
      <Header />
      <div className="w-full sm:pt-10 pt-20 px-12">
        <h1 className="text-center text-[#757780] text-lg uppercase">
          RUPAY PAYMENT GATEWAY
        </h1>
        <h2 className="text-black sm:text-6xl text-3xl text-center mt-4 font-serif">
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

      <section className="ornament-diagonal py-24">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          // customTransition="all 3"
          transitionDuration={1500}
          removeArrowOnDeviceType={[
            "superLargeDesktop",
            "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="md:w-64 md:h-64 w-[100px] h-[100px]  mx-auto p-4">
              <Image
                src={`/assets/images/work/${item}.svg`}
                width={200}
                height={200}
                alt="missions"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="w-100"></div>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="p-12">
        <h2 className="text-black sm:text-6xl text-3xl text-center mt-4 font-serif">
          From Indonesia to
          <span className="text-[#0146B1]"> help all </span>
          <br /> business
          <span className="text-[#FE9F0F]"> scale up</span> 🚀
          <br />
        </h2>
        <p className="text-center mt-4 max-w-3xl mx-auto">
          Rupay&rsquo;s virtual reality-powered customer support is like nothing
          you&rsquo;ve experienced before, providing users with a delightful
          journey through a whimsical digital landscape while resolving any
          inquiries with precision and charm. Backed by imaginary investors from
          across the galaxy.
        </p>
        <div className="flex justify-center my-12 max-w-3xl mx-auto">
          <YouTubePlayer videoId="a3ICNMQW7Ok" />
        </div>
      </section>
      <section className="ornament-diagonal">
        <div className="max-w-7xl mx-auto">
          <h2 className="max-w-3xl mx-auto text-black sm:text-6xl text-3xl text-center mt-4 font-serif">
            Works. Together with. Diversities🤙
          </h2>
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-12 gap-4 sm:p-12 p-4">
            {WORKS_DATA.map((item) => (
              <div
                key={item.title}
                className="flex flex-col sm:p-8 p-4 rounded-xl shadow-lg border bg-white"
              >
                <h1
                  className={`font-bold sm:text-6xl text-3xl text-[${item.color}] font-serif`}
                >
                  {item.title}{" "}
                </h1>
                <p className="text-[#757780] sm:mt-4 sm:text-3xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto grid sm:grid-cols-3 grid-cols-2 sm:gap-12 gap-4 sm:p-12 p-4">
        {EMPLOYEE_DATA.map((item) => (
          <div key={item.name} className="flex flex-col items-center gap-2">
            <div>
              <Image
                src={`/assets/images/employee/${item.photo}`}
                width={46}
                height={46}
                alt="icons"
                className="w-full"
              />
            </div>
            <div className="  -mt-8 text-center">
              <div className="font-serif font-semibold">{item.name}</div>
              <p className="text-[#757780]"> {item.role}</p>
              <div className="flex gap-2 mx-auto mt-2 justify-center">
                <Link
                  href={`https://twitter.com/${item.twitter}`}
                  target="_blank"
                >
                  <FaTwitter className="text-[#725572] text-lg" />
                </Link>
                <Link
                  href={`https://facebook.com/${item.facebook}`}
                  target="_blank"
                >
                  <FaFacebookSquare className="text-[#725572] text-lg" />
                </Link>
                <Link
                  href={`https://instagram.com/${item.instagram}`}
                  target="_blank"
                >
                  <FaInstagram className="text-[#725572] text-lg" />
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center gap-2 pt-4">
          <div className="flex flex-col items-center justify-center bg-[#E1E2EC] w-[164px] h-[178px] rounded-xl">
            <p className="sm:text-7xl text-4xl font-serif">+231</p>
            <Link href="#" className="text-[#0146B1]">
              See all teams
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
