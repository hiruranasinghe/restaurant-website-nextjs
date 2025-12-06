import Image from "next/image";
import Link from "next/link";

export default function Carticon({ count = 0 }: { count?: number }) {
  return (
    <Link href="/cart">
      <div className="relative cursor-pointer hover:scale-110 transition-transform">
        <Image src="/cart.png" alt="Cart Icon" width={30} height={30} />
        
        {/* Badge for item count */}
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md">
            {count}
          </span>
        )}
      </div>
    </Link>
  );
}
