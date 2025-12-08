"use client";

import React from "react";
import { pizzas } from "../../data";
import Image from "next/image";
import Link from "next/link";

interface Pizza {
  id: number;
  title: string;
  price: number;
  img?: string;
}

const CategoryPage: React.FC = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-50 min-h-screen">
      {pizzas.map((item: Pizza) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          // Card Styling (left unchanged from last successful modification)
          className="group relative rounded-2xl overflow-hidden 
                     shadow-xl hover:shadow-2xl border border-gray-200 
                     flex flex-col h-[380px] bg-white 
                     transform hover:scale-[1.03] hover:-translate-y-2 
                     transition-all duration-500 ease-in-out
                     hover:ring-4 hover:ring-red-400 hover:ring-offset-2"
        >
          {/* IMAGE */}
          {item.img && (
            <div className="relative h-2/3 w-full overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                // 🚀 MODIFIED: Added 360-degree rotation on group hover
                className="object-cover group-hover:scale-110 
                           group-hover:rotate-[360deg] // <--- THE 360-DEGREE ROTATION
                           transition-all duration-500 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
              />
            </div>
          )}

          {/* TEXT */}
          <div className="flex flex-col justify-between p-4 h-1/3">
            <h2 className="text-2xl font-extrabold uppercase text-red-800 tracking-wide">
              {item.title}
            </h2>
            <div className="flex justify-between items-center mt-2">
              <span className="text-2xl font-extrabold text-red-600">
                ${item.price.toFixed(2)}
              </span>
              
              {/* BUTTON */}
              <button 
                className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-extrabold 
                           shadow-lg hover:shadow-xl transition-all duration-300 transform 
                           group-hover:bg-red-700 active:scale-95 group-hover:scale-[1.05]"
              >
                Add to Cart 🛒
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;