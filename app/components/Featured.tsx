// app/components/Featured.tsx
import React from "react";

export default function Featured() {
  return (
    <section className="my-12 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-red-700 mb-6">Featured Dishes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-red-100 p-4 rounded shadow hover:scale-105 transition-transform">
          <h3 className="font-semibold text-lg">Margherita Pizza</h3>
          <p className="text-sm text-gray-700">Classic Italian pizza with fresh basil and mozzarella.</p>
        </div>
        <div className="bg-red-100 p-4 rounded shadow hover:scale-105 transition-transform">
          <h3 className="font-semibold text-lg">Pepperoni Pizza</h3>
          <p className="text-sm text-gray-700">Spicy pepperoni with tomato sauce and cheese.</p>
        </div>
        <div className="bg-red-100 p-4 rounded shadow hover:scale-105 transition-transform">
          <h3 className="font-semibold text-lg">Veggie Pizza</h3>
          <p className="text-sm text-gray-700">Loaded with fresh vegetables and mozzarella cheese.</p>
        </div>
      </div>
    </section>
  );
}
