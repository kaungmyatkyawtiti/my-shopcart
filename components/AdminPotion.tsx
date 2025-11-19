import { Heart } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import SearchBar from "./SearchBar";
import ShopCart from "./ShopCart";
import ClerkLogin from "./ClerkLogin";

export default function AdminPotion() {
  return (
    <div className="flex items-center gap-5 md:gap-6">
      <div className="hidden lg:flex items-center gap-5">
        <SearchBar />
        <ModeToggle />
      </div>
      <Heart size={24} />
      <ShopCart />
      <ClerkLogin />
    </div>
  )
}
