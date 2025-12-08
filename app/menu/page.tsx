"use client";
import { menu } from "../data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-6 lg:px-24 xl:px-48 min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] grid grid-cols-1 md:grid-cols-3 gap-6">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="relative group rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${category.img})` }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/90 opacity-90 group-hover:opacity-70 transition duration-500" />

          <div className="relative z-20 flex flex-col justify-end h-full p-6 text-white">
            <h1 className="uppercase font-extrabold text-4xl drop-shadow-xl tracking-wide">
              {category.title}
            </h1>

            <p className="text-sm mt-3 mb-6 opacity-90 leading-relaxed">
              {category.desc}
            </p>

            <button className="hidden 2xl:inline-block py-2 px-5 rounded-lg font-semibold bg-red-500 hover:bg-red-600 text-white shadow-md transition duration-300">
              Explore →
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
