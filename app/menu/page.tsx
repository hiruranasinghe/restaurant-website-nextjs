import React from "react";
import Link from "next/link";
import { menu } from "../data"; 

const MenuPage: React.FC = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center gap-6">
      {menu.map((category) => {
       
        const textColor = category.color === "black" ? "text-black" : "text-black/90";
        const bgColor = category.color === "black" ? "bg-black" : "bg-white";

        return (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            className="w-full md:w-1/3 h-64 md:h-80 bg-cover bg-center rounded-xl p-8 relative group"
            style={{ backgroundImage: `url(${category.img})` }}
          >
            <div className={`absolute ${textColor} w-full md:w-1/2`}>
              <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
              <p className="text-sm my-2">{category.desc}</p>
              <button
                className={`${bgColor} ${textColor} hidden 2xl:block py-2 px-4 rounded-md font-bold shadow-md`}
              >
                Explore
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MenuPage;
