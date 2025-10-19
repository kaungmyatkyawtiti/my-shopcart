import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function ShopCart() {
  return (
    <Link
      href={"/cart"}
      className="relative group"
    >
      <ShoppingBag
        size={22}
        className="group-hover:text-shop-violet hoverEffect"
      />
      <span className="absolute -top-2.5 -right-1.5 rounded-full bg-shop-violet w-4.5 h-4.5 flex items-center justify-center font-semibold text-white">
        0
      </span>
    </Link>
  )
}
