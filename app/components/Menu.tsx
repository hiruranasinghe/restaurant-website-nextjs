"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/working-hours" },
  { id: 4, title: "Contact", url: "/contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false; // Replace with actual auth logic

  return (
    <div className="relative">
      {/* Hamburger / Close Button */}
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt="Menu Toggle"
        width={24}
        height={24}
        className="cursor-pointer z-50 relative"
        onClick={() => setOpen(!open)}
      />

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-red-600 bg-opacity-95 flex flex-col items-center justify-center gap-10 text-white text-3xl z-40 transition-all duration-300">
          {links.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              onClick={() => setOpen(false)}
              className="hover:text-yellow-300 transition-colors"
            >
              {item.title}
            </Link>
          ))}

          {/* Auth Link */}
          <Link
            href={user ? "/orders" : "/login"}
            onClick={() => setOpen(false)}
            className="hover:text-yellow-300 transition-colors"
          >
            {user ? "Orders" : "Login"}
          </Link>

          {/* Cart Link */}
          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
          >
       
            Cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
