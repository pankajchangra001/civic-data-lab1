"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-primary)]">
      <nav className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden text-white"
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              className="h-8 md:h-10 lg:h-14 w-auto object-contain"
              width={50}
              height={50}
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <button className="flex items-center gap-1 text-teal-400 uppercase font-semibold">
            Explore
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 9l6 6 6-6"
              />
            </svg>
          </button>

          <a href="/sectors" className="text-white uppercase font-semibold">
            Sectors
          </a>
          <a href="/usecases" className="text-white uppercase font-semibold">
            Use Cases
          </a>
          <a
            href="/collaboratives"
            className="text-white uppercase font-semibold"
          >
            Collaboratives
          </a>
          <a href="/publishers" className="text-white uppercase font-semibold">
            Publishers
          </a>
          <a href="/about-us" className="text-white uppercase font-semibold">
            About Us
          </a>
        </div>

        <div className="hidden lg:block">
          <button className="bg-teal-300 text-black font-semibold px-4 py-2 rounded-md hover:bg-teal-200 transition">
            LOGIN / SIGN UP
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden px-4 pb-4 space-y-3 ${!showMenu ? "hidden" : "block"}`}
        id="mobile-menu"
      >
        <a href="/sectors" className="block text-white">
          Sectors
        </a>
        <a href="/usecases" className="block text-white">
          Use Cases
        </a>
        <a href="/collaboratives" className="block text-white">
          Collaboratives
        </a>
        <a href="/publishers" className="block text-white">
          Publishers
        </a>
        <a href="/about-us" className="block text-white">
          About Us
        </a>

        <button className="w-full bg-teal-300 text-black py-2 rounded-md font-semibold">
          LOGIN / SIGN UP
        </button>
      </div>
    </header>
  );
};

export default Header;
