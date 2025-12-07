"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Menu from "./Menu";
import Carticon from "./Carticon";


const PizzaIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    aria-hidden="true" 
  >
    <title>Pizza Slice Icon</title>
    <path d="M256 0C114.624 0 0 114.624 0 256s114.624 256 256 256 256-114.624 256-256S397.376 0 256 0zm0 472c-119.104 0-216-96.896-216-216S136.896 40 256 40s216 96.896 216 216-96.896 216-216 216zm0-400c-101.696 0-184 82.304-184 184s82.304 184 184 184 184-82.304 184-184-82.304-184-184-184zm0 328c-79.528 0-144-64.472-144-144s64.472-144 144-144 144 64.472 144 144-64.472 144-144 144z"/>
  </svg>
);

const Navbar = () => {
  
  const user = false;

  return (
   
    <header className="bg-red-800 text-white uppercase shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4 lg:px-8 xl:px-12 2xl:px-0"> {/* Refined padding/max-width */}

     
        <nav className="hidden md:flex gap-8 flex-1 font-semibold tracking-wide" aria-label="Primary Navigation">
          <Link href="/" className="hover:text-yellow-300 transition-colors duration-200 ease-in-out py-1">Homepage</Link>
          <Link href="/menu" className="hover:text-yellow-300 transition-colors duration-200 ease-in-out py-1">Menu</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition-colors duration-200 ease-in-out py-1">Contact</Link>
        </nav>

      
        <div className="flex-1 text-center flex flex-col items-center justify-center min-w-[200px]"> {/* Added min-width to stabilize layout */}
          <Link
            href="/"
            aria-label="Delizia Homepage"
          
            className="text-3xl md:text-4xl font-extrabold tracking-widest 
            bg-gradient-to-r from-yellow-300 via-red-400 to-yellow-300
            bg-clip-text text-transparent drop-shadow-[0_3px_6px_rgba(255,0,0,0.7)]
            hover:scale-105 hover:drop-shadow-[0_6px_12px_rgba(255,215,0,0.9)]
            transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
          >
            <PizzaIcon className="w-8 h-8 text-yellow-400 transform rotate-45" /> {/* Slight rotation for flair */}
            D E L I Z I A
          </Link>

       
          <p className="text-[10px] mt-1 md:text-xs italic text-yellow-200 font-medium tracking-wider opacity-90">
            Authentic Italian Taste • Since 1998
          </p>
        </div>

    
        <div className="hidden md:flex gap-6 items-center justify-end flex-1">
       
          <div className="flex items-center gap-2 bg-red-900 border border-yellow-400/50 px-3 py-1.5 rounded-full shadow-lg cursor-default transition-colors hover:bg-red-700/80">
         
            <Image 
              src="/phone.png" 
              alt="Phone icon" 
              width={20} 
              height={20} 
              quality={80} 
              className="filter invert sepia saturate-150 hue-rotate-100" // Added a filter for visual consistency
            />
            <span className="text-sm font-semibold text-amber-300 tracking-normal whitespace-nowrap">
              077-7836595
            </span>
          </div>

        
          <Carticon />

    
          <nav aria-label="Authentication Links">
            {!user ? (
              <Link 
                href="/login" 
                className="hover:text-yellow-300 font-semibold transition-colors border-2 border-transparent hover:border-yellow-300 py-1 px-2 rounded-lg"
              >
                Login
              </Link>
            ) : (
              <Link 
                href="/orders" 
                className="hover:text-yellow-300 font-semibold transition-colors border-2 border-transparent hover:border-yellow-300 py-1 px-2 rounded-lg"
              >
                Orders
              </Link>
            )}
          </nav>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden flex items-center gap-4"> 
          <Carticon />
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;