// app/components/Navbar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

const Navbar = () => {
  const user = false;

  return (
    <nav className="bg-red-600 text-white uppercase shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-5 lg:px-20 xl:px-40">

        {/* LEFT LINKS - Desktop */}
        <div className="hidden md:flex gap-8 flex-1 font-semibold tracking-wide">
          <Link href="/" className="hover:text-yellow-300 transition-colors">Homepage</Link>
          <Link href="/menu" className="hover:text-yellow-300 transition-colors">Menu</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link>
        </div>

        {/* LOGO */}
        <div className="flex-1 text-center text-2xl md:text-3xl font-extrabold tracking-tight">
          <Link href="/" className="hover:text-yellow-200 transition-colors">
            🍕 Delizia
          </Link>
        </div>

        {/* RIGHT LINKS - Desktop */}
        <div className="hidden md:flex gap-6 items-center justify-end flex-1">
          {/* Contact Info */}
          <div className="flex items-center gap-2 bg-black text-red-700 px-3 py-1 rounded-full shadow-md">
            <Image src="/phone.png" alt="Phone" width={20} height={20} />
            <span className="text-sm font-medium text-amber-300">077-7836595</span>
          </div>

          {/* Auth Links */}
          {!user ? (
            <Link href="/login" className="hover:text-yellow-300 font-semibold transition-colors">Login</Link>
          ) : (
            <Link href="/orders" className="hover:text-yellow-300 font-semibold transition-colors">Orders</Link>
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
