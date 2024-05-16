"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="w-fit flex overflow-hidden rounded-md border border-black transition-all">
        <Link
          href="/signup"
          className={`${
            pathname === "/signup" ? "bg-[#b2b2b2]" : "bg-white"
          } py-2 px-6 font-semibold hover:bg-[#f0f0f0] border-r border-black`}
        >
          Sign Up
        </Link>

        <Link
          href="/login"
          className={`${
            pathname === "/login" ? "bg-[#b2b2b2]" : "bg-white"
          } py-2 px-6 font-semibold hover:bg-[#f0f0f0]`}
        >
          Log In
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
