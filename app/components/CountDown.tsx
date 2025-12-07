"use client";
import React, { useEffect, useState, useMemo } from "react";

interface CountDownProps {
  date?: string | Date;
}

export default function CountDown({ date }: CountDownProps) {
  const targetDate = useMemo(() => {
    return date ? new Date(date) : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  }, [date]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setIsCompleted(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (isCompleted) {
    return (
      <div className="text-2xl sm:text-3xl text-red-500 font-extrabold p-3 sm:p-4 bg-yellow-100 rounded-lg shadow-md">
        🎉 The countdown has ended! 🎉
      </div>
    );
  }

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 font-sans">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col items-center bg-white p-2 sm:p-3 rounded-lg shadow-lg border-b-4 border-red-500 min-w-[50px] sm:min-w-[60px] transform hover:scale-[1.05] transition-transform duration-300"
        >
          <span className="block text-2xl sm:text-3xl font-extrabold text-red-700 leading-none tracking-tight tabular-nums">
            {formatTime(value as number)}
          </span>
          <span className="text-xs sm:text-sm text-gray-600 font-medium uppercase mt-1">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}
