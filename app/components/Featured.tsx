"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const featuredItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description:
      "🍕 Crispy crust, fresh mozzarella, San Marzano tomatoes & fragrant basil — a classic Neapolitan delight.",
    image: "/temporary/p1.png",
    price: "€12.99",
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    description:
      "🍝 Creamy, velvety sauce with cured guanciale, Pecorino cheese & a touch of black pepper — Roman comfort on a plate.",
    image: "/temporary/p2.png",
    price: "€14.50",
  },
  {
    id: 3,
    name: "Spicy Diavola Pizza",
    description:
      "🌶️ Fiery Calabrian chili, spicy salami, melty mozzarella & zesty tomato sauce — perfect for spice lovers.",
    image: "/temporary/p3.png",
    price: "€15.99",
  },
  {
    id: 4,
    name: "Fettuccine Alfredo",
    description:
      "🧈 Creamy parmesan sauce with tender fettuccine, buttery goodness & a hint of nutmeg — pure indulgence.",
    image: "/temporary/p4.png",
    price: "€13.50",
  },
  {
    id: 5,
    name: "Classic Burger",
    description:
      "🍔 Juicy beef patty, crisp lettuce, ripe tomato & cheddar cheese — a timeless all-time favorite.",
    image: "/temporary/p5.png",
    price: "€11.99",
  },
  {
    id: 6,
    name: "Pepperoni Pizza",
    description:
      "🍕 Thin, crispy crust topped with zesty tomato sauce & loaded with savory pepperoni — a slice of heaven.",
    image: "/temporary/p6.png",
    price: "€14.99",
  },
  {
    id: 7,
    name: "Penne Arrabbiata",
    description:
      "🌶️ Al dente penne tossed in spicy tomato sauce with garlic & chili flakes — a bold Italian favorite.",
    image: "/temporary/p7.png",
    price: "€12.50",
  },
  {
    id: 8,
    name: "Hawaiian Pizza",
    description:
      "🍍 Sweet pineapple & savory ham over melted mozzarella & tangy tomato sauce — a tropical treat.",
    image: "/temporary/p8.png",
    price: "€15.50",
  },
  {
    id: 9,
    name: "Cheeseburger Deluxe",
    description:
      "🧀 Beef patty with double cheddar, caramelized onions & pickles — indulgent, cheesy perfection.",
    image: "/temporary/p9.png",
    price: "€12.99",
  },
  {
    id: 10,
    name: "Veggie Pizza",
    description:
      "🥗 Colorful bell peppers, onions, mushrooms, olives & mozzarella on a crispy base — fresh and flavorful.",
    image: "/temporary/p10.png",
    price: "€13.99",
  },
  {
    id: 11,
    name: "Spaghetti Bolognese",
    description:
      "🍝 Rich Italian meat sauce over perfectly cooked spaghetti — a hearty and comforting classic.",
    image: "/temporary/p11.png",
    price: "€14.50",
  },
  {
    id: 12,
    name: "Four Cheese Pizza",
    description:
      "🧀 Mozzarella, parmesan, gorgonzola & ricotta over tomato base — a decadent cheese lover’s dream.",
    image: "/temporary/p12.png",
    price: "€16.50",
  },
];

export default function Featured() {
  return (
    <section className="py-16 bg-yellow-50" aria-label="Featured Menu Items">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Title & Slogan */}
        <header className="mb-14">
          <h2 className="text-5xl font-extrabold text-center text-red-800 drop-shadow-md">
            🔥 Our Featured Delights
          </h2>
          <p className="text-xl text-center text-gray-500 mt-2 font-medium italic">
            Chef's recommendations for an authentic taste of Delizia.
          </p>
        </header>

        {/* Product Grid / Carousel */}
        <div className="flex gap-8 overflow-x-scroll pb-4 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:overflow-visible">
          {featuredItems.map((item) => (
            <Link
              href={`/menu/${item.id}`}
              key={item.id}
              className="cursor-pointer group p-4 m-4 transition-colors duration-300 ease-out hover:bg-orange-200 border border-yellow-400 rounded-2xl bg-yello-100 md:w-[45vw] lg:w-[30vw] xl:w-[28vw]"
              aria-label={`View details for ${item.name}`}
            >
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 600px) 80vw, (max-width: 600px) 50vw, (max-width: 600px) 30vw, 20vw"
                  className="object-contain transition-all duration-500 ease-in-out group-hover:scale-[1.15] group-hover:rotate-360"
                  quality={80}
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-red-800 mb-2 tracking-tight xl:text-3xl 2xl:text-4xl">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 italic leading-snug h-10 overflow-hidden xl:text-2xl 2xl:text-3xl line-clamp-3">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-extrabold text-yellow-600">
                    {item.price}
                  </span>
                  <button
                    className="px-5 py-2 bg-red-700 text-white font-bold text-sm uppercase rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-200 group-hover:bg-red-900 group-hover:scale-105 transform active:scale-95"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`${item.name} added to cart!`);
                    }}
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}
