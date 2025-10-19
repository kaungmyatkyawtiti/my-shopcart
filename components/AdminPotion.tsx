import { Heart } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import SearchBar from "./SearchBar";
import ShopCart from "./ShopCart";
import ClerkLogin from "./ClerkLogin";

export default function AdminPotion() {
  return (
    <div className="flex items-center gap-5 md:gap-6">
      <div className="hidden md:flex items-center gap-5">
        <ModeToggle />
        <SearchBar />
      </div>
      <Heart size={24} />
      <ShopCart />
      <ClerkLogin />
    </div>
  )
}
