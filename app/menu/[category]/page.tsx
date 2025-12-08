"use client";

import { pizzas } from "../../data"; 
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Product {
  id: number;
  title: string;
  desc: string;
  img: string;
  price: number;
}

const products: Product[] = pizzas as Product[];

const CategoryPage: React.FC = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 md:p-12 lg:px-20 xl:px-40 bg-gray-100">
      {products.map((item: Product) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transition-all duration-500 group hover:shadow-2xl hover:shadow-red-200/50 hover:scale-[1.03]"
        >
      
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-64 xl:h-72 bg-gray-200 flex items-center justify-center overflow-hidden">
            <Image
              src={item.img || "/placeholder.png"}
              alt={item.title}
              fill
              className="object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>

        
          <div className="p-6 flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-gray-900 text-2xl sm:text-3xl font-extrabold tracking-tight uppercase mb-2 group-hover:text-red-600 transition-colors duration-300">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-4 line-clamp-4 font-light italic">
                {item.desc}
              </p>
            </div>

         
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-black text-red-600">
                ${item.price.toFixed(2)}
              </span>
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-bold transition-all duration-300 shadow-lg hover:shadow-red-500/50 transform hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`Adding ${item.title} to cart...`);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
