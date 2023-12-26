"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MENU = ["Home", "Services", "About", "Contact"];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`flex items-center justify-between py-2 px-12 sticky top-0 bg-white ${
          !isMobileMenuOpen && "border-b sm:border-0"
        }`}
      >
        <Image
          src="/assets/icons/rupay.svg"
          width={500}
          height={500}
          alt="rupay"
          className="w-[180px]"
        />
        {/* desktop */}
        <div className="sm:flex gap-8 text-[#1B1B1F] hidden">
          {MENU.map((item) => (
            <Link key={item} href={`${item === "Home" ? "/" : item.toLowerCase()}`} >
              {item}
            </Link>
          ))}
        </div>
        <button className="bg-[#FE9F0F] px-4 py-2 rounded-full text-white sm:flex hidden">
          get Started
        </button>

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
        className={`sm:flex sm:pb-0 pb-8 sticky top-20 bg-white ${
          isMobileMenuOpen ? "flex flex-col border-b" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-2 sm:hidden items-center text-[#1B1B1F]">
          {MENU.map((item) => (
            <Link
              key={item}
              href={`${item === "Home" ? "/" : item.toLowerCase()}`}
            >
              {item}
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
