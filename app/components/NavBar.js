"use client";

// React
import React from "react";

// 
import Link from "next/link";

import { AiOutlineLogin } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="from-black to-neutral-800 bg-gradient-to-r text-white fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center bg-black space-x-3 rtl:space-x-reverse cursor-pointer">
          <svg className="h-[1.5rem] w-[1.5rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="white" d="m13.511 5.853 4.005-4.117 2.325 2.381-4.201 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2V8.122h5.909L3.708 4.117l2.325-2.381 4.005 4.117V0h3.473v5.853zM10.038 16.16h3.473v7.842h-3.473V16.16z"></path>
          </svg>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">
          <Link href="/url-shortner" type="button" className="bg-gradient-to-r from-[#9656fe] to-[#7031f1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-md px-4 py-2 text-center cursor-pointer">
            Log in
          </Link>

          <button type="button" className="bg-gradient-to-r from-[#9656fe] to-[#7031f1] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-md px-4 py-2 text-center flex flex-row gap-2 items-center">
            <AiOutlineLogin className="text-xl" />
            <span>Sign up free</span>
          </button>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li className="block py-2 px-3 rounded hover:text-purple-400 md:p-0 bg-transparent cursor-pointer transition duration-200">Templates</li>
            <li className="block py-2 px-3 rounded hover:text-purple-400 md:p-0 bg-transparent cursor-pointer transition duration-200">Marketplace</li>
            <li className="block py-2 px-3 bg-transparent rounded hover:text-purple-400 md:p-0 cursor-pointer transition duration-200">Discover</li>
            <li className="block py-2 px-3 bg-transparent rounded hover:text-purple-400 md:p-0 cursor-pointer transition duration-200">Pricing</li>
            <li className="block py-2 px-3 bg-transparent rounded hover:text-purple-400 md:p-0 cursor-pointer transition duration-200">Learn</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
