// app/components/Slider.tsx
import React from "react";

export default function Slider() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      
     
      <div className="absolute w-full h-full bg-[url('/slide1.png')] bg-cover bg-center"></div>

      {/* Overlay (optional for darker text visibility) */}
      <div className="absolute w-full h-full bg-black/30"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Welcome to Delizia 🍕
        </h1>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-md">
          Authentic Italian Taste • Fresh & Delicious
        </p>
      </div>
    </section>
  );
}
