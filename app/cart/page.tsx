"use client";

import Image from "next/image";
import React, { useState } from "react"; 

const CartItem = ({ img, title, size, price, initialQuantity }: { img: string; title: string; size: string; price: string; initialQuantity: number }) => {
  
  const [quantity, setQuantity] = useState(initialQuantity);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {

    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };


  const unitPrice = parseFloat(price.replace('$', ''));
  const itemTotal = (unitPrice * quantity).toFixed(2);


  return (
    <div className="flex items-center justify-between py-6 border-b border-gray-200">
      <div className="flex items-center gap-4 flex-grow">
     
        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-gray-100">
          <Image src={img} alt={title} fill className="object-contain" />
        </div>

 
        <div className="flex flex-col text-gray-900">
          <h1 className="text-xl font-extrabold uppercase">{title}</h1>
          <span className="text-sm text-gray-500 font-medium">{size}</span>
        </div>
      </div>
      
  
      <div className="flex items-center gap-6 md:gap-8 flex-shrink-0">
 
        <h2 className="text-xl font-bold text-red-600 hidden sm:block">${itemTotal}</h2>
   
        <div className="flex items-center border border-gray-300 rounded-lg text-gray-700">
          <button 
            className="px-2 py-1 text-lg hover:bg-gray-100 rounded-l-lg disabled:opacity-50"
            onClick={decreaseQuantity}
            disabled={quantity <= 1} 
          >
            -
          </button>
          <span className="px-3 font-semibold text-base">{quantity}</span> 
          <button 
            className="px-2 py-1 text-lg hover:bg-gray-100 rounded-r-lg"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>

 
        <button className="cursor-pointer text-gray-400 hover:text-red-600 transition-colors duration-300 text-lg font-bold">
          &times;
        </button>
      </div>
    </div>
  );
};


const CartPage = () => {

  
  return (

    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] flex flex-col lg:flex-row bg-white">
      
  
      <div className="h-full p-8 md:p-12 flex flex-col overflow-y-auto lg:h-full lg:w-2/3 xl:w-3/5 2xl:w-2/3 lg:px-20 xl:px-40 border-r border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b border-red-500 pb-3">Your Order</h1>

   
        <CartItem img="/temporary/p1.png" title="Sicilian" size="Large" price="$79.90" initialQuantity={1} />
        <CartItem img="/temporary/p2.png" title="Bacon Deluxe" size="Large" price="$79.90" initialQuantity={2} />
        <CartItem img="/temporary/p3.png" title="P.Arrabiatia" size="Large" price="$79.90" initialQuantity={1} />
        
        <div className="flex-grow"></div>
      </div>


      <div className="h-full p-8 md:p-12 bg-gray-50 flex flex-col gap-5 lg:h-full lg:w-1/3 xl:w-2/5 2xl:w-1/3 lg:px-12 xl:px-20 2xl:text-xl 2xl:gap-8 shadow-inner">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2 border-b border-gray-200 pb-3">Order Summary</h2>

       
        <div className="flex justify-between text-gray-700 font-medium">
          <span>Subtotal (3 items)</span>
          <span>$81.70</span>
        </div>
        
        <div className="flex justify-between text-gray-700 font-medium">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        
        <div className="flex justify-between text-gray-700 font-medium">
          <span>Delivery Cost</span>
          <span className="text-green-600 font-bold">FREE!</span>
        </div>
        
        <hr className="my-2 border-gray-300" />
        
        <div className="flex justify-between text-gray-900 text-2xl font-extrabold mt-2">
          <span>TOTAL (INCL. VAT)</span>
          <span>$81.70</span>
        </div>
        
        <button className="bg-red-600 text-white p-4 rounded-xl w-full mt-6 shadow-xl hover:bg-red-700 transition-colors duration-300 uppercase font-bold tracking-wider">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;