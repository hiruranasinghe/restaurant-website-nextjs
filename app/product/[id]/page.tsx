"use client";

import Price from "../../components/Price";
import { singleProduct } from "../../data";
import Image from "next/image";
import React from "react";

// 1. Define TypeScript Interfaces for structure and safety
interface Option {
  title: string;
  additionalPrice: number;
}

interface Product {
  id: number;
  title: string;
  desc: string;
  img?: string; // Optional image field
  price: number;
  options?: Option[]; // Optional options array
}

// Type assertion for the imported data
const product: Product = singleProduct as Product;

const SingleProductPage: React.FC = () => {
  return (
    // Outer Container: Darker background, better spacing, ensures content is centered
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] p-8 md:p-16 lg:px-20 xl:px-40 bg-gray-900 text-white flex flex-col md:flex-row items-stretch gap-12 lg:gap-20">
      
      {/* IMAGE CONTAINER */}
      {product.img && (
        <div className="relative w-full md:w-1/2 flex-shrink-0 bg-gray-800 rounded-3xl shadow-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[600px] border-4 border-red-500/20">
          <Image
            src={product.img}
            alt={product.title}
            fill
            // Object-contain is good, but use 'object-cover' for a premium full-image look if possible
            // Reverted to object-contain as per original, but added group-hover interaction
            className="object-contain transition-transform duration-700 hover:scale-[1.05] p-6 md:p-8"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={true}
          />
        </div>
      )}

      {/* TEXT & INFO CONTAINER */}
      <div className="w-full md:w-1/2 flex flex-col justify-start gap-6 md:gap-8 lg:gap-10 pt-4 md:pt-0">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-red-500 tracking-wider border-b-2 border-red-500/50 pb-4">
          {product.title}
        </h1>
        
        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-loose italic">
          {product.desc}
        </p>

        {/* Price Component (Controls Size, Options, and Quantity) */}
        <div className="mt-2 p-6 bg-gray-800 rounded-xl shadow-inner shadow-black/30">
          <Price 
            price={product.price} 
            id={product.id} 
            options={product.options} 
          />
        </div>
        
        {/* Additional Info / Callout */}
        <div className="flex items-center gap-3 text-red-400 font-semibold mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Ready in 30 minutes. Freshly prepared just for you.</span>
        </div>
        
      </div>
    </div>
  );
};

export default SingleProductPage;