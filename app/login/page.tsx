"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center bg-gray-50">
      <div className="h-full shadow-2xl rounded-xl overflow-hidden bg-white flex flex-col md:flex-row md:h-[480px] lg:w-[50%] 2xl:w-[40%] transition-all duration-500 border border-gray-100">
        
        {/* Left Image Section */}
        <div className="relative hidden md:block md:w-1/2 lg:w-1/3">
          <Image
            src="/loginBg.png"
            alt="Login background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Form Section */}
        <div className="p-8 md:p-10 flex flex-col justify-center gap-5 md:w-1/2 lg:w-2/3">
          <h1 className="font-extrabold text-3xl text-gray-900 mb-1">Welcome Back!</h1>
          <p className="text-gray-500 text-sm">
            Sign in below to quickly access your saved orders.
          </p>

          {/* Google Login Button */}
          <button className="flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-lg text-gray-700 font-medium transition-all duration-300 hover:bg-gray-50 hover:border-red-500">
            <Image
              src="/google.png"
              alt="Google logo"
              width={22}
              height={22}
              className="object-contain"
            />
            <span>Continue with Google</span>
          </button>

          {/* Facebook Login Button */}
          <button className="flex items-center justify-center gap-3 p-3 bg-red-600 text-white rounded-lg font-medium shadow-md shadow-red-500/30 transition-all duration-300 hover:bg-red-700 hover:shadow-lg">
            <Image
              src="/facebook.png"
              alt="Facebook logo"
              width={22}
              height={22}
              className="object-contain filter brightness-0 invert"
            />
            <span>Continue with Facebook</span>
          </button>

          <p className="text-sm text-gray-500 text-center mt-2">Or sign in with email.</p>

          <p className="text-xs text-gray-400 text-center pt-2 border-t border-gray-100">
            Need help?
            <Link
              className="underline text-red-600 font-medium ml-1 hover:text-red-700"
              href="/"
            >
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
