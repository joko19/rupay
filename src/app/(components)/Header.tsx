"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MENU = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Services",
    slug: "/services",
  },
  {
    title: "About",
    slug: "/about",
  },
  {
    title: "Contact",
    slug: "/contact",
  },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`flex items-center justify-between py-5 px-12 sticky top-0 bg-white z-50 ${
          !isMobileMenuOpen && "border-b sm:border-0"
        }`}
      >
        <Link href="/">
          <Image
            src="/assets/icons/rupay.svg"
            width={500}
            height={500}
            alt="rupay"
            className="w-[127px]"
          />
        </Link>
        {/* desktop */}
        <div className="sm:flex gap-8  hidden">
          {MENU.map((item) => (
            <Link
              key={item.title}
              href={item.slug}
              className={`${
                item.slug === pathname
                  ? "text-[#0146B1] font-semibold"
                  : "text-[#1B1B1F]"
              } hover:text-[#FE9F0F]`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="w-[127px] flex justify-end" >

        <button className="bg-[#FE9F0F] px-4 py-2 rounded-full text-white sm:flex hidden">
          get Started
        </button>
        </div>

        {/* mobile */}
        <div className="sm:hidden">
          {isMobileMenuOpen ? (
            <FaTimes
              onClick={toggleMobileMenu}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={toggleMobileMenu}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </header>

      <nav
        className={`sm:flex sm:pb-0 pb-8 fixed top-20 bg-white z-50 w-full transition-transform ${
          isMobileMenuOpen ? "flex flex-col border-b translate-x-0" : "hidden -translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2 sm:hidden items-center text-[#1B1B1F]">
          {MENU.map((item) => (
            <Link
              key={item.title}
              href={item.slug}
              className={`${
                item.slug === pathname
                  ? "text-[#0146B1] font-semibold"
                  : "text-[#1B1B1F]"
              } hover:text-[#FE9F0F]`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <button className="bg-[#FE9F0F] px-4 py-2 rounded-full text-white sm:hidden w-fit mx-auto mt-4">
          get Started
        </button>
      </nav>
    </>
  );
}
