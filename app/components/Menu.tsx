// app/components/Footer.tsx
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white px-6 py-4 md:py-6 lg:px-20 xl:px-40 flex flex-col md:flex-row items-center justify-between shadow-lg">
      {/* Logo / Brand */}
      <Link
        href="/"
        className="font-bold text-xl hover:text-red-200 transition-colors"
      >
        Delizia
      </Link>

      {/* Copyright */}
      <p className="mt-2 md:mt-0 text-sm md:text-base text-center md:text-left">
        © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
}
