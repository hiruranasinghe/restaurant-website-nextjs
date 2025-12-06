// app/components/Featured.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Use Link for clickable item wrappers

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
    name: "Spaghetti Carbonara", // Changed from Burger to an Italian dish for theme consistency
    description: "Authentic Roman dish with cured guanciale, egg yolk, Pecorino cheese & black pepper.",
    image: "/temporary/p2.png",
    price: "€14.50",
  },
  {
    id: 3,
    name: "Spicy Diavola Pizza", // Refined Pepperoni name
    description: "Loaded with hot Calabrian chili, spicy salami, mozzarella & fiery tomato sauce.",
    image: "/temporary/p3.png",
    price: "€15.99",
  },
];

export default function Featured() {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Title */}
        <h2 className="text-5xl font-extrabold text-center text-red-800 mb-14 drop-shadow-md">
          🔥 Our Featured Delights
        </h2>

        {/* Product Grid / Carousel */}
        <div className="flex gap-8 overflow-x-scroll pb-4 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible">
          {featuredItems.map((item) => (
            // Use Link for the whole card for better clickability
            <Link 
              href={`/menu/${item.id}`} // Link to the specific item page
              key={item.id}
              className="flex-shrink-0 w-80 sm:w-auto bg-white rounded-xl shadow-xl border-t-4 border-yellow-500 overflow-hidden 
                         transform hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer group"
            >
              
              {/* Product Image */}
              <div className="relative w-full h-60">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 33vw" // Optimization for Next/Image
                  className="object-cover group-hover:opacity-90 transition-opacity duration-300"
                  quality={80}
                />
              </div>

              {/* Product Info */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-black text-red-800 mb-2 tracking-wide">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 italic leading-relaxed">
                  {item.description}
                </p>

                {/* Price and CTA */}
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-extrabold text-yellow-600">
                    {item.price}
                  </span>
                  
                  {/* Add to Cart Button */}
                  <button className="px-6 py-2 bg-red-700 text-white font-bold text-sm uppercase rounded-lg 
                                     shadow-md hover:bg-red-600 transition-colors duration-200 
                                     group-hover:bg-red-900 group-hover:scale-105 transform">
                    Order Now
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