// app/components/Notification.tsx
export default function Notification() {
  return (
    <div className="relative bg-red-600 text-white px-4 py-3 sm:px-6 sm:py-4">
      {/* Dismiss button in top-right corner */}
      <button
        className="absolute top-2 right-2 bg-red-700 hover:bg-red-800 text-white text-sm font-semibold px-2 py-1 rounded transition-colors"
        aria-label="Dismiss notification"
      >
        ✕
      </button>

      {/* Centered message */}
      <p className="text-center font-medium text-sm sm:text-base">
        <span className="font-semibold">
          Free delivery on all orders over $50! ⚠️ Limited-time offer: Get 10% off today!
        </span>
      </p>
    </div>
  );
}
