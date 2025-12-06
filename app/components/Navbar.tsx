// app/components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

const Navbar = () => {
  const user = false; // Replace with auth logic

  return (
    <nav className="bg-red-700 text-white uppercase shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-5 lg:px-20 xl:px-40">
        {/* LEFT LINKS - Desktop */}
        <div className="hidden md:flex gap-6 flex-1">
          <Link href="/" className="hover:text-red-200 transition-colors">Homepage</Link>
          <Link href="/menu" className="hover:text-red-200 transition-colors">Menu</Link>
          <Link href="/contact" className="hover:text-red-200 transition-colors">Contact</Link>
        </div>

        {/* LOGO */}
        <div className="text-2xl md:font-bold flex-1 text-center">
          <Link href="/" className="hover:text-red-200 transition-colors">Delizia</Link>
        </div>

        {/* RIGHT LINKS - Desktop */}
        <div className="hidden md:flex gap-6 items-center justify-end flex-1">
          {/* Contact Info */}
          <div className="flex items-center gap-2 bg-orange-300 text-red-800 px-3 py-1 rounded-md">
            <Image src="/phone.png" alt="Phone" width={20} height={20} />
            <span className="text-sm font-medium">072-1667891</span>
          </div>

          {/* Auth Links */}
          {!user ? (
            <Link href="/login" className="hover:text-red-200 transition-colors">Login</Link>
          ) : (
            <Link href="/orders" className="hover:text-red-200 transition-colors">Orders</Link>
          )}
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
