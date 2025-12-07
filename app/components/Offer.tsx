"use client";
import React from "react";
import Image from "next/image";
import CountDown from "./CountDown";

export default function Offer() {
  return (
    <div className="bg-black text-white h-screen p-8 rounded-lg shadow-lg max-w-3xl mx-auto my-16 flex flex-col md:flex-row justify-center items-center">
      {/* TEXT CONTAINER */}
      <div className="text-center mb-8 md:mb-0 md:text-left md:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Special Offer!</h2>
        <p className="text-lg text-gray-300 mb-4">
          Get 20% off on your first order. Use code:{" "}
          <span className="font-extrabold text-yellow-400">FIRST20</span> at checkout.
        </p>

        <p className="text-gray-400 italic mb-6">
          Savor the flavors that make our menu unforgettable!
        </p>

        {/* Countdown */}
        <div className="mb-6 w-full">
          <CountDown />
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <button className="px-6 py-3 bg-red-700 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-200 transform active:scale-95">
            Order Now
          </button>
        </div>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="relative w-full md:w-1/2 h-64 md:h-96 md:ml-8">
        <Image
          src="/offerProduct.png"
          alt="Special Offer Pizza"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
