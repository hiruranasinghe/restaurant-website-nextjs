"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/slide1.png",
    title: (
      <>
        <span className="text-yellow-400">AUTHENTIC</span>{" "}
        <span className="text-white">ITALIAN</span>
        <span className="text-red-500"> FLAVORS</span>
      </>
    ),
    subtitle: "Hand-crafted dishes, fresh from our kitchen to your table.",
  },
  {
    image: "/slide2.png",
    title: (
      <>
        <span className="text-red-500">DELECTABLE</span>{" "}
        <span className="text-white">PASTA</span>
        <span className="text-yellow-400"> DELIGHTS</span>
      </>
    ),
    subtitle: "Experience the rich taste of our signature pasta recipes.",
  },
  {
    image: "/slide3.jpg",
    title: (
      <>
        <span className="text-white">IRRESISTIBLE</span>{" "}
        <span className="text-yellow-400">DESSERTS</span>{" "}
        <span className="text-red-500">AWAIT</span>
      </>
    ),
    subtitle: "Indulge in sweet treats made fresh daily for every guest.",
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { image, title, subtitle } = slides[currentSlide];

  const handleDotClick = (index: number) => setCurrentSlide(index);

  return (
    <section
      className="relative w-full h-[450px] md:h-[600px] flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
    
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-live="polite"
        aria-label={`Hero slide ${currentSlide + 1} of ${slides.length}`}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/0"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl transition-opacity duration-700 ease-in-out">
        <h1
          id="hero-title"
          className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight drop-shadow-[0_6px_10px_rgba(0,0,0,0.9)]"
        >
          {title}
        </h1>
        <p className="mt-4 text-xl md:text-3xl font-medium italic text-yellow-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {subtitle}
        </p>

        <Link href="/menu">
          {/* 🚀 PERFECTED BUTTON: Added hover animation, text, and stronger box shadow */}
          <button 
            className="mt-10 px-10 py-4 bg-red-700 text-white font-bold text-xl uppercase tracking-widest rounded-full 
                       shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all duration-300 transform 
                       hover:bg-red-600 hover:scale-105 border-4 border-yellow-400 hover:shadow-[0_0_30px_rgba(255,215,0,0.8)]"
          >
            🔥 ORDER NOW FOR DELIVERY
          </button>
        </Link>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === idx ? "bg-yellow-400 scale-110" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}