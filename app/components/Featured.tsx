import React from "react";
import Image from "next/image";
import Link from "next/link"; 

const featuredItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic Neapolitan perfection: San Marzano tomatoes, fresh mozzarella & basil.",
    image: "/temporary/p1.png",
    price: "€12.99",
  },
  {
    id: 2,
    name: "Spaghetti Carbonara", 
    description: "Authentic Roman dish with cured guanciale, egg yolk, Pecorino cheese & black pepper.",
    image: "/temporary/p2.png",
    price: "€14.50",
  },
  {
    id: 3,
    name: "Spicy Diavola Pizza",
    description: "Loaded with hot Calabrian chili, spicy salami, mozzarella & fiery tomato sauce.",
    image: "/temporary/p3.png",
    price: "€15.99",
  },
  {
    id: 4,
    name: "Fettuccine Alfredo",
    description: "Creamy pasta with parmesan, butter & a hint of nutmeg.",
    image: "/temporary/p4.png",
    price: "€13.50",
  },
  {
    id: 5,
    name: "Classic Burger",
    description: "Juicy beef patty with fresh lettuce, tomato & cheddar cheese.",
    image: "/temporary/p5.png",
    price: "€11.99",
  },
  {
    id: 6,
    name: "Pepperoni Pizza",
    description: "Crispy thin crust with zesty tomato sauce and loaded with pepperoni.",
    image: "/temporary/p6.png",
    price: "€14.99",
  },
  {
    id: 7,
    name: "Penne Arrabbiata",
    description: "Spicy tomato sauce with garlic and chili flakes over penne pasta.",
    image: "/temporary/p7.png",
    price: "€12.50",
  },
  {
    id: 8,
    name: "Hawaiian Pizza",
    description: "Sweet pineapple and savory ham over melted mozzarella and tomato sauce.",
    image: "/temporary/p8.png",
    price: "€15.50",
  },
  {
    id: 9,
    name: "Cheeseburger Deluxe",
    description: "Beef patty with double cheddar, caramelized onions & pickles.",
    image: "/temporary/p9.png",
    price: "€12.99",
  },
  {
    id: 10,
    name: "Veggie Pizza",
    description: "Loaded with bell peppers, onions, mushrooms, olives & mozzarella.",
    image: "/temporary/p10.png",
    price: "€13.99",
  },
  {
    id: 11,
    name: "Spaghetti Bolognese",
    description: "Classic Italian meat sauce over al dente spaghetti.",
    image: "/temporary/p11.png",
    price: "€14.50",
  },
  {
    id: 12,
    name: "Four Cheese Pizza",
    description: "Mozzarella, parmesan, gorgonzola & ricotta over tomato base.",
    image: "/temporary/p12.png",
    price: "€16.50",
  },
];

export default function Featured() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center text-red-800 mb-14 drop-shadow-md">
          🔥 Our Featured Delights
        </h2>

        <div className="flex gap-8 overflow-x-scroll pb-4 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible">
          {featuredItems.map((item) => (
            <Link 
              href={`/menu/${item.id}`} 
              key={item.id}
              className="flex-shrink-0 w-80 sm:w-auto bg-white rounded-xl shadow-xl border-t-4 border-yellow-500 overflow-hidden 
                         transform hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer group"
            >
              <div className="relative w-full h-60">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                  quality={80}
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-black text-red-800 mb-2 tracking-wide">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 italic leading-relaxed">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-extrabold text-yellow-600">
                    {item.price}
                  </span>
                  <button className="px-6 py-2 bg-red-700 text-white font-bold text-sm uppercase rounded-lg 
                                     shadow-md hover:bg-red-600 transition-colors duration-200 
                                     group-hover:bg-red-900 group-hover:scale-105 transform">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
