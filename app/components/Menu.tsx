"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Carticon from "./Carticon";


const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/working-hours" },
  { id: 4, title: "Contact", url: "/contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;

  const toggleMenu = () => {
    setOpen(!open);
    if (!open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  };

  return (
    <div className="relative">
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt="Menu Toggle"
        width={30}
        height={30}
        className="cursor-pointer z-[10000] relative"
        onClick={toggleMenu}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-red-600 text-white flex flex-col gap-10 pt-28 text-2xl font-semibold transition-transform duration-500 ease-in-out z-[9999] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map((item) => (
          <Link
            href={item.url}
            key={item.id}
            onClick={toggleMenu}
            className="hover:text-yellow-300 pl-8"
          >
            {item.title}
          </Link>
        ))}

        <Link
          href={user ? "/orders" : "/login"}
          onClick={toggleMenu}
          className="hover:text-yellow-300 pl-8"
        >
          {user ? "Orders" : "Login"}
        </Link>

        <Link
          href="/cart"
          onClick={toggleMenu}
          className="flex items-center gap-3 hover:text-yellow-300 pl-8"
        >
          <Carticon />
          <span>Cart</span>
        </Link>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
        />
      )}
    </div>
  );
};

export default Menu;
