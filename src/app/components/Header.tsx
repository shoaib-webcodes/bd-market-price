'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {

 const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
      })
    );
  }, []);



  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <span className="text-lg font-bold"></span>
          </div>

          <div className="flex flex-col space-y-2">
            <span className=" font-bold leading-5 text-gray-900 text-2xl">
              বাজার দর
            </span>
            <span className="text-xl leading-3 text-gray-500">
              {date}
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/login"
            className="text-xs font-medium text-gray-700 hover:text-emerald-600 sm:text-sm"
          >
            সাইন ইন
          </Link>

          <Link
            href="/register"
            className="rounded-md bg-emerald-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 sm:px-4 sm:text-sm"
          >
            সাইন আপ 
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
